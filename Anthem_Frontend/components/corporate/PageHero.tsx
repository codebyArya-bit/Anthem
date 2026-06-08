"use client"

import Link from "next/link"
import { ChevronRight, Home, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { SplitText } from "@/components/reactbits/SplitText"
import { HeroBrandPattern } from "@/components/corporate/brand-patterns/HeroBrandPattern"

import { CountUpStat } from "@/components/corporate/CountUpStat"

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
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b",
        darkTheme ? "bg-[#003B66] border-anthem-blue/15 pt-24 md:pt-32" : "border-border/40 pt-24 md:pt-32",
        className,
      )}
    >
      <HeroBrandPattern darkTheme={darkTheme} />
      {video ? (
        <video
          src={video}
          poster={image}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover mix-blend-overlay opacity-[0.08] pointer-events-none"
        />
      ) : image ? (
        <div
          className={cn(
            "absolute inset-0 bg-cover bg-center mix-blend-overlay",
            darkTheme ? "opacity-[0.04]" : "opacity-[0.05]"
          )}
          style={{ backgroundImage: `url("${image}")` }}
        />
      ) : null}
      <div className="absolute left-0 top-0 h-full w-1.5 bg-[#FDCD03]" />

      <div className="container relative mx-auto px-4 pb-14 md:px-6 md:pb-20">
        <div className="mb-8 flex flex-wrap items-center gap-2 text-xs md:text-sm">
          <Link 
            href="/" 
            className={cn(
              "flex items-center gap-1 transition-colors",
              darkTheme ? "text-slate-300 hover:text-anthem-yellow" : "text-muted-foreground hover:text-primary"
            )}
          >
            <Home className="size-3.5" /> Home
          </Link>
          <ChevronRight className={cn("size-3.5", darkTheme ? "text-slate-300/30" : "text-muted-foreground/50")} />
          <span className={cn("font-medium", darkTheme ? "text-slate-300" : "text-foreground")}>{section}</span>
          <ChevronRight className={cn("size-3.5", darkTheme ? "text-slate-300/30" : "text-muted-foreground/50")} />
          <span className={cn("font-semibold", darkTheme ? "text-anthem-yellow" : "text-primary")}>{title}</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-end">
          <div className="max-w-4xl">
            <div className="mb-5 flex items-center gap-3">
              {Icon ? (
                <div className={cn(
                  "flex size-11 items-center justify-center rounded-lg border shadow-sm",
                  darkTheme ? "border-anthem-blue/30 bg-[#003B66]/80 text-anthem-yellow" : "border-primary/15 bg-white text-primary"
                )}>
                  <Icon className="size-5" />
                </div>
              ) : null}
              <div className="h-px w-16 bg-[#FDCD03]" />
            </div>
            <h1 className={cn(
               "max-w-4xl text-4xl font-black tracking-tight md:text-5xl lg:text-6xl",
               darkTheme ? "text-[#FFFFFF]" : "text-foreground"
             )}>
               <SplitText text={title} />
             </h1>
             <p className={cn(
               "mt-6 max-w-3xl text-sm leading-8 md:text-base font-medium",
               darkTheme ? "text-slate-300" : "text-muted-foreground"
             )}>
              {description}
            </p>
          </div>

          {stats.length > 0 ? (
            <div className={cn(
              "grid grid-cols-2 gap-3 rounded-xl border p-4 shadow-md backdrop-blur",
              darkTheme ? "border-anthem-blue/20 bg-[#003B66]/80" : "border-primary/10 bg-white/82"
            )}>
              {stats.map((stat) => (
                <div key={`${stat.value}-${stat.label}`} className={cn(
                  "rounded-lg p-3 border",
                  darkTheme ? "bg-slate-900/40 border-anthem-blue/10" : "bg-muted/45 border-transparent"
                )}>
                  <div className={cn("text-2xl font-black", darkTheme ? "text-anthem-yellow" : "text-primary")}>
                    <CountUpStat value={stat.value} />
                  </div>
                  <div className={cn(
                    "mt-1 text-[10px] font-bold uppercase tracking-wider",
                    darkTheme ? "text-slate-300" : "text-muted-foreground"
                  )}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
