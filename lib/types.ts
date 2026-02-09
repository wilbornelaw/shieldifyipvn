export type Service = {
  id: string;
  title: string;
  slug: string;
  category: "Platform Enforcement" | "Marketplace Monitoring" | "Impersonation & Scam Takedowns" | "Evidence & Documentation";
  summary: string;
  whatItIs: string;
  whenToUse: string;
  deliverables: string[];
  timeline: string;
  icon: string;
};

export type Industry = {
  slug: string;
  name: string;
  threats: string[];
  recommendedServiceIds: string[];
};

export type CaseStudy = {
  id: string;
  title: string;
  tags: string[];
  challenge: string;
  approach: string;
  results: string[];
  resultLabel: string;
  image: string;
};

export type PostSection = {
  heading: string;
  content: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readingTime: string;
  tags: string[];
  coverImage: string;
  sections: PostSection[];
};

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
};

export type Faq = {
  question: string;
  answer: string;
};
