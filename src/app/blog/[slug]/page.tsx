import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllBlogPostSlugs, getBlogPostBySlug } from "@/data/blog";
import { BlogPostTemplate } from "@/components/blog/BlogPostTemplate";
import { BUSINESS_INFO } from "@/config/business";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogPostSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | Spectrum Plumbing Irvine",
    };
  }

  const pageUrl = `${BUSINESS_INFO.domain}/blog/${post.slug}/`;
  const imageUrl = post.featuredImage.src.startsWith("http")
    ? post.featuredImage.src
    : `${BUSINESS_INFO.domain}${post.featuredImage.src}`;

  return {
    title: post.seo.title,
    description: post.seo.description,
    alternates: {
      canonical: pageUrl,
    },
    keywords: post.seo.keywords,
    openGraph: {
      title: post.seo.title,
      description: post.seo.description,
      url: pageUrl,
      siteName: BUSINESS_INFO.name,
      locale: "en_US",
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      section: post.category,
      images: [
        {
          url: imageUrl,
          width: post.featuredImage.width || 1200,
          height: post.featuredImage.height || 675,
          alt: post.featuredImage.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seo.title,
      description: post.seo.description,
      images: [imageUrl],
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

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <BlogPostTemplate post={post} />;
}
