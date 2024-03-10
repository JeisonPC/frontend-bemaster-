"use client";
import LoginComponent from "@/components/LoginComponent";
import { useAuth } from "@/hooks/useAuth";
import React from "react";

function Login() {
  const { user } = useAuth();

  return (
    <div>
      <LoginComponent/>
    </div>
  );
}

export default Login;
