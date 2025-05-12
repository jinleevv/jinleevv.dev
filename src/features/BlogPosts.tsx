import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BlogPost, getAllPosts } from "@/lib/posts";
import ReactMarkdown from "react-markdown";

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
    <div className="prose lg:prose-xl max-w-3xl mx-auto py-20 px-4">
      <h1>{post.title}</h1>
      <p className="text-gray-400 text-sm">{post.date}</p>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>
  );
}
