"use client";
import { useState, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import style from "./style.module.scss";
import { motion } from "framer-motion";

import { CategoryContext } from "@/context/categoryContext/categoryContext";
import { CategoryType } from "@/interfaces/category";
import ContentCategory from "../contentCategory";

function Home() {
  const categoriesContext = useContext(CategoryContext);

  const categoriesArray = categoriesContext.categories;

  const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(
    null
  );

  // Esta función se utilizará para actualizar el estado desde el hijo
  const updateSelectedCategory = (category: CategoryType | null) => {
    setSelectedCategory(category);
  };

  console.log("selectedCategory", selectedCategory);

  return (
    <div className="grid grid-cols-3 gap-4 p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
      {categoriesArray
        ? Array.isArray(categoriesArray) &&
          categoriesArray.map((category: CategoryType | null) =>
            category ? (
              <motion.div
                key={category.id}
                layoutId={category.id}
                onClick={() => setSelectedCategory(category)}
                className="rounded-lg flex items-center justify-center h-24 bg-gray-50 dark:bg-gray-800"
                data-modal-target="default-modal"
                data-modal-toggle="default-modal"
                style={{ cursor: "pointer" }}
              >
                <motion.h2>{category.name}</motion.h2>
              </motion.div>
            ) : null
          )
        : <h2 className="font-bold	">Loading...</h2> }
        <ContentCategory
          cardCategorySelected={selectedCategory}
          onUpdateSelectedCategory={updateSelectedCategory}
        />
    </div>
  );
}

export default Home;
