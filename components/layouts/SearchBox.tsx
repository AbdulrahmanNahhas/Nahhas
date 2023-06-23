"use client";

import { Button } from "../ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { siteConfig } from "@/config/site";
import {
  Clock,
  Contact,
  Edit,
  Github,
  Home,
  Info,
  Mail,
  Menu,
  Newspaper,
  PersonStanding,
  Search,
  Settings,
} from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { Icons } from "../icons";

const icons = [Home, Info, Newspaper, Edit, Clock, Contact, Clock];

export function SearchBox() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <Button
        variant="outline"
        className="relative h-10 w-10 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2 sm:!rounded-e-none xl:!rounded-sm sm:border-r-0 xl:border-r xl:mr-2"
        onClick={() => setOpen(true)}
      >
        <Search
          className="h-4 w-4 xl:mr-2 hidden sm:block"
          aria-hidden="true"
        />
        <Menu className="h-4 w-4 xl:mr-2 block sm:hidden" aria-hidden="true" />
        <span className="hidden xl:inline-flex">Search...</span>
        <span className="sr-only">Search for something</span>
        <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-[22px] select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 xl:flex mr-[6px]">
          <span className="text-xs">Ctrl</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Pages">
            {siteConfig.pages?.map((page, index) => {
              const Icon = icons[index];
              return (
                <>
                  {page.comingSoon ? (
                    <CommandItem className="flex cursor-not-allowed opacity-50">
                      <Icon className="mr-2 h-1 w-1" />
                      <span>{page.title}</span>
                    </CommandItem>
                  ) : (
                    <CommandItem className="!p-0">
                      <Link
                        href={page.href}
                        className="flex w-full h-full px-2 py-3"
                        onClick={() => setOpen(false)}
                      >
                        <Icon className="mr-2 h-1 w-1" />
                        <span>{page.title}</span>
                      </Link>
                    </CommandItem>
                  )}
                </>
              );
            })}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem className="cursor-not-allowed opacity-50">
              <Mail className="mr-2 h-4 w-4 " />
              <span>Mail</span>
            </CommandItem>
            <CommandItem className="cursor-not-allowed opacity-50">
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Links">
            <CommandItem className="!p-0">
              <Link
                href="https://github.com/AbdulrahmanNahhas"
                target="_blank"
                className="flex w-full h-full px-2 py-3"
              >
                <Icons.gitHub className="mr-2 h-4 w-4" />
                Github
              </Link>
            </CommandItem>
            <CommandItem className="!p-0">
              <Link
                href="https://twitter.com/Nahhas909"
                target="_blank"
                className="flex w-full h-full px-2 py-3"
              >
                <Icons.twitter className="mr-2 h-4 w-4 hover:fill-current" />
                Twitter
              </Link>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
