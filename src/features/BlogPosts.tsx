import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BlogPost, getAllPosts } from "@/lib/posts";
import ReactMarkdown from "react-markdown";
import { Label } from "@/components/ui/label";

export default function BlogPosts() {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    getAllPosts().then((posts) =>
      setPost(posts.find((p) => p.slug === slug) || null)
    );
  }, [slug]);

  if (!post) return <div className="p-10">Loading...</div>;

  return (
    <div className="prose lg:prose-xl max-w-3xl mx-auto py-20 px-4 font-jost">
      <Label className="text-xs text-muted-foreground">{post.date}</Label>{" "}
      <br />
      <Label className="text-2xl font-bold">{post.title}</Label> <br />
      <Label className="text-sm text-muted-foreground">{post.subtitle}</Label>
      <div className="py-3">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </div>
  );
}
