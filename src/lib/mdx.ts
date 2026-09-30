import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const WORK_DIR = path.join(process.cwd(), "src/content/work");
const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export type WorkMeta = {
  slug: string;
  title: string;
  client: string;
  summary: string;
  year: string;
  tags: string[];
  cover?: string;
};

export type BlogMeta = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  author: string;
  readingTime: string;
};

function readDir(dir: string) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
}

export function getAllWork(): WorkMeta[] {
  return readDir(WORK_DIR)
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const { data } = matter(fs.readFileSync(path.join(WORK_DIR, file), "utf8"));
      return { slug, ...(data as Omit<WorkMeta, "slug">) };
    })
    .sort((a, b) => (a.year < b.year ? 1 : -1));
}

export function getWorkBySlug(slug: string) {
  const full = path.join(WORK_DIR, `${slug}.mdx`);
  if (!fs.existsSync(full)) return null;
  const { data, content } = matter(fs.readFileSync(full, "utf8"));
  return { slug, meta: data as Omit<WorkMeta, "slug">, content };
}

export function getAllPosts(): BlogMeta[] {
  return readDir(BLOG_DIR)
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const { data, content } = matter(fs.readFileSync(path.join(BLOG_DIR, file), "utf8"));
      return {
        slug,
        readingTime: readingTime(content).text,
        ...(data as Omit<BlogMeta, "slug" | "readingTime">),
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string) {
  const full = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(full)) return null;
  const { data, content } = matter(fs.readFileSync(full, "utf8"));
  return {
    slug,
    meta: { readingTime: readingTime(content).text, ...(data as any) },
    content,
  };
}