import fm from "front-matter";

interface FrontMatter {
  title: string;
  subtitle: string;
  date: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  content: string;
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const markdownFiles = import.meta.glob("../posts/*.md", {
    query: "?raw",
    import: "default",
  });

  const posts: BlogPost[] = [];

  for (const path in markdownFiles) {
    const slug = path.split("/").pop()?.replace(".md", "") || "";
    const raw = await markdownFiles[path]();
    const { attributes, body } = fm<FrontMatter>(raw as string);

    posts.push({
      slug,
      title: attributes.title,
      subtitle: attributes.subtitle,
      date: attributes.date,
      content: body,
    });
  }

  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}
