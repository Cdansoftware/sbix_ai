import React, { useState, useEffect } from "react";
import {
  ShieldAlert,
  Clock,
  HelpCircle,
  Keyboard,
  MousePointer,
  Wifi,
  BatteryCharging,
  AlertTriangle,
  ArrowRight,
  Globe,
  Dot,
  RefreshCw,
} from "lucide-react";
import SBIX from "../assets/logo_sbix.png";
import bgimg from "../assets/ai-quiz.png";
import Bharti from "../assets/Satya-bharti.png";
import Airtel from "../assets/bharti-airtel.png";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

import AOS from "aos";
import "aos/dist/aos.css";

// Multilingual Content Object
const TRANSLATIONS = {
  en: {
    portalTag: "Proctored Assessment Portal",
    title: "AI-Quiz Guidelines & Entry",
    subtitle:
      "Please read the instructions carefully before entering your team credentials.",
    onlineText: "Online",
    offlineText: "Offline",
    pluggedText: "Plugged In",
    powerReqText: "Battery Status",
    rulesTitle: "Test Rules & Guidelines",
    enterTeamCodeLabel: "Enter Team Code",
    teamCodePlaceholder: "e.g. TEAM-404",
    errorEmptyCode: "Please enter a valid Team Code to proceed.",
    submitBtn: "Start Assessment Now",
    builtBy: "AI-Quiz Assessment Portal • Built By",
    developerName: "Chandan Prajapati",
    poweredBy: "Powered by Bharti Airtel Foundation",
    instructions: [
      {
        id: 1,
        title: "20 Questions & 10 Minutes",
        description:
          "You will be assigned 20 questions with a strict total time limit of 10 minutes.",
        delay: 450,
      },
      {
        id: 2,
        title: "Keyboard Disablement & Misbehavior Penalty",
        description:
          "Your keyboard will be completely disabled for the entire 10-minute duration. Any keypress attempt will be flagged as misbehavior and may result in point deductions.",
        delay: 500,
      },
      {
        id: 3,
        title: "Mouse / Trackpad Only",
        description:
          "Use only your trackpad or mouse to navigate and click options to answer questions.",
        delay: 550,
      },
      {
        id: 4,
        title: "Strict Expiration & Auto-Submission",
        description:
          "You must submit before the timer reaches zero. After 10 minutes, the portal will automatically close/lock, and unsubmitted responses will not be accountable.",
        delay: 600,
      },
    ],
  },
  hi: {
    portalTag: "निरीक्षित मूल्यांकन पोर्टल",
    title: "AI-क्विज दिशा-निर्देश और प्रवेश",
    subtitle:
      "कृपया अपनी टीम की साख दर्ज करने से पहले निर्देशों को ध्यान से पढ़ें।",
    onlineText: "ऑनलाइन",
    offlineText: "ऑफ़लाइन",
    pluggedText: "प्लग इन",
    powerReqText: "बैटरी स्थिति",
    rulesTitle: "परीक्षण के नियम और दिशा-निर्देश",
    enterTeamCodeLabel: "टीम कोड दर्ज करें",
    teamCodePlaceholder: "जैसे TEAM-404",
    errorEmptyCode: "आगे बढ़ने के लिए कृपया एक मान्य टीम कोड दर्ज करें।",
    submitBtn: "अब मूल्यांकन शुरू करें",
    builtBy: "AI-क्विज मूल्यांकन पोर्टल • द्वारा निर्मित",
    developerName: "चंदन प्रजापति",
    poweredBy: "भारती एयरटेल फाउंडेशन द्वारा संचालित",
    instructions: [
      {
        id: 1,
        title: "20 प्रश्न और 10 मिनट",
        description:
          "आपको 10 मिनट की सख्त समय सीमा के साथ 20 प्रश्न दिए जाएंगे।",
        delay: 450,
      },
      {
        id: 2,
        title: "कीबोर्ड निष्क्रियता और दुर्व्यवहार दंड",
        description:
          "पूरे 10 मिनट की अवधि के लिए आपका कीबोर्ड पूरी तरह से बंद रहेगा। किसी भी कुंजी को दबाने के प्रयास को दुर्व्यवहार माना जाएगा और अंक काटे जा सकते हैं।",
        delay: 500,
      },
      {
        id: 3,
        title: "केवल माउस / ट्रैकपैड",
        description:
          "नेविगेट करने और प्रश्नों के उत्तर चुनने के लिए केवल अपने ट्रैकपैड या माउस का उपयोग करें।",
        delay: 550,
      },
      {
        id: 4,
        title: "सख्त समाप्ति और स्वतः-जमा (Auto-Submit)",
        description:
          "समय समाप्त होने से पहले आपको उत्तर सबमिट करना होगा। 10 मिनट बाद पोर्टल स्वतः बंद/लॉक हो जाएगा।",
        delay: 600,
      },
    ],
  },
  pa: {
    portalTag: "ਪ੍ਰੋਕਟਰਡ ਮੁਲਾਂਕਣ ਪੋਰਟਲ",
    title: "AI-ਕੁਇਜ਼ ਦਿਸ਼ਾ-ਨਿਰਦੇਸ਼ ਅਤੇ ਦਾਖਲਾ",
    subtitle:
      "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣੀ ਟੀਮ ਦੇ ਵੇਰਵੇ ਦਰਜ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਨਿਰਦੇਸ਼ਾਂ ਨੂੰ ਧਿਆਨ ਨਾਲ ਪੜ੍ਹੋ।",
    onlineText: "ਆਨਲਾਈਨ",
    offlineText: "ਆਫ਼ਲਾਈਨ",
    pluggedText: "ਪਲੱਗ ਇਨ",
    powerReqText: "ਬੈਟਰੀ ਸਥਿਤੀ",
    rulesTitle: "ਪ੍ਰੀਖਿਆ ਦੇ ਨਿਯਮ ਅਤੇ ਦਿਸ਼ਾ-ਨਿਰਦੇਸ਼",
    enterTeamCodeLabel: "ਟੀਮ ਕੋਡ ਦਰਜ ਕਰੋ",
    teamCodePlaceholder: "ਜਿਵੇਂ TEAM-404",
    errorEmptyCode: "ਅੱਗੇ ਵਧਣ ਲਈ ਕਿਰਪਾ ਕਰਕੇ ਇੱਕ ਵੈਧ ਟੀਮ ਕੋਡ ਦਰਜ ਕਰੋ।",
    submitBtn: "ਹੁਣੇ ਮੁਲਾਂਕਣ ਸ਼ੁਰੂ ਕਰੋ",
    builtBy: "AI-ਕੁਇਜ਼ ਮੁਲਾਂਕਣ ਪੋਰਟਲ • ਦੁਆਰਾ ਬਣਾਇਆ ਗਿਆ",
    developerName: "ਚੰਦਨ ਪ੍ਰਜਾਪਤੀ",
    poweredBy: "ਭਾਰਤੀ ਏਅਰਟੈੱਲ ਫਾਊਂਡੇਸ਼ਨ ਦੁਆਰਾ ਸੰਚਾਲਿਤ",
    instructions: [
      {
        id: 1,
        title: "20 ਸਵਾਲ ਅਤੇ 10 ਮਿੰਟ",
        description:
          "ਤੁਹਾਨੂੰ 10 ਮਿੰਟ ਦੀ ਸਖ਼ਤ ਸਮਾਂ ਸੀਮਾ ਦੇ ਨਾਲ 20 ਸਵਾਲ ਦਿੱਤੇ ਜਾਣਗੇ।",
        delay: 450,
      },
      {
        id: 2,
        title: "ਕੀਬੋਰਡ ਅਯੋਗਤਾ ਅਤੇ ਦੁਰਵਿਹਾਰ ਜੁਰਮਾਨਾ",
        description:
          "ਪੂਰੇ 10 ਮਿੰਟਾਂ ਲਈ ਤੁਹਾਡਾ ਕੀਬੋਰਡ ਪੂਰੀ ਤਰ੍ਹਾਂ ਅਯੋਗ ਰਹੇਗਾ। ਕਿਸੇ ਵੀ ਕੁੰਜੀ ਨੂੰ ਦਬਾਉਣ ਦੀ ਕੋਸ਼ਿਸ਼ ਨੂੰ ਦੁਰਵਿਹਾਰ ਮੰਨਿਆ ਜਾਵੇਗਾ ਅਤੇ ਅੰਕ ਕੱਟੇ ਜਾ ਸਕਦੇ ਹਨ।",
        delay: 500,
      },
      {
        id: 3,
        title: "ਕੇਵਲ ਮਾਊਸ / ਟ੍ਰੈਕਪੈਡ",
        description:
          "ਨੇਵੀਗੇਟ ਕਰਨ ਅਤੇ ਸਵਾਲਾਂ ਦੇ ਜਵਾਬ ਚੁਣਨ ਲਈ ਕੇਵਲ ਆਪਣੇ ਟ੍ਰੈਕਪੈਡ ਜਾਂ ਮਾਊਸ ਦੀ ਵਰਤੋਂ ਕਰੋ।",
        delay: 550,
      },
      {
        id: 4,
        title: "ਸਖ਼ਤ ਸਮਾਪਤੀ ਅਤੇ ਸਵੈ-ਜਮ੍ਹਾਂ (Auto-Submit)",
        description:
          "ਟਾਈਮਰ ਜ਼ੀਰੋ ਹੋਣ ਤੋਂ ਪਹਿਲਾਂ ਤੁਹਾਨੂੰ ਜਮ੍ਹਾਂ ਕਰਨਾ ਪਵੇਗਾ। 10 ਮਿੰਟਾਂ ਬਾਅਦ ਪੋਰਟਲ ਆਪਣੇ ਆਪ ਬੰਦ/ਲਾਕ ਹੋ ਜਾਵੇਗਾ।",
        delay: 600,
      },
    ],
  },
};

