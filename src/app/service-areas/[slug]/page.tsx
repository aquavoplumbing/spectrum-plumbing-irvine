import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllLocationSlugs, getLocationBySlug } from "@/data/locations";
import { LocationPageTemplate } from "@/components/locations/LocationPageTemplate";
import { BUSINESS_INFO } from "@/config/business";

interface LocationPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    return {
      title: "Service Area Not Found | Spectrum Plumbing Irvine",
    };
  }

  const pageUrl = `${BUSINESS_INFO.domain}/service-areas/${location.slug}/`;

  return {
    title: location.seo.title,
    description: location.seo.description,
    alternates: {
      canonical: pageUrl,
    },
    keywords: location.seo.secondaryKeywords,
    openGraph: {
      title: location.seo.title,
      description: location.seo.description,
      url: pageUrl,
      siteName: BUSINESS_INFO.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: location.seo.ogImage || location.hero.image,
          width: 1200,
          height: 630,
          alt: location.hero.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: location.seo.title,
      description: location.seo.description,
      images: [location.seo.ogImage || location.hero.image],
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
  };
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  return <LocationPageTemplate location={location} />;
}
