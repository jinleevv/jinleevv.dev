import { useNavigate } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { BlogPost, getAllPosts } from "@/lib/posts";

export default function Blog() {
  const navigate = useNavigate();

  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    getAllPosts().then(setPosts);
  }, []);

  return (
    <section className="h-screen w-screen font-jost">
      <div className="flex w-full py-[72px] px-44">
        <div
          className="flex w-full justify-start cursor-pointer"
          onClick={() => navigate("/")}
        >
          <Label className="cursor-pointer">Jin Won Lee</Label>
        </div>
        <div className="flex w-full justify-end gap-2">
          <Button
            variant="ghost"
            className="bg-white"
            onClick={() => navigate("/projects")}
          >
            Projects
          </Button>
        </div>
      </div>
      <div className="flex flex-col w-full justify-center items-center space-y-3 px-5">
        {posts.map((post) => (
          <div
            key={post.slug}
            onClick={() => navigate(`/blog/${post.slug}`)}
            className="w-3/4 p-6 border border-gray-200 rounded-2xl shadow-sm cursor-pointer bg-zinc-50"
          >
            <div className="text-xs text-gray-400">{post.date}</div>
            <h2 className="text-xl font-semibold mt-1 text-gray-800">
              {post.title}
            </h2>
            <p className="text-sm text-gray-600 mt-1">{post.subtitle}</p>
            <p className="text-sm text-gray-500 mt-2 line-clamp-2">
              {post.content.slice(0, 150)}...
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
