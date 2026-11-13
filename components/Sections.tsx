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
  return (
    <div className="flex flex-col flex-1 w-[350px] md:w-[704px] lg:w-[1184px] bg-white m-auto">
      {/* header */}
      <div className="w-[100%] h-[75px] mt-[40px] flex justify-between items-end">
        <div className="flex flex-col">
          <div className="text-[10px] text-[#C44724] font-[700]">
            STAY CURIOUS
          </div>
          <div className="text-[36px] text-[#22241F] font-[700]">
            The latest stories.
          </div>
        </div>
        <div className="text-[12px] text-[#65675F] font-[400] hidden md:block">
          Big ideas. Fresh voices. Worth your time.
        </div>
      </div>
      {/* header2 */}
      <div className="w-[100%] h-[160px] md:h-[95px]">
        <div className="w-[100%] h-[1px] bg-[#E2E2DA] mt-[24px]"></div>
        <div className="mt-[12px] flex gap-[4px] flex-wrap">
          {categories.map((cate) => (
            <button
              onClick={handleClick}
              key={cate}
              id={cate}
              className={category===cate ? "bg-[#22241F] text-white w-[80px] h-[37px] rounded-[4px] flex justify-center items-center text-[12px] font-[400]" : "w-[80px] h-[37px] rounded-[4px] flex justify-center items-center hover:bg-[#d7f9a4] text-[12px] text-[#65675F] font-[400]"}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="w-[100%] h-[1px] bg-[#E2E2DA] mt-[12px]"></div>
      </div>
      {/* main */}
      <div className="h-[57px] w-[100%] flex items-center text-[12px] text-[#65675F] font-[400]">
        20 stories to explore
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((article) => (
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
        ))}
       </div>
    </div>
  );
};
