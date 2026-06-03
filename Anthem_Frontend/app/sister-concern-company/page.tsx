"use client"
import { AnthemRouteMedia } from "@/components/anthemgt/AnthemRouteMedia";

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Footer } from "@/components/Footer"
import { PageHero } from "@/components/corporate/PageHero"
import { SectionHeading } from "@/components/corporate/SectionHeading"
import { TiltedCard } from "@/components/reactbits/TiltedCard"
import { Building2, Network, Globe, GraduationCap, Users, ChevronRight, X, Play } from "lucide-react"
import { CardCornerMark } from "@/components/corporate/brand-patterns/CardCornerMark"
import { SectionWatermark } from "@/components/corporate/brand-patterns/SectionWatermark"
import { LogoOrbitPattern } from "@/components/corporate/brand-patterns/LogoOrbitPattern"
import { DataLineDivider } from "@/components/corporate/brand-patterns/DataLineDivider"
import { BrandCTA } from "@/components/corporate/brand-patterns/BrandCTA"

const sisterOrganizations = [
  {
    name: "Anthem India",
    label: "Enterprise IT Services",
    description: "Our regional software engineering power, managing e-governance deployments, custom database integrations, and national public records management solutions.",
    icon: Building2,
    tag: "Domestic Delivery",
    color: "from-blue-600 to-[#017ACA]",
    video: "/videos/collab.mp4",
    longDescription: "Anthem India serves as the primary software engineering and execution engine for central and state government projects. We handle the design and deployment of secure databases, OCR conversion modules, and high-stakes document indexing. Our workflows are optimized for large-scale operations with zero-compromise security guidelines.",
    capabilities: ["Database Integration", "E-Governance Deployments", "Metadata Indexing", "Search Systems"]
  },
  {
    name: "Anthem Sai",
    label: "Assessment & CBT Solutions",
    description: "Specialized division managing ExamFlow computer-based testing, question bank security, AI-proctored assessment software, and state-of-the-art center infrastructure.",
    icon: GraduationCap,
    tag: "Assessment Division",
    color: "from-blue-600 to-[#017ACA]",
    video: "/videos/data-flow.mp4",
    longDescription: "Anthem Sai is dedicated to secure computer-based assessment services. We operate the authorized TCS iON examination center in Bhubaneswar. Our division manages hardware compliance, local networks, secure IP routing, biometric entry proctoring, and encrypted question-bank storage to deliver error-free examinations.",
    capabilities: ["CBT Administration", "Biometric Proctoring", "IP-Locked Routing", "Exam Compliance"]
  },
  {
    name: "Anthem Global Proprietary",
    label: "Global Outsourcing & GIS",
    description: "International outreach arm specializing in spatial engineering, aerial photogrammetry, and secure cloud migration for North American and European enterprise clients.",
    icon: Globe,
    tag: "Global Advisory",
    color: "from-blue-600 to-[#017ACA]",
    video: "/videos/office-tour.mp4",
    longDescription: "Our international outsourcing division handles advanced spatial engineering and remote infrastructure management. We specialize in point cloud vectorization, high-fidelity corridor mapping, and photogrammetry datasets. We support enterprises globally with remote resources and strict security protocols.",
    capabilities: ["Spatial Engineering", "DTM Extraction", "Corridor Mapping", "Cloud Migration"]
  },
  {
    name: "Jagruti & Prasanti",
    label: "CSR & Skill Development",
    description: "Empanelled organizations delivering massive skill development initiatives to rural youth, boosting technical literacy and promoting self-reliant entrepreneurship.",
    icon: Users,
    tag: "Social Venture",
    color: "from-blue-600 to-[#017ACA]",
    video: "/videos/testimonial.mp4",
    longDescription: "We believe in digital inclusion and grass-roots skill development. Under various state empanelments, Jagruti & Prasanti conduct rural youth computer literacy drives, vocational technical programs, and entrepreneurship counseling to create sustainable local employment paths.",
    capabilities: ["Skill Development", "Vocational Literacy", "Youth Training Drives", "Community Mentorship"]
  },
  {
    name: "CSI Bhubaneswar Chapter",
    label: "Professional Association",
    description: "Strategic research and student alignment chapter fostering tech summits, academic mentorship programs, and innovation conventions in Odisha.",
    icon: Network,
    tag: "Ecosystem Partner",
    color: "from-blue-600 to-[#017ACA]",
    video: "/videos/collab.mp4",
    longDescription: "As part of our commitment to the technological ecosystem, we align closely with the Computer Society of India (CSI). We host regional tech symposiums, sponsor academic projects, mentor aspiring developers, and bridge academic talent with senior corporate advisory programs.",
    capabilities: ["Tech Summit Hosting", "Academic Alliances", "Innovation Mentorship", "Technical Research"]
  }
]

