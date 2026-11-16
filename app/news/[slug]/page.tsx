import React from "react";
import data from "@/data/news.json";
import { notFound } from "next/navigation";
import { init } from "next/dist/compiled/webpack/webpack";
import { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import Link from "next/link"
import { BackButton } from "@/components/GoBack";
import {MoveUpRight} from "lucide-react"


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
    <div>
      <div className="w-87.5 md:w-176 lg:w-296 m-auto ">
        <div className="h-15.25 w-full flex items-center gap-3 ">
          <BackButton/>
          <div className="text-xs text-[#65675F] font-normal ">/</div>
          <div className="text-xs text-[#65675F] font-normal ">World</div>
        </div>
        <div className="w-full h-px bg-[#E2E2DA] "></div>
        <div className="flex mt-10 items-center gap-3 ">
          <div
            className={`${categoryColor} text-xs font-bold py-1.5 px-3 rounded-full`}
          >
            {article?.category}
          </div>
          <div className="text-xs text-[#65675F] font-normal ">  
            — THE DAILY
          </div>
        </div>
        <div className="text-4xl text-[#0C0A09] font-bold mt-5 ">
          {article?.title}
        </div>
        <div className="text-lg text-[#57534E] font-normal mt-5 ">
          {article?.description}
        </div>
        <div className="w-full h-px bg-[#E2E2DA] mt-5 "></div>
        <div className="flex flex-wrap gap-15.75 items-center mt-5 ">
          <div className="flex gap-3.5 items-center">
            <div
              className={`size-10 ${categoryColor} rounded-full flex justify-center items-center text-3 font-bold`}
            >
              {initials}
            </div>
            <div className="w-50 md:w-47 lg:w-56.5 h-9.25 flex flex-col justify-between">
              <div className="text-xs text-[#65675F] font-bold">
                WRITTEN BY
              </div>
              <div className="text-xs text-[#292524] font-bold">
                {article?.author}
              </div>
            </div>
          </div>
          <div className="flex gap-14.25 h-10.25 ">
            <div className="flex flex-col justify-between ">
              <div className="text-xs text-[#65675F] font-bold ">
                PUBLISHED
              </div>
              <div className="text-sm text-[#22241F] font-normal ">
                {article?.date}
              </div>
            </div>
            <div className="flex flex-col justify-between ">
              <div className="text-xs text-[#65675F] font-bold ">
                READING TIME
              </div>
              <div className="text-sm text-[#22241F] font-bold ">
                1 min read
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 w-full h-65.5 md:h-88 lg:h-128.5 rounded-2xl md:rounded-3xl lg:rounded-3xl overflow-hidden flex items-center ">
          <img
            src={article?.image}
            alt={article?.imageAlt}
            className="w-full"
          />
        </div>
        <div className="flex flex-wrap mt-3">  
          <div className="text-xs text-[#65675F] font-normal ">
            {article?.imageAlt}
          </div>
          <div className="text-xs text-[#65675F] font-normal ">
            Illustrative photography · Unsplash
          </div>
        </div>
        <div className="w-full flex flex-col items-center ">
          <div className="mt-10 w-75 md:w-176 lg:w-3xl border border-[#E2E2DA] rounded-2xl p-6 flex flex-col gap-6 ">
            <div className="text-xs text-[#C44724] font-bold ml-5">
              THE STORE
            </div>
            <div className="text-lg text-[#44403C] font-normal ">
              {article?.content[0]}
            </div>
            <div className="text-lg text-[#44403C] font-normal ">
              {article?.content[1]}
            </div>
            <div className="text-lg text-[#44403C] font-normal ">
              {article?.content[2]}
            </div>
            <div className="text-base text-[#C44724] font-bold self-center ">
              • • •
            </div>
          </div>
          <div className="text-xs text-[#65675F] font-100 mt-4 ">
            Fictional sample story · The Daily learning edition
          </div>
          <div className="w-87.5 md:w-157.5 lg:w-173.5 bg-[#FFF7ED] rounded-2xl flex flex-wrap justify-between p-6 gap-6 mt-4 ">
            <div>
              <div className="text-lg text-[#22241F] font-semibold ">
                A little more curiosity?
              </div>
              <div className="text-sm text-[#65675F] font-normal ">
                Your next good read is just around the corner.
              </div>
            </div>
            <button className="text-xs text-[white] font-normal bg-[#22241F] py-2.5 px-3 rounded-full flex gap-1">
              All stories <MoveUpRight size={16} color="white" />
            </button>
          </div>
        </div>
        <div className="w-full h-px bg-[#E2E2DA] mt-10 "></div>
        <div className="text-xs text-[#C44724] font-bold mt-10 ">
          KEEP YOUR CURIOSITY GOING
        </div>
        <div className="text-3xl text-[#22241F] font-bold mt-2 ">
          More to discover.
        </div>
        <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16 ">
          {related.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailPage;
