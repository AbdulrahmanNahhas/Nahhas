import "@/styles/globals.css";
import MainContextMenu from "@/components/MainContextMenu";
import Footer from "@/components/footer/footer";
import { SiteHeader } from "@/components/navbar/site-header";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

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
};

interface RootLayoutProps {
  children: React.ReactNode;
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
            <div className="bg2"></div>
            <SiteHeader />
            <div className="relative flex min-h-screen flex-col">
              <div className="flex-1 min-h-[calc(100vh-69px-65px)]">
                {children}
              </div>
              <TailwindIndicator />
            </div>
            <Footer />
            {/* Place Everything top */}
            <MainContextMenu></MainContextMenu>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
