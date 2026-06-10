"use client"

import Link from "next/link"
import { ChevronRight, Home, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { SplitText } from "@/components/reactbits/SplitText"
import { HeroBrandPattern } from "@/components/corporate/brand-patterns/HeroBrandPattern"

import { CountUpStat } from "@/components/corporate/CountUpStat"

const WEB_HERO_BACKGROUND =
  "https://images.pexels.com/photos/29267512/pexels-photo-29267512.jpeg?auto=compress&cs=tinysrgb&w=1800"

type PageHeroStat = {
  value: string
  label: string
}

type PageHeroProps = {
  title: string
  description: string
  section?: string
  image?: string
  video?: string
  icon?: LucideIcon
  stats?: PageHeroStat[]
  className?: string
  darkTheme?: boolean
}

export function PageHero({
  title,
  description,
  section = "Who We Are",
  image,
  video,
  icon: Icon,
  stats = [],
  className,
  darkTheme = false,
}: PageHeroProps) {
  const backgroundImage = darkTheme ? WEB_HERO_BACKGROUND : image

  return (
    <section
      className={cn(
        "relative overflow-hidden border-b",
        darkTheme ? "border-b border-[#017ACA]/10 bg-gradient-to-b from-[#F4FAFF] via-white to-[#EAF6FD] pt-24 md:pt-32" : "border-border/40 pt-24 md:pt-32",
        className,
      )}
    >
      <HeroBrandPattern darkTheme={darkTheme} />

      {backgroundImage ? (
        <>
          <div
            className={cn(
              "absolute inset-0 bg-cover bg-center mix-blend-overlay",
              darkTheme ? "opacity-[0.06]" : "opacity-[0.05]"
            )}
            style={{ backgroundImage: `url("${backgroundImage}")` }}
          />
          {darkTheme ? (
            <>
              <div
                className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] bg-cover bg-center opacity-[0.22] [mask-image:linear-gradient(to_left,black_35%,transparent_100%)] md:block"
                style={{ backgroundImage: `url("${backgroundImage}")` }}
                aria-hidden="true"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#F4FAFF] via-white/88 to-[#EAF6FD]/74" />
            </>
          ) : null}
        </>
      ) : null}

      {video ? (
        <video
          src={video}
          poster={image}
          autoPlay
          loop
          muted
          playsInline
          className={cn(
            "absolute inset-0 h-full w-full object-cover mix-blend-overlay pointer-events-none",
            darkTheme ? "opacity-[0.035]" : "opacity-[0.08]"
          )}
        />
      ) : null}
      {darkTheme ? null : <div className="absolute left-0 top-0 h-full w-1.5 bg-[#FDCD03]" />}

      <div className="container relative mx-auto px-4 pb-14 md:px-6 md:pb-20">
        <div className="mb-8 flex flex-wrap items-center gap-2 text-xs md:text-sm">
          <Link
            href="/"
            className={cn(
              "flex items-center gap-1 transition-colors font-medium",
              darkTheme ? "text-[#017ACA] hover:text-[#005B99]" : "text-muted-foreground hover:text-primary"
            )}
          >
            <Home className="size-3.5" /> Home
          </Link>
          <ChevronRight className={cn("size-3.5", darkTheme ? "text-[#017ACA]/35" : "text-muted-foreground/50")} />
          <span className={cn("font-medium", darkTheme ? "text-[#64748B]" : "text-foreground")}>{section}</span>
          <ChevronRight className={cn("size-3.5", darkTheme ? "text-[#017ACA]/35" : "text-muted-foreground/50")} />
          <span className={cn("font-semibold", darkTheme ? "text-[#003B66]" : "text-primary")}>{title}</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(380px,460px)] lg:items-end">
          <div className="max-w-4xl">
            <div className="mb-5 flex items-center gap-3">
              {Icon ? (
                <div className={cn(
                  "flex size-11 items-center justify-center rounded-xl border shadow-sm backdrop-blur",
                  darkTheme ? "border-[#017ACA]/15 bg-white/80 text-[#017ACA] shadow-[0_12px_35px_rgba(0,59,102,0.08)]" : "border-primary/15 bg-white text-primary"
                )}>
                  <Icon className="size-5" />
                </div>
              ) : null}
              <div className={cn("h-px w-16", darkTheme ? "bg-gradient-to-r from-[#FDCD02] via-[#017ACA] to-transparent" : "bg-[#FDCD03]")} />
            </div>
            <h1 className={cn(
              "max-w-4xl text-4xl font-black tracking-tight md:text-5xl lg:text-6xl",
              darkTheme ? "text-[#003B66]" : "text-foreground"
            )}>
              <SplitText text={title} />
            </h1>
            <p className={cn(
              "mt-6 max-w-3xl text-sm leading-8 md:text-base font-medium",
              darkTheme ? "text-[#475569]" : "text-muted-foreground"
            )}>
              {description}
            </p>
          </div>

          {stats && stats.length > 0 ? (
            <div className="w-full max-w-[460px] lg:justify-self-end">
              <div className={cn(
                "grid grid-cols-1 gap-4 rounded-3xl border p-5 shadow-[0_24px_70px_rgba(0,59,102,0.10)] backdrop-blur-md sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 md:p-6",
                darkTheme ? "border-[#017ACA]/15 bg-white/90" : "border-primary/10 bg-white/85"
              )}>
                {stats.map((stat, index) => {
                  const isLongValue = String(stat.value).length > 8

                  return (
                    <div
                      key={`${stat.value}-${stat.label}-${index}`}
                      className={cn(
                        "relative flex min-h-[136px] min-w-0 flex-col items-center justify-center rounded-2xl border px-5 py-6 text-center",
                        darkTheme ? "border-[#017ACA]/10 bg-gradient-to-br from-white via-[#F4FAFF] to-[#EAF6FD]" : "border-primary/10 bg-muted/45"
                      )}
                    >
                      {darkTheme && <div className="absolute right-0 top-0 h-16 w-16 rounded-bl-[32px] bg-[#FDCD02]/14" />}

                      <div
                        className={cn(
                          "relative max-w-full font-black leading-tight",
                          darkTheme ? "text-[#003B66]" : "text-primary",
                          isLongValue ? "text-xl md:text-2xl xl:text-[26px]" : "text-3xl md:text-3xl"
                        )}
                      >
                        <span className="block max-w-full whitespace-normal text-center">
                          <CountUpStat value={stat.value} />
                        </span>
                      </div>

                      <div className={cn(
                        "relative mt-3 text-[11px] font-bold uppercase tracking-[0.16em]",
                        darkTheme ? "text-[#64748B]" : "text-muted-foreground"
                      )}>
                        {stat.label}
                      </div>

                      {darkTheme && <div className="relative mt-4 h-1 w-10 rounded-full bg-gradient-to-r from-[#FDCD02] to-[#017ACA]" />}
                    </div>
                  )
                })}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
