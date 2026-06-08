"use client"

import React from "react"
import { usePathname } from "next/navigation"
import { ArrowAccent } from "./ArrowAccent"
import { Button } from "@/components/ui/button"

interface BrandCTAProps {
  title: string
  description: string
  buttonText: string
  onClick?: () => void
  href?: string
  className?: string
}

const corporateRoutes = [
  "/mission-vision",
  "/why-anthem",
  "/managementprofile",
  "/sister-concern-company",
  "/presentationnew",
  "/career",
  "/partners",
  "/clients",
]

export function BrandCTA({
  title,
  description,
  buttonText,
  onClick,
  href,
  className = "",
}: BrandCTAProps) {
  const pathname = usePathname()

  const isCorporateRoute = corporateRoutes.some((route) =>
    pathname?.startsWith(route)
  )

  const handleAction = () => {
    if (onClick) onClick()
    else if (href) window.location.href = href
  }

  if (!isCorporateRoute) {
    return (
      <div className={`relative max-w-5xl mx-auto rounded-2xl border border-[#00FFE4]/20 bg-[#00232A] p-8 md:p-10 shadow-lg overflow-hidden group ${className}`}>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,228,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,228,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        <div className="absolute bottom-[-50px] right-[-50px] w-64 h-64 rounded-full bg-[#00FFE4]/5 blur-[80px] pointer-events-none" />

        <div className="grid gap-6 md:grid-cols-[1fr_auto] items-center relative z-10">
          <div className="space-y-3">
            <h3 className="text-2xl font-extrabold text-[#F4FBFC] tracking-tight md:text-3xl">
              {title}
            </h3>
            <p className="text-sm leading-relaxed text-[#A9C1C7] max-w-2xl font-medium">
              {description}
            </p>
          </div>

          <div className="shrink-0">
            <Button
              onClick={handleAction}
              className="rounded-xl flex items-center justify-center gap-2 bg-[#FDCD02] text-[#00232A] hover:bg-[#FDCD02]/90 font-bold px-6 py-5 shadow-md border-0 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>{buttonText}</span>
              <ArrowAccent
                size={13}
                direction="right"
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative max-w-5xl mx-auto rounded-[24px] border border-slate-200 bg-white p-8 md:p-10 shadow-[0_10px_30px_rgba(0,59,102,0.08)] overflow-hidden group ${className}`}>
      <div className="absolute inset-x-0 top-0 h-[3px] bg-[#FDCD02]" />
      <div className="absolute bottom-[-80px] right-[-80px] h-72 w-72 rounded-full bg-[#017ACA]/10 blur-[90px] pointer-events-none" />
      <div className="absolute top-[-90px] left-[-90px] h-64 w-64 rounded-full bg-[#FDCD02]/10 blur-[90px] pointer-events-none" />

      <div className="grid gap-6 md:grid-cols-[1fr_auto] items-center relative z-10">
        <div className="space-y-3">
          <h3 className="text-2xl font-extrabold text-[#003B66] tracking-tight md:text-3xl">
            {title}
          </h3>

          <p className="max-w-2xl text-sm font-medium leading-relaxed text-[#334155]">
            {description}
          </p>
        </div>

        <div className="shrink-0">
          <Button
            onClick={handleAction}
            className="flex h-11 items-center justify-center gap-2 rounded-full border-0 bg-[#017ACA] px-6 font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#005B99] active:scale-[0.98]"
          >
            <span>{buttonText}</span>
            <ArrowAccent
              size={13}
              direction="right"
              stroke="#FFFFFF"
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </Button>
        </div>
      </div>
    </div>
  )
}
