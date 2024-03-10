"use client";
import { useEffect, useState} from "react";
import { CategoryContext } from "@/context/categoryContext/categoryContext";
import { CategoryType } from "@/interfaces/category";

interface CategoryProviderProps {
  children: React.ReactNode;
}

export const CategoryProvider = ({ children }: CategoryProviderProps) => {

  const [categories, setCategories] = useState<CategoryType | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("/api/categories");
        const data = await response.json();
        setCategories(data.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setCategories(null);
      }
    };
    fetchCategories();
  }, []);

  console.log("Categories desde el provider:", categories)

  return (
    <CategoryContext.Provider value={{categories: categories as CategoryType }}>{children}</CategoryContext.Provider>
  );
};
