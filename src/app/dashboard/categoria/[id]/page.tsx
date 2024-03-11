"use client";
import ContentDetails from "@/components/contentDetails";
import { ContentType } from "@/interfaces/content";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Categoria() {
  const [contentDetail, setContentDetail] = useState<ContentType | null>(null);
  const pathname = usePathname();
  const selectedContent = pathname.match(/\d+$/)?.[0];

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          `/api/categories/content/${selectedContent}`
        );
        const data = await response.json();
        setContentDetail(data);
      } catch (error) {
        console.error("Error obteniendo contenido de categories:", error);
        setContentDetail(null);
      }
    };
    fetchCategories();
  }, [selectedContent]);

  console.log("contentDetail desde categoría", contentDetail);

  return (
    <div>
      <h1>Contenido</h1>
      
      <ContentDetails contentDetail={contentDetail as ContentType} />
    </div>
  );
}
