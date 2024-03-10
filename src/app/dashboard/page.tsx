"use client";
import ProtectedRoute from "@/components/ProtectedRoute";
import Home from "@/components/HomeComponent";
import Link from "next/link";
import { useContext } from "react";
import { CategoryType } from "@/interfaces/category";
import Image from "next/image";
import { CategoryContext } from "@/context/categoryContext/categoryContext";
import { CategoryProvider } from "@/context/categoryContext/categoryProvider";

function Dashboard() {
  const categories = useContext(CategoryContext);
  console.log("categories", categories);

  return (
    <ProtectedRoute>
      <CategoryProvider>
        <h1 className="text-white">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Home />
        </div>
      </CategoryProvider>
    </ProtectedRoute>
  );
}

export default Dashboard;
