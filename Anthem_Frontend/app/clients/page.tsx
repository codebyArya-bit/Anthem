"use client"
import { AnthemRouteMedia } from "@/components/anthemgt/AnthemRouteMedia";

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Footer } from "@/components/Footer"
import { PageHero } from "@/components/corporate/PageHero"
import { SectionHeading } from "@/components/corporate/SectionHeading"
import { StatsStrip } from "@/components/corporate/StatsStrip"
import { TiltedCard } from "@/components/reactbits/TiltedCard"
import { LogoLoop } from "@/components/reactbits/LogoLoop"
import { Badge } from "@/components/ui/badge"
import { Landmark, GraduationCap, Building2, ChevronRight, Play } from "lucide-react"
import { CardCornerMark } from "@/components/corporate/brand-patterns/CardCornerMark"
import { ArrowAccent } from "@/components/corporate/brand-patterns/ArrowAccent"
import { SectionWatermark } from "@/components/corporate/brand-patterns/SectionWatermark"
import { LogoOrbitPattern } from "@/components/corporate/brand-patterns/LogoOrbitPattern"
import { DataLineDivider } from "@/components/corporate/brand-patterns/DataLineDivider"
import { BrandCTA } from "@/components/corporate/brand-patterns/BrandCTA"
import { CountUpStat } from "@/components/corporate/CountUpStat"

const sectors = ["All Sectors", "Judiciary & Legal", "Government & E-Governance", "Education & Enterprise"]

const clientsList = [
  {
    name: "Orissa High Court",
    sector: "Judiciary & Legal",
    description: "Exclusive strategic partner for over a decade implementing state-wide paperless court initiatives and judicial digitization.",
    icon: Landmark,
    logo: "/Anthem Assests/client-logo_ohclogog.png",
    color: "from-blue-600 to-[#017ACA]",
    metric: "310 Courts"
  },
  {
    name: "Center for Judicial Archives",
    sector: "Judiciary & Legal",
    description: "High Court of Orissa partner for high-volume digitization and scanning of historical judicial records and legal heritage.",
    icon: Landmark,
    logo: "/Anthem Assests/client-logo_ohclogog.png",
    color: "from-blue-600 to-[#017ACA]",
    metric: "Judicial Archives"
  },
  {
    name: "Government of Odisha",
    sector: "Government & E-Governance",
    description: "Scanning, digitising and indexing massive workflows for the OSWAS & OJWAS systems across all 40 administrative departments.",
    icon: Building2,
    logo: "/Anthem Assests/client-logo_Modernizing-Government.png",
    color: "from-blue-600 to-[#017ACA]",
    metric: "40 Departments"
  },
  {
    name: "Government of West Bengal",
    sector: "Government & E-Governance",
    description: "District-wide land records data digitization and archival storage across 5 administrative districts.",
    icon: Building2,
    logo: "/Anthem Assests/images_webel_oppurtunities.jpg",
    color: "from-blue-600 to-[#017ACA]",
    metric: "5 Districts"
  },
  {
    name: "Government of Bihar",
    sector: "Government & E-Governance",
    description: "High-volume data conversion and digitization of state land records across 5 administrative districts.",
    icon: Building2,
    logo: "/Anthem Assests/client-logo_Panchayatiraj.png",
    color: "from-blue-600 to-[#017ACA]",
    metric: "5 Districts"
  },
  {
    name: "East Coast Railway",
    sector: "Government & E-Governance",
    description: "Providing custom J2EE systems, database validation services, and secure e-office portal integrations for the East Coast zone.",
    icon: Building2,
    logo: "/Anthem Assests/client-logo_East-Coast-Railway.png",
    color: "from-blue-600 to-[#017ACA]",
    metric: "East Coast Zone"
  },
  {
    name: "Eastern Railway",
    sector: "Government & E-Governance",
    description: "Providing custom J2EE systems, database validation services, and secure e-office portal integrations for the Eastern zone.",
    icon: Building2,
    logo: "/Anthem Assests/client-logo_East-Coast-Railway.png",
    color: "from-blue-600 to-[#017ACA]",
    metric: "Eastern Zone"
  },
  {
    name: "Consumer Dispute Redressal Commission",
    sector: "Government & E-Governance",
    description: "Digitisation and portal records management across the State Commission and all 30 District Forums in Odisha.",
    icon: Building2,
    logo: "/Anthem Assests/client-logo_Modernizing-Government.png",
    color: "from-blue-600 to-[#017ACA]",
    metric: "30 District Forums"
  },
  {
    name: "KIIT University",
    sector: "Education & Enterprise",
    description: "Academic assessment proctoring, online CBT mock tests, and student record database integration.",
    icon: GraduationCap,
    logo: "/Anthem Assests/client-logo_KIIT-University.png",
    color: "from-blue-600 to-[#017ACA]",
    metric: "550+ Seats"
  },
  {
    name: "TCS iON Strategic Alliance",
    sector: "Education & Enterprise",
    description: "Empowered delivery center conducting major computer-based tests including GATE, CAT, AIIMS, JEE Advanced, OJEE, IBPS, SSC, Indian Army, and Supreme Court.",
    icon: GraduationCap,
    logo: "/Anthem Assests/images_ionlogo.jpg",
    color: "from-blue-600 to-[#017ACA]",
    metric: "10,000+ Exams"
  },
  {
    name: "Tata Consultancy Services (TCS)",
    sector: "Education & Enterprise",
    description: "Key technology and corporate client for assessment execution and software consulting workflows.",
    icon: Building2,
    logo: "/Anthem Assests/images_ionlogo.jpg",
    color: "from-blue-600 to-[#017ACA]",
    metric: "Corporate Client"
  },
  {
    name: "HCL Technologies",
    sector: "Education & Enterprise",
    description: "Strategic enterprise technology client for backend software consulting and GIS applications.",
    icon: Building2,
    logo: "/image/hcl_logo.svg",
    color: "from-blue-600 to-[#017ACA]",
    metric: "Corporate Partner"
  },
  {
    name: "HP Inc.",
    sector: "Education & Enterprise",
    description: "Corporate hardware infrastructure client and system engineering collaboration partner.",
    icon: Building2,
    logo: "/image/hp_logo.svg",
    color: "from-blue-600 to-[#017ACA]",
    metric: "Corporate Partner"
  },
  {
    name: "Odisha Computer Application Centre (OCAC)",
    sector: "Education & Enterprise",
    description: "Empanelled technology agency executing government-notified data digitization, scanning, and software workflows.",
    icon: Building2,
    logo: "/Anthem Assests/images_Logo-de-CorelDRAW-X7_full.png",
    color: "from-blue-600 to-[#017ACA]",
    metric: "Empanelled Partner"
  }
]

