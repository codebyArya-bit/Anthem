"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type FilterChipsProps = {
  filters: string[]
  active: string
  onChange: (filter: string) => void
  className?: string
}

export function FilterChips({ filters, active, onChange, className }: FilterChipsProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {filters.map((filter) => (
        <Button
          key={filter}
          type="button"
          variant={active === filter ? "default" : "outline"}
          size="sm"
          className={cn("rounded-md", active === filter && "bg-primary text-primary-foreground")}
          onClick={() => onChange(filter)}
        >
          {filter}
        </Button>
      ))}
    </div>
  )
}
