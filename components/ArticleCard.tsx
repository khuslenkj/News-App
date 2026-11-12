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
      <div className="w-[350px] md:w-[338px] lg:w-[376px] h-[500px] md:h-[515px] lg:h-[500px] rounded-[16px] border border-[#E7E5E4] overflow-hidden mb-[40px]">
        <div className="w-[100%] h-[235px] overflow-hidden relative flex items-center">
          <div
            className={`absolute ${categoryColor}  text-[10px] font-[700] p-[6px_12px] rounded-[100px] top-[16px] left-[16px]`}
          >
            {category}
          </div>
          <div className="absolute bottom-[16px] left-[16px] flex items-center gap-[6px]">
            <Clock className="size-3 text-white" />
            <div className="text=[12px] text-white font-[400] ">
              {minutes} min read
            </div>
          </div>
          <img src={image} alt={imageAlt} className="w-full" />
        </div>
        <div className="w-[100%] p-[24px] flex flex-col justify-between">
          <div className="h-[160px] md:h-[175px] lg:h-[160px]  ">
            <div className="text-[20px] text-[#1C1917] font-[700]">{title}</div>
            <div className="text-[14px] text-[#57534E] font-[400] mt-[12px]">
              {description}
            </div>
          </div>
          <div>
            <div className="w-full h-[1px] bg-[#E2E2DA]"></div>
            <div className="flex w-[326px] h-[40px] gap-[12px] mt-[17px] items-center bottom-0">
              <div
                className={`size-[40px] ${categoryColor} rounded-[100px] flex justify-center items-center text-[12px] font-[700]`}
              >
                {initials}
              </div>
              <div className="w-[200px] md:w-[188px] lg:w-[226px] h-[37px] flex flex-col justify-between">
                <div className="text-[12px] text-[#292524] font-[700]">
                  {author}
                </div>
                <div className="text-[11px] text-[#78716C] font-[400]">
                  {date}
                </div>
              </div>
              <div className="size-[36px] bg-[#FFF7ED] rounded-[100px] flex justify-center items-center">
                <ArrowUpRight className="size-5 text-[#C44724]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
