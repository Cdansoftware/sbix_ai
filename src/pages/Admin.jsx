import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import {
  Lock,
  Key,
  Trophy,
  Users,
  CheckCircle,
  XCircle,
  Search,
  RefreshCw,
  Eye,
  LogOut,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SBIX from "../assets/logo_sbix.png";
import { QUESTIONS_DATA } from "./questionsData.js";

const INITIAL_MOCK_SUBMISSIONS = [];
// The admin password is NOT stored here any more. The server checks it.
const Default_url =
  import.meta.env.VITE_API_URL || "https://sbix-aiquiz-backend.onrender.com";

// 85 -> "1m 25s"
const formatDuration = (sec) =>
  typeof sec === "number"
    ? `${Math.floor(sec / 60)}m ${String(sec % 60).padStart(2, "0")}s`
    : "—";

/**
- Builds the leaderboard.
- Order: 1) score (high first)  2) accuracy (high first)
-        3) time taken (low first)  4) submission time (earlier first)
- Teams that are equal on score, accuracy AND time share the same rank (tie).
 */
const buildLeaderboard = (submissions) => {
  const enriched = submissions.map((s) => {
    const answers = Array.isArray(s.ans) ? s.ans : [];
    const attemptedCount = answers.filter(
      (a) => a.sel !== null && a.sel !== undefined
    ).length;
    const correctCount = answers.filter(
      (a) => a.sel !== null && a.sel !== undefined && a.sel === a.cor
    ).length;
    const accuracy = attemptedCount
      ? Number(((correctCount / attemptedCount) * 100).toFixed(2))
      : 0;
    const timeTakenSec =
      typeof s.timeTakenSec === "number" ? s.timeTakenSec : null;

    return { ...s, attemptedCount, correctCount, accuracy, timeTakenSec };
  });

  enriched.sort(
    (a, b) =>
      (b.score || 0) - (a.score || 0) ||
      b.accuracy - a.accuracy ||
      (a.timeTakenSec ?? Infinity) - (b.timeTakenSec ?? Infinity) ||
      new Date(a.submittedAt || 0) - new Date(b.submittedAt || 0)
  );

  let prev = null;
  return enriched.map((s, idx) => {
    const isTieWithPrev =
      prev &&
      prev.score === s.score &&
      prev.accuracy === s.accuracy &&
      prev.timeTakenSec === s.timeTakenSec;
    const rank = isTieWithPrev ? prev.rank : idx + 1;
    const row = { ...s, rank, isTie: false };
    if (isTieWithPrev) {
      row.isTie = true;
      prev.isTie = true; // mark the first team of the tie as well
    }
    prev = row;
    return row;
  });
};

const AdminPanel = () => {
  // Logged in = a token from the server is saved for this browser tab
  const [isAuthenticated, setIsAuthenticated] = useState(
    Boolean(sessionStorage.getItem("adminToken"))
  );
  const [passwordInput, setPasswordInput] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const [submissions, setSubmissions] = useState(INITIAL_MOCK_SUBMISSIONS);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedRow, setExpandedRow] = useState(null);

  // API Integration Endpoint Hook
  const GetAllsubmission = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${Default_url}/api/quiz/get-submit`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("adminToken")}`,
        },
      });

      // Normalize array or backend wrapper object
      const data = Array.isArray(response.data)
        ? response.data
        : response.data?.data || [];

      setSubmissions(data);
      toast.info("Refreshed latest quiz submissions!", { autoClose: 1500 });
    } catch (err) {
      console.error("Fetch submissions error:", err);
      if (err.response?.status === 401) {
        // Token missing, wrong or expired: go back to the login screen
        sessionStorage.removeItem("adminToken");
        sessionStorage.removeItem("adminAuth");
        setIsAuthenticated(false);
        toast.error("Session expired. Please log in again.");
      } else {
        toast.error("Failed to fetch API submissions");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      GetAllsubmission();
    }
  }, [isAuthenticated]);

  // The server checks the password and sends back a token
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!passwordInput || loginLoading) return;
    setLoginLoading(true);
    try {
      const res = await axios.post(`${Default_url}/api/admin/login`, {
        password: passwordInput,
      });
      sessionStorage.setItem("adminToken", res.data.token);
      setPasswordInput("");
      setIsAuthenticated(true);
      toast.success("Welcome to Admin Control Panel!");
    } catch (err) {
      const message =
        err.response?.data?.message ||
        "Could not reach the server. Please check your connection.";
      toast.error(message);
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("adminToken");
    sessionStorage.removeItem("adminAuth");
    setSubmissions([]);
    setIsAuthenticated(false);
    toast.info("Logged out of Admin Panel");
  };

  // Full leaderboard (ranks are computed on ALL teams, before searching)
  const leaderboard = useMemo(() => buildLeaderboard(submissions), [submissions]);

  // Search only hides rows, it never changes anyone's rank
  const filteredSubmissions = leaderboard.filter((item) =>
    item.tCode?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Statistics calculation
  const totalSubmissions = leaderboard.length;

  const avgScore = totalSubmissions
    ? (
        leaderboard.reduce((acc, curr) => acc + (curr.score || 0), 0) /
        totalSubmissions
      ).toFixed(1)
    : 0;

  // Rank 1 = first row of the leaderboard (tie-breaks already applied)
  const topSubmission = totalSubmissions ? leaderboard[0] : null;
  const rank1Count = leaderboard.filter((s) => s.rank === 1).length;

  const topScore = topSubmission ? topSubmission.score : 0;
  const topTeamCode = topSubmission ? topSubmission.tCode : "N/A";

  // Password Login Screen
  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-50 w-screen h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4 font-sans">
        <ToastContainer position="top-right" />
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 max-w-md w-full shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 bg-indigo-950/80 border border-indigo-800/60 rounded-2xl flex items-center justify-center mx-auto text-indigo-400 mb-4 overflow-hidden">
              <img
                src={SBIX}
                alt="SBIX logo"
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="text-2xl font-bold text-white tracking-wide">
              Admin Portal
            </h1>
            <p className="text-xs text-slate-400">
              Enter password to access evaluation results and scores.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-300">
                Admin Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter access key"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl px-4 py-3 text-sm text-white outline-none pl-10"
                />
                <Key className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
              </div>
            </div>

            <button
              type="submit"
              disabled={loginLoading}
              className="w-full py-3 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white rounded-xl font-bold text-sm shadow-lg shadow-indigo-950/50 transition-all disabled:opacity-50"
            >
              {loginLoading ? "Checking..." : "Unlock Dashboard"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-4 md:p-8 space-y-8">
      <ToastContainer position="top-right" />

      {/* Admin Header */}
      <header className="flex items-center justify-between bg-slate-900/80 border border-slate-800 rounded-2xl px-6 py-4 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <img src={SBIX} alt="SBIX logo" className="w-10 h-10 rounded-full" />
          <div>
            <h1 className="text-lg font-bold text-white">
              Quiz Evaluation Admin Panel
            </h1>
            <p className="text-xs text-slate-400 font-mono">
              Role: Master Evaluator
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={GetAllsubmission}
            disabled={loading}
            className="flex items-center gap-2 px-3 py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 text-slate-200 rounded-xl text-xs font-semibold transition-all"
          >
            <RefreshCw
              className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`}
            />
            <span>{loading ? "Fetching..." : "Refresh Data"}</span>
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-3 py-2 bg-red-950/60 hover:bg-red-900/60 border border-red-800/50 text-red-300 rounded-xl text-xs font-semibold transition-all"
          >
            <LogOut className="w-3.5 h-3.5" /> Logout
          </button>
        </div>
      </header>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Submissions */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase">
              Total Submissions
            </p>
            <p className="text-2xl font-bold text-white mt-1">
              {totalSubmissions}
            </p>
          </div>
          <div className="w-12 h-12 bg-indigo-950/60 border border-indigo-800/40 rounded-xl flex items-center justify-center text-indigo-400">
            <Users className="w-6 h-6" />
          </div>
        </div>

        {/* Average Score */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase">
              Average Score
            </p>
            <p className="text-2xl font-bold text-emerald-400 mt-1">
              {avgScore}%
            </p>
          </div>
          <div className="w-12 h-12 bg-emerald-950/60 border border-emerald-800/40 rounded-xl flex items-center justify-center text-emerald-400">
            <Trophy className="w-6 h-6" />
          </div>
        </div>

        {/* Highest Score */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase">
              Highest Score
            </p>
            <p className="text-2xl font-bold text-indigo-300 mt-1">
              {topScore}%
            </p>
          </div>
          <div className="w-12 h-12 bg-indigo-950/60 border border-indigo-800/40 rounded-xl flex items-center justify-center text-indigo-400">
            <CheckCircle className="w-6 h-6" />
          </div>
        </div>

        {/* Rank 1 Card */}
        <div className="bg-gradient-to-br from-amber-950/50 to-slate-900/80 border border-amber-500/40 rounded-2xl p-5 flex items-center justify-between shadow-lg shadow-amber-950/20">
          <div>
            <p className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1">
              👑 Rank #1 Leader
            </p>
            <p className="text-xl font-mono font-bold text-amber-200 mt-1 truncate max-w-[140px]">
              {topTeamCode}
            </p>
            <p className="text-xs text-amber-400/80 font-semibold mt-0.5">
              Score: {topScore}%
              {topSubmission && (
                <>
                  {" "}
                  - Acc: {topSubmission.accuracy}% •{" "}
                  {formatDuration(topSubmission.timeTakenSec)}
                </>
              )}
            </p>
            {rank1Count > 1 && (
              <p className="text-[11px] text-amber-300 font-semibold mt-0.5">
                Joint Rank #1 with {rank1Count - 1} other team(s)
              </p>
            )}
          </div>
          <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-center justify-center text-amber-400 shrink-0">
            <Trophy className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Submissions Table Section */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-base font-bold text-white">
              Leaderboard ({filteredSubmissions.length})
            </h2>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Ranked by Score → Accuracy → Time Taken → Submission Time
            </p>
          </div>

          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search Team Code..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl px-4 py-2 text-xs text-white outline-none pl-9"
            />
            <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-3" />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto border border-slate-800 rounded-xl">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950 text-slate-400 uppercase font-mono border-b border-slate-800">
              <tr>
                <th className="p-3.5">Rank</th>
                <th className="p-3.5">Team Code</th>
                <th className="p-3.5">Score</th>
                <th className="p-3.5">Accuracy</th>
                <th className="p-3.5">Attempted</th>
                <th className="p-3.5">Time Taken</th>
                <th className="p-3.5">Submission Time</th>
                <th className="p-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {/* 1. API Loading State (Skeleton Rows) */}
              {loading ? (
                Array.from({ length: 5 }).map((_, idx) => (
                  <tr key={idx} className="animate-pulse">
                    {[10, 24, 12, 14, 16, 16, 32].map((w, i) => (
                      <td key={i} className="p-3.5">
                        <div
                          className="h-4 bg-slate-800 rounded"
                          style={{ width: `${w}px` }}
                        ></div>
                      </td>
                    ))}
                    <td className="p-3.5 text-right">
                      <div className="h-7 bg-slate-800 rounded w-28 ml-auto"></div>
                    </td>
                  </tr>
                ))
              ) : filteredSubmissions.length === 0 ? (
                /* 2. Empty State */
                <tr>
                  <td
                    colSpan={8}
                    className="p-8 text-center text-slate-400 font-mono"
                  >
                    No submissions found.
                  </td>
                </tr>
              ) : (
                /* 3. Render Submissions Data */
                filteredSubmissions.map((sub) => {
                  const isExpanded = expandedRow === sub.tCode;
                  const medal =
                    sub.rank === 1
                      ? "🥇"
                      : sub.rank === 2
                      ? "🥈"
                      : sub.rank === 3
                      ? "🥉"
                      : null;

                  return (
                    <React.Fragment key={sub.tCode}>
                      <tr className="hover:bg-slate-800/40 transition-all">
                        <td className="p-3.5 font-mono font-bold text-amber-300 whitespace-nowrap">
                          {medal && <span className="mr-1">{medal}</span>}#
                          {sub.rank}
                          {sub.isTie && (
                            <span className="ml-1.5 text-[9px] px-1.5 py-0.5 rounded bg-amber-500/15 border border-amber-500/30 text-amber-300 align-middle">
                              TIE
                            </span>
                          )}
                        </td>
                        <td className="p-3.5 font-mono font-bold text-indigo-400">
                          {sub.tCode}
                        </td>
                        <td className="p-3.5">
                          <span
                            className={`font-mono font-bold px-2.5 py-1 rounded-md border ${
                              sub.score >= 50
                                ? "bg-emerald-950/70 border-emerald-800 text-emerald-300"
                                : "bg-red-950/70 border-red-800 text-red-300"
                            }`}
                          >
                            {sub.score}%
                          </span>
                        </td>
                        <td className="p-3.5 font-mono text-slate-200">
                          {sub.accuracy}%
                          <span className="text-slate-500">
                            {" "}
                            ({sub.correctCount}/{sub.attemptedCount})
                          </span>
                        </td>
                        <td className="p-3.5 font-mono text-slate-300">
                          {sub.attemptedCount} / {QUESTIONS_DATA.length}
                        </td>
                        <td className="p-3.5 font-mono text-slate-300">
                          {formatDuration(sub.timeTakenSec)}
                        </td>
                        <td className="p-3.5 text-slate-400">
                          {new Date(
                            sub.submittedAt || Date.now()
                          ).toLocaleString()}
                        </td>
                        <td className="p-3.5 text-right">
                          <button
                            onClick={() =>
                              setExpandedRow(isExpanded ? null : sub.tCode)
                            }
                            className="px-3 py-1.5 bg-indigo-950/80 border border-indigo-800/60 text-indigo-300 hover:bg-indigo-900/80 rounded-lg font-semibold flex items-center gap-1.5 ml-auto"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>
                              {isExpanded ? "Hide Details" : "View Answers"}
                            </span>
                            {isExpanded ? (
                              <ChevronUp className="w-3 h-3" />
                            ) : (
                              <ChevronDown className="w-3 h-3" />
                            )}
                          </button>
                        </td>
                      </tr>

                      {/* Answer Details Drawer */}
                      {isExpanded && (
                        <tr className="bg-slate-950/80">
                          <td
                            colSpan={8}
                            className="p-4 border-b border-slate-800"
                          >
                            <div className="space-y-3">
                              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                                Detailed Question Breakdown for Team: {sub.tCode}
                              </h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {sub.ans?.map((a, idx) => {
                                  const qObj = QUESTIONS_DATA.find(
                                    (q) => q.id === a.q
                                  );
                                  const isCorrect = a.sel === a.cor;
                                  return (
                                    <div
                                      key={idx}
                                      className={`p-3 rounded-xl border text-xs space-y-1.5 ${
                                        a.sel === null
                                          ? "bg-slate-900 border-slate-800 text-slate-400"
                                          : isCorrect
                                          ? "bg-emerald-950/30 border-emerald-800/40 text-emerald-200"
                                          : "bg-red-950/30 border-red-800/40 text-red-200"
                                      }`}
                                    >
                                      <div className="flex items-center justify-between font-semibold">
                                        <span>
                                          Q{a.q}: {qObj?.question.en}
                                        </span>
                                        {a.sel === null ? (
                                          <span className="text-amber-400">
                                            Unattempted
                                          </span>
                                        ) : isCorrect ? (
                                          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                                        ) : (
                                          <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                                        )}
                                      </div>
                                      <div className="font-mono text-[11px] text-slate-400">
                                        Selected:{" "}
                                        <span className="text-slate-200">
                                          {a.sel !== null
                                            ? qObj?.options.en[a.sel]
                                            : "None"}
                                        </span>
                                      </div>
                                      <div className="font-mono text-[11px] text-slate-400">
                                        Correct:{" "}
                                        <span className="text-emerald-400 font-semibold">
                                          {qObj?.options.en[a.cor]}
                                        </span>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;

