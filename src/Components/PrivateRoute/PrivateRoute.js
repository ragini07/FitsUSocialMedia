import React from "react";
import { navigate, useNavigate, Route, Navigate } from "react-router-dom";


function PrivateRoute({ children }) {
  const navigate = useNavigate();
  const { token } = useAuth();
  if (token) return children;
  return <Navigate to="/login" replace />;
}

export { PrivateRoute };
