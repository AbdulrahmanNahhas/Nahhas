import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PostMetadata } from "@/types/posts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ slug, date, title, subtitle, tags }: PostMetadata) => {
  const profile = {
    image: "/Profile_Pictures/Me.png",
    name: "Abdulrahman Nahhas",
    rank: "FOUNDER / CEO",
    description: `"Nothing is difficult, but there are things that take time to become easy."`,
    links: {
      github: "github.com/AbdulrahmanNahhas",
      twitter: "twitter.com/Nahhas909",
      linkedIn: "linkedin.com/in/abdurahman-nahhas-603277239",
    },
  };

  return (
    <Card className="w-[350px] bg-card/40 backdrop-blur shadow-none">
      <Link href={`/post/${slug}`}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          {/* <CardDescription>Card Description</CardDescription> */}
        </CardHeader>
        <CardContent className="text-start !pb-3">
          <p>{subtitle}</p>
          <div className="tags flex gap-1 overflow-scroll mt-4">
            {tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="rounded-md">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Link>
      <CardFooter className="!pt-0">
        <div className="flex items-center space-x-4">
          <Popover>
            <PopoverTrigger asChild>
              <Image
                width={500}
                height={500}
                alt="logo"
                src="/logo.png"
                className="h-12 w-12 rounded-full border cursor-pointer"
              />
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div id="card" className="flex flex-col">
                <div className="flex items-center gap-x-4 h-20">
                  <div
                    id="image_border"
                    className="w-20 overflow-visible border-2 rounded-full h-20"
                  >
                    <Image
                      width={500}
                      height={500}
                      className="rounded-full relative -top-[20px] object-cover !w-24 !h-24"
                      src={profile.image}
                      alt="Image Description"
                    />
                  </div>
                  <div className="grow">
                    <h3 className="font-medium text-gray-800 dark:text-gray-200">
                      {profile.name}
                    </h3>
                    <p className="text-xs uppercase text-gray-500">
                      {profile.rank}
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-gray-500">{profile.description}</p>
              </div>
            </PopoverContent>
          </Popover>
          <div className="space-y-2">
            <p className="h-4 w-[250px]">Abdulrahman Nahhas</p>
            <p className="h-4 w-[200px] opacity-50">{date}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