export default function SisterOrganizationsPage() {
  const [selectedOrg, setSelectedOrg] = useState<typeof sisterOrganizations[0] | null>(null)

  // Floating dots/particles for tech look
  const particles = Array.from({ length: 15 })

  return (
    <div className="flex min-h-screen flex-col bg-[#F7FAFB] text-slate-800 relative overflow-hidden">
      
      {/* Animated Floating Particles Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {particles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#00FFE4]/15"
            style={{
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * -100 - 50],
              opacity: [0.1, 0.6, 0.1],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <PageHero
        title="Sister Organizations"
        description="Collaborative network of companies and professional chapters that shape Anthem Global's technological ecosystem."
        image="/Anthem Assests/images_company-profile.jpg"
        icon={Network}
        stats={[
          { value: "5 Group", label: "Entities & Chapters" },
          { value: "Global", label: "Delivery Footprint" },
        ]}
        darkTheme={true}
      />

      <main className="container mx-auto px-4 py-16 md:px-6 md:py-20 relative z-10">
        <SectionWatermark className="top-[15%] right-[2%] opacity-[0.015]" size={420} />
        <SectionWatermark className="bottom-[10%] left-[2%] opacity-[0.02]" size={380} />
        
        {/* Soft background orbit line overlay */}
        <LogoOrbitPattern opacity={0.12} className="absolute inset-0 top-[20%] h-[50%]" />

        {/* Interactive SVG Network Graph Block */}
        <section className="mb-20 max-w-5xl mx-auto">
          <SectionHeading
            eyebrow="Global Connection"
            title="Anthem Ecosystem Grid"
            description="Visualizing the high-performance hubs and divisions that make up our group operations."
            align="center"
          />

          <div className="relative h-64 md:h-80 bg-[#00232A] rounded-2xl border border-[#00FFE4]/15 flex items-center justify-center overflow-hidden shadow-lg">
            {/* Pulsing grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,228,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,228,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              {/* Pulsing connection lines */}
              <motion.line
                x1="20%" y1="50%" x2="50%" y2="50%"
                stroke="#00FFE4" strokeWidth="1.5" strokeOpacity="0.4"
                strokeDasharray="5,5"
                animate={{ strokeDashoffset: [-20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              <motion.line
                x1="50%" y1="50%" x2="80%" y2="50%"
                stroke="#00FFE4" strokeWidth="1.5" strokeOpacity="0.4"
                strokeDasharray="5,5"
                animate={{ strokeDashoffset: [-20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              <motion.line
                x1="50%" y1="25%" x2="50%" y2="50%"
                stroke="#FDCD03" strokeWidth="1.5" strokeOpacity="0.4"
                strokeDasharray="5,5"
                animate={{ strokeDashoffset: [20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              <motion.line
                x1="50%" y1="50%" x2="50%" y2="75%"
                stroke="#FDCD03" strokeWidth="1.5" strokeOpacity="0.4"
                strokeDasharray="5,5"
                animate={{ strokeDashoffset: [20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Curved lines representation */}
              <path
                d="M 20,50 Q 50,0 80,50"
                stroke="#017ACA" strokeWidth="1" strokeOpacity="0.2" fill="none"
                transform="scale(1) translate(0, 0)"
              />
            </svg>

            {/* Nodes */}
            <div className="absolute inset-0 flex items-center justify-between px-8 md:px-16 text-center select-none text-xs font-black">
              <div className="flex flex-col items-center">
                <div className="size-12 rounded-xl bg-slate-900 border border-[#00FFE4] text-[#00FFE4] flex items-center justify-center shadow-md">
                  <Globe className="size-5" />
                </div>
                <span className="text-white mt-2 block text-[10px]">Global GIS</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="size-12 rounded-xl bg-slate-900 border border-[#FDCD03] text-[#FDCD03] flex items-center justify-center shadow-md">
                  <GraduationCap className="size-5" />
                </div>
                <span className="text-white mt-2 block text-[10px]">CBT Exams</span>
              </div>

              {/* Central HQ Hub */}
              <div className="flex flex-col items-center relative">
                <div className="size-16 rounded-2xl bg-gradient-to-br from-[#00232A] to-[#017ACA] border-2 border-[#00FFE4] text-white flex items-center justify-center shadow-lg relative group">
                  <div className="absolute inset-0 rounded-2xl bg-[#00FFE4]/10 animate-ping pointer-events-none" />
                  <Building2 className="size-7" />
                </div>
                <span className="text-white mt-2 block font-extrabold text-[11px] tracking-wide">Anthem HQ</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="size-12 rounded-xl bg-slate-900 border border-[#00FFE4] text-[#00FFE4] flex items-center justify-center shadow-md">
                  <Users className="size-5" />
                </div>
                <span className="text-white mt-2 block text-[10px]">CSR Training</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="size-12 rounded-xl bg-slate-900 border border-[#FDCD03] text-[#FDCD03] flex items-center justify-center shadow-md">
                  <Network className="size-5" />
                </div>
                <span className="text-white mt-2 block text-[10px]">CSI Chapter</span>
              </div>
            </div>
          </div>
        </section>

        {/* Deep teal section header band wrapper */}
        <div className="bg-[#00232A] rounded-2xl p-8 border border-[#00FFE4]/15 mb-12 shadow-md relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-[linear-gradient(to_left,rgba(0,255,228,0.02)_1px,transparent_1px)] pointer-events-none" />
          <SectionHeading
            eyebrow="Anthem Group Ecosystem"
            title="Ecosystem of Collaborative Companies"
            description="Our sister concerns and professional affiliations extend our capabilities from local skill training to high-end global spatial engineering."
            align="center"
            darkTheme={true}
            className="mb-0"
          />
        </div>

        {/* Entities Grid with clean corporate light cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto items-stretch justify-center mb-16 relative z-10">
          {sisterOrganizations.map((org) => {
            const IconComponent = org.icon
            return (
              <div 
                key={org.name} 
                className="cursor-pointer h-full"
                onClick={() => setSelectedOrg(org)}
              >
                <TiltedCard className="h-full" scale={1.01} maxRotate={3}>
                  <div className="group h-full rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm hover:shadow-md hover:border-[#00FFE4]/30 transition-all flex flex-col justify-between relative">
                    <CardCornerMark position="top-right" />
                    <div>
                      <div className="flex justify-between items-start mb-5">
                        <div className="size-11 rounded-xl bg-slate-50 border border-slate-100 p-2.5 text-[#017ACA] shadow-sm flex items-center justify-center group-hover:bg-[#00232A] group-hover:text-[#00FFE4] transition-all">
                          <IconComponent className="size-6 shrink-0" />
                        </div>
                        <span className="text-[10px] font-bold text-slate-500 bg-slate-50 border border-slate-100 px-3 py-1 rounded-full">
                          {org.tag}
                        </span>
                      </div>
                      <h3 className="text-lg font-extrabold text-slate-800 group-hover:text-primary transition-colors tracking-tight">{org.name}</h3>
                      <p className="mt-2 text-xs uppercase tracking-wider font-bold text-muted-foreground/80">{org.label}</p>
                      <p className="mt-4 text-sm leading-6 text-slate-500 font-medium">{org.description}</p>
                    </div>
                    <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-bold font-mono">
                      <span className="text-[#017ACA] flex items-center gap-1 group-hover:underline">
                        <span>View Walkthrough</span>
                        <Play className="size-3 text-[#FDCD03]" />
                      </span>
                      <ChevronRight className="size-4 text-slate-400 group-hover:translate-x-1 group-hover:text-[#017ACA] transition-all" />
                    </div>
                  </div>
                </TiltedCard>
              </div>
            )
          })}
        </div>

        <DataLineDivider className="my-16" />

        <BrandCTA 
          title="Bridging high-stakes operations"
          description="Access our collaborative partner networks, multi-state resources, and unified ICT consulting groups."
          buttonText="Contact Corporate Office"
          href="/contact"
        />
      </main>

      {/* Detail walkthrough modal */}
      <AnimatePresence>
        {selectedOrg ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal backdrop overlay */}
            <motion.div 
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedOrg(null)}
            />
            
            {/* Modal body */}
            <motion.div 
              className="relative bg-white border border-slate-200 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl z-10 flex flex-col"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              {/* Top border colored line */}
              <div className="h-2 bg-gradient-to-r from-[#00232A] via-[#00FFE4] to-[#FDCD03]" />
              
              {/* Close Button */}
              <button 
                onClick={() => setSelectedOrg(null)}
                className="absolute top-4 right-4 z-20 size-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors focus:outline-none"
              >
                <X className="size-4" />
              </button>

              {/* Video container if available */}
              {selectedOrg.video ? (
                <div className="relative aspect-video w-full bg-slate-900 border-b border-slate-100">
                  <video 
                    src={selectedOrg.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-slate-900/60 backdrop-blur text-[#00FFE4] text-[10px] font-mono px-3 py-1 rounded border border-[#00FFE4]/20">
                    AutoPlay Walkthrough Preview
                  </div>
                </div>
              ) : null}

              {/* Text content area */}
              <div className="p-6 md:p-8 space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-[10px] font-bold text-[#017ACA] uppercase tracking-wider font-mono bg-blue-50 border border-blue-100 px-3 py-0.5 rounded-full">
                      {selectedOrg.tag}
                    </span>
                    <h3 className="text-2xl font-black text-slate-800 tracking-tight mt-1">{selectedOrg.name}</h3>
                  </div>
                </div>

                <p className="text-xs uppercase tracking-wider font-extrabold text-[#FDCD03] bg-[#00232A] px-3 py-1.5 rounded w-fit border border-[#00FFE4]/10">
                  {selectedOrg.label}
                </p>

                <p className="text-sm leading-relaxed text-slate-600 font-medium">
                  {selectedOrg.longDescription}
                </p>

                {/* Capabilities Badges */}
                <div className="space-y-2 pt-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Division Capabilities</span>
                  <div className="flex flex-wrap gap-2">
                    {selectedOrg.capabilities.map((cap) => (
                      <span key={cap} className="text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200 shadow-sm">
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      
      <AnthemRouteMedia slug="sister-concern-company" />
<Footer />
    </div>
  )
}

