"use client";

import { SearchBox } from "./SearchBox";
import { Icons } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import * as React from "react";

export function SiteHeader() {
  const { scrollYProgress, scrollY } = useScroll();
  const [scroll, setScroll] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // console.log("Page scroll: ", latest);
    setScroll(latest);
  });

  return (
    <header
      className={`sticky top-0 duration-200 z-40 w-full ${
        scroll > 25 ? "navbar-active" : ""
      } backdrop-blur text-lg`}
    >
      <div className="container flex h-16 items-center space-x-4 justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Icons.logo className="h-6 w-6" />
            <span className="font-bold inline-block">{siteConfig.name}</span>
          </Link>
          {siteConfig.pages?.length ? (
            <NavigationMenu className="hidden sm:block">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hidden">
                    Projects
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary to-primary-focus text-white p-6 no-underline outline-none focus:shadow-md"
                            href="/projects"
                          >
                            {/* <Icons.logo className="h-6 w-6" /> */}
                            <div className="mb-2 mt-4 text-lg font-medium">
                              My Projects
                            </div>
                            <p className="text-sm leading-tight text-white">
                              Click on me to go to projects page to see all my
                              projects
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      {siteConfig.projects.map((project, index) => (
                        <ListItem
                          href={project.url}
                          title={project.title}
                          key={index}
                        >
                          {project.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">
                    Pages
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-1 p-4 md:w-[250px] md:grid-cols-2 lg:w-[300px]">
                      {siteConfig.pages.map((page) =>
                        page.comingSoon ? (
                          <ListItem
                            className="flex opacity-50 cursor-not-allowed"
                            key={page.title}
                            title={page.title}
                          >
                            {/* {page.description} */}
                          </ListItem>
                        ) : (
                          <ListItem
                            className="flex"
                            key={page.title}
                            title={page.title}
                            href={page.href}
                          ></ListItem>
                        )
                      )}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                {/* <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Documentation
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem> */}
              </NavigationMenuList>
            </NavigationMenu>
          ) : null}
        </div>
        <nav className="flex items-center">
          <SearchBox />
          <Link
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
            className={cn(
              "!rounded-none xl:!rounded-s-md !hidden sm:!inline-flex",
              buttonVariants({
                size: "icon",
                variant: "outline",
              })
            )}
          >
            <Icons.twitter className="h-5 w-5 fill-current" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className={cn(
              "!rounded-s-none !border-l-0 !hidden sm:!inline-flex",
              buttonVariants({
                size: "icon",
                variant: "outline",
              })
            )}
          >
            <Icons.gitHub className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
