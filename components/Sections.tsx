"use client"
import { useState, MouseEvent } from "react";
import { ArticleCard } from "./ArticleCard";
import data from "@/data/news.json";

const categories = [
  "All stories",
  ...new Set(data.map((article) => article.category)),
];

export const Sections = () => {
  const [category, setCategory] = useState("All stories");
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setCategory(event.currentTarget.id);
  };
  const filtered = data.filter(
    (article) => category === "All stories" || article.category === category,
  );
  let counter = 0;
  return (
    <div className="flex flex-col flex-1 w-87.5 md:w-176 lg:w-296 bg-white m-auto">
      {/* header */}
      <div className="w-full h-18.75 mt-10 flex justify-between items-end">
        <div className="flex flex-col">
          <div className="text-xs text-[#C44724] font-bold">
            STAY CURIOUS
          </div>
          <div className="text-4xl text-[#22241F] font-bold">
            The latest stories.
          </div>
        </div>
        <div className="text-xs text-[#65675F] font-normal hidden md:block">
          Big ideas. Fresh voices. Worth your time.
        </div>
      </div>
      {/* header2 */}
      <div className="w-full h-40 md:h-23.75">
        <div className="w-full h-px bg-[#E2E2DA] mt-6"></div>
        <div className="mt-3 flex gap-1 flex-wrap">
          {categories.map((cate) => (
            <button
              onClick={handleClick}
              key={cate}
              id={cate}
              className={
                category === cate
                  ? "bg-[#22241F] text-white w-20 h-9.25 rounded-sm flex justify-center items-center text-xs font-normal"
                  : "w-20 h-9.25 rounded-sm flex justify-center items-center hover:bg-[#d7f9a4] text-xs text-[#65675F] font-normal"
              }
            >
              {cate}
            </button>
          ))}
        </div>
        <div className="w-full h-px bg-[#E2E2DA] mt-4"></div>
      </div>
      {/* main */}
      <div className="h-14.25 w-full flex items-center text-xs text-[#65675F] font-normal">
        {filtered.length} stories{" "}
        {category === "All stories"
          ? "to explore"
          : `in ${category.toLowerCase()}`}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((article) => {
          return (
            <div key={article.id}>
              {
                <ArticleCard
                  key={article.slug}
                  id={article.id}
                  slug={article.slug}
                  title={article.title}
                  description={article.description}
                  category={article.category}
                  image={article.image}
                  imageAlt={article.imageAlt}
                  author={article.author}
                  date={article.date}
                  content={article.content}
                />
              }
            </div>
          );
        })}
      </div>
    </div>
  );
};
