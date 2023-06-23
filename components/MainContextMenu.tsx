"use client";

import { SearchBox } from "./layouts/SearchBox";
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
} from "@/components/ui/context-menu";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface MainContextMenuProps {
  children?: React.ReactNode;
}

const MainContextMenu = ({ children }: MainContextMenuProps) => {
  const router = useRouter();

  return (
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem
          onClick={() => {
            router.back();
          }}
        >
          Back
        </ContextMenuItem>
        <ContextMenuItem
          onClick={() => {
            router.forward();
          }}
        >
          Forward
        </ContextMenuItem>
        <ContextMenuItem
          onClick={() => {
            router.refresh();
          }}
        >
          Reload
        </ContextMenuItem>
        <ContextMenuSeparator />
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
  );
};

export default MainContextMenu;
