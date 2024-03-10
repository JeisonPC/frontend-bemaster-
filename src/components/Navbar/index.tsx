"use client";
import { AuthContext } from "@/context/authContext/authContext";
import Link from "next/link";
import { useContext } from "react";

export default function Navbar() {
  const { user } = useContext(AuthContext);
  console.log("El user del Navbar",user)
  return (
    <nav>
      <h1>Navbar</h1>
      {/* Conditional rendering for clarity */}
      {user ? <p className="text-white">Welcome, {user.email}</p> : <p>Please log in</p>}
      <Link href="/dashboard">Dashboard</Link>
    </nav>
  );
}
