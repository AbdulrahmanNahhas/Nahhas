import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import ClientsComponent from "@/components/ClientsComponent"
import TeamComponent from "@/components/TeamComponent"
import ServicesComponent from "@/components/ServicesComponent"
import ProjectsComponent from "@/components/ProjectsComponent"

export default function IndexPage() {
  return (
    <section className="px-4 sm:container">
      <div className="flex w-full flex-col items-center gap-2 sm:gap-5 py-10 md:py-20">
        <h1 className="text-3xl font-extrabold tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl text-center">
          {siteConfig.Home.title}
          {siteConfig.Home.subTitle ? (
            <>
              <br className="hidden sm:inline" />
              {siteConfig.Home.subTitle}
            </>
          ) : (
            ""
          )}
        </h1>
        <p className="max-w-[700px] text-center text-[16px] sm:text-lg text-muted-foreground md:text-xl">
          {siteConfig.Home.description}
        </p>
        <div className="flex pt-3 mt:pt-0 gap-4 justify-center items-center">
          <Link
            href={siteConfig.links.projects}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ size: "lg" })}
          >
            Projects
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            GitHub
          </Link>
        </div>
        <p className="text-sm text-muted-foreground text-center hidden md:block">
          Press{" "}
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">CTRL</span> + H
          </kbd>{" "}
          or{" "}
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>+ H
          </kbd>{" "}
          To open commands modal
        </p>
      </div>
      {/* <ClientsComponent /> */}
      <ServicesComponent />
      <ProjectsComponent />
      <TeamComponent />
    </section>
  )
}
