"use client"
import { AnthemRouteMedia } from "@/components/anthemgt/AnthemRouteMedia";

import React, { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Compass, Eye, HeartHandshake, Lightbulb, ShieldCheck, Target, Network, ChevronRight, Award, ChevronLeft } from "lucide-react"
import { Footer } from "@/components/Footer"
import { PageHero } from "@/components/corporate/PageHero"
import { SectionHeading } from "@/components/corporate/SectionHeading"
import { InfoCard } from "@/components/corporate/InfoCard"
import { Card, CardContent } from "@/components/ui/card"
import { ShinyText } from "@/components/reactbits/ShinyText"
import { TiltedCard } from "@/components/reactbits/TiltedCard"
import { ArrowAccent } from "@/components/corporate/brand-patterns/ArrowAccent"
import { SectionWatermark } from "@/components/corporate/brand-patterns/SectionWatermark"
import { CardCornerMark } from "@/components/corporate/brand-patterns/CardCornerMark"
import { DataLineDivider } from "@/components/corporate/brand-patterns/DataLineDivider"
import { BrandCTA } from "@/components/corporate/brand-patterns/BrandCTA"
import SoftAurora from "@/components/SoftAurora"

const navItems = [
  { href: "#vision", label: "Vision" },
  { href: "#mission", label: "Mission" },
  { href: "#journey", label: "Our Journey" },
  { href: "#values", label: "Operating Values" },
]

const featureImages = [
  {
    src: "/anthemgt-media/document-management.jpg",
    alt: "Document management workflow",
    title: "Secure Records",
  },
  {
    src: "/anthemgt-media/government-records.jpg",
    alt: "Government records digitisation",
    title: "Public Value",
  },
  {
    src: "/anthemgt-offices/development-center-hq.jpg",
    alt: "Development center headquarters",
    title: "Delivery Hub",
  },
]

const storyCards = [
  {
    image: "/anthemgt-media/digital-workflow.jpg",
    tag: "Digitised flow",
    title: "Make records usable, not just stored.",
    description: "Turn paper-heavy operations into searchable, trackable systems that people can actually work with.",
  },
  {
    image: "/anthemgt-media/judiciary-digitisation.jpg",
    tag: "Court systems",
    title: "Move large institutions with less friction.",
    description: "Show the handoff from scanning, to indexing, to access, so the service story is visible at a glance.",
  },
  {
    image: "/anthemgt-media/software-team.jpg",
    tag: "Delivery teams",
    title: "Blend people, process, and software.",
    description: "Use motion and imagery to make the operating model feel active instead of static.",
  },
]

const values = [
  {
    title: "Integrity",
    description: "Transparent execution, accountable teams, and responsible handling of critical client data.",
    icon: ShieldCheck
  },
  {
    title: "Innovation",
    description: "Practical AI, scanning, workflow, and software systems built for measurable public value.",
    icon: Lightbulb
  },
  {
    title: "Intelligence",
    description: "Data-driven systems that make records, exams, and workflows searchable, secure, and actionable.",
    icon: Compass
  },
]

const journeyEvents = [
  {
    year: "Phase 1",
    title: "Over 15 Years of Experience",
    description: "Anthem Global commenced operations in Bhubaneswar, Odisha, with a focus on core software applications, client advisory, and high-fidelity digitisation."
  },
  {
    year: "Phase 2",
    title: "Government & E-Governance Delivery",
    description: "Secured empanelments and delivered large-scale digital records, public database administration, and e-office workflow management platforms."
  },
  {
    year: "Phase 3",
    title: "Scanning & Digitisation Scale",
    description: "Optimized state-of-the-art production hubs to scan, index, and securely store over 50 Crore pages of critical archives."
  },
  {
    year: "Phase 4",
    title: "Judiciary Paperless Transformation",
    description: "Pioneered paperless court conversions across 310 courts and 30 districts, digitising over 25 Crore pages of high-security legal records."
  },
  {
    year: "Phase 5",
    title: "Assessment Infrastructure Growth",
    description: "Developed and managed extensive examination infrastructure spanning 20,000+ sq ft with a 550 examinee capacity and 10,000+ tests conducted."
  },
  {
    year: "Phase 6",
    title: "AI, OCR & Secure DMS Platforms",
    description: "Integrated custom DSpace-based Document Management Systems, AI-powered metadata extraction, and 60-second question extraction engines."
  },
  {
    year: "Phase 7",
    title: "India-Wide Public Sector Impact",
    description: "Executing large-scale digitisation, spatial engineering, and e-governance solutions across multiple state administrative departments, railways, and courts."
  }
]

