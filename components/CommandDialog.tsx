"use client"

import * as React from "react"
import Link from "next/link"
import {
  BarChart3,
  Home,
  Info,
  Folder,
  MessageSquare,
  Newspaper,
  Palette,
  Settings,
  User,
} from "lucide-react"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

// Pages Icons
const PagesIcons = [
  Home,
  Info,
  BarChart3,
  Folder,
  MessageSquare,
  Newspaper,
]

export function CommandsDialog() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key.toLowerCase() === "h" && (e.metaKey || e.ctrlKey))) {
        setOpen((open) => !open);
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <button
          className={buttonVariants({ variant: "ghost", size: "sm" })+"block md:hidden"} onClick={() => setOpen((open) => !open)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-align-justify"
        >
          <line x1="3" x2="21" y1="6" y2="6"></line>
          <line x1="3" x2="21" y1="12" y2="12"></line>
          <line x1="3" x2="21" y1="18" y2="18"></line>
        </svg>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Pages">
            {siteConfig.pages.map((Page, index) => {
              const ICON = PagesIcons[index]
              return (
                <Link href={Page.href} key={index}>
                  <CommandItem>
                    <ICON className="mr-2 h-4 w-4" />
                    <span>{Page.title}</span>
                  </CommandItem>
                </Link>
              )
            })}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem className="opacity-50 cursor-not-allowed">
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem
              className="opacity-50 cursor-not-allowed"
              style={{ animationDelay: "150ms" }}
            >
              <Palette className="mr-2 h-4 w-4" />
              <span>Customization (Themes, Colors, ...)</span>
              <CommandShortcut>⌘T</CommandShortcut>
            </CommandItem>
            <CommandItem
              className="opacity-50 cursor-not-allowed"
              style={{ animationDelay: "300ms" }}
            >
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
