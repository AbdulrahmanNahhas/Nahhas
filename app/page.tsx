import Blog from "@/components/Blog";
import Faq from "@/components/Faq";
import ServicesComponent from "@/components/Services";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function IndexPage() {
  return (
    <section className="px-4 sm:container">
      <div className="flex w-full flex-col items-center gap-2 sm:gap-5 py-10 md:py-20 lg:py-32 2xl:py-40">
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
      </div>
      <ServicesComponent />
      <Blog />
      <Faq />
    </section>
  );
}
