"use client"

import { cn } from "@/lib/utils"
import { SplitText } from "@/components/reactbits/SplitText"

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
  className?: string
  darkTheme?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  darkTheme = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10",
        align === "center" && "mx-auto max-w-3xl text-center",
        className,
      )}
    >
      {eyebrow ? (
        <div
          className={cn(
            "mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em]",
            darkTheme ? "text-anthem-yellow" : "text-primary",
            align === "center" && "justify-center",
          )}
        >
          <span className="h-px w-10 bg-anthem-yellow" />
          {eyebrow}
          <span className="h-px w-10 bg-anthem-yellow" />
        </div>
      ) : null}
      <h2 className={cn("text-3xl font-bold tracking-tight md:text-4xl", darkTheme ? "text-white" : "text-foreground")}>
        <SplitText text={title} />
      </h2>
      {description ? (
        <p className={cn("mt-4 text-base leading-7 md:text-lg", darkTheme ? "text-[#A9C1C7]" : "text-muted-foreground")}>{description}</p>
      ) : null}
    </div>
  )
}