export default function ClientsPage() {
  const [activeSector, setActiveSector] = useState("All Sectors")

  const filteredClients = activeSector === "All Sectors"
    ? clientsList
    : clientsList.filter(c => c.sector === activeSector)

  const midIndex = Math.ceil(clientsList.length / 2)
  const loopOneClients = clientsList.slice(0, midIndex)
  const loopTwoClients = clientsList.slice(midIndex)

  return (
    <div className="flex min-h-screen flex-col bg-[#F7FAFB] text-slate-800 relative overflow-hidden">
      <PageHero
        title="Our Clients"
        description="Trusted by top judiciary bodies, central and state government departments, leading universities, and global enterprises to execute high-stakes digital programs."
        image="/Anthem Assests/images_company-profile.jpg"
        video="/videos/collab.mp4"
        icon={Landmark}
        stats={[
          { value: "18+ Major", label: "Public clients" },
          { value: "50 Cr+", label: "Pages digitised" },
        ]}
        darkTheme={true}
      />

      <main className="container mx-auto px-4 py-16 md:px-6 md:py-20 relative">
        {/* Soft background watermarks */}
        <SectionWatermark className="top-[12%] right-[2%] opacity-[0.015]" size={420} />
        <SectionWatermark className="bottom-[18%] left-[2%] opacity-[0.02]" size={380} />
        
        {/* Dark teal trust section with client loops and stats */}
        <div className="bg-[#00232A] rounded-3xl p-6 md:p-8 border border-[#00FFE4]/15 mb-20 shadow-lg relative overflow-hidden">
          <LogoOrbitPattern opacity={0.25} />
          
          <SectionHeading
            eyebrow="Ecosystem"
            title="Trusted Ecosystem Loop"
            description="Explore our massive network of public, legal, and academic clients scrolling infinitely in opposite directions."
            align="center"
            darkTheme={true}
            className="mb-0"
          />
          
          <div className="rounded-2xl bg-[#00232A]/50 border border-[#00FFE4]/10 p-6 space-y-4 relative group z-10 mt-6">
            <CardCornerMark position="top-right" />
            {/* Track 1: Leftward */}
            <LogoLoop speed={35} direction="left" pauseOnHover={true}>
              {loopOneClients.map((c, idx) => (
                <div 
                  key={idx} 
                  className="flex h-16 w-56 items-center justify-start rounded-xl border border-[#00FFE4]/10 bg-[#00232A] px-4 text-left text-xs font-bold text-[#A9C1C7] shadow-sm hover:border-[#00FFE4]/40 hover:text-white transition-all duration-300 relative group gap-3 overflow-hidden"
                >
                  <CardCornerMark position="top-right" />
                  {c.logo ? (
                    <div className="size-12 rounded bg-white/10 p-1 flex items-center justify-center shrink-0 overflow-hidden">
                      <img src={c.logo} alt={c.name} className="size-full object-contain" loading="lazy" decoding="async" />
                    </div>
                  ) : (
                    <span className="shrink-0 size-1.5 rounded-full bg-[#00FFE4]" />
                  )}
                  <span className="truncate">{c.name}</span>
                </div>
              ))}
            </LogoLoop>

            {/* Track 2: Rightward */}
            <LogoLoop speed={35} direction="right" pauseOnHover={true}>
              {loopTwoClients.map((c, idx) => (
                <div 
                  key={idx} 
                  className="flex h-16 w-56 items-center justify-start rounded-xl border border-[#00FFE4]/10 bg-[#00232A] px-4 text-left text-xs font-bold text-[#A9C1C7] shadow-sm hover:border-[#00FFE4]/40 hover:text-white transition-all duration-300 relative group gap-3 overflow-hidden"
                >
                  <CardCornerMark position="top-right" />
                  {c.logo ? (
                    <div className="size-12 rounded bg-white/10 p-1 flex items-center justify-center shrink-0 overflow-hidden">
                      <img src={c.logo} alt={c.name} className="size-full object-contain" loading="lazy" decoding="async" />
                    </div>
                  ) : (
                    <span className="shrink-0 size-1.5 rounded-full bg-[#00FFE4]" />
                  )}
                  <span className="truncate">{c.name}</span>
                </div>
              ))}
            </LogoLoop>
          </div>
        </div>

        {/* Case Study / Editorial Visual Highlight Section with Video */}
        <section className="mb-20 max-w-6xl mx-auto relative z-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm relative group overflow-hidden">
            <CardCornerMark position="top-right" />
            <CardCornerMark position="bottom-left" />
            <div className="grid gap-8 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7 space-y-4">
                <SectionHeading
                  eyebrow="Judicial Modernisation"
                  title="Orissa High Court Paperless Court Project"
                  description="Our landmark digitisation program for the Orissa High Court represents one of the largest judicial records transformations in India."
                  className="mb-0"
                />
                <p className="text-sm leading-7 text-slate-500 mt-4 font-medium">
                  Anthem Global successfully scanned, OCR-indexed, and archived over <strong>25+ Crore legal case pages</strong> across the Orissa High Court and all 30 district courts, transitioning the judicial registry to a high-speed, secure digital e-office ecosystem.
                </p>
                
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/50 p-4 shadow-sm relative group font-mono text-xs">
                    <CardCornerMark position="top-right" />
                    <Landmark className="size-8 text-[#017ACA] shrink-0" />
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 block uppercase">Scope</span>
                      <strong className="text-xs font-black text-slate-700">310 courts state-wide</strong>
                    </div>
                  </div>
                  
                  {/* Arrow accent guiding the timeline progression */}
                  <div className="text-[#FDCD03] hidden sm:block">
                    <ArrowAccent size={22} direction="right" />
                  </div>
                  
                  <div className="rounded-xl border border-[#FDCD03]/35 bg-amber-50/40 p-4 shadow-sm font-mono text-xs">
                    <span className="text-[10px] font-bold text-amber-600 block uppercase">Timeline</span>
                    <strong className="text-xs font-black text-amber-700">Active Modernisation Completed</strong>
                  </div>
                </div>
              </div>

              {/* Muted AutoPlaying Case Study Video Walkthrough */}
              <div className="lg:col-span-5 relative w-full h-56 rounded-xl overflow-hidden border border-slate-200 shadow-inner group">
                <video 
                  src="/videos/collab.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                  <span className="text-white text-[10px] font-mono font-bold flex items-center gap-1.5">
                    <Play className="size-3 text-[#00FFE4]" /> Muted Video Walkthrough
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Strip with background orbits */}
        <div className="relative mb-20 max-w-6xl mx-auto rounded-2xl border border-slate-200 bg-white p-1 shadow-sm overflow-hidden group">
          <LogoOrbitPattern opacity={0.15} />
          <CardCornerMark position="top-right" />
          <StatsStrip
            className="border-0 bg-transparent relative z-10"
            stats={[
              { value: "25 Cr+", label: "Judiciary pages", detail: "Orissa High Court and District Courts digitised" },
              { value: "310", label: "Courts paperless", detail: "State-wide court registry systems operational" },
              { value: "30", label: "Districts covered", detail: "Active e-governance deployment infrastructure" },
              { value: "10,000+", label: "Exams conducted", detail: "CBT assessments powered securely with TCS iON" },
            ]}
          />
        </div>

        <DataLineDivider className="my-16" />

        {/* Filtered Clients Grid */}
        <section className="border-t border-slate-200/60 pt-16 relative z-10">
          <div className="max-w-6xl mx-auto mb-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <SectionHeading
              eyebrow="Portfolio"
              title="All Client Engagements"
              description="Filter our detailed case registries across ministries, railways, high courts, and universities."
              className="mb-0"
            />
            
            {/* Sliding Framer Motion Filter Chips */}
            <div className="flex flex-wrap gap-2 relative bg-slate-100 p-1.5 rounded-full border border-slate-200 text-xs font-bold w-fit">
              {sectors.map((sec) => (
                <button
                  key={sec}
                  onClick={() => setActiveSector(sec)}
                  className="px-4 py-2 rounded-full relative transition-colors focus:outline-none select-none"
                >
                  <span className={`relative z-10 transition-colors ${activeSector === sec ? "text-white" : "text-slate-600 hover:text-slate-800"}`}>
                    {sec}
                  </span>
                  {activeSector === sec ? (
                    <motion.div 
                      layoutId="activeSectorChip"
                      className="absolute inset-0 bg-[#00232A] rounded-full z-0 border border-[#00FFE4]/20"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                  ) : null}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto items-stretch relative z-10">
            <AnimatePresence mode="popLayout">
              {filteredClients.map((client) => {
                const IconComponent = client.icon
                return (
                  <motion.div
                    key={client.name}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <TiltedCard className="h-full" scale={1.01} maxRotate={3}>
                      <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-primary/20 transition-all flex flex-col justify-between relative">
                        <CardCornerMark position="top-right" />
                        <div>
                          <div className="flex justify-between items-start mb-5">
                            <div className="size-16 rounded-xl bg-slate-50 border border-slate-100 p-1.5 text-primary shadow-sm flex items-center justify-center group-hover:bg-white group-hover:border-primary/20 transition-all overflow-hidden">
                              {client.logo ? (
                                <img src={client.logo} alt={client.name} className="size-full object-contain" loading="lazy" decoding="async" />
                              ) : (
                                <IconComponent className="size-8 shrink-0" />
                              )}
                            </div>
                            <Badge variant="anthem" className="rounded-md border border-[#00FFE4]/25 bg-slate-900 font-extrabold text-[10px] text-[#00FFE4]">
                              <CountUpStat value={client.metric} />
                            </Badge>
                          </div>
                          <h3 className="text-base font-extrabold text-slate-800 group-hover:text-primary transition-colors tracking-tight">{client.name}</h3>
                          <p className="mt-2 text-[10px] uppercase tracking-wider font-extrabold text-muted-foreground/80">{client.sector}</p>
                          <p className="mt-4 text-sm leading-6 text-slate-500 font-medium">{client.description}</p>
                        </div>
                        <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-primary border-t border-slate-100 pt-4 justify-between w-full font-mono">
                          <span>Verified Scale Project</span>
                          <ChevronRight className="size-3.5 group-hover:translate-x-1 transition-transform text-slate-400 group-hover:text-[#017ACA]" />
                        </div>
                      </div>
                    </TiltedCard>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>
        </section>

        <DataLineDivider className="my-16" />

        <BrandCTA 
          title="Empaneled with CMGI and Webel"
          description="Read our empanelment details, scan capacities, and delivery schedules to verify how we handle e-governance systems."
          buttonText="Contact Alliances Office"
          href="/contact"
        />
      </main>

      
      <AnthemRouteMedia slug="clients" />
<Footer />
    </div>
  )
}