export default function InstructionPage({ onStartQuiz }) {
  const navigate = useNavigate();
  const [lang, setLang] = useState("en");
  const [teamCode, setTeamCode] = useState("");
  const [error, setError] = useState("");
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [batteryLevel, setBatteryLevel] = useState(null);
  const [isPluggedIn, setIsPluggedIn] = useState(null);

  const t = TRANSLATIONS[lang];

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  useEffect(() => {
    if ("getBattery" in navigator) {
      navigator.getBattery().then((battery) => {
        setBatteryLevel(Math.round(battery.level * 100));
        setIsPluggedIn(battery.charging);

        battery.addEventListener("levelchange", () => {
          setBatteryLevel(Math.round(battery.level * 100));
        });
        battery.addEventListener("chargingchange", () => {
          setIsPluggedIn(battery.charging);
        });
      });
    }
  }, []);

  const API = "https://sbix-aiquiz-backend.onrender.com";

  const [loading, setLoading] = useState(false); // add this with your other useState lines

  const handleStart = async (e) => {
    e.preventDefault();

    const trimmedCode = teamCode.trim();

    if (!trimmedCode) {
      toast.error(t.errorEmptyCode || "Please enter a team code!");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const res = await fetch(
        `${API}/api/quiz/check-code?tCode=${encodeURIComponent(trimmedCode)}`,
      );
      const data = await res.json();

      if (res.ok && data.allowed) {
        sessionStorage.setItem("teamCode", trimmedCode);

        if (typeof onStartQuiz === "function") {
          onStartQuiz({ teamCode: trimmedCode, language: lang });
        }

        navigate("/quiz", { state: { teamCode: trimmedCode, language: lang } });
      } else if (res.status === 409) {
        // 🚨 Shows the specific message returned by your backend API
        toast.error(data.message || t.errorAlreadySubmitted);
      } else {
        toast.error(data.message || t.errorGeneric);
      }
    } catch (err) {
      console.error("Check team code error:", err);
      toast.error("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="h-screen w-screen relative flex flex-col p-3 md:p-5 font-sans bg-cover bg-center bg-no-repeat overflow-hidden select-none"
      style={{
        backgroundImage: `url(${bgimg})`,
      }}
    >
      <ToastContainer position="top-right" autoClose={3000} />
      {/* 1. TOP HEADER - WITH NETWORK & BATTERY STATUS */}
      <header
        data-aos="fade-down"
        className="w-full max-w-6xl mx-auto flex justify-between items-center py-2 px-4 md:px-6 bg-slate-900/85 backdrop-blur-md rounded-full border border-slate-800 shadow-lg text-white shrink-0 gap-2"
      >
        {/* Left Side: Logo & Name */}
        <div className="flex items-center gap-2.5">
          <img
            src={SBIX}
            alt="SBI Foundation Logo"
            className="h-8 md:h-10 object-contain rounded-full shadow-2xl bg-white p-1"
          />
          <h1 className="text-base md:text-lg font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400 hidden sm:block">
            AI-Quiz
          </h1>
        </div>

        {/* Center: Network & Battery Badges shifted to Header */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Network Status Badge */}
          <div
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${
              isOnline
                ? "bg-emerald-950/50 border-emerald-800/60 text-emerald-300"
                : "bg-red-950/50 border-red-800/60 text-red-300"
            }`}
          >
            <Wifi className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden md:inline">
              {isOnline ? t.onlineText : t.offlineText}
            </span>
            <span
              className={`w-2 h-2 rounded-full ${
                isOnline ? "bg-emerald-400 animate-pulse" : "bg-red-500"
              }`}
            />
          </div>

          {/* Battery Status Badge */}
          <div
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${
              isPluggedIn || (batteryLevel && batteryLevel > 80)
                ? "bg-indigo-950/50 border-indigo-800/60 text-indigo-300"
                : "bg-amber-950/50 border-amber-800/60 text-amber-300"
            }`}
          >
            <BatteryCharging className="w-3.5 h-3.5 shrink-0" />
            <span>
              {batteryLevel !== null ? `${batteryLevel}%` : t.powerReqText}
            </span>
            {isPluggedIn && (
              <span className="text-[10px] hidden md:inline text-indigo-400">
                ({t.pluggedText})
              </span>
            )}
          </div>
        </div>

        {/* Right Side: Language Selector & Partner Logo */}
        <div className="flex items-center gap-2 md:gap-3">
          <div className="flex items-center gap-1.5 bg-slate-800/90 border border-slate-700 px-2.5 py-1 rounded-full text-xs font-semibold text-slate-200">
            <Globe className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
            <select
              value={lang}
              onChange={(e) => {
                setLang(e.target.value);
                if (error) setError("");
              }}
              className="bg-transparent text-slate-200 focus:outline-none cursor-pointer pr-1"
            >
              <option value="en" className="bg-slate-900 text-white">
                English
              </option>
              <option value="hi" className="bg-slate-900 text-white">
                हिन्दी (Hindi)
              </option>
              <option value="pa" className="bg-slate-900 text-white">
                ਪੰਜਾਬੀ (Punjabi)
              </option>
            </select>
          </div>

          <img
            src={Bharti}
            alt="Bharti school logo"
            className="h-8 md:h-10 object-contain bg-white/90 rounded-full p-1 hidden lg:block"
          />
        </div>
      </header>

      {/* 2. MAIN CARD CONTAINER */}
      <main
        data-aos="zoom-in"
        data-aos-delay="200"
        className="w-full max-w-5xl mx-auto bg-slate-900/90 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-3 flex flex-col flex-1 min-h-0"
      >
        {/* Banner Header */}
        <div className="bg-gradient-to-r from-indigo-900/80 via-slate-900 to-slate-900 px-5 py-3 border-b border-slate-800 flex flex-col md:flex-row md:items-center md:justify-between gap-2 shrink-0">
          <div>
            <div className="flex items-center gap-2 text-indigo-400 mb-0.5">
              <ShieldAlert className="w-4 h-4 shrink-0" />
              <span className="text-[10px] font-semibold tracking-wider uppercase">
                {t.portalTag}
              </span>
            </div>
            <h1 className="text-lg md:text-xl font-bold text-white tracking-tight">
              {t.title}
            </h1>
            <p className="text-slate-400 text-xs mt-0.5">{t.subtitle}</p>
          </div>

          <div className="flex items-center self-start md:self-center shrink-0">
            <img
              src={Airtel}
              alt="Bharti Airtel Foundation Logo"
              className="h-7 md:h-9 object-contain bg-white/95 rounded-lg p-1 shadow-md border border-slate-700/50"
            />
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4 md:p-5 flex-1 flex flex-col gap-3 min-h-0 overflow-hidden">
          {/* Rules & Instructions List (MAXIMIZED SCROLLABLE AREA) */}
          <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
            <h2 className="text-xs md:text-sm font-semibold text-slate-200 flex items-center gap-1.5 mb-2 shrink-0">
              <AlertTriangle className="w-4 h-4 text-amber-400" />{" "}
              {t.rulesTitle}
            </h2>

            {/* Scrollable Container with Hidden Scrollbar */}
            <div className="flex-1 overflow-y-auto pr-2 space-y-2.5 rounded-xl bg-slate-950/50 p-3 border border-slate-800/80 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              <ul className="space-y-3">
                {t.instructions.map((item) => (
                  <li key={item.id} className="flex items-start gap-1.5">
                    <Dot className="w-5 h-5 text-indigo-400 shrink-0 -mt-0.5" />
                    <div>
                      {/* <span className="font-semibold text-slate-200 block text-xs md:text-sm">
                        {item.title}:
                      </span> */}
                      <p className="text-xs text-slate-400 leading-relaxed mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form Action Section */}
          <form
            onSubmit={handleStart}
            className="space-y-2.5 pt-2 border-t border-slate-800 shrink-0"
          >
            <div>
              <label
                htmlFor="teamCode"
                className="block text-xs font-medium text-slate-300 mb-1"
              >
                {t.enterTeamCodeLabel} <span className="text-red-400">*</span>
              </label>
              <input
                id="teamCode"
                type="text"
                value={teamCode}
                onChange={(e) => {
                  setTeamCode(e.target.value);
                  if (error) setError("");
                }}
                placeholder={t.teamCodePlaceholder}
                className={`w-full bg-slate-950 border rounded-xl px-3.5 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all uppercase tracking-wider font-mono text-sm ${
                  error
                    ? "border-red-500 focus:ring-red-500"
                    : "border-slate-700 focus:ring-indigo-500 focus:border-indigo-500"
                }`}
              />
              {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
            </div>

            <button
              type="submit"
              className={`w-full bg-gradient-to-r from-red-500 to-blue-600 hover:from-emerald-500 hover:to-blue-500 text-white font-semibold py-2.5 px-5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-xs md:text-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                loading
                  ? "opacity-75 cursor-not-allowed"
                  : "cursor-pointer hover:scale-[1.01] active:scale-95"
              }`}
              disabled={loading}
            >
              {loading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Checking...</span>
                </>
              ) : (
                <>
                  <span>{t.submitBtn}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>
      </main>

      {/* 3. FOOTER */}
      <footer className="w-full text-center py-3 bg-slate-900 shrink-0 rounded-2xl border-t border-slate-800/60 text-xs md:text-sm flex flex-col items-center gap-1 text-slate-500">
        <p>
          {t.builtBy} <span className="font-bold">{t.developerName}</span> |
          Software Developer
        </p>

        <p className="font-bold">{t.poweredBy}</p>
      </footer>
    </div>
  );
}
