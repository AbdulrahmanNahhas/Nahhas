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
          {/* <!-- Right --> */}
          <div className="flex md:contents dark:text-black">
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-primary-focus pointer-events-none border-l border-r"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-primary shadow"></div>
            </div>
            <div className="bg-primary col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
              <h3 className="font-semibold text-sm h-4 text-start">2021</h3>
              <h3 className="font-semibold text-lg mb-1">Starting</h3>
              <p className="leading-tight ">
               In 2021, I started Learning programming it was my first time i see a code. I learned python from youtube course, after that i wanted to learn more about programming and be a real programmer.
              </p>
            </div>
          </div>

          {/* <!-- Left --> */}
          <div className="flex flex-row-reverse md:contents dark:text-black">
            <div className="bg-primary col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
              <h3 className="font-semibold text-sm h-4 text-start">2021/9/10</h3>
              <h3 className="font-semibold text-lg mb-1">Web development</h3>
              <p className="leading-tight">
                I finished the python course really slowley, in September 10, 2021 i started web development course in udemy for colt steele (<Link className="underline" href="https://www.udemy.com/course/the-web-developer-bootcamp/" target="_blank">Link</Link>), but I wasn't only learning from course my english language was getting better and i started search for a lot of things, i started learning reactjs and mern Stack and bootstrap.
              </p>
            </div>
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-primary-focus pointer-events-none border-l border-r"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-primary shadow"></div>
            </div>
          </div>
          {/* <!-- Left --> */}
          <div className="flex flex-row-reverse md:contents dark:text-black">
            <div className="bg-primary col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
              <h3 className="font-semibold text-sm h-4 text-start">Start Of 2022</h3>
              <h3 className="font-semibold text-lg mb-1">Leveling up in web development</h3>
              <p className="leading-tight ">
                Do you know what? When you start something new it will be hard, but after that you will see everything easy. know i started learning alot of libraries like tailwindcss and alot more and frameworks and now I'm working with Nextjs (This website made with Nextjs).
              </p>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-primary-focus pointer-events-none border-l border-r"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-primary shadow"></div>
            </div>
          </div>

          {/* <!-- Right --> */}
          <div className="flex flex-row-reverse md:contents dark:text-black">
            <div className="bg-primary col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
              <h3 className="font-semibold text-sm h-4 text-start">2022-2023</h3>
              <h3 className="font-semibold text-lg mb-1">C++ and Arduino</h3>
              <p className="leading-tight ">
                The first programming language will be hard, but after that need some hours to finish a programming language, i learned C++ and C in course In youtube (Arabic Course) in 90 Hours, And i learned arduino and i started learning electronics
              </p>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-primary-focus pointer-events-none border-l border-r"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-primary shadow"></div>
            </div>
          </div>
          {/* <!-- Right --> */}
          <div className="flex md:contents dark:text-black">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-primary-focus pointer-events-none border-l border-r"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-primary shadow"></div>
            </div>
            <div className="bg-primary col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
              <h3 className="font-semibold text-sm h-4 text-start">2023/3/23</h3>
              <h3 className="font-semibold text-lg mb-1">Getting Started With electronics</h3>
              <p className="leading-tight ">
                Every thing in programming you should know electrnoics and if you only working with computers you need to know what are you doing and what you can do.
                So i started Learning a Proffesinal Course for electronics (Intro) 50 Hours, It was really hard but like i say before nothing is hard, only need time to become easy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
