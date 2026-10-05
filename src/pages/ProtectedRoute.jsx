
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const teamCode = sessionStorage.getItem("teamCode");

  // If teamCode does not exist in sessionStorage, redirect to instruction/login page
  if (!teamCode) {
    return <Navigate to="/" replace />;
  }

  // Otherwise, render the child routes (e.g., <Quiz />)
  return <Outlet />;
};

export default ProtectedRoute;