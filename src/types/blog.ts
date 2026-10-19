export interface BlogAuthor {
  name: string;
  role: string;
  bio: string;
  profileUrl?: string;
  avatar?: string;
}

export interface BlogReviewer {
  name: string;
  credentials: string;
  reviewedAt: string;
  note?: string;
}

export interface BlogReference {
  title: string;
  publisher: string;
  url: string;
  accessDate?: string;
  note?: string;
}

export interface BlogFAQ {
  id: string;
  question: string;
  answer: string;
}

export interface BlogCalloutData {
  type: "important" | "safety" | "insight" | "tip" | "when-to-call";
  title: string;
  content: string;
  actionText?: string;
  actionPhone?: boolean;
}

export interface BlogTableData {
  caption?: string;
  headers: string[];
  rows: string[][];
  footnote?: string;
}

export interface BlogImageData {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

export interface BlogSubsection {
  id: string;
  title: string; // H3
  badge?: string;
  paragraphs: string[];
  listItems?: string[];
  listType?: "bullet" | "ordered";
  callout?: BlogCalloutData;
  image?: BlogImageData;
}

export interface ArticleSection {
  id: string; // H2 anchor ID
  title: string; // H2 text
  badge?: string;
  paragraphs: string[];
  subsections?: BlogSubsection[];
  callout?: BlogCalloutData;
  table?: BlogTableData;
  image?: BlogImageData;
  inlineCTA?: {
    placement: string;
    heading: string;
    description: string;
    buttonText?: string;
  };
  localIrvineSection?: {
    heading: string;
    description: string;
    villages: string[];
    serviceLinks: Array<{
      title: string;
      href: string;
      description: string;
    }>;
  };
}

export interface BlogPostMetadata {
  slug: string;
  title: string;
  description: string;
  category: string;
  primaryKeyword: string;
  secondaryKeywords?: string[];
  publishedAt: string;
  updatedAt?: string;
  author: BlogAuthor;
  reviewer?: BlogReviewer;
  featuredImage: {
    src: string;
    alt: string;
    caption?: string;
    width?: number;
    height?: number;
  };
  readingTime: number; // in minutes
  quickAnswer: {
    heading?: string;
    text: string;
    highlight?: string;
  };
  relatedServiceSlugs: string[];
  relatedArticleSlugs: string[];
  references?: BlogReference[];
  faqs?: BlogFAQ[];
  seo: {
    title: string;
    description: string;
    canonical: string;
    ogImage?: string;
    keywords?: string[];
  };
  published: boolean;
}

export interface BlogPost extends BlogPostMetadata {
  sections: ArticleSection[];
  conclusion: {
    heading: string;
    paragraphs: string[];
    keyTakeaway: string;
  };
}
