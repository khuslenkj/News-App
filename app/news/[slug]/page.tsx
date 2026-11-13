import React from "react";
import data from "@/data/news.json";
import { notFound } from "next/navigation";
import { init } from "next/dist/compiled/webpack/webpack";
import { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import Link from "next/link"
import { BackButton } from "@/components/GoBack";


export const instant = false;

type ArticleDetailPageType = {
  params: Promise<{ slug: string }>;
};

export const generateStaticParams = () => {
  return data.map((article) => ({ slug: article.slug }));
};
export async function generateMetaData({
  params,
}: ArticleDetailPageType): Promise<Metadata> {
  const { slug } = await params;
  const article = data.find((article) => article.slug === slug);
  if (!article) notFound();

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      type: "article",
      siteName: "The Daily",
      title: article.title,
      description: article.description,
      images: [{ url: article.image, alt: article.imageAlt }],
    },
  };
}

export const categoryColors: Record<string, string> = {
  Design: "bg-rose-50 text-rose-800 ring-rose-200",
  Science: "bg-cyan-50 text-cyan-800 ring-cyan-200",
  Travel: "bg-amber-50 text-amber-800 ring-amber-200",
  Technology: "bg-blue-50 text-blue-800 ring-blue-200",
  World: "bg-emerald-50 text-emerald-800 ring-emerald-200",
  Business: "bg-violet-50 text-violet-800 ring-violet-200",
  Culture: "bg-fuchsia-50 text-fuchsia-800 ring-fuchsia-200",
};

const ArticleDetailPage = async ({ params }: ArticleDetailPageType) => {
  const { slug } = await params;
  const article = data.find((article) => article.slug === slug);
  if (!article) {
    notFound();
  }
  const related = data.filter(
    (element) => article.category === element.category && article.id !== element.id 
  );
  console.log(article);
  const initials = article.author
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  const categoryColor = categoryColors[article.category];
  return (
    <div className="w-[100vw] ">
      <div className="w-[350px] md:w-[704px] lg:w-[1184px] m-auto ">
        <div className="h-[61px] w-full flex items-center gap-[12px] ">
          <BackButton/>
          {/* <button className="text-[12px] text-[#22241F] font-[700] ">←  All stories</button > */}
          <div className="text-[12px] text-[#65675F] font-[400] ">/</div>
          <div className="text-[12px] text-[#65675F] font-[400] ">World</div>
        </div>
        <div className="w-[100%] h-[1px] bg-[#E2E2DA] "></div>
        <div className="flex mt-[40px] items-center gap-[12px] ">
          <div
            className={`${categoryColor} text-[10px] font-[700] p-[6px_12px] rounded-[100px]`}
          >
            {article?.category}
          </div>
          <div className="text-[11px] text-[#65675F] font-[400] ">
            — THE DAILY
          </div>
        </div>
        <div className="text-[36px] text-[#0C0A09] font-[700] mt-[20px] ">
          {article?.title}
        </div>
        <div className="text-[18px] text-[#57534E] font-[400] mt-[20px] ">
          {article?.description}
        </div>
        <div className="w-[100%] h-[1px] bg-[#E2E2DA] mt-[20px] "></div>
        <div className="flex flex-wrap gap-[63px] items-center mt-[20px] ">
          <div className="flex gap-[14px] items-center">
            <div
              className={`size-[40px] ${categoryColor} rounded-[100px] flex justify-center items-center text-[12px] font-[700]`}
            >
              {initials}
            </div>
            <div className="w-[200px] md:w-[188px] lg:w-[226px] h-[37px] flex flex-col justify-between">
              <div className="text-[10px] text-[#65675F] font-[700]">
                WRITTEN BY
              </div>
              <div className="text-[12px] text-[#292524] font-[700]">
                {article?.author}
              </div>
            </div>
          </div>
          <div className="flex gap-[57px] h-[41px] ">
            <div className="flex flex-col justify-between ">
              <div className="text-[10px] text-[#65675F] font-[700] ">
                PUBLISHED
              </div>
              <div className="text-[14px] text-[#22241F] font-[400] ">
                {article?.date}
              </div>
            </div>
            <div className="flex flex-col justify-between ">
              <div className="text-[10px] text-[#65675F] font-[700] ">
                READING TIME
              </div>
              <div className="text-[14px] text-[#22241F] font-[400] ">
                1 min read
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[32px] w-[100%] h-[262.5px] md:h-[352px] lg:h-[514.78px] rounded-[16px] md:rounded-[24px] lg:roudned-[24px] overflow-hidden flex items-center ">
          <img
            src={article?.image}
            alt={article?.imageAlt}
            className="w-full"
          />
        </div>
        <div className="flex flex-wrap mt-[12px]">
          <div className="text-[10px] text-[#65675F] font-[400] ">
            {article?.imageAlt}
          </div>
          <div className="text-[10px] text-[#65675F] font-[400] ">
            Illustrative photography · Unsplash
          </div>
        </div>
        <div className="w-full flex flex-col items-center ">
          <div className="mt-[40px] w-[300px] md:w-[704px] lg:w-[768px] border border-[#E2E2DA] rounded-[16px] p-[24px] flex flex-col gap-[24px] ">
            <div className="text-[10px] text-[#C44724] font-[700] ml-[20px]">
              THE STORY
            </div>
            <div className="text-[18px] text-[#44403C] font-[400] ">
              {article?.content[0]}
            </div>
            <div className="text-[18px] text-[#44403C] font-[400] ">
              {article?.content[1]}
            </div>
            <div className="text-[18px] text-[#44403C] font-[400] ">
              {article?.content[2]}
            </div>
            <div className="text-[16px] text-[#C44724] font-[700] self-center ">
              • • •
            </div>
          </div>
          <div className="text-[11px] text-[#65675F] font-[400] mt-[16px] ">
            Fictional sample story · The Daily learning edition
          </div>
          <div className="w-[350px] md:w-[630px] lg:w-[694px] bg-[#FFF7ED] rounded-[16px] flex flex-wrap justify-between p-[24px] gap-[24px] mt-[16px] ">
            <div>
              <div className="text-[18px] text-[#22241F] font-[600] ">
                A little more curiosity?
              </div>
              <div className="text-[14px] text-[#65675F] font-[400] ">
                Your next good read is just around the corner.
              </div>
            </div>
            <button className="text-[12px] text-[white] font-[400] bg-[#22241F] p-[10px_12px] rounded-[100px] ">
              All stories ↗
            </button>
          </div>
        </div>
        <div className="w-[100%] h-[1px] bg-[#E2E2DA] mt-[40px] "></div>
        <div className="text-[10px] text-[#C44724] font-[700] mt-[40px] ">
          KEEP YOUR CURIOSITY GOING
        </div>
        <div className="text-[30px] text-[#22241F] font-[700] mt-[8px] ">
          More to discover.
        </div>
        <div className="mt-[28px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-[64px] ">
          {related.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailPage;
