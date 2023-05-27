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
          className="text-xl font-extrabold tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl hash_parent Section__Title dark:!top-2"
        >
          <span className="hash">#</span>
          {Timeline.title}
        </Link>
        <p className="mt-1 text-gray-600 dark:text-gray-400 mb-3 lg:mb-5">
          {Timeline.subTitle}
        </p>
      </div>
      <div className="container">
        <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
          {Timeline.steps.map((step, index) =>
            step.right ? (
              <div key={index} className="flex md:contents dark:text-black">
                <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-primary-focus pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-primary shadow"></div>
                </div>
                <div className="bg-primary col-start-6 col-end-10 p-4 my-4 mr-auto rounded-lg shadow-md relative">
                  <h3 className="font-semibold text-sm h-4 text-start opacity-50 mb-2">
                    {step.date}
                  </h3>
                  <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                  <p className="leading-tight text-justify ">{step.description}</p>
                </div>
              </div>
            ) : (
              <div
                key={index}
                className="flex flex-row-reverse md:contents dark:text-black"
              >
                <div className="bg-primary col-start-1 col-end-5 p-4 my-4 ml-auto rounded-lg shadow-md">
                  <h3 className="font-semibold text-sm h-4 text-start opacity-50 mb-2">
                    {step.date}
                  </h3>
                  <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                  <p className="leading-tight text-justify">{step.description}</p>
                </div>
                <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-primary-focus pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-primary shadow"></div>
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
