import BlogCard from "@/components/Blog/Card";
import { PostMetadata } from "@/types/posts";
import fs from "fs";
import matter from "gray-matter";
import React from "react";

const getPostMetadata = (): PostMetadata[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      tags: matterResult.data.tags,
      slug: fileName.replace(".md", ""),
    };
  });

  return posts;
};

const page = () => {
  const postMetaData = getPostMetadata();
  const postPreviews = postMetaData.map((post) => (
    <BlogCard
      title={post.title}
      date={post.date}
      subtitle={post.subtitle}
      tags={post.tags}
      slug={post.slug}
    />
  ));

  return (
    <div className="flex flex-wrap container gap-10 justify-center items-center my-10">
      {postPreviews}
    </div>
  );
};

export default page;
