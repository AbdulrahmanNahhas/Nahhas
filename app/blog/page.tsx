import BlogCard from "@/components/Blog/Card";
import getPostMetadata from "@/functions/blog/getPostMetadata";
import React from "react";

const page = () => {
  const postMetaData = getPostMetadata();
  const postPreviews = postMetaData.map((post) => (
    <BlogCard
    key={post.slug}
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
