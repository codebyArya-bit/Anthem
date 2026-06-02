"use client"

import Image from "next/image"
import { Mail, Phone, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ShinyText } from "@/components/reactbits/ShinyText"
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
  return (
    <Card className="h-full overflow-hidden border-slate-200/80 bg-white shadow-md hover:shadow-lg transition-all duration-300 relative group rounded-2xl">
      <CardCornerMark position="top-right" />
      <CardCornerMark position="bottom-left" />
      
      {/* Subtle dark teal profile header band (#00232A) */}
      <div className="bg-[#00232A] px-6 py-6 md:px-8 border-b border-[#00FFE4]/15 relative overflow-hidden">
        {/* Subtle background tech line accent */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-[linear-gradient(to_left,rgba(0,255,228,0.02)_1px,transparent_1px)] pointer-events-none" />
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 relative z-10">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00FFE4] block mb-1">Leadership Profile</span>
            <h3 className="text-2xl font-black text-[#F4FBFC] tracking-tight">
              {name}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            {statBadge ? (
              <Badge className="rounded-md px-3 py-1 font-extrabold text-[10px] shadow-sm bg-[#FDCD03] hover:bg-[#FDCD03] border-none text-[#00232A]">
                {statBadge}
              </Badge>
            ) : null}
            <Badge className="rounded-md px-3.5 py-1.5 font-bold text-xs shadow-sm bg-transparent border border-[#00FFE4]/30 text-[#00FFE4]">
              {role}
            </Badge>
          </div>
        </div>
      </div>

      <CardContent className="p-6 md:p-8 bg-white">
        <div className="flex flex-col gap-8">
          {/* Left profile/contact side */}
          <div className="flex flex-col items-center text-center">
            <div className="relative flex aspect-square w-full max-w-[160px] items-center justify-center overflow-hidden rounded-2xl border-2 border-slate-100 bg-slate-50 shadow-inner group transition-transform duration-300">
              {avatar ? (
                <Image src={avatar} alt={name} fill className="object-cover" />
              ) : (
                <User className="size-16 text-slate-300" />
              )}
              {statBadge ? (
                <div className="absolute bottom-2 right-2 bg-[#00232A] border border-[#00FFE4]/30 text-[#00FFE4] text-[9px] font-black uppercase px-2 py-0.5 rounded shadow-sm">
                  {statBadge}
                </div>
              ) : null}
            </div>
            <div className="mt-5 w-full space-y-2.5 text-xs text-slate-500 border-t border-slate-100 pt-4 flex flex-col items-center">
              {emails.map((email) => (
                <a key={email} href={`mailto:${email}`} className="flex items-center gap-2 hover:text-[#017ACA] transition-colors font-mono font-bold truncate max-w-full">
                  <Mail className="size-3.5 text-[#017ACA] shrink-0" />
                  <span className="truncate">{email}</span>
                </a>
              ))}
              {phone ? (
                <a href={`tel:${phone}`} className="flex items-center gap-2 hover:text-[#017ACA] transition-colors font-mono font-bold">
                  <Phone className="size-3.5 text-[#017ACA] shrink-0" />
                  {phone}
                </a>
              ) : null}
            </div>
          </div>

          {/* Right bio/experience side */}
          <div className="flex flex-col justify-between">
            <div>
              {education ? (
                <p className="text-sm font-bold text-[#017ACA] font-sans leading-relaxed">
                  {education}
                </p>
              ) : null}
              
              <div className="mt-5 flex flex-col gap-3 text-sm leading-7 text-slate-600 font-medium">
                {bio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Sub-grids of credentials */}
            <div className="mt-8 grid gap-4 grid-cols-1">
              <ProfileList title="Core Expertise" items={expertise} gradient="from-cyan-500/5 to-blue-500/5 border-[#00FFE4]/15" />
              <ProfileList title="Responsibilities" items={responsibilities} gradient="from-[#017ACA]/5 to-[#00232A]/5 border-slate-200" />
              <ProfileList title="Achievements" items={achievements} gradient="from-[#FDCD03]/5 to-amber-500/5 border-[#FDCD03]/25" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function ProfileList({ title, items, gradient }: { title: string; items: string[]; gradient: string }) {
  if (items.length === 0) return null

  return (
    <div className={`rounded-xl border bg-gradient-to-br ${gradient} p-4.5 shadow-[0_0_12px_rgba(0,0,0,0.01)] hover:shadow-sm transition-all`}>
      <div className="mb-3 text-[10px] font-black uppercase tracking-wider text-slate-700">{title}</div>
      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <div key={item} className="flex gap-2 text-xs leading-5 text-slate-500 font-medium">
            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#FDCD03]" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
