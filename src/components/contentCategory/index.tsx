"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

interface Content {
  title: string;
  description: string;
}

function ContentCategory() {
  const pathname = usePathname();
  const selectedCategory = pathname.match(/\d+$/)?.[0];
  console.log("selectedCategory", selectedCategory);

  const [content, setContent] = useState<Content | null>(null);

  console.log("content", content);

  // Fetch content based on selected category (replace with your actual data fetching logic)
  useEffect(() => {
    const fetchContent = async () => {
      const response = await fetch(
        `/api/categories/content/${selectedCategory}`
      );
      const data = await response.json();
      const dataConverted = JSON.stringify(data);
      setContent(dataConverted ? JSON.parse(dataConverted) : null);
    };

    if (pathname) {
      fetchContent();
    }
  }, [selectedCategory, pathname]);

  return (
    <div className="content-container">
      <h2>{pathname} Content</h2>
      {content ? (
        <div>
          {/* Display content details like title, description, etc. */}
          <h3>{content.title}</h3>
          <p>{content.description}</p>
        </div>
      ) : (
        <p>No content found for this category.</p>
      )}
    </div>
  );
}

export default ContentCategory;
