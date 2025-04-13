import { menu } from "@/data";
import Link from "next/link";
import React from "react";

const MenuPage = () => {
  return (
    <div className="px-4 pt-16 pb-10 lg:px-20 xl:px-40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className="relative h-64 sm:h-72 lg:h-80 xl:h-[28rem] bg-cover bg-center rounded-xl overflow-hidden"
          style={{ backgroundImage: `url(${category.img})` }}
        >
          <div className={`absolute inset-0 bg-black/10 flex flex-col justify-center p-6 text-${category.color}`}>
            <h1 className="uppercase font-bold text-2xl sm:text-3xl">{category.title}</h1>
            <p className="text-sm sm:text-base my-4">{category.desc}</p>
            <button className={`mt-auto self-start hidden xl:inline-block bg-${category.color} text-${category.color === "black" ? "white" : "red-500"} py-2 px-4 rounded-md`}>
              Explore
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;