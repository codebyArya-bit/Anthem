"use client"
import { AnthemRouteMedia } from "@/components/anthemgt/AnthemRouteMedia";

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Compass, Eye, HeartHandshake, Lightbulb, ShieldCheck, Target, Network, ChevronRight, Award, ChevronLeft } from "lucide-react"
import { Footer } from "@/components/Footer"
import { PageHero } from "@/components/corporate/PageHero"
import { SectionHeading } from "@/components/corporate/SectionHeading"
import { InfoCard } from "@/components/corporate/InfoCard"
import { SideNavLayout } from "@/components/corporate/SideNavLayout"
import { Card, CardContent } from "@/components/ui/card"
import { ShinyText } from "@/components/reactbits/ShinyText"
import { TiltedCard } from "@/components/reactbits/TiltedCard"
import { ArrowAccent } from "@/components/corporate/brand-patterns/ArrowAccent"
import { SectionWatermark } from "@/components/corporate/brand-patterns/SectionWatermark"
import { CardCornerMark } from "@/components/corporate/brand-patterns/CardCornerMark"
import { DataLineDivider } from "@/components/corporate/brand-patterns/DataLineDivider"
import { BrandCTA } from "@/components/corporate/brand-patterns/BrandCTA"

const navItems = [
  { href: "#vision", label: "Vision" },
  { href: "#mission", label: "Mission" },
  { href: "#journey", label: "Our Journey" },
  { href: "#values", label: "Operating Values" },
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

  return (
    <div className="flex min-h-screen flex-col bg-[#F7FAFB] text-slate-800 relative overflow-hidden">
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

        <SideNavLayout items={navItems}>
          
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
              <div className="h-1.5 bg-gradient-to-r from-[#00232A] via-[#00FFE4] to-[#FDCD03]" />
              <CardContent className="grid gap-4 p-6 md:grid-cols-2 md:p-8 bg-white/70 backdrop-blur-sm">
                {visionPoints.map((point, index) => {
                  const Icon = point.icon
                  return (
                    <motion.div 
                      key={point.text} 
                      className="group/item flex gap-4 rounded-xl border border-slate-200/60 bg-white p-5 shadow-sm hover:border-[#00FFE4]/50 hover:shadow-md transition-all duration-300 relative overflow-hidden"
                      whileHover={{ y: -3, scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#00232A] to-[#017ACA] text-white shadow-sm">
                        <Icon className="size-5" />
                      </div>
                      <div className="flex flex-col justify-between flex-1">
                        <p className="text-sm font-bold text-slate-700 leading-relaxed">{point.text}</p>
                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#00FFE4] bg-[#00232A] px-2.5 py-0.5 rounded-full mt-3 w-fit opacity-0 group-hover/item:opacity-100 transition-opacity">
                          <span>Anthem Vision</span>
                          <ArrowAccent size={8} direction="right" className="text-[#FDCD03]" />
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
                      className={`px-3 py-1.5 rounded-full border-2 flex items-center justify-center font-bold text-[10px] whitespace-nowrap shadow-md transition-all ${
                        activeMilestone === idx
                          ? "bg-[#00232A] border-[#00FFE4] text-[#00FFE4]"
                          : "bg-white border-slate-300 text-slate-600 hover:border-[#017ACA]"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {evt.year}
                    </motion.div>
                    <span className={`text-[10px] font-bold mt-2 uppercase tracking-wider hidden sm:block ${
                      activeMilestone === idx ? "text-[#017ACA]" : "text-slate-400 group-hover:text-slate-600"
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
                        <div className="px-4 py-3 min-w-[90px] rounded-2xl bg-gradient-to-br from-[#00232A] to-[#017ACA] text-[#00FFE4] font-black text-sm flex items-center justify-center text-center shadow shrink-0">
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
                <span className="h-px w-10 bg-[#FDCD03]" />
                Operating Values
                <span className="h-px w-10 bg-[#FDCD03]" />
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
        </SideNavLayout>

        <DataLineDivider className="my-16" />

        <BrandCTA 
          title="Aligning Security and Public Value"
          description="Let us help you implement secure records modernisation and digital operations backed by empanelled quality standard guidelines."
          buttonText="Partner With Us"
          href="/contact"
        />
      </main>

      
      <AnthemRouteMedia slug="mission-vision" />
<Footer />
    </div>
  )
}

