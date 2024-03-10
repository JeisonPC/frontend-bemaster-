"use client";
import { useEffect, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { CategoryContext } from "@/context/categoryContext/categoryContext";
import { CategoryType } from "@/interfaces/category";

function Home() {

  const categoriesContext = useContext(CategoryContext);

  const categoriesArray = categoriesContext.categories;

  console.log("¿Es categoriesArray un arreglo?", categoriesArray instanceof Array);


  return (
    <>
      {categoriesArray ? (
        Array.isArray(categoriesArray) && categoriesArray.map((category: CategoryType | null) =>
          category ? (
            <div key={category.id}>
              {/* Contenido de cada categoría aquí */}
              <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                  <Image src="/categories/image-1.jpg" alt="card-image" width={800} height={600} />
                </div>
                <div className="p-6">
                  <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {category.name}
                  </h5>
                </div>
                <div className="p-6 pt-0">
                  <Link href="/"
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none">
                    {/* Link content here */}
                    Aprende más
                  </Link>
                </div>
              </div>
            </div>
          ) : null
        )
      ) : (
        "Loading"
      )}
    </>
  );
}

export default Home;
