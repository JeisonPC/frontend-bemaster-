'use client'
import { createContext } from "react";
import { CategoryType } from "@/interfaces/category";

export const CategoryContext = createContext<{ categories: CategoryType | null }>({
  categories: null,
});
