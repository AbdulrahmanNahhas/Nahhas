import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import { useParams } from "next/navigation";
import React from "react";

const getPostContent = (slug: string) => {
  const file = `posts/${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

function page(props: any) {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return (
    <div className="bg-background/10 backdrop-blur">
      <div className="prose lg:prose-xl mx-auto dark:prose-invert py-10 prose-img:rounded-lg">
        <h1>{post.data.title}</h1>
        <Markdown>{post.content}</Markdown>
      </div>
    </div>
  );
}

export default page;
