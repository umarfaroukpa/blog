export interface BlogPost {
  id: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
  slug: string;
  tags: string[];
  coverImage?: string;
  readingTime?: number;
}

export interface Author {
  id: string;
  name: string;
  bio: string;
  avatar?: string;
  socialLinks?: {
    twitter?: string;
    github?: string;
    linkedin?: string;
    website?: string;
  };
}