const visionPoints = [
  { text: "Services to every human being through innovation.", icon: Lightbulb },
  { text: "Responsible, ethical, and professional towards stakeholders.", icon: ShieldCheck },
  { text: "Dedication, integrity, and honesty towards valuable clients.", icon: Compass },
  { text: "Make Anthem Global's presence felt across markets.", icon: Eye },
  { text: "Maximize value for customers through disciplined execution.", icon: Network },
  { text: "Be recognized globally for products, services, and cost competitiveness.", icon: Award },
]

export default function MissionVisionPage() {
  const [activeMilestone, setActiveMilestone] = useState(0)
  const [cursor, setCursor] = useState({ x: 50, y: 35 })

  return (
    <div className="flex min-h-screen flex-col bg-anthem-bg text-slate-800 relative overflow-hidden">
      <PageHero
        title="Vision & Mission"
        description="Anthem Global's vision is to deliver technology services with responsibility, ethics, and professional discipline while maximizing value for clients and building globally recognized products."
        image="/Anthem Assests/images_ban-mission-vision.jpg"
        video="/videos/data-flow.mp4"
        icon={Eye}
        stats={[
          { value: "Global", label: "Technology outlook" },
          { value: "Client", label: "Value-led delivery" },
        ]}
        darkTheme={true}
      />

      <main className="container mx-auto px-4 py-16 md:px-6 md:py-20 relative">
        {/* Soft background watermarks */}
        <SectionWatermark className="top-[10%] right-[5%] opacity-[0.015]" size={420} />
        <SectionWatermark className="bottom-[15%] left-[2%] opacity-[0.02]" size={360} />

        <section
          className="group relative mb-14 overflow-hidden rounded-[2rem] border border-anthem-blue/10 bg-[#003B66] shadow-[0_24px_80px_rgba(0,59,102,0.12)]"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect()
            const x = ((e.clientX - rect.left) / rect.width) * 100
            const y = ((e.clientY - rect.top) / rect.height) * 100
            setCursor({ x, y })
          }}
          onMouseLeave={() => setCursor({ x: 50, y: 35 })}
        >
          <div className="absolute inset-0 opacity-90">
            <SoftAurora
              speed={0.45}
              scale={1.65}
              brightness={0.9}
              color1="#017ACA"
              color2="#003B66"
              noiseFrequency={1.8}
              noiseAmplitude={1.05}
              bandHeight={0.44}
              bandSpread={0.9}
              octaveDecay={0.42}
              colorSpeed={0.8}
              mouseInfluence={0.18}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#003B66]/95 via-[#003B66]/72 to-[#003B66]/25" />
          <motion.div
            aria-hidden="true"
            animate={{ left: `${cursor.x}%`, top: `${cursor.y}%` }}
            transition={{ type: "spring", stiffness: 60, damping: 18 }}
            className="pointer-events-none absolute h-72 w-72 rounded-full bg-anthem-blue/12 blur-3xl"
            style={{ transform: "translate(-50%, -50%)" }}
          />
          <div className="relative grid gap-8 lg:grid-cols-[1.08fr_0.92fr] items-center p-6 md:p-10 xl:p-14">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="max-w-3xl"
            >
              <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.26em] text-anthem-yellow">
                <span className="h-px w-12 bg-anthem-yellow" />
                Vision & Mission
              </div>
              <h1 className="text-4xl font-black tracking-tight text-[#FFFFFF] md:text-6xl lg:text-7xl">
                Systems that protect records and move public work forward.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#E2E8F0] md:text-lg lg:text-xl">
                Anthem Global builds secure, dependable digital systems for records, services, and institutional workflows. The focus is practical delivery, clear outcomes, and work that holds up in the real world.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur-md transition-all hover:border-anthem-blue/40 hover:bg-white/14 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <motion.a
                  href="#values"
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-xl bg-anthem-yellow px-5 py-3 text-sm font-bold text-[#003B66] shadow-lg shadow-anthem-yellow/20 transition-colors hover:bg-anthem-yellow/90"
                >
                  Explore Values
                </motion.a>
                <motion.a
                  href="/contact"
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white backdrop-blur-md transition-colors hover:bg-white/12"
                >
                  Partner With Us
                </motion.a>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {[
                  { value: "25M+", label: "Pages digitised" },
                  { value: "310", label: "Courts covered" },
                  { value: "30", label: "District reach" },
                ].map((stat, idx) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.35 + idx * 0.08 }}
                    whileHover={{ y: -4 }}
                    className="rounded-2xl border border-white/10 bg-white/8 p-4 backdrop-blur-md"
                  >
                    <div className="text-2xl font-black text-anthem-yellow md:text-3xl">{stat.value}</div>
                    <div className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-300">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
              className="relative"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <motion.div
                  whileHover={{ y: -6, rotate: -1 }}
                  className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/8 shadow-2xl backdrop-blur-md sm:col-span-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/8 to-transparent" />
                  <Image
                    src="/Anthem Assests/images_ban-mission-vision.jpg"
                    alt="Mission and vision banner"
                    width={1200}
                    height={700}
                    className="h-64 w-full object-cover sm:h-72"
                    priority
                  />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-anthem-yellow">Highlighted Focus</div>
                      <div className="mt-1 text-lg font-black text-white md:text-xl">Secure delivery with public value</div>
                    </div>
                    <div className="rounded-full bg-anthem-yellow px-3 py-1.5 text-xs font-bold text-[#003B66] shadow-lg">
                      Live Strategy
                    </div>
                  </div>
                </motion.div>

                {featureImages.map((image, idx) => (
                  <motion.div
                    key={image.src}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 + idx * 0.08 }}
                    whileHover={{ y: -5, scale: 1.01 }}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/8 shadow-xl backdrop-blur-md"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={900}
                      height={650}
                      className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#00232A]/80 via-[#00232A]/16 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-anthem-yellow">{image.title}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <div className="mb-10 flex flex-wrap gap-2 rounded-2xl border border-slate-200/70 bg-white/80 p-2 shadow-sm backdrop-blur-sm">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-xl px-4 py-2 text-sm font-bold text-slate-600 transition-colors hover:bg-slate-50 hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </div>

        <section className="relative mb-20 overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/90 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:p-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(1,122,202,0.10),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(0,255,228,0.10),transparent_30%)]" />
          <div className="relative flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="mb-3 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.34em] text-[#017ACA]">
                <span className="h-px w-10 bg-anthem-yellow" />
                Visual Story
              </div>
              <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
                Add images and motion where the page needs proof, not filler.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
              The page feels stronger when the narrative is broken into smaller visual beats: what the work is, how it moves, and where the delivery happens.
            </p>
          </div>

          <div className="relative mt-8 grid gap-5 lg:grid-cols-3">
            {storyCards.map((card, idx) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00232A]/78 via-[#00232A]/12 to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-white/90 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-[#017ACA] backdrop-blur">
                    {card.tag}
                  </div>
                  <motion.div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-tr from-anthem-blue/0 via-anthem-blue/0 to-anthem-blue/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </div>
                <div className="space-y-3 p-5">
                  <h3 className="text-lg font-black leading-tight text-slate-900 md:text-xl">{card.title}</h3>
                  <p className="text-sm leading-7 text-slate-600">{card.description}</p>
                  <div className="flex items-center gap-2 text-sm font-bold text-[#017ACA]">
                    Read the workflow
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

          {/* Vision Section */}
          <motion.section
            id="vision"
            className="scroll-mt-28 mb-20 relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              eyebrow="Our Vision"
              title="Technology services that reach people through useful innovation"
              description="Our vision is not only to build software, but to create dependable systems that help institutions serve people with speed, transparency, and security."
            />

            <Card className="border-slate-200/80 shadow-md overflow-hidden relative bg-white group rounded-2xl">
              <CardCornerMark position="top-right" />
              <CardCornerMark position="bottom-left" />
              <div className="h-1.5 bg-gradient-to-r from-[#003B66] via-[#017ACA] to-anthem-yellow" />
              <CardContent className="grid gap-4 p-6 md:grid-cols-2 md:p-8 bg-white/70 backdrop-blur-sm">
                {visionPoints.map((point, index) => {
                  const Icon = point.icon
                  return (
                    <motion.div
                      key={point.text}
                      className="group/item flex gap-4 rounded-xl border border-slate-200/60 bg-white p-5 shadow-sm hover:border-anthem-blue/50 hover:shadow-md transition-all duration-300 relative overflow-hidden"
                      whileHover={{ y: -3, scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#003B66] to-[#017ACA] text-white shadow-sm">
                        <Icon className="size-5" />
                      </div>
                      <div className="flex flex-col justify-between flex-1">
                        <p className="text-sm font-bold text-slate-700 leading-relaxed">{point.text}</p>
                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-anthem-yellow bg-[#003B66] px-2.5 py-0.5 rounded-full mt-3 w-fit opacity-0 group-hover/item:opacity-100 transition-opacity">
                          <span>Anthem Vision</span>
                          <ArrowAccent size={8} direction="right" className="text-anthem-yellow" />
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </CardContent>
            </Card>
          </motion.section>

          <DataLineDivider className="my-16" />

          {/* Mission Section */}
          <motion.section
            id="mission"
            className="scroll-mt-28 mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              eyebrow="Our Mission"
              title="Design, develop, and deliver high-fidelity digital systems"
              description="Anthem combines techno-commercial experience with custom software, GIS, document processing, and AI-enabled execution to solve real operational problems for institutions."
            />

            <div className="grid gap-6 lg:grid-cols-3">
              <TiltedCard className="h-full" scale={1.02} maxRotate={3}>
                <div className="relative h-full group">
                  <CardCornerMark position="top-right" />
                  <InfoCard
                    icon={Target}
                    title="Mission-Critical Delivery"
                    description="Execute public, judiciary, and enterprise systems with clear outcomes, controlled delivery, and measurable impact."
                    className="h-full border-slate-200/80 bg-white"
                  />
                </div>
              </TiltedCard>
              <TiltedCard className="h-full" scale={1.02} maxRotate={3}>
                <div className="relative h-full group">
                  <CardCornerMark position="top-right" />
                  <InfoCard
                    icon={ShieldCheck}
                    title="Compliance & Security"
                    description="Maintain strong quality, data protection, and statutory alignment across domestic and international assignments."
                    className="h-full border-slate-200/80 bg-white"
                  />
                </div>
              </TiltedCard>
              <TiltedCard className="h-full" scale={1.02} maxRotate={3}>
                <div className="relative h-full group">
                  <CardCornerMark position="top-right" />
                  <InfoCard
                    icon={HeartHandshake}
                    title="Long-Term Partnerships"
                    description="Build relationships through reliable service, practical engineering, honest communication, and sustained support."
                    className="h-full border-slate-200/80 bg-white"
                  />
                </div>
              </TiltedCard>
            </div>
          </motion.section>

          <DataLineDivider className="my-16" />

          {/* Journey Section */}
          <motion.section
            id="journey"
            className="scroll-mt-28 mb-20 relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              eyebrow="Chronicle of Growth"
              title="Our Journey Through Time"
              description="From trusted digitisation beginnings to national-scale digital transformation — every milestone reflects our commitment to Integrity, Innovation, and Intelligence."
            />

            {/* Interactive Timeline layout */}
            <div className="max-w-4xl mx-auto mt-10">
              {/* Horizontal Timeline Track */}
              <div className="relative flex justify-between items-center mb-10 px-4">
                <div className="absolute left-0 right-0 h-0.5 bg-slate-200 top-1/2 -translate-y-1/2 z-0" />

                {journeyEvents.map((evt, idx) => (
                  <button
                    key={evt.year}
                    onClick={() => setActiveMilestone(idx)}
                    className="relative z-10 flex flex-col items-center focus:outline-none group"
                  >
                    <motion.div
                      className={`px-3 py-1.5 rounded-full border-2 flex items-center justify-center font-bold text-[10px] whitespace-nowrap shadow-md transition-all ${activeMilestone === idx
                        ? "bg-[#003B66] border-anthem-blue text-[#FFFFFF]"
                        : "bg-white border-slate-300 text-slate-600 hover:border-[#017ACA]"
                        }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {evt.year}
                    </motion.div>
                    <span className={`text-[10px] font-bold mt-2 uppercase tracking-wider hidden sm:block ${activeMilestone === idx ? "text-[#017ACA]" : "text-slate-400 group-hover:text-slate-600"
                      }`}>
                      {evt.title.split(" ")[0]}
                    </span>
                  </button>
                ))}
              </div>

              {/* Milestone Details Card */}
              <div className="relative min-h-[180px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeMilestone}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="border border-slate-200 shadow-md bg-white relative overflow-hidden rounded-2xl">
                      <CardCornerMark position="top-right" />
                      <CardContent className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center">
                        <div className="px-4 py-3 min-w-[90px] rounded-2xl bg-gradient-to-br from-[#003B66] to-[#017ACA] text-[#FFFFFF] font-black text-sm flex items-center justify-center text-center shadow shrink-0">
                          {journeyEvents[activeMilestone].year}
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] uppercase tracking-wider font-bold text-[#017ACA] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                              Milestone
                            </span>
                          </div>
                          <h4 className="text-xl font-extrabold text-slate-800 tracking-tight">
                            {journeyEvents[activeMilestone].title}
                          </h4>
                          <p className="text-sm leading-relaxed text-slate-600 font-medium">
                            {journeyEvents[activeMilestone].description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.section>

          <DataLineDivider className="my-16" />

          {/* Values Section */}
          <motion.section
            id="values"
            className="scroll-mt-28"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-10 relative">
              <div className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                <span className="h-px w-10 bg-anthem-yellow" />
                Operating Values
                <span className="h-px w-10 bg-anthem-yellow" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-800 md:text-4xl mb-4">
                <ShinyText className="font-extrabold text-3xl md:text-4xl bg-gradient-to-r from-slate-900 via-[#017ACA] to-slate-900">
                  Integrity · Innovation · Intelligence
                </ShinyText>
              </h2>
              <p className="text-sm leading-6 text-slate-500 max-w-2xl font-medium">
                Our organization aligns operational execution, technical choices, and public program deployments with these three core anchors.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {values.map((value) => (
                <TiltedCard key={value.title} className="h-full" scale={1.02} maxRotate={3}>
                  <div className="relative h-full group">
                    <CardCornerMark position="top-right" />
                    <InfoCard icon={value.icon} title={value.title} description={value.description} className="h-full border-slate-200/80 bg-white" />
                  </div>
                </TiltedCard>
              ))}
            </div>
          </motion.section>
        <DataLineDivider className="my-16" />

        <div className="lg:pl-14 xl:pl-24">
          <BrandCTA
            title="Aligning Security and Public Value"
            description="Let us help you implement secure records modernisation and digital operations backed by empanelled quality standard guidelines."
            buttonText="Partner With Us"
            href="/contact"
            className="lg:translate-x-3"
          />
        </div>
      </main>


      <AnthemRouteMedia slug="mission-vision" />
      <Footer />
    </div>
  )
}
