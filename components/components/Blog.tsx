import { buttonVariants } from "../ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { PostMetadata } from "@/types/posts";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
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

const Blog = () => {
  const postMetaData = getPostMetadata();
  const postPreviews = postMetaData.map((post, index) => {
    if (index >= 2) {
      return (
        <Card className="w-[350px]">
          <CardHeader className="p-5 pb-1">
            <CardTitle className="!mt-3 lg:text-xl">{post.title}</CardTitle>
            {/* <CardDescription>Card Description</CardDescription> */}
          </CardHeader>
          <CardContent className="text-start !pb-3">
            <p>{post.subtitle}</p>
            <div className="tags flex gap-1 overflow-scroll pt-2">
              {post.tags.map((tag, i) => (
                <Badge variant="outline" className="rounded-md" key={i + index}>
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="!pt-0">
            <Link
              href={`/post/${post.slug}`}
              className={cn("text-center w-full", buttonVariants())}
            >
              Read Now
            </Link>
          </CardFooter>
        </Card>
      );
    }
  });

  return (
    <div id="blog" className="text-center py-10">
      <div className="max-w-2xl mx-auto text-center mb-3 lg:mb-5">
        <Link href="#blog" className="text-2xl font-bold md:text-4xl md:leading-tight hash_parent Section__Title">
        <span className="hash">#</span>Our Blog
        </Link>
        <p className="mt-1 mb-0 text-gray-600 dark:text-gray-400">
          What’s new?
        </p>
      </div>
      <div className="flex flex-wrap w-full justify-center gap-6">
        {postMetaData.map((post, index) => {
          if (index <= 2) {
            return (
              <Card className="w-[350px] flex flex-col">
                <CardHeader className="p-5 pb-1">
                  <CardTitle className="!mt-3 lg:text-xl">
                    {post.title}
                  </CardTitle>
                  {/* <CardDescription>Card Description</CardDescription> */}
                </CardHeader>
                <CardContent className="text-start mt-3 h-full flex flex-col pb-3">
                  <p className="mb-3">{post.subtitle}</p>
                  <div className="tags flex gap-1 overflow-scroll mt-auto">
                    {post.tags.map((tag, i) => (
                      <Badge
                        variant="outline"
                        className="rounded-md"
                        key={i + index}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="!pt-0 mt-auto">
                  <Link
                    href={`/post/${post.slug}`}
                    className={cn("text-center w-full", buttonVariants())}
                  >
                    Read Now
                  </Link>
                </CardFooter>
              </Card>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Blog;
