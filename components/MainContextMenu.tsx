"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

import { siteConfig } from "@/config/site"
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

interface MainContextMenuProps {
  children?: React.ReactNode
}

const MainContextMenu = ({ children }: MainContextMenuProps) => {
  const router = useRouter()

  return (
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem
          onClick={() => {
            router.back()
          }}
        >
          Back
        </ContextMenuItem>
        <ContextMenuItem
          onClick={() => {
            router.forward()
          }}
        >
          Forward
        </ContextMenuItem>
        <ContextMenuItem
          onClick={() => {
            router.refresh()
          }}
        >
          Reload
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger>Go To</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            {siteConfig.pages.map((page, index) => (
              <Link key={index} href={page.href}>
                <ContextMenuItem>{page.title}</ContextMenuItem>
              </Link>
            ))}
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSub>
          <ContextMenuSubTrigger disabled className="opacity-50">
            Change Language
          </ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <Link href="/">
              <ContextMenuItem>EN</ContextMenuItem>
            </Link>
            <Link href="/">
              <ContextMenuItem>AR</ContextMenuItem>
            </Link>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuItem>
          <Link href={siteConfig.projecturl}>Website Source</Link>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup
          value="Abdulrahman Nahhas"
          className="text-center opacity-50"
        >
          <ContextMenuLabel>Made by: Abdulrahman Nahhas</ContextMenuLabel>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}

export default MainContextMenu
