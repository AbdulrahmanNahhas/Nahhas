import BlogCard from "@/components/Blog/Card";
import getPostMetadata from "@/functions/blog/getPostMetadata";
import Link from "next/link";
import React from "react";

const page = () => {
  const postMetaData = getPostMetadata();
  const postPreviews = postMetaData.map((post) => {
    let originalDate = new Date(post.date);
    let monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let year = originalDate.getFullYear();
    let monthIndex = originalDate.getMonth();
    let day = originalDate.getDate();

    let formattedDate = monthNames[monthIndex] + " " + day + ", " + year;

    return (
      <article className="relative group">
        <div className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl group-hover:bg-slate-50/70 dark:group-hover:bg-slate-800/50" />
        <svg
          viewBox="0 0 9 9"
          className="hidden absolute right-full mr-6 top-2 text-slate-200 dark:text-slate-600 md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block"
        >
          <circle
            cx="4.5"
            cy="4.5"
            r="4.5"
            stroke="currentColor"
            className="fill-white dark:fill-slate-900"
            strokeWidth={2}
          />
        </svg>
        <div className="relative">
          <h3 className="text-base font-semibold tracking-tight text-slate-900 dark:text-slate-200 pt-8 lg:pt-0">
            {post.title}
          </h3>
          <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2">
            <p>{post.subtitle}</p>
          </div>
          <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
            <dt className="sr-only">Date</dt>
            <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
              <time dateTime={originalDate.toISOString()}>{formattedDate}</time>
            </dd>
          </dl>
        </div>
        <Link          className="flex items-center text-sm text-sky-500 font-medium"
          href={`/post/${post.slug}`}
        >
          <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl sm:hover:border" />
          <span className="relative">
            Read more
            <span className="sr-only">{post.title}</span>
          </span>
          <svg
            className="relative mt-px overflow-visible ml-2.5 text-sky-300 dark:text-sky-700"
            width={3}
            height={6}
            viewBox="0 0 3 6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M0 0L3 3L0 6" />
          </svg>
        </Link>
      </article>
    );
  });

  return (
    // <div className="flex flex-wrap container gap-10 justify-center items-center my-10">
    //   {postPreviews}
    // </div>
    <main className="px-4 mb-28 sm:px-6 md:px-8 xl:px-12 max-w-[52rem] mx-auto lg:max-w-6xl py-14 before:w-screen before:h-screen before:absolute before:bg-background/75 before:-top-16 before:left-0">
      <div className="relative sm:pb-12 sm:ml-[calc(2rem+1px)] md:ml-[calc(3.5rem+1px)] lg:ml-[max(calc(14.5rem+1px),calc(100%-48rem))]">
        <div className="hidden absolute top-3 bottom-0 right-full mr-7 md:mr-[3.25rem] w-px bg-slate-200 dark:bg-slate-800 sm:block" />
        <div className="space-y-16">{postPreviews}</div>
      </div>
    </main>
  );
};

export default page;
