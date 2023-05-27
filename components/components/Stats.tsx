"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { siteConfig } from "@/config/site";
import { ChevronDown, Laugh, Share, Timer } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Stats = () => {
  const name = usePathname();
  // console.log(name);

  const Stats = [
    {
      number: "1",
      name: "Clients",
      Icon: Laugh,
    },
    {
      number: "2",
      name: "Years Of Learning",
      Icon: Timer,
    },
    {
      number: "3+",
      name: "Done Projects",
      Icon: Share,
    },
  ];

  return (
    <div id={siteConfig.Stats.id} className="text-center py-10">
      <div className="max-w-2xl mx-auto text-center mb-3 lg:mb-5">
        <Link
          href={`${name}#${siteConfig.Stats.id}`}
          className="text-xl font-extrabold tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl hash_parent Section__Title"
        >
          <span className="hash">#</span>
          {siteConfig.Stats.title}
        </Link>
        <p className="mt-1 text-gray-600 dark:text-gray-400 mb-3 lg:mb-5">
          {siteConfig.Stats.subtitle}
        </p>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-4">
        {Stats.map((stat, index) => {
          const Icon = stat.Icon;
          return (
            <div
              key={index}
              className="flex flex-row justify-center items-center bg-card dark:bg-primary/10 backdrop-blur p-2 px-4 gap-2 rounded-lg border relative overflow-hidden"
            >
              <div className="text-2xl font-bold ">{stat.number}</div>
              <div className="text-lg">{stat.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
