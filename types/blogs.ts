import Author from "./author";

type BlogType = {
  slug: string;
  title: string;
  date: Date | string;
  coverImage: string;
  author?: Author;
  excerpt?: string;
  ogImage?: {
    url: string;
  };
  content: string;
  keyword?: string[];
  tags?: string[];
};

export default BlogType;
