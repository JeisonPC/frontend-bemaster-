"use client";
import Home from "@/components/HomeComponent";
import Link from "next/link";
import { useContext } from "react";
import { CategoryType } from "@/interfaces/category";
import Image from "next/image";
import { CategoryContext } from "@/context/categoryContext/categoryContext";

function Dashboard() {
  const categories = useContext(CategoryContext);
  console.log("categories", categories);

  return (
    <>
      <h1 className="text-white">Dashboard</h1>
      <Home />
    </>
  );
}

export default Dashboard;
