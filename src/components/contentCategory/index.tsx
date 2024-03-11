"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { CategoryType } from "@/interfaces/category";

interface Content {
  id: number;
  name: string;
  description: string;
}

function ContentCategory({
  cardCategorySelected,
  onUpdateSelectedCategory,
}: {
  cardCategorySelected: CategoryType | null;
  onUpdateSelectedCategory: (category: CategoryType | null) => void;
}) {
  const pathname = usePathname();
  const selectedCategory = pathname.match(/\d+$/)?.[0];
  console.log("selectedCategory", selectedCategory);

  const [content, setContent] = useState<Content | null>(null);

  console.log("content:", content);
  console.log("cardCategorySelected:", cardCategorySelected?.id);

  useEffect(() => {
    const fetchContent = async () => {
      const response = await fetch(`/api/categories/content/`);
      const data = await response.json();
      const dataConverted = JSON.stringify(data.content);
      setContent(dataConverted ? JSON.parse(dataConverted) : null);
    };

    if (pathname) {
      fetchContent();
    }
  }, [onUpdateSelectedCategory, cardCategorySelected?.id, pathname]);

  return (
    <div className="content-container">
      <AnimatePresence>
        {cardCategorySelected?.id && (
          <motion.div
            layoutId={cardCategorySelected?.id}
            className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex"
            id="default-modal"
            aria-hidden="true"
            style={{ background: 'rgba(0, 0, 0, .5)' }}
          >
            <motion.div className="relative p-4 w-full max-w-2xl max-h-full">
              <motion.div className="relative bg-white rounded-lg shadow dark:bg-gray-800">
                <motion.div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <motion.h5>{cardCategorySelected?.name}</motion.h5>
                  <motion.button
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => onUpdateSelectedCategory(null)}
                  >
                    X
                  </motion.button>
                </motion.div>
                {/* modal body */}
                {Array.isArray(content) ? (
                  content.map &&
                  content.map((c: Content) => (
                    <motion.div key={c.id} className="p-4 md:p-5 space-y-4">
                      <motion.a
                        className="hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white p-4 rounded flex justify-between	"
                        href={`dashboard/categoria/${c.id}`}
                      >
                        <motion.span>{c.name}</motion.span>
                        <motion.span>{c.description}</motion.span>
                      </motion.a>
                    </motion.div>
                  ))
                ) : (
                  <p>Contenido Cargando...</p>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default ContentCategory;
