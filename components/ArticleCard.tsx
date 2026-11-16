import { Clock } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type ArticleCardType = {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
  imageAlt: string;
  author: string;
  date: string;
  content: string[];
};

export const categoryColors: Record<string, string> = {
  Design: "bg-rose-50 text-rose-800 ring-rose-200",
  Science: "bg-cyan-50 text-cyan-800 ring-cyan-200",
  Travel: "bg-amber-50 text-amber-800 ring-amber-200",
  Technology: "bg-blue-50 text-blue-800 ring-blue-200",
  World: "bg-emerald-50 text-emerald-800 ring-emerald-200",
  Business: "bg-violet-50 text-violet-800 ring-violet-200",
  Culture: "bg-fuchsia-50 text-fuchsia-800 ring-fuchsia-200",
};

export const ArticleCard = (props: ArticleCardType) => {
  const {
    id,
    slug,
    title,
    description,
    category,
    image,
    imageAlt,
    author,
    date,
    content,
  } = props;

  const initials = author
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  const words = content.join(" ").split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  const categoryColor = categoryColors[category];

  return (
    <Link href={`news/${slug}`}>
      <div className="w-87.5 md:w-84.5 lg:w-94 h-125 md:h-128.75 lg:h-125 rounded-2xl border border-[#E7E5E4] overflow-hidden mb-10">
        <div className="w-full h-58.75 overflow-hidden relative flex items-center">
          <div
            className={`absolute ${categoryColor}  text-xs font-bold py-1.5 px-3 rounded-full top-4 left-4`}
          >
            {category}
          </div>
          <div className="absolute bottom-4 left-4 flex items-center gap-1.5">
            <Clock className="size-3 text-white" />
            <div className="text=xs text-white font-normal">
              {minutes} min read
            </div>
          </div>
          <img src={image} alt={imageAlt} className="w-full" />
        </div>
        <div className="w-full p-6 flex flex-col justify-between">
          <div className="h-40 md:h-43.75 lg:h-40  ">
            <div className="text-xl text-[#1C1917] font-bold">{title}</div>
            <div className="text-sm text-[#57534E] font-normal mt-3">
              {description}
            </div>
          </div>
          <div>
            <div className="w-full h-px bg-[#E2E2DA]"></div>
            <div className="flex w-81.5 h-10 gap-3 mt-4.25 items-center bottom-0">
              <div
                className={`size-10 ${categoryColor} rounded-full flex justify-center items-center text-xs font-bold`}
              >
                {initials}
              </div>
              <div className="w-50 md:w-47 lg:w-56.5 h-9.25 flex flex-col justify-between">
                <div className="text-xs text-[#292524] font-bold">
                  {author}
                </div>
                <div className="text-xs text-[#78716C] font-normal">
                  {date}
                </div>
              </div>
              <div className="size-9 bg-[#FFF7ED] rounded-full flex justify-center items-center">
                <ArrowUpRight className="size-5 text-[#C44724]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
