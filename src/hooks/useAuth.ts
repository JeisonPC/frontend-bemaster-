'use client'
import { UserType } from "@/interfaces/user";
import { useLayoutEffect, useState } from "react";

export const useAuth = () => {
  const [user, setUser] = useState<string | null>(null);

  useLayoutEffect(() => {
    const userString = localStorage.getItem("user");
    if (userString) {
      try {
        const userData = JSON.parse(userString); // Parse the JSON string
        setUser(userData);
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, [setUser]);

  const login = (userData: UserType) => {
    console.log("Recibí la data del login", userData);
    setUser(JSON.stringify(userData));
    console.log("Este es el user del useState", user);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.setItem("user", "");
  };

  return { user, login, logout, setUser };
};
