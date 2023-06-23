"use client";

import { Timeline } from "@/config/Timeline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const TimeLine = () => {
  const name = usePathname();
  console.log(name);

  return (
    <div id={Timeline.id} className="text-center py-10">
      <div className="max-w-2xl mx-auto text-center mb-3 lg:mb-5">
        <Link
          href={`${name}#${Timeline.id}`}
          className="text-xl font-extrabold tracking-tighter sm:text-2xl lg:text-3xl xl:text-4xl hash_parent Section__Title dark:!top-2"
        >
          <span className="hash">#</span>
          {Timeline.title}
        </Link>
        <p className="mt-1 text-gray-600 dark:text-gray-400 mb-3 lg:mb-5">
          {Timeline.subTitle}
        </p>
      </div>
      <div className="container">
        <div className="flex flex-col mx-auto p-2 text-blue-50 max-w-[950px]">
          {Timeline.steps.map((step, index) =>
            step.right ? (
              <div
                key={index}
                className="flex flex-col-reverse   justify-center items-center"
              >
                <div className="bg-card/75 backdrop-blur dark:border text-foreground col-start-6 col-end-10  mr-auto rounded-lg  p-6 relative max-w-[500px]">
                  <h3 className="font-semibold text-sm h-4 text-start opacity-50 mb-2">
                    {step.date}
                  </h3>
                  <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                  <p className="leading-tight text-justify opacity-60">
                    {step.description}
                  </p>
                </div>
                {index != 0 && (
                  <div className="col-start-5 col-end-6  relative ">
                    <div className=" w-6 h-14 flex items-center justify-center">
                      <div className="h-full w-2 bg-card/75 backdrop-blur pointer-events-none"></div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div
                key={index}
                className="flex flex-col -reverse  justify-center items-center"
              >
                <div className="col-start-5 col-end-6   relative">
                  <div className=" w-6 h-14 flex items-center justify-center">
                    <div className="h-full w-2 bg-card/75 backdrop-blur  pointer-events-none"></div>
                  </div>
                </div>
                <div className="bg-card/75 backdrop-blur dark:border text-foreground col-start-1 col-end-5 p-6  ml-auto rounded-lg  max-w-[500px]">
                  <h3 className="font-semibold text-sm h-4 text-start opacity-50 mb-2">
                    {step.date}
                  </h3>
                  <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                  <p className="leading-tight text-justify opacity-60">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
