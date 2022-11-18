import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

export default function ProtectedRoutes({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <h1>CARGANDO</h1>;
  if (!user) return <Navigate to="/login" />;

  return <React.Fragment>{children}</React.Fragment>;
}
