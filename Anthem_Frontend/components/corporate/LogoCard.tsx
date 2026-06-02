"use client"

import Image from "next/image"
import { Building2, type LucideIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type LogoCardProps = {
  name: string
  logo?: string
  label: string
  description?: string
  fallbackIcon?: LucideIcon
  className?: string
}

export function LogoCard({ name, logo, label, description, fallbackIcon: FallbackIcon = Building2, className }: LogoCardProps) {
  return (
    <Card className={cn("group h-full overflow-hidden border-border/60 bg-card shadow-sm transition-all hover:-translate-y-1 hover:border-primary/25 hover:shadow-md", className)}>
      <CardContent className="flex h-full flex-col p-5">
        <div className="mb-5 flex h-24 items-center justify-center rounded-lg border border-border/60 bg-muted/35 p-3">
          {logo ? (
            <Image
              src={logo}
              alt={`${name} logo`}
              width={180}
              height={90}
              className="max-h-full w-auto max-w-full object-contain grayscale transition-all group-hover:grayscale-0"
            />
          ) : (
            <FallbackIcon className="size-8 text-primary" />
          )}
        </div>
        <h3 className="text-base font-bold leading-snug text-foreground">{name}</h3>
        <Badge variant="outline" className="mt-3 w-fit rounded-md bg-muted/50 text-[10px] uppercase tracking-wide">
          {label}
        </Badge>
        {description ? <p className="mt-4 text-sm leading-6 text-muted-foreground">{description}</p> : null}
      </CardContent>
    </Card>
  )
}
