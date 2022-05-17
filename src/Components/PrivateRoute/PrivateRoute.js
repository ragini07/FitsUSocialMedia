import React from "react";
import { navigate, useNavigate, Route, Navigate } from "react-router-dom";
import { useSelector} from 'react-redux';


function PrivateRoute({ children }) {
  const navigate = useNavigate();
 const {token} =  useSelector(state => state.auth)
  
  if (token) return children;
  return <Navigate to="/login" replace />;
}

export { PrivateRoute };
