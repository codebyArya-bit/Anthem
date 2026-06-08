"use client"

import Image from "next/image"
import { Mail, Phone, User, GraduationCap, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CardCornerMark } from "@/components/corporate/brand-patterns/CardCornerMark"

type ProfileCardProps = {
  name: string
  role: string
  avatar: string
  education?: string
  bio: string[]
  expertise: string[]
  responsibilities?: string[]
  achievements?: string[]
  emails?: string[]
  phone?: string
  statBadge?: string
}

export function ProfileCard({
  name,
  role,
  avatar,
  education,
  bio,
  expertise,
  responsibilities = [],
  achievements = [],
  emails = [],
  phone,
  statBadge,
}: ProfileCardProps) {
  const bioPreview = bio.join(" ").slice(0, 360)

  return (
    <Card className="group relative flex h-full min-h-[760px] flex-col overflow-hidden rounded-[24px] border border-slate-200/90 bg-white shadow-[0_10px_30px_rgba(0,59,102,0.08)] transition-all duration-500 hover:-translate-y-1 hover:border-[#017ACA]/50 hover:shadow-[0_22px_55px_rgba(0,59,102,0.16)]">
      <CardCornerMark position="top-right" />
      <CardCornerMark position="bottom-left" />

      {/* ReactBits-style shine sweep */}
      <div className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -left-32 top-0 h-full w-24 rotate-12 bg-gradient-to-r from-transparent via-white/45 to-transparent transition-transform duration-1000 group-hover:translate-x-[520px]" />
      </div>

      {/* Header */}
      <div className="relative overflow-hidden border-b border-[#017ACA]/15 bg-[#003B66] px-6 py-6 md:px-7">
        <div className="absolute inset-y-0 right-0 w-40 bg-[radial-gradient(circle_at_top_right,rgba(253,205,2,0.18),transparent_58%)]" />
        <div className="absolute inset-x-0 top-0 h-[3px] bg-[#FDCD02]" />

        <div className="relative z-10 flex flex-col gap-4">
          <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#FDCD02]">
            Leadership Profile
          </span>

          <div className="flex min-h-[72px] items-start justify-between gap-4">
            <h3 className="max-w-[210px] text-2xl font-black leading-tight tracking-tight text-white">
              {name}
            </h3>

            <div className="flex shrink-0 flex-col items-end gap-2">
              {statBadge ? (
                <Badge className="rounded-full border-none bg-[#FDCD02] px-3 py-1 text-[10px] font-black text-[#003B66] shadow-sm hover:bg-[#FDCD02]">
                  {statBadge}
                </Badge>
              ) : null}

              <Badge className="max-w-[120px] rounded-full border border-white/25 bg-white/10 px-3 py-1 text-center text-[10px] font-bold leading-tight text-white shadow-sm backdrop-blur hover:bg-white/10">
                {role}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <CardContent className="flex flex-1 flex-col bg-white p-6 md:p-7">
        {/* Photo + contact */}
        <div className="flex flex-col items-center text-center">
          <div className="relative flex aspect-square w-full max-w-[150px] items-center justify-center overflow-hidden rounded-[22px] border border-slate-200 bg-slate-50 shadow-inner transition-transform duration-500 group-hover:scale-[1.03]">
            {avatar ? (
              <Image src={avatar} alt={name} fill className="object-cover" />
            ) : (
              <User className="size-16 text-slate-300" />
            )}

            {statBadge ? (
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full border border-white/70 bg-[#FDCD02] px-3 py-1 text-[9px] font-black uppercase tracking-wide text-[#003B66] shadow-[0_8px_18px_rgba(0,59,102,0.25)]">
                {statBadge}
              </div>
            ) : null}
          </div>

          <div className="mt-5 flex min-h-[74px] w-full flex-col items-center justify-center gap-2 border-t border-slate-100 pt-4 text-xs text-slate-500">
            {emails.slice(0, 2).map((email) => (
              <a
                key={email}
                href={`mailto:${email}`}
                className="flex max-w-full items-center gap-2 truncate font-mono font-bold transition-colors hover:text-[#017ACA]"
              >
                <Mail className="size-3.5 shrink-0 text-[#017ACA]" />
                <span className="truncate">{email}</span>
              </a>
            ))}

            {phone ? (
              <a
                href={`tel:${phone}`}
                className="flex items-center gap-2 font-mono font-bold transition-colors hover:text-[#017ACA]"
              >
                <Phone className="size-3.5 shrink-0 text-[#017ACA]" />
                {phone}
              </a>
            ) : null}
          </div>
        </div>

        {/* Fixed qualification block */}
        {education ? (
          <div className="mt-6 min-h-[88px] rounded-2xl border border-slate-200 bg-[#F6F9FC] p-4">
            <div className="mb-2 flex items-center gap-2 text-[10px] font-black uppercase tracking-wider text-[#003B66]">
              <GraduationCap className="size-4 text-[#017ACA]" />
              Qualification
            </div>
            <p className="line-clamp-2 text-sm font-bold leading-6 text-[#017ACA]">
              {education}
            </p>
          </div>
        ) : null}

        {/* Equal-height bio preview */}
        <div className="mt-5 min-h-[132px] rounded-2xl border border-slate-200 bg-white p-4">
          <div className="mb-2 flex items-center gap-2 text-[10px] font-black uppercase tracking-wider text-[#003B66]">
            <Sparkles className="size-4 text-[#FDCD02]" />
            Executive Summary
          </div>

          <p className="line-clamp-5 text-sm font-medium leading-6 text-slate-600">
            {bioPreview}
            {bioPreview.length >= 360 ? "..." : ""}
          </p>
        </div>

        {/* Bottom cards aligned */}
        <div className="mt-5 grid flex-1 content-start gap-3">
          <ProfileList title="Core Expertise" items={expertise} tone="blue" />
          <ProfileList title="Responsibilities" items={responsibilities} tone="navy" />
          <ProfileList title="Achievements" items={achievements} tone="gold" />
        </div>
      </CardContent>
    </Card>
  )
}

function ProfileList({
  title,
  items,
  tone,
}: {
  title: string
  items: string[]
  tone: "blue" | "navy" | "gold"
}) {
  if (items.length === 0) return null

  const toneClass =
    tone === "gold"
      ? "from-[#FDCD02]/10 to-amber-100/40 border-[#FDCD02]/30"
      : tone === "navy"
        ? "from-[#003B66]/5 to-[#017ACA]/5 border-slate-200"
        : "from-[#017ACA]/5 to-blue-100/50 border-[#017ACA]/15"

  return (
    <div
      className={`rounded-2xl border bg-gradient-to-br ${toneClass} p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm`}
    >
      <div className="mb-3 text-[10px] font-black uppercase tracking-wider text-[#003B66]">
        {title}
      </div>

      <div className="flex flex-col gap-2">
        {items.slice(0, 4).map((item) => (
          <div key={item} className="flex gap-2 text-xs font-medium leading-5 text-slate-600">
            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#FDCD02]" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
