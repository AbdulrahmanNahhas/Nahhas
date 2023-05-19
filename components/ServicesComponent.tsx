import Link from "next/link"
import { AlarmClock, BellRing, Check } from "lucide-react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

function ServicesComponent() {
  return (
    <div id="services" className="text-center py-10">
      <h1 className="text-xl font-extrabold tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl pb-5">
        {siteConfig.Services.title}
      </h1>
      <div
        className="text-start gap-5"
        id="grid"
        style={{
            '--how-many-cards': siteConfig.Services.services.length < 3
              ? `${siteConfig.Services.services.length + 1}`
              : `${siteConfig.Services.services.length}`
          }}
      >
        {" "}
        {siteConfig.Services.services.map((service, index) => (
          <Card
            key={index}
            className={
              "w-full max-w-[380px] justify-normal flex flex-col justify-between"
            }
          >
            <CardHeader className="pb-3 text-center">
              <CardTitle>{service.title}</CardTitle>
              {service.subTitle ? (
                <CardDescription>{service.subTitle}</CardDescription>
              ) : (
                ""
              )}
            </CardHeader>
            <CardContent className="grid gap-4">
              <div>
                <CardDescription className="mb-3 opacity-80 text-foreground">
                  {service.description}
                </CardDescription>
                {service.list.length > 0
                  ? service.list.map((listItem) => (
                      <div
                        key={listItem}
                        className="mb-0 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                      >
                        <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                        <div className="space-y-1">
                          <p className="text-sm font-medium leading-none">
                            {listItem}
                          </p>
                        </div>
                      </div>
                    ))
                  : null}
              </div>
            </CardContent>
            <CardFooter className="mt-auto">
              {service.available ? (
                <Button className="w-full">
                  <Check className="mr-2 h-4 w-4" /> Mark all as read
                </Button>
              ) : (
                <div className=" flex items-center space-x-4 rounded-md border p-4 w-full">
                  <AlarmClock />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Coming Soon...
                    </p>
                    <p className="text-sm text-muted-foreground hidden sm:block">
                      This service is not available right now.
                    </p>
                  </div>
                </div>
              )}
            </CardFooter>
          </Card>
        ))}
        {siteConfig.Services.services.length < 3 ? (
          <Card className="bg-transparent w-full md:max-w-[380px] border-2 border-dashed flex justify-center items-center flex-col py-4">
            <h3 className="text-lg mb-1">Coming Soon</h3>
            <Link href="/" className={buttonVariants({ variant: "ghost" })}>
              <span className="inline-flex items-center gap-x-2 text-primary">
                Need A Service?
                {/* <svg
                  className="w-2.5 h-2.5"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                  />
                </svg> */}
              </span>
            </Link>
          </Card>
        ) : null}
      </div>
    </div>
  )
}

export default ServicesComponent
