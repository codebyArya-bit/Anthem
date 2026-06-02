"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { type LucideIcon } from "lucide-react"

type InfoCardProps = {
  title: string
  description: string
  icon?: LucideIcon
  tag?: string
  items?: string[]
  className?: string
}

export function InfoCard({ title, description, icon: Icon, tag, items = [], className }: InfoCardProps) {
  return (
    <Card className={cn("h-full overflow-hidden border-border/60 bg-card shadow-sm transition-all hover:-translate-y-1 hover:border-primary/25 hover:shadow-md", className)}>
      <div className="h-1 bg-anthem-yellow" />
      <CardContent className="p-6">
        <div className="mb-5 flex items-start justify-between gap-4">
          {Icon ? (
            <div className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-primary/15 bg-primary/8 text-primary">
              <Icon className="size-5" />
            </div>
          ) : null}
          {tag ? <Badge variant="outline" className="rounded-md bg-muted/60">{tag}</Badge> : null}
        </div>
        <h3 className="text-lg font-bold text-foreground">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
        {items.length > 0 ? (
          <div className="mt-5 flex flex-col gap-2">
            {items.map((item) => (
              <div key={item} className="flex gap-2 text-sm text-foreground">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-anthem-yellow" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        ) : null}
      </CardContent>
    </Card>
  )
}
