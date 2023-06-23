import React from "react"
import Image from "next/image"

import { siteConfig } from "@/config/site"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
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
      
    </section>
  )
}

export default ProjectsComponent
