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
        <div className="w-[350px] md:w-[704px] lg:w-[1184px] m-auto"> 
          <div className="flex w-[300px] h-[133px] gap-[43px] items-center">
            <div>
              <div className="text-[30px] text-[#22241F] font-[700] ">
                the daily ▧
              </div>
              <div className="text-[12px] text-[#65675F] font-[400] ">
                A fresh perspective. Every day.
              </div>
            </div>
            <div className="text-[12px] text-[#22241F] font-[400] ">
              Back to top ↑
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
