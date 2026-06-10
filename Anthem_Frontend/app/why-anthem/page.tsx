"use client"
import { AnthemRouteMedia } from "@/components/anthemgt/AnthemRouteMedia";

import React from "react"
import { motion } from "framer-motion"
import { Brain, CheckCircle2, Clock, Database, Landmark, Leaf, Network, ShieldCheck, ChevronRight, XCircle } from "lucide-react"
import { Footer } from "@/components/Footer"
import { PageHero } from "@/components/corporate/PageHero"
import { SectionHeading } from "@/components/corporate/SectionHeading"
import { StatsStrip } from "@/components/corporate/StatsStrip"
import { InfoCard } from "@/components/corporate/InfoCard"
import { TiltedCard } from "@/components/reactbits/TiltedCard"
import { LogoLoop } from "@/components/reactbits/LogoLoop"
import { LogoOrbitPattern } from "@/components/corporate/brand-patterns/LogoOrbitPattern"
import { ArrowAccent } from "@/components/corporate/brand-patterns/ArrowAccent"
import { SectionWatermark } from "@/components/corporate/brand-patterns/SectionWatermark"
import { CardCornerMark } from "@/components/corporate/brand-patterns/CardCornerMark"
import { DataLineDivider } from "@/components/corporate/brand-patterns/DataLineDivider"
import { BrandCTA } from "@/components/corporate/brand-patterns/BrandCTA"
import { CountUpStat } from "@/components/corporate/CountUpStat"

const reasons = [
  {
    title: "Trusted by Judiciary",
    description: "Long-running paperless court and records modernisation work across Orissa High Court and district court environments.",
    icon: Landmark,
    tag: "310 courts",
  },
  {
    title: "Large-Scale Digitisation",
    description: "High-volume scanning, OCR, metadata indexing, and DMS workflows for secure handling of sensitive public records.",
    icon: Database,
    tag: "50 Cr+ pages",
  },
  {
    title: "AI-First Approach",
    description: "ExamFlow-style AI extraction, intelligent retrieval, face recognition, proctoring, and document analysis capabilities.",
    icon: Brain,
    tag: "60s extraction",
  },
  {
    title: "Security Track Record",
    description: "Secure archival, access control, audit trails, confidentiality-first exam operations, and controlled data transfer.",
    icon: ShieldCheck,
    tag: "Sensitive records",
  },
  {
    title: "Own Infrastructure",
    description: "State-of-the-art examination infrastructure in Bhubaneswar with large-scale capacity and local delivery teams.",
    icon: Network,
    tag: "20,000+ sq ft",
  },
  {
    title: "Sustainability Focus",
    description: "Digitisation reduces physical paper movement for courts, government departments, and academic institutions.",
    icon: Leaf,
    tag: "Paperless workflows",
  },
]

const comparisonData = [
  {
    feature: "Government & Judicial Scale",
    anthem: "25 Cr+ Pages Digitised across 310 Courts & 30 Districts",
    others: "Limited to small-scale departments",
  },
  {
    feature: "Authorized Assessment Hub",
    anthem: "TCS iON Authorized Hub (550+ Seats, 20k Sq Ft)",
    others: "Third-party rented spaces only",
  },
  {
    feature: "E-Governance Compliance",
    anthem: "Empanelled with Webel & CMGI for public consultancies",
    others: "Independent, non-empanelled status",
  },
  {
    feature: "Data Security History",
    anthem: "Zero data leaks across 30,000+ examinee sessions",
    others: "Vulnerable to generic hosting gaps",
  },
  {
    feature: "Automation Extraction",
    anthem: "Applied AI models (60-second metadata extraction)",
    others: "Manual indexing and slower turnaround",
  },
]

