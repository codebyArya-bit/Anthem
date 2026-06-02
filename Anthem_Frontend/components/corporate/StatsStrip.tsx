"use client"

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ShinyText } from "@/components/reactbits/ShinyText"

type Stat = {
  value: string
  label: string
  detail?: string
}

type StatsStripProps = {
  stats: Stat[]
  className?: string
}

export function StatsStrip({ stats, className }: StatsStripProps) {
  return (
    <Card className={cn("overflow-hidden border-primary/10 bg-white shadow-sm", className)}>
      <div className="h-1 bg-gradient-to-r from-anthem-blue via-anthem-lightBlue to-anthem-yellow" />
      <div className="grid gap-px bg-border/50 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={`${stat.value}-${stat.label}`} className="bg-card p-5 md:p-6">
            <div className="text-3xl font-bold text-primary md:text-4xl">
              <ShinyText>{stat.value}</ShinyText>
            </div>
            <div className="mt-2 text-sm font-semibold text-foreground">{stat.label}</div>
            {stat.detail ? <p className="mt-1 text-xs leading-5 text-muted-foreground">{stat.detail}</p> : null}
          </div>
        ))}
      </div>
    </Card>
  )
}
