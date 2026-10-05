import React, { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import {
  Clock,
  ShieldAlert,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Send,
  Maximize,
  Camera,
  AlertTriangle,
  Globe,
  Loader2,
} from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation, useNavigate } from "react-router-dom";
import SBIX from "../assets/logo_sbix.png";
import { QUESTIONS_DATA } from "../pages/questionsData.js";

const Quiz = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Unified Team Code resolution
  const TEAM_CODE =
    location.state?.teamCode || sessionStorage.getItem("teamCode");

  const INITIAL_TIME = 600; // 10 minutes
  const MAX_VIOLATIONS = 3;

  const [cameraGranted, setCameraGranted] = useState(false);
  const [cameraError, setCameraError] = useState("");
  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [violations, setViolations] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Language State: 'en' | 'hi' | 'pa'
  const [language, setLanguage] = useState("en");

  const videoRef = useRef(null);
  const audioCtxRef = useRef(null);
  const mediaStreamRef = useRef(null);
  const submittedRef = useRef(submitted);
  submittedRef.current = submitted;
  const selectedAnswersRef = useRef(selectedAnswers);
  selectedAnswersRef.current = selectedAnswers;

  const answeredCount = Object.keys(selectedAnswers).length;
  const unattemptedCount = QUESTIONS_DATA.length - answeredCount;

  // Authorization Check Guard
  useEffect(() => {
    if (!TEAM_CODE) {
      toast.error("Unauthorized access! Please enter Team Code first.", {
        toastId: "unauthorized-access",
        duration: 3000,
      });
      navigate("/", { replace: true });
    }
  }, [TEAM_CODE, navigate]);

  if (!TEAM_CODE) return null;

  // Sound Warning
  const playBeep = () => {
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (
          window.AudioContext || window.webkitAudioContext
        )();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") ctx.resume();

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(800, ctx.currentTime);

      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.3);
    } catch (err) {
      console.error("Audio error:", err);
    }
  };

  // Re-enable Fullscreen
  const forceFullscreen = useCallback(() => {
    if (!submittedRef.current && !document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    }
  }, []);

  const onQuizSubmitData = (submissionData) => {
    console.log(JSON.stringify(submissionData, null, 2));
  };

  // Submit Handler
  const handleSubmit = useCallback(async () => {
    if (submittedRef.current || isSubmitting) return;

    submittedRef.current = true;
    setIsSubmitting(true); // Start loading state

    let correctCount = 0;
    const currentAnswers = selectedAnswersRef.current;

    const answersList = QUESTIONS_DATA.map((q, idx) => {
      const selectedOptionIdx =
        currentAnswers[idx] !== undefined ? currentAnswers[idx] : null;

      if (selectedOptionIdx === q.answer) {
        correctCount++;
      }

      return {
        q: q.id,
        sel: selectedOptionIdx,
        cor: q.answer,
      };
    });

    const compactPayload = {
      tCode: TEAM_CODE,
      score: Number(((correctCount / QUESTIONS_DATA.length) * 100).toFixed(1)),
      ans: answersList,
    };

    const Default_Url = "https://sbix-aiquiz-backend.onrender.com";

    try {
      const response = await axios.post(
        `${Default_Url}/api/quiz/submit`,
        compactPayload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      const data = response.data;
      console.log("Quiz submitted successfully:", data);

      setSubmitted(true);
      sessionStorage.removeItem("teamCode");

      if (typeof onQuizSubmitData === "function") {
        onQuizSubmitData(compactPayload);
      }

      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach((track) => track.stop());
      }

      if (navigator.keyboard && navigator.keyboard.unlock) {
        navigator.keyboard.unlock();
      }

      if (document.fullscreenElement) {
        document.exitFullscreen().catch(() => {});
      }
    } catch (error) {
      console.error("Quiz submission error:", error);

      // Reset ref so the user can attempt submitting again on error
      submittedRef.current = false;

      const message =
        error.response?.data?.message ||
        error.message ||
        "Unable to submit quiz. Please try again.";

      toast.error(message);
    } finally {
      setIsSubmitting(false); // Stop loading state regardless of outcome
    }
  }, [TEAM_CODE, isSubmitting, onQuizSubmitData]);

  // Restored Countdown Timer
  useEffect(() => {
    if (!cameraGranted || submitted) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [cameraGranted, submitted, handleSubmit]);

  // Full-Screen Exit Monitor & Violation Counter
  useEffect(() => {
    if (!cameraGranted || submitted) return;

    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && !submittedRef.current) {
        playBeep();
        setViolations((prev) => {
          const updated = prev + 1;
          if (updated >= MAX_VIOLATIONS) {
            toast.error(
              "Maximum full-screen violations reached! Auto-submitting...",
              {
                toastId: "max-violations",
                duration: 3000,
              },
            );
            handleSubmit();
          } else {
            toast.error(
              `Warning (${updated}/${MAX_VIOLATIONS}): Full-screen exit prohibited! Restoring view...`,
              {
                toastId: "fullscreen-alert",
                duration: 2500,
              },
            );
            setTimeout(() => forceFullscreen(), 100);
          }
          return updated;
        });
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, [cameraGranted, submitted, forceFullscreen, handleSubmit]);

  // Keyboard Lockdown & Navigation Restriction
  useEffect(() => {
    if (!cameraGranted || submitted) {
      if (navigator.keyboard && navigator.keyboard.unlock) {
        navigator.keyboard.unlock();
      }
      return;
    }

    if (navigator.keyboard && navigator.keyboard.lock) {
      navigator.keyboard
        .lock(["Escape", "AltLeft", "AltRight", "Tab", "F11"])
        .catch((e) => console.warn("Keyboard lock failed:", e));
    }

    const handleKeyDown = (e) => {
      e.preventDefault();
      e.stopPropagation();
      playBeep();
      forceFullscreen();

      toast.error("Proctored Mode: Keyboard controls locked!", {
        toastId: "keyboard-warning",
        duration: 2000,
        style: {
          background: "#7f1d1d",
          color: "#fef2f2",
          border: "1px solid #ef4444",
          fontWeight: "bold",
        },
        icon: "⚠️",
      });
      return false;
    };

    const handleBeforeUnload = (e) => {
      if (!submittedRef.current) {
        e.preventDefault();
        e.returnValue = "Quiz is running. Are you sure you want to exit?";
        return e.returnValue;
      }
    };

    window.addEventListener("keydown", handleKeyDown, true);
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("keydown", handleKeyDown, true);
      window.removeEventListener("beforeunload", handleBeforeUnload);
      if (navigator.keyboard && navigator.keyboard.unlock) {
        navigator.keyboard.unlock();
      }
    };
  }, [cameraGranted, submitted, forceFullscreen]);

  // Top-Middle Hover Zone Detection
  useEffect(() => {
    if (!cameraGranted || submitted) return;

    const handleMouseMove = (e) => {
      const screenWidth = window.innerWidth;
      const topZone = 45;
      const leftBound = screenWidth * 0.35;
      const rightBound = screenWidth * 0.65;

      if (
        e.clientY <= topZone &&
        e.clientX >= leftBound &&
        e.clientX <= rightBound
      ) {
        playBeep();
        toast.warning("Warning: Approaching browser control exit bar!", {
          toastId: "top-hover-warning",
          duration: 1500,
          position: "top-center",
          style: {
            background: "#7f1d1d",
            color: "#fef2f2",
            border: "1px solid #ef4444",
            fontWeight: "bold",
          },
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cameraGranted, submitted]);

  // Request Camera Access
  const requestCameraAccess = async () => {
    setCameraError("");
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        setCameraError("Camera feature is not supported in this browser.");
        return;
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "user",
          width: { ideal: 320 },
          height: { ideal: 240 },
        },
        audio: false,
      });

      mediaStreamRef.current = stream;
      setCameraGranted(true);

      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen().catch(() => {});
      }
    } catch (err) {
      console.error("Camera access failed:", err);
      setCameraError(
        "Camera access is mandatory to enter the proctored quiz. Please grant camera permission.",
      );
    }
  };

  useEffect(() => {
    if (cameraGranted && videoRef.current && mediaStreamRef.current) {
      videoRef.current.srcObject = mediaStreamRef.current;
    }
  }, [cameraGranted]);

  useEffect(() => {
    return () => {
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")} min`;
  };

  const handleSelectOption = (optionIndex) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentIdx]: optionIndex,
    }));
  };

  const currentQ = QUESTIONS_DATA[currentIdx];

  // STEP 1: Mandatory Camera Access Gate
  if (!cameraGranted) {
    return (
      <div className="fixed inset-0 z-50 w-screen h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 max-w-lg w-full text-center space-y-6 shadow-2xl">
          <div className="w-16 h-16 bg-indigo-950/80 border border-indigo-800/60 rounded-2xl flex items-center justify-center mx-auto text-indigo-400">
            <Camera className="w-8 h-8 animate-pulse" />
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-white tracking-wide">
              Camera Access Required
            </h1>
            <p className="text-sm text-slate-400 leading-relaxed">
              To ensure test integrity, camera access is mandatory. You will not
              be redirected to the quiz page until webcam access is granted.
            </p>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-left font-mono text-xs text-slate-400 space-y-1">
            <p>
              Team Code:{" "}
              <span className="text-indigo-400 font-semibold">{TEAM_CODE}</span>
            </p>
            <p>
              Proctoring Status:{" "}
              <span className="text-amber-400 font-semibold">
                Awaiting Verification
              </span>
            </p>
          </div>

          {cameraError && (
            <div className="bg-red-950/40 border border-red-800/50 p-3 rounded-xl flex items-start gap-2.5 text-left text-xs text-red-300">
              <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <span>{cameraError}</span>
            </div>
          )}

          <button
            onClick={requestCameraAccess}
            className="w-full py-3.5 px-6 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white rounded-xl font-bold text-sm shadow-lg shadow-indigo-950/50 transition-all flex items-center justify-center gap-2"
          >
            <Camera className="w-4 h-4" /> Allow Camera & Start Quiz
          </button>
        </div>
      </div>
    );
  }

  // STEP 2: Active Proctored Quiz Page View
  return (
    <div
      className={`fixed inset-0 z-50 w-screen bg-slate-950 text-slate-100 flex flex-col font-sans select-none ${
        submitted
          ? "h-auto min-h-screen overflow-y-auto"
          : "h-screen overflow-hidden"
      }`}
    >
      <style>{`
        *:focus { outline: none !important; }
        ::-webkit-full-screen-controls { display: none !important; }
        ::-webkit-media-controls { display: none !important; }
        ::backdrop { background-color: #020617; }
      `}</style>

      <ToastContainer position="top-right" />

      {/* Header */}
      <header className="sticky top-0 z-40 w-full bg-slate-900/90 backdrop-blur-md border-b border-slate-800 shadow-lg px-4 md:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-950/60 border border-indigo-800/50 rounded-xl">
              <img
                src={SBIX}
                alt="SBIX logo"
                className="w-10 h-10 text-indigo-400 rounded-full"
              />
            </div>
            <div>
              <h1 className="text-base font-bold text-white tracking-wide">
                AI-Quiz Assessment
              </h1>
              <p className="text-xs text-slate-400 font-mono">
                Team Code:{" "}
                <span className="text-indigo-400 font-semibold">
                  {TEAM_CODE}
                </span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Live Countdown Clock */}
            {!submitted && (
              <div
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border font-mono text-xs font-bold transition-colors ${
                  timeLeft <= 120
                    ? "bg-red-950/80 border-red-800 text-red-300 animate-pulse"
                    : "bg-slate-800/80 border-slate-700 text-indigo-300"
                }`}
              >
                <Clock className="w-4 h-4 shrink-0" />
                <span>{formatTime(timeLeft)}</span>
              </div>
            )}

            {/* Language Selector */}
            <div className="flex items-center gap-1.5 bg-slate-800/80 border border-slate-700/80 px-2.5 py-1.5 rounded-xl">
              <Globe className="w-4 h-4 text-indigo-400 shrink-0" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-transparent text-xs font-semibold text-slate-200 outline-none cursor-pointer"
              >
                <option value="en" className="bg-slate-900 text-white">
                  English
                </option>
                <option value="hi" className="bg-slate-900 text-white">
                  हिंदी (Hindi)
                </option>
                <option value="pa" className="bg-slate-900 text-white">
                  ਪੰਜਾਬੀ (Punjabi)
                </option>
              </select>
            </div>

            {/* Live Camera View */}
            {!submitted && (
              <div className="relative w-24 h-14 bg-black rounded-lg overflow-hidden border border-slate-700 shadow-md shrink-0 flex items-center justify-center">
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className="w-full h-full object-cover transform -scale-x-100"
                />
                <div className="absolute top-1 left-1 flex items-center gap-1 bg-black/60 backdrop-blur-sm px-1.5 py-0.5 rounded text-[9px] font-medium text-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  <span>REC</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6 grid grid-cols-1 lg:grid-cols-4 gap-6 overflow-hidden">
        {/* Left Container: Active Question */}
        <section className="lg:col-span-3 flex flex-col bg-slate-900/60 border border-slate-800 rounded-2xl p-6 overflow-y-auto space-y-6">
          {!submitted ? (
            <>
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-800/40">
                  Question {currentIdx + 1} of {QUESTIONS_DATA.length}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  Progress:{" "}
                  {Math.round(((currentIdx + 1) / QUESTIONS_DATA.length) * 100)}
                  %
                </span>
              </div>

              <h2 className="text-lg md:text-xl font-medium text-slate-100 leading-relaxed">
                {currentQ.question[language] || currentQ.question.en}
              </h2>

              <div className="space-y-3 pt-2">
                {(currentQ.options[language] || currentQ.options.en).map(
                  (optText, optionIdx) => {
                    const isSelected =
                      selectedAnswers[currentIdx] === optionIdx;
                    return (
                      <button
                        key={optionIdx}
                        onClick={() => handleSelectOption(optionIdx)}
                        className={`w-full text-left p-4 rounded-xl border transition-all text-sm flex items-center justify-between gap-3 ${
                          isSelected
                            ? "bg-indigo-950/70 border-indigo-500 text-indigo-100 shadow-md shadow-indigo-950/30"
                            : "bg-slate-950/60 border-slate-800 hover:border-slate-700 text-slate-300"
                        }`}
                      >
                        <span>{optText}</span>
                        <div
                          className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                            isSelected
                              ? "border-indigo-400 bg-indigo-600 text-white"
                              : "border-slate-700 bg-slate-900"
                          }`}
                        >
                          {isSelected && (
                            <div className="w-2 h-2 rounded-full bg-white" />
                          )}
                        </div>
                      </button>
                    );
                  },
                )}
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-slate-800 mt-auto">
                <button
                  disabled={currentIdx === 0}
                  onClick={() => setCurrentIdx((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-slate-200 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all"
                >
                  <ChevronLeft className="w-4 h-4" /> Previous
                </button>

                {currentIdx < QUESTIONS_DATA.length - 1 ? (
                  <button
                    onClick={() =>
                      setCurrentIdx((prev) =>
                        Math.min(QUESTIONS_DATA.length - 1, prev + 1),
                      )
                    }
                    className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all shadow-md shadow-indigo-950/40"
                  >
                    Next <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all shadow-md shadow-emerald-950/40"
                  >
                    Submit Quiz <Send className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </>
          ) : (
            <div className="text-center space-y-4 py-12">
              <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto" />
              <h2 className="text-2xl font-bold text-white">
                Assessment Submitted Successfully!
              </h2>
              <p className="text-sm text-slate-400 max-w-md mx-auto">
                Your responses have been recorded. You may now close this tab.
              </p>
            </div>
          )}
        </section>

        {/* Right Sidebar: Navigation Palette */}
        <aside className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col space-y-6 overflow-y-auto">
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              Question Navigator
            </h3>
            <div className="grid grid-cols-5 gap-2">
              {QUESTIONS_DATA.map((_, idx) => {
                const isAnswered = selectedAnswers[idx] !== undefined;
                const isCurrent = currentIdx === idx;
                return (
                  <button
                    key={idx}
                    disabled={submitted}
                    onClick={() => setCurrentIdx(idx)}
                    className={`h-9 rounded-lg text-xs font-bold transition-all border flex items-center justify-center ${
                      isCurrent
                        ? "ring-2 ring-indigo-400 border-indigo-400 bg-indigo-900/80 text-white"
                        : isAnswered
                          ? "bg-emerald-950/70 border-emerald-800/80 text-emerald-300"
                          : "bg-slate-950/60 border-slate-800 text-slate-400 hover:bg-slate-800"
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="border-t border-slate-800 pt-4 space-y-2 text-xs">
            <h3 className="font-bold text-slate-400 uppercase tracking-wider mb-2">
              Status Overview
            </h3>
            <div className="flex items-center justify-between text-slate-300">
              <span>Attempted:</span>
              <span className="font-mono font-bold text-emerald-400">
                {answeredCount}
              </span>
            </div>
            <div className="flex items-center justify-between text-slate-300">
              <span>Unattempted:</span>
              <span className="font-mono font-bold text-amber-400">
                {unattemptedCount}
              </span>
            </div>
            <div className="flex items-center justify-between text-slate-300">
              <span>Proctor Violations:</span>
              <span className="font-mono font-bold text-red-400">
                {violations}/{MAX_VIOLATIONS}
              </span>
            </div>
          </div>

          {!submitted && (
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`px-6 py-3 rounded-xl font-bold text-sm text-white flex items-center justify-center gap-2 transition-all ${
                isSubmitting
                  ? "bg-indigo-800 cursor-not-allowed opacity-80"
                  : "bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-950/50"
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting Quiz...</span>
                </>
              ) : (
                <span>Submit Quiz</span>
              )}
            </button>
          )}
        </aside>
      </main>
    </div>
  );
};

export default Quiz;
