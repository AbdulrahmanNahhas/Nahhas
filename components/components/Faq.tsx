"use client"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { siteConfig } from "@/config/site";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";


const Faq = () => {
  const name = usePathname();
  console.log(name);
  
  return (
    <div id={siteConfig.FAQs.id} className="text-center py-10">
      <div className="max-w-2xl mx-auto text-center mb-3 lg:mb-5">
        <Link
          href={`${name}#${siteConfig.FAQs.id}`}
          className="text-xl font-extrabold tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl hash_parent Section__Title"
        >
          <span className="hash">#</span>{siteConfig.FAQs.title}
        </Link>
        <p className="mt-1 text-gray-600 dark:text-gray-400 mb-3 lg:mb-5">
          {siteConfig.FAQs.subtitle}
        </p>
      </div>
      <div>
        {siteConfig.FAQs.questions.map((question, index) => (
          <>
            {index != 0 ?
            <hr className="max-w-[500px] mx-auto" />
            : null}
            <Question question={question.question} key={index} answer={question.answer} />
          </>
        ))}
      </div>
    </div>
  );
};

const Question = ({ question, answer }: any) => (
  <Collapsible className="max-w-[500px] mx-auto onOpenBeCard my-3">
    <CollapsibleTrigger className="hover:bg-accent duration-200 py-2 px-5 rounded-lg flex items-center justify-between w-full">
      <h1 className="md:text-lg lg:text-xl">{question}</h1>
      <ChevronDown />
    </CollapsibleTrigger>
    <CollapsibleContent>{answer}</CollapsibleContent>
  </Collapsible>
);

export default Faq;