export default function WhyAnthemPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } },
  }

  return (
    <div className="flex min-h-screen flex-col bg-anthem-bg text-slate-800 relative overflow-hidden">
      <PageHero
        title="Why Anthem Global"
        description="Choose Anthem for proven public-sector execution, secure document transformation, AI-enabled workflows, and national-scale experience across judiciary, government, assessment, and enterprise programmes."
        image="/Anthem Assests/images_ban-whyanthem.jpg"
        video="/videos/office-tour.mp4"
        icon={CheckCircle2}
        stats={[
          { value: "99.9%", label: "Platform uptime SLA" },
          { value: "10,000+", label: "Exams conducted" },
        ]}
        darkTheme={true}
      />

      <main className="container mx-auto px-4 py-16 md:px-6 md:py-20 relative">
        {/* Subtle background watermarks */}
        <SectionWatermark className="top-[12%] left-[3%] opacity-[0.015]" size={390} />
        <SectionWatermark className="bottom-[8%] right-[2%] opacity-[0.02]" size={420} />

        {/* Brand Pillars Showcase in Hero Stagger */}
        <motion.div 
          className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto mb-16 relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            {
              title: "Integrity",
              description: "Transparent execution, data confidentiality, and secure delivery pathways for all judicial and public datasets.",
              border: "border-l-4 border-l-[#017ACA]"
            },
            {
              title: "Innovation",
              description: "Empowering state departments with advanced GIS systems, e-office systems, and AI proctoring engines.",
              border: "border-l-4 border-l-[#017ACA]"
            },
            {
              title: "Intelligence",
              description: "Transforming paper archives into structured, fully searchable repositories with dynamic automated OCR.",
              border: "border-l-4 border-l-anthem-yellow"
            }
          ].map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              variants={itemVariants}
              className={`p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm relative overflow-hidden group ${pillar.border}`}
              whileHover={{ y: -4, scale: 1.01 }}
            >
              <CardCornerMark position="top-right" />
              <span className="text-[10px] font-bold text-[#017ACA] uppercase tracking-wider font-mono">Pillar 0{idx + 1}</span>
              <h3 className="text-xl font-extrabold text-slate-800 mt-2 mb-3 tracking-tight">{pillar.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">{pillar.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Statistics highlights backed by custom orbit lines */}
        <div className="relative mb-20 max-w-6xl mx-auto rounded-2xl overflow-hidden border border-slate-200/80 bg-white shadow-sm p-1">
          <LogoOrbitPattern opacity={0.15} />
          <StatsStrip
            className="border-0 bg-transparent relative z-10"
            stats={[
              { value: "25 Cr+", label: "Judiciary pages", detail: "Digitised for court record modernisation" },
              { value: "30", label: "Districts covered", detail: "Court and government programmes" },
              { value: "550", label: "Exam seats", detail: "Own campus examination capacity" },
              { value: "300+", label: "Professionals", detail: "Delivery and technology teams" },
            ]}
          />
        </div>

        {/* Challenge to Proof to Impact Progress Track */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            eyebrow="Progressive Transformation"
            title="Our Delivery Journey Flow"
            description="How Anthem bridges high-stakes requirements with reliable, long-term public scale."
            align="center"
          />
          
          <div className="grid gap-6 md:grid-cols-5 max-w-5xl mx-auto items-center mt-10">
            
            {/* Step 1 */}
            <motion.div 
              className="md:col-span-1 flex flex-col items-center text-center p-5 rounded-2xl border border-slate-200/80 bg-white shadow-sm relative group"
              whileHover={{ scale: 1.03 }}
            >
              <CardCornerMark position="top-right" />
              <span className="text-[10px] uppercase font-bold text-slate-400 font-mono">01. Public Challenge</span>
              <h4 className="mt-2 text-sm font-extrabold text-slate-800 tracking-tight">Outdated Records</h4>
              <p className="mt-1.5 text-xs text-slate-500 leading-relaxed font-medium">Insecure paper systems and manual examination overheads.</p>
            </motion.div>

            {/* Divider Arrow */}
            <div className="md:col-span-1 flex items-center justify-center text-anthem-yellow py-2">
              <ArrowAccent size={22} direction="right" className="hidden md:block" />
              <ArrowAccent size={22} direction="down" className="block md:hidden" />
            </div>

            {/* Step 2 */}
            <motion.div 
              className="md:col-span-1 flex flex-col items-center text-center p-5 rounded-2xl border border-slate-200/80 bg-white shadow-sm relative group"
              whileHover={{ scale: 1.03 }}
            >
              <CardCornerMark position="top-right" />
              <span className="text-[10px] uppercase font-bold text-slate-400 font-mono">02. Anthem Solution</span>
              <h4 className="mt-2 text-sm font-extrabold text-slate-800 tracking-tight">Secure Operations</h4>
              <p className="mt-1.5 text-xs text-slate-500 leading-relaxed font-medium">High-volume industrial digitisation & smart CBT center deployment.</p>
            </motion.div>

            {/* Divider Arrow */}
            <div className="md:col-span-1 flex items-center justify-center text-anthem-yellow py-2">
              <ArrowAccent size={22} direction="right" className="hidden md:block" />
              <ArrowAccent size={22} direction="down" className="block md:hidden" />
            </div>

            {/* Step 3 */}
            <motion.div 
              className="md:col-span-1 flex flex-col items-center text-center p-5 rounded-2xl border border-slate-200/80 bg-white shadow-sm relative group"
              whileHover={{ scale: 1.03 }}
            >
              <CardCornerMark position="top-right" />
              <span className="text-[10px] uppercase font-bold text-[#017ACA] font-mono">03. High Impact</span>
              <h4 className="mt-2 text-sm font-extrabold text-slate-800 tracking-tight">Enterprise Success</h4>
              <p className="mt-1.5 text-xs text-slate-500 leading-relaxed font-medium">25 Cr+ pages catalogued, empanelled trust and certified scale.</p>
            </motion.div>

          </div>
        </motion.section>

        <DataLineDivider className="my-16" />

        {/* Compare Table comparing Anthem vs competitors */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            eyebrow="Comparative Analysis"
            title="Anthem Capability Redefining Security"
            description="Unlike standard agencies, Anthem integrates security, infrastructure, and compliance directly."
            align="center"
          />

          <div className="max-w-4xl mx-auto bg-white/85 backdrop-blur-sm rounded-2xl border border-white shadow-[0_18px_45px_-24px_rgba(0,59,102,0.35)] overflow-hidden relative group ring-1 ring-[#017ACA]/10">
            <CardCornerMark position="top-right" />
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs md:text-sm">
                <thead>
                  <tr className="bg-[#003B66] text-white border-b border-white/20">
                    <th className="p-4 md:p-5 font-bold uppercase tracking-wider text-[10px]">Capabilities Matrix</th>
                    <th className="p-4 md:p-5 font-bold uppercase tracking-wider text-[10px] text-anthem-yellow">Anthem Global</th>
                    <th className="p-4 md:p-5 font-bold uppercase tracking-wider text-[10px] text-white/65">Typical Vendors</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#017ACA]/10 bg-gradient-to-br from-white via-white/95 to-[#EAF6FC]/75 font-medium">
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/80 transition-colors">
                      <td className="p-4 md:p-5 text-slate-800 font-extrabold">{row.feature}</td>
                      <td className="p-4 md:p-5 text-[#017ACA] font-bold flex items-center gap-2">
                        <CheckCircle2 className="size-4 text-anthem-yellow shrink-0 fill-[#003B66]" />
                        <span>{row.anthem}</span>
                      </td>
                      <td className="p-4 md:p-5 text-slate-500 font-medium">{row.others}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.section>

        <DataLineDivider className="my-16" />

        {/* Reasons Grid with Corner Marks */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            eyebrow="Proof-Led Advantages"
            title="Reasons institutions rely on Anthem"
            description="Each reason is tied to a concrete delivery area from our company profile rather than generic claims."
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {reasons.map((reason) => (
              <TiltedCard key={reason.title} className="h-full" scale={1.01} maxRotate={3}>
                <div className="relative h-full group">
                  <CardCornerMark position="top-right" />
                  <InfoCard
                    icon={reason.icon}
                    title={reason.title}
                    description={reason.description}
                    tag={reason.tag}
                    className="h-full border-slate-200/80 bg-white"
                  />
                </div>
              </TiltedCard>
            ))}
          </div>
        </motion.section>

        <DataLineDivider className="my-16" />

        {/* Logo Loop Showcase section with corner pattern highlights */}
        <motion.section 
          className="mb-20 pt-8 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            eyebrow="Ecosystem of Excellence"
            title="Trusted by Leading Organizations"
            description="Our technological solutions are backed by alignments with key public bodies and technology enablers."
            align="center"
          />
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm max-w-6xl mx-auto relative group">
            <CardCornerMark position="top-right" />
            <CardCornerMark position="bottom-left" />
            <LogoLoop speed={25} pauseOnHover={true}>
              {[
                { name: "Orissa High Court", logo: "/Anthem Assests/client-logo_ohclogog.png" },
                { name: "East Coast Railway", logo: "/Anthem Assests/client-logo_East-Coast-Railway.png" },
                { name: "TCS iON", logo: "/Anthem Assests/images_ionlogo.jpg" },
                { name: "OCAC", logo: "/images/ocac-logo.png" },
                { name: "MSME Registered", logo: "/certifications/MSME.png" },
                { name: "CMGI Odisha", logo: "/Anthem Assests/client-logo_Modernizing-Government.png" },
                { name: "Startup India", logo: "/certifications/startup-india.png" },
                { name: "Startup Odisha", logo: "/certifications/startup-odisha.png" },
              ].map((partner, idx) => (
                <div 
                  key={idx} 
                  className="flex h-16 w-52 items-center justify-start rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-left text-xs font-bold text-slate-600 shadow-sm hover:border-anthem-blue/40 hover:text-primary transition-all duration-300 relative group gap-3 overflow-hidden"
                >
                  <CardCornerMark position="top-right" />
                  <div className="size-12 rounded bg-white p-1 flex items-center justify-center shrink-0 border border-slate-100 overflow-hidden">
                    <img src={partner.logo} alt={partner.name} className="size-full object-contain" />
                  </div>
                  <span className="truncate">{partner.name}</span>
                </div>
              ))}
            </LogoLoop>
          </div>
        </motion.section>

        {/* Execution Model Card with Watermark */}
        <motion.section 
          className="max-w-6xl mx-auto rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:p-12 relative overflow-hidden group mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionWatermark className="bottom-[-30px] right-[-30px] opacity-[0.02]" size={300} />
          <CardCornerMark position="top-right" />
          <div className="grid gap-8 md:grid-cols-[1fr_300px] md:items-center relative z-10">
            <div>
              <h2 className="text-2xl font-black text-slate-800 md:text-3xl tracking-tight">Execution model built for high-stakes work</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-500 font-medium">
                Anthem&apos;s strongest differentiation is the combination of technology development, operations infrastructure, scanning workflows, and secure delivery teams under one execution model.
              </p>
            </div>
            <div className="grid gap-3">
              {["Secure by design", "Operational continuity", "Customisable workflows", "Long-term support"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 text-xs font-extrabold text-slate-700 shadow-sm hover:border-anthem-blue/20 hover:bg-white transition-all">
                  <Clock className="size-4 text-primary shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <BrandCTA 
          className="mt-20"
          title="Ready to modernise your operations?"
          description="Explore our empanelment guidelines, high-volume operational centers, and compliant service levels."
          buttonText="Contact Our Experts"
          href="/contact"
        />
      </main>

      
      <AnthemRouteMedia slug="why-anthem" />
<Footer />
    </div>
  )
}

