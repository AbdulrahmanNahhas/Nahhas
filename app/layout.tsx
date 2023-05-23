import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import MainContextMenu from "@/components/MainContextMenu"
import { SiteHeader } from "@/components/navbar/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import Footer from "@/components/footer/footer"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              {/* Place Everything Here */}
          <div className="bg"></div>
                <SiteHeader />
              <div className="relative flex min-h-screen flex-col">
                <div className="flex-1">{children}</div>
                <TailwindIndicator />
              </div>
              <Footer />
              {/* Place Everything top */}
            <MainContextMenu>
            </MainContextMenu>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
