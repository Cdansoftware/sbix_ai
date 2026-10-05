import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Loader2 } from "lucide-react";
import SplashScreen from "./pages/SplashScreen";
import "./App.css"; // Import App.css
import ProtectedRoute from "./pages/ProtectedRoute";
import Admin from "./pages/Admin";

// Lazy loading all page components
const InstructionPage = lazy(() => import("./pages/InstructionPage"));
const Quiz = lazy(() => import("./pages/Quiz"));
const NotFoundPage = lazy(() => import("./pages/NotFound"));

// Fallback Loader during suspense transitions
const PageLoader = () => (
  <div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-400">
    <Loader2 className="w-8 h-8 animate-spin text-indigo-500" />
  </div>
);

// Inner App component running inside the <Router> context
const MainApp = () => {
  const [showSplash, setShowSplash] = useState(true);

  // Display splash screen until user completes splash sequence
  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<InstructionPage />} />
        <Route path="/admin" element={<Admin />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/quiz" element={<Quiz />} />
        </Route>

        {/* Wildcard Route for 404 / Bad Routes */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

// Root App component
export default function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}
