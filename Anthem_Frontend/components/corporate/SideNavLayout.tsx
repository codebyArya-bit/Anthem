"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { ArrowAccent } from "@/components/corporate/brand-patterns/ArrowAccent"

type SideNavItem = {
  href: string
  label: string
}

type SideNavLayoutProps = {
  items: SideNavItem[]
  children: React.ReactNode
  className?: string
}

export function SideNavLayout({ items, children, className }: SideNavLayoutProps) {
  return (
    <div className={cn("grid gap-8 lg:grid-cols-[240px_1fr]", className)}>
      <aside className="hidden lg:block">
        <nav className="sticky top-24 rounded-xl border border-border/60 bg-white p-3 shadow-sm">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center justify-between rounded-lg px-3 py-2 text-sm font-bold text-slate-600 transition-all hover:bg-slate-50 hover:text-primary"
            >
              <span>{item.label}</span>
              <ArrowAccent
                size={12}
                direction="right"
                className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
              />
            </Link>
          ))}
        </nav>
      </aside>
      <div>{children}</div>
    </div>
  )
}
