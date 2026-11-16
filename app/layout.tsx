import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { default: "The Daily — A fresh perspective", template: "%s | The Daily" },
  description: "A little curiosity goes a long way. Explore 20 sample stories about design, technology, culture, and the world around us.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full m- flex flex-col">
        {children}
        <div className="w-87.5 md:w-176 lg:w-296 m-auto"> 
          <div className="flex w-75 h-33.25 gap-10.75 items-center">
            <div>
              <div className="text-3xl text-[#22241F] font-bold ">
                the daily ▧
              </div>
              <div className="text-xs text-[#65675F] font-normal ">
                A fresh perspective. Every day.
              </div>
            </div>
            <div className="text-xs text-[#22241F] font-normal ">
              Back to top ↑
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
