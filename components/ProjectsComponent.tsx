import React from "react"
import Image from "next/image"

import { siteConfig } from "@/config/site"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { buttonVariants } from "./ui/button"
import { cn } from "@/lib/utils"

const ProjectsComponent = () => {
  const getFirstID = () => {
    let id = ""

    siteConfig.projects.forEach((project) => {
      if (id == "" && project.show) {
        id = project.id
        return
      }
    })

    return id
  }

  return (
    <section
      id="projects"
      className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
    >
      <div className="max-w-2xl mx-auto text-center mb-3 lg:mb-5">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          Our Projects
        </h2>
        <p className="mt-1 mb-0 text-gray-600 dark:text-gray-400">
          Explore Our Work
        </p>
      </div>
      <Tabs defaultValue={getFirstID()} className="relative flex flex-col items-center">
          <span className="opacity-25">
          * Click on project name to view
          </span>
        <TabsList className="h-fit mb-3 border sm:w-fit justify-center flex flex-col sm:flex-row w-full" id="card">
          {siteConfig.projects.map((project) =>
            project.show ? (
              <TabsTrigger value={project.id} className="w-full sm:w-auto">{project.title} Project</TabsTrigger>
            ) : null
          )}
        </TabsList>
        {siteConfig.projects.map((project) => (
          <TabsContent
            value={project.id}
            className="rounded-xl overflow-hidden mt-0 border"
          >
          <Image
            id="card"
            className="mx-auto rounded-xl max-h-[600px] w-auto hidden dark:block"
            width={1500}
            height={1500}
            src={project.image}
            alt={`${project.id}-image`}
          />
          <Image
            id="card"
            className="mx-auto rounded-xl max-h-[600px] w-auto block dark:hidden"
            width={1500}
            height={1500}
            src={project.light_image}
            alt={`${project.id}-image`}
          />
          </TabsContent>
        ))}
        <TabsContent
          value="project2"
          className="rounded-xl overflow-hidden mt-0"
        >
          <Image
            id="card"
            className="mx-auto rounded-xl max-h-[600px] w-auto"
            width={1500}
            height={1500}
            src="/Projects/project2-image.jpg"
            alt="Project 2"
          />
        </TabsContent>
        <TabsContent
          value="project3"
          className="rounded-xl overflow-hidden mt-0"
        >
          <Image
            id="card"
            className="mx-auto rounded-xl max-h-[600px] w-auto"
            width={1500}
            height={1500}
            src="/Projects/project3-image.jpg"
            alt="Project 3"
          />
        </TabsContent>
      <Link href="/projects" className={cn("mt-3 mx-auto " + buttonVariants({ size: "lg" }))}>
        All Projects
      </Link>
      </Tabs>
    </section>
  )
}

export default ProjectsComponent
