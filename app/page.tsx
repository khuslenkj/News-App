import { ArticleCard } from "@/components/ArticleCard";
import { Sections } from "@/components/Sections";
import data from "@/data/news.json";
import { Metadata } from "next";

const firstArticle = data[0];

export const generateMetaData: Metadata = {
  openGraph: {
    type: "website",
    siteName: "The Daily",
    title: "The Daily — A fresh perspective",
    description:
      "A little curiosity goes a long way. Explore 20 sample stories about design, technology, culture, and the world around us.",
    images: firstArticle
      ? [{ url: firstArticle.image, alt: firstArticle.imageAlt }]
      : [],
  },
};

const Home = () => {
  return (
    <div className="w-[100vw]">
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
            <Sections content="All stories" />
            <Sections content="World" />
            <Sections content="Technology" />
            <Sections content="Culture" />
            <Sections content="Travel" />
            <Sections content="Design" />
            <Sections content="Science" />
            <Sections content="Business" />
          </div>
          <div className="w-[100%] h-[1px] bg-[#E2E2DA] mt-[12px]"></div>
        </div>
        {/* main */}
        <div className="h-[57px] w-[100%] flex items-center text-[12px] text-[#65675F] font-[400]">
          20 stories to explore
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data.map((article) => (
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
          ))}
        </div>
        {/* <div className="flex w-[300px] h-[133px] gap-[43px] items-center">
          <div>
            <div className="text-[30px] text-[#22241F] font-[700] ">the daily ▧</div>
            <div className="text-[12px] text-[#65675F] font-[400] ">A fresh perspective. Every day.</div>
          </div>
          <div className="text-[12px] text-[#22241F] font-[400] ">Back to top ↑</div>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
