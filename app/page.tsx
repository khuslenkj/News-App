"use client"
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
  return <Sections/>
};

export default Home;
