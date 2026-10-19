import { Metadata } from "next";
import { BUSINESS_INFO, BUSINESS_PHONE } from "./business";

export const DEFAULT_SEO: Metadata = {
  metadataBase: new URL(BUSINESS_INFO.domain),
  title: {
    default: "Plumber in Irvine, CA | Spectrum Plumbing Irvine",
    template: "%s | Spectrum Plumbing Irvine",
  },
  description:
    "Looking for plumbing help in Irvine, CA? Explore drain cleaning, water heater repair, leak detection, and local plumbing solutions. Call (949) 539-8503 to speak with a plumbing professional.",
  alternates: {
    canonical: BUSINESS_INFO.canonicalUrl,
  },
  keywords: [
    "plumber in Irvine CA",
    "Irvine plumbing services",
    "emergency plumbing Irvine",
    "drain cleaning Irvine CA",
    "water heater repair Irvine",
    "leak detection Irvine CA",
    "slab leak repair Irvine",
    "sewer line repair Irvine",
    "Orange County plumbing help",
  ],
  authors: [{ name: BUSINESS_INFO.name }],
  creator: BUSINESS_INFO.name,
  publisher: BUSINESS_INFO.name,
  formatDetection: {
    telephone: true,
    address: true,
    email: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BUSINESS_INFO.canonicalUrl,
    siteName: BUSINESS_INFO.name,
    title: "Plumber in Irvine, CA | Spectrum Plumbing Irvine",
    description:
      "Connect with local plumbing professionals in Irvine, CA. Fast phone assistance for water heaters, drain cleaning, leak detection, and repairs. Call (949) 539-8503.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Spectrum Plumbing Irvine - Local Plumbing Assistance in Irvine, CA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plumber in Irvine, CA | Spectrum Plumbing Irvine",
    description:
      "Need plumbing help in Irvine, CA? Call (949) 539-8503 to discuss your plumbing problem with knowledgeable local specialists.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "-LsnZGc0g7U-jBK_75ePQTa3pRtGD93NLXbH3N9xBtY",
  },
};
