import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { DEFAULT_SEO } from "@/config/seo";
import { generateHomepageStructuredData } from "@/lib/structuredData";

const outfitFont = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["500", "600", "700", "800", "900"],
});

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = DEFAULT_SEO;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = generateHomepageStructuredData();

  return (
    <html
      lang="en"
      className={`${outfitFont.variable} ${jakartaSans.variable} scroll-smooth antialiased`}
    >
      <head>
        <meta name="theme-color" content="#051324" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {structuredData.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-[#F8FAFC] text-[#0F172A] selection:bg-[#168DFF] selection:text-white pb-16 md:pb-0">
        {children}
      </body>
    </html>
  );
}
