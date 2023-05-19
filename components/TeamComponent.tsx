import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

import { teamConfig } from "@/config/team"

import { buttonVariants } from "./ui/button"
import { cn } from "@/lib/utils"
import { Icons } from "./icons"

// import Me from "/Profile_Pictures/Me.png"

function TeamComponent() {
  return (
    <>
      {/* Team */}
      <section
        id="team"
        className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
      >
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-6 lg:mb-8">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Our Team
          </h2>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Creative people
          </p>
        </div>
        {/* End Title */}
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamConfig.map((profile, index) => (
            <div
              id="card"
              className="flex flex-col rounded-xl p-4 md:p-6 border rounded-lg"
            >
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
              {/* Social Brands */}
              <div className="mt-3 space-x-1">
                {profile.links.github ? (
                  <Link
                    target="_blank"
                    rel="noreferrer"
                    href={`https://${profile.links.github}`}
                    className={cn("opacity-50",buttonVariants({
                      variant: "outline",
                      size: "sm",
                    }))}
                  >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  </Link>
                ) : (
                  ""
                )}
                {profile.links.twitter ? (
                  <Link
                    target="_blank"
                    rel="noreferrer"
                    href={`https://${profile.links.twitter}`}
                    className={cn("opacity-50",buttonVariants({
                      variant: "outline",
                      size: "sm",
                    }))}
                  >
                  <Twitter className="w-4 h-4 fill-current" />
                  </Link>
                ) : (
                  ""
                )}
                {profile.links.linkedIn ? (
                  <Link
                    target="_blank"
                    rel="noreferrer"
                    href={`https://${profile.links.linkedIn}`}
                    className={cn("opacity-50",buttonVariants({
                      variant: "outline",
                      size: "sm",
                    }))}
                  >
                    <Linkedin className="h-4 w-4 fill-current" />
                  </Link>
                ) : (
                  ""
                )}
              </div>
              {/* End Social Brands */}
            </div>
          ))}
          {/* End Col */}
          <a
            className="col-span-full lg:col-span-1 group flex flex-col justify-center text-center rounded-xl p-4 md:p-6 border border-dashed border-gray-200 hover:shadow-sm dark:border-gray-700"
            href="#"
          >
            <h3 className="text-lg text-gray-800 dark:text-gray-200">
              No One Else :D
            </h3>
            {/* <div>
              <span className="inline-flex items-center gap-x-2 text-blue-600 group-hover:text-blue-700 dark:text-blue-500 dark:group-hover:text-blue-400">
                See all opening positions
                <svg
                  className="w-2.5 h-2.5"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </div> */}
          </a>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </section>
      {/* End Team */}
    </>
  )
}

export default TeamComponent
