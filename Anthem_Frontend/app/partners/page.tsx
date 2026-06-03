"use client"
import { AnthemRouteMedia } from "@/components/anthemgt/AnthemRouteMedia";

import React, { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Footer } from "@/components/Footer"
import { PageHero } from "@/components/corporate/PageHero"
import { SectionHeading } from "@/components/corporate/SectionHeading"
import { FilterChips } from "@/components/corporate/FilterChips"
import { TiltedCard } from "@/components/reactbits/TiltedCard"
import { LogoLoop } from "@/components/reactbits/LogoLoop"
import { Handshake, Cpu, ShieldCheck, Database, Eye, Server, ChevronRight, Award, UploadCloud, X, Check, MapPin, ArrowRight } from "lucide-react"
import { CardCornerMark } from "@/components/corporate/brand-patterns/CardCornerMark"
import { ArrowAccent } from "@/components/corporate/brand-patterns/ArrowAccent"
import { SectionWatermark } from "@/components/corporate/brand-patterns/SectionWatermark"
import { LogoOrbitPattern } from "@/components/corporate/brand-patterns/LogoOrbitPattern"
import { DataLineDivider } from "@/components/corporate/brand-patterns/DataLineDivider"
import { BrandCTA } from "@/components/corporate/brand-patterns/BrandCTA"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { toast, Toaster } from "sonner"
import { CountUpStat } from "@/components/corporate/CountUpStat"

const categories = ["All Capabilities", "Assessment Systems", "Security & Biometrics", "Ops & Infrastructure"]

const collaborationPillars = [
  {
    title: "Computer Based Testing (CBT)",
    category: "Assessment Systems",
    description: "In collaboration with TCS iON, we host major university entrance exams, public service recruitment, and corporate assessments at a massive scale.",
    icon: Cpu,
    color: "from-blue-600 to-[#017ACA]",
  },
  {
    title: "Biometric Face Proctoring",
    category: "Security & Biometrics",
    description: "Integrating specialized biometric hardware and face-matching algorithms to prevent proxy examinees and secure the assessment cycle.",
    icon: ShieldCheck,
    color: "from-blue-600 to-[#017ACA]",
  },
  {
    title: "IP-Locked Secure Routing",
    category: "Ops & Infrastructure",
    description: "High-integrity, secure corporate firewall structures and isolated LAN routing configurations to safeguard digital exam question distribution.",
    icon: Server,
    color: "from-blue-600 to-[#017ACA]",
  },
  {
    title: "Live Audit & Surveillance",
    category: "Security & Biometrics",
    description: "Centralized live CCTV monitoring systems synced with remote security audits to maintain 100% test center compliance and transparency.",
    icon: Eye,
    color: "from-blue-600 to-[#017ACA]",
  },
  {
    title: "Encrypted Storage Archives",
    category: "Ops & Infrastructure",
    description: "Secure database cluster replication and storage systems providing rapid auditing logs and encrypted test-transaction safety.",
    icon: Database,
    color: "from-blue-600 to-[#017ACA]",
  }
]

const certifiedFacets = [
  { text: "TCS iON Certified Center" },
  { text: "550+ Active Exam Seats" },
  { text: "Secure IP-Locked LAN" },
  { text: "UPS Power Backup Backbones" },
  { text: "Biometric Verification Gateways" },
  { text: "20,000+ sq ft Campus" },
  { text: "Live CCTV Surveillance Matrix" }
]

const partnersList = [
  {
    name: "TCS iON",
    logo: "/Anthem Assests/images_ionlogo.jpg"
  },
  {
    name: "OCAC",
    logo: "/Anthem Assests/images_Logo-de-CorelDRAW-X7_full.png"
  },
  {
    name: "HP",
    logo: "/image/hp_logo.svg"
  }
]

const certificatesList = [
  {
    id: "cert-1",
    title: "Authorized TCS iON Delivery Center",
    authority: "Tata Consultancy Services (TCS)",
    scope: "Authorized IT & CBT Examination Center Infrastructure",
    code: "TCS-iON-OD-09"
  },
  {
    id: "cert-2",
    title: "Webel Empanelment Certificate",
    authority: "West Bengal Electronics Industry Development Corporation (Webel)",
    scope: "Empanelled Agency for E-Governance Solutions & IT Consultancy",
    code: "WBL-EMP-2025-A"
  },
  {
    id: "cert-3",
    title: "CMGI E-Governance Partnership Registration",
    authority: "Center for Modernizing Government Initiative (CMGI), Odisha",
    scope: "Registered Technology Delivery Partner for Public Workflows",
    code: "CMGI-REG-GTS-02"
  }
]

export default function PartnersPage() {
  const [activeFilter, setActiveFilter] = useState("All Capabilities")
  const [selectedCert, setSelectedCert] = useState<typeof certificatesList[0] | null>(null)
  
  // Form states
  const [orgName, setOrgName] = useState("")
  const [email, setEmail] = useState("")
  const [orgType, setOrgType] = useState("Technology Provider")
  const [capabilities, setCapabilities] = useState("")
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!orgName || !email || !capabilities) {
      toast.error("Please fill in all required fields.")
      return
    }
    toast.success("Partnership request received!", {
      description: "Our corporate alliances desk will contact your organization shortly.",
      duration: 5000,
    })
    setOrgName("")
    setEmail("")
    setCapabilities("")
    setUploadedFile(null)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      if (file.size <= 5 * 1024 * 1024) {
        setUploadedFile(file)
        toast.success(`File attached: ${file.name}`)
      } else {
        toast.error("File exceeds 5MB limit.")
      }
    }
  }

  const filteredPillars = activeFilter === "All Capabilities"
    ? collaborationPillars
    : collaborationPillars.filter(p => p.category === activeFilter)

  return (
    <div className="flex min-h-screen flex-col bg-[#F7FAFB] text-slate-800 relative overflow-hidden">
      <Toaster position="bottom-right" richColors />
      
      <PageHero
        title="Our Strategic Partners"
        description="Anthem Global collaborates with premier assessment providers and technology leaders to engineer secure, high-integrity digital assessment and examination programs."
        image="/Anthem Assests/images_company-profile.jpg"
        icon={Handshake}
        stats={[
          { value: "TCS iON", label: "Flagship Strategic Ally" },
          { value: "550+", label: "Examinee Testing Seats" },
          { value: "20,000+", label: "sq ft Examination Hub" },
        ]}
        darkTheme={true}
      />

      <main className="container mx-auto px-4 py-16 md:px-6 md:py-20 relative">
        {/* Soft background watermarks */}
        <SectionWatermark className="top-[10%] left-[2%] opacity-[0.015]" size={420} />
        <SectionWatermark className="bottom-[15%] right-[2%] opacity-[0.02]" size={380} />
        
        {/* Animated Custom Map Connections SVG */}
        <section className="mb-20 max-w-5xl mx-auto">
          <SectionHeading
            eyebrow="Coverage Map"
            title="Strategic Alliance Footprint"
            description="Anthem's Bhubaneswar hub manages exam data pipelines and certifications for multiple state-level initiatives."
            align="center"
          />

          <div className="relative h-64 md:h-80 bg-[#00232A] rounded-2xl border border-[#00FFE4]/15 overflow-hidden flex items-center justify-center shadow-lg">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,228,0.02)_0%,transparent_70%)] pointer-events-none" />
            
            {/* Spinning Map Globe Wireframe SVG */}
            <svg className="w-96 h-96 opacity-20 text-[#00FFE4] animate-spin" style={{ animationDuration: "60s" }} viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <ellipse cx="50" cy="50" rx="45" ry="15" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <ellipse cx="50" cy="50" rx="15" ry="45" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <ellipse cx="50" cy="50" rx="45" ry="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <ellipse cx="50" cy="50" rx="30" ry="45" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </svg>

            {/* Hub node markers */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Center Node (Bhubaneswar HQ) */}
                <div className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="size-4 rounded-full bg-[#00FFE4] border-2 border-white animate-pulse" />
                  <span className="text-white text-[9px] font-mono mt-1.5 bg-slate-950/80 px-2 py-0.5 rounded border border-[#00FFE4]/20 flex items-center gap-1">
                    <MapPin className="size-2 text-[#FDCD03]" /> Bhubaneswar Hub
                  </span>
                </div>

                {/* Connecting nodes */}
                <div className="absolute -left-28 -top-16 flex flex-col items-center opacity-65">
                  <div className="size-2.5 rounded-full bg-[#017ACA] border border-white" />
                  <span className="text-slate-400 text-[8px] font-mono mt-1">Kolkata Link</span>
                </div>

                <div className="absolute left-24 -top-20 flex flex-col items-center opacity-65">
                  <div className="size-2.5 rounded-full bg-[#017ACA] border border-white" />
                  <span className="text-slate-400 text-[8px] font-mono mt-1">Patna Link</span>
                </div>

                <div className="absolute left-32 top-16 flex flex-col items-center opacity-65">
                  <div className="size-2.5 rounded-full bg-[#017ACA] border border-white" />
                  <span className="text-slate-400 text-[8px] font-mono mt-1">Bhilai Link</span>
                </div>
              </div>
            </div>

            {/* Glowing floating status */}
            <div className="absolute bottom-4 left-4 bg-slate-900/70 border border-[#00FFE4]/20 rounded-xl px-4 py-2 flex gap-4 text-white text-xs font-mono">
              <div>
                <span className="text-[10px] text-slate-400 block uppercase">Alliances</span>
                <span className="font-bold text-[#00FFE4]">
                  <CountUpStat value="5+" /> Active
                </span>
              </div>
              <div className="border-l border-slate-800 pl-4">
                <span className="text-[10px] text-slate-400 block uppercase">States</span>
                <span className="font-bold text-[#FDCD03]">
                  <CountUpStat value="3+" /> Integrated
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Infinite Alliance Certified Loop */}
        <section className="mb-20 relative z-10">
          <SectionHeading
            eyebrow="Certified Alliances"
            title="Strategic Partners & Capabilities"
            description="Our physical examination hub and e-governance solutions are validated by leading organizations."
            align="center"
          />
          <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-4 max-w-6xl mx-auto relative group">
            <CardCornerMark position="top-right" />
            {/* Track 1: Partner Logos */}
            <LogoLoop speed={30} pauseOnHover={true}>
              {partnersList.map((partner, idx) => (
                <div 
                  key={idx} 
                  className="flex h-16 w-56 items-center justify-start rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-left text-xs font-bold text-slate-600 shadow-sm hover:border-[#00FFE4]/40 hover:text-primary transition-all duration-300 relative group gap-3 overflow-hidden"
                >
                  <CardCornerMark position="top-right" />
                  <div className="size-12 rounded bg-white p-1 flex items-center justify-center shrink-0 border border-slate-100 overflow-hidden">
                    <img src={partner.logo} alt={partner.name} className="size-full object-contain" loading="lazy" decoding="async" />
                  </div>
                  <span className="truncate">{partner.name}</span>
                </div>
              ))}
            </LogoLoop>

            {/* Track 2: Certified Facets */}
            <LogoLoop speed={35} direction="right" pauseOnHover={true}>
              {certifiedFacets.map((facet, idx) => (
                <div 
                  key={idx} 
                  className="flex h-16 w-56 items-center justify-center rounded-xl border border-slate-200 bg-slate-50/50 px-6 text-center text-xs font-bold text-slate-600 shadow-sm hover:border-[#00FFE4]/40 hover:text-primary transition-all duration-300 relative group"
                >
                  <CardCornerMark position="top-right" />
                  <span className="shrink-0 size-1.5 rounded-full bg-[#017ACA] mr-2" />
                  {facet.text}
                </div>
              ))}
            </LogoLoop>
          </div>
        </section>

        <DataLineDivider className="my-16" />

        {/* Corporate Assessment Center Highlights Card */}
        <section className="mb-20 max-w-6xl mx-auto relative z-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm relative group overflow-hidden">
            <CardCornerMark position="top-right" />
            <CardCornerMark position="bottom-left" />
            <div className="grid gap-8 lg:grid-cols-5 items-center">
              <div className="lg:col-span-3 space-y-4">
                <SectionHeading
                  eyebrow="Assessment Operations"
                  title="TCS iON Authorized Examination Hub"
                  description="We operate a state-of-the-art computer-based examination infrastructure, fully secure and dynamically monitored."
                  className="mb-0"
                />
                <p className="text-sm leading-7 text-slate-500 mt-4 font-medium">
                  Anthem Global is the premier authorized delivery partner of TCS iON in Bhubaneswar, Odisha. Over our 15+ years of operational timeline, we have successfully conducted 10,000+ digital assessments securely.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 shadow-sm relative group">
                    <CardCornerMark position="top-right" />
                    <span className="text-[10px] font-bold text-slate-400 block uppercase">Capacity</span>
                    <strong className="text-xl font-black text-[#017ACA]">
                      <CountUpStat value="550+" /> Seats
                    </strong>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 shadow-sm relative group">
                    <CardCornerMark position="top-right" />
                    <span className="text-[10px] font-bold text-slate-400 block uppercase">Area</span>
                    <strong className="text-xl font-black text-[#017ACA]">
                      <CountUpStat value="20,000+" /> sq ft
                    </strong>
                  </div>
                </div>
              </div>

              {/* Clean Corporate Details grid */}
              <div className="lg:col-span-2 space-y-4">
                <div className="rounded-xl border border-slate-200 bg-slate-50/30 p-6 space-y-4 shadow-inner relative group">
                  <CardCornerMark position="top-right" />
                  <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">Hub Certifications</span>
                  <div className="space-y-3 text-xs leading-5 text-slate-600 font-bold">
                    <div className="flex gap-2 items-center">
                      <span className="size-1.5 rounded-full bg-[#017ACA] shrink-0" />
                      <span>Dedicated, IP-Locked redundant server nodes</span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <span className="size-1.5 rounded-full bg-[#017ACA] shrink-0" />
                      <span>High-Speed secure fiber connections</span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <span className="size-1.5 rounded-full bg-[#017ACA] shrink-0" />
                      <span>Full UPS Power backup with generator support</span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <span className="size-1.5 rounded-full bg-[#017ACA] shrink-0" />
                      <span>Authorized Biometric candidate verification systems</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <DataLineDivider className="my-16" />

        {/* Empanelment Certificates Section */}
        <section className="mb-20 max-w-6xl mx-auto relative z-10">
          <SectionHeading
            eyebrow="Empanelments"
            title="Official Empanelment & Credentials"
            description="Click any empanelment record to verify authorization code, scope of consulting services, and issuing body details."
            align="center"
          />

          <div className="grid gap-6 md:grid-cols-3 mt-10">
            {certificatesList.map((cert) => (
              <motion.div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className="cursor-pointer"
                whileHover={{ y: -4, scale: 1.01 }}
              >
                <Card className="border border-slate-200 bg-white p-6 shadow-sm hover:border-[#00FFE4]/30 hover:shadow-md transition-all relative group rounded-2xl h-full flex flex-col justify-between">
                  <CardCornerMark position="top-right" />
                  <div>
                    <div className="size-10 rounded-lg bg-slate-50 border border-slate-100 p-2 text-[#017ACA] flex items-center justify-center mb-4">
                      <Award className="size-5 shrink-0" />
                    </div>
                    <h4 className="text-base font-extrabold text-slate-800 leading-snug tracking-tight group-hover:text-primary transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-[10px] text-slate-400 font-mono mt-1 uppercase">{cert.authority}</p>
                  </div>
                  <div className="mt-6 border-t border-slate-100 pt-4 flex items-center justify-between text-xs font-bold font-sans text-[#017ACA] hover:underline">
                    <span>View Empanelment Specs</span>
                    <ChevronRight className="size-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <DataLineDivider className="my-16" />

        {/* Interactive Filter Grid & intake form */}
        <div className="grid gap-10 lg:grid-cols-12 max-w-6xl mx-auto items-start mt-12 relative z-10">
          <LogoOrbitPattern opacity={0.1} className="absolute inset-0 -top-10" />

          {/* Alliance Pillars Grid */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <SectionHeading
                eyebrow="Technical Facets"
                title="Alliance Capabilities"
                description="Explore the secure technology layers powered by our strategic relationship."
                className="mb-0"
              />
            </div>
            
            <div className="flex flex-wrap gap-2 text-xs font-bold">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-3 py-1.5 rounded-full border transition-all duration-300 ${
                    activeFilter === cat
                      ? "bg-[#00232A] text-[#00FFE4] border-[#00FFE4]/20"
                      : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid gap-4">
              {filteredPillars.map((pillar) => {
                const IconComponent = pillar.icon
                return (
                  <div key={pillar.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-all relative group flex gap-4">
                    <CardCornerMark position="top-right" className="opacity-40" />
                    <div className="size-11 rounded-lg bg-slate-50 border border-slate-100 p-2.5 text-[#017ACA] flex items-center justify-center shrink-0">
                      <IconComponent className="size-5 shrink-0" />
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-slate-800 tracking-tight">{pillar.title}</h4>
                      <span className="text-[9px] font-extrabold uppercase text-[#FDCD03] mt-0.5 block tracking-wider">{pillar.category}</span>
                      <p className="text-xs text-slate-500 mt-2 leading-relaxed font-medium">{pillar.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Form Card side */}
          <div className="lg:col-span-5 relative z-10">
            <Card className="border border-slate-200 bg-white shadow-xl rounded-2xl overflow-hidden relative group">
              <CardCornerMark position="top-right" />
              <CardCornerMark position="bottom-left" />
              <div className="h-2 bg-gradient-to-r from-[#00232A] to-[#017ACA]" />
              <CardContent className="p-6 md:p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-extrabold text-slate-800 tracking-tight">Become a Partner</h3>
                  <p className="text-xs text-slate-400 mt-1">Connect with our alliances and empanelment desk.</p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
                  <div className="space-y-2">
                    <Label htmlFor="orgName" className="text-[10px] font-bold uppercase text-slate-500">Organization Name *</Label>
                    <Input 
                      id="orgName" 
                      required 
                      placeholder="Acme Tech Solutions" 
                      value={orgName} 
                      onChange={(e) => setOrgName(e.target.value)}
                      className="rounded-xl border-slate-200 bg-white text-slate-800"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[10px] font-bold uppercase text-slate-500">Corporate Email Address *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      required 
                      placeholder="alliances@acme.com" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)}
                      className="rounded-xl border-slate-200 bg-white text-slate-800"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="orgType" className="text-[10px] font-bold uppercase text-slate-500">Relationship Type *</Label>
                    <select 
                      id="orgType"
                      value={orgType}
                      onChange={(e) => setOrgType(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-800 focus:outline-none"
                    >
                      <option>Technology Provider</option>
                      <option>Channel & Delivery Partner</option>
                      <option>Government Department / Body</option>
                      <option>Academic Association</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="capabilities" className="text-[10px] font-bold uppercase text-slate-500">Capabilities Description *</Label>
                    <Textarea 
                      id="capabilities" 
                      required
                      placeholder="Brief details of your technical capabilities, empanelment status, or proposed collaboration..." 
                      value={capabilities}
                      onChange={(e) => setCapabilities(e.target.value)}
                      rows={3}
                      className="rounded-xl border-slate-200 bg-white text-slate-800 resize-none"
                    />
                  </div>

                  {/* Drag-and-Drop file uploads */}
                  <div 
                    onClick={() => fileInputRef.current?.click()}
                    className="rounded-xl border border-dashed border-slate-200 p-4 bg-slate-50/50 text-center flex flex-col items-center justify-center cursor-pointer hover:bg-slate-100/50 transition-colors"
                  >
                    <input 
                      type="file" 
                      ref={fileInputRef} 
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      className="hidden" 
                    />
                    {uploadedFile ? (
                      <div className="flex flex-col items-center">
                        <Check className="size-6 text-[#00FFE4] mb-1" />
                        <span className="text-xs font-bold text-slate-800 max-w-[200px] truncate">{uploadedFile.name}</span>
                        <span className="text-[10px] text-slate-400 mt-0.5">Attached</span>
                      </div>
                    ) : (
                      <>
                        <UploadCloud className="size-8 text-primary/70 mb-2" />
                        <span className="text-xs font-bold text-slate-700">Attach Profile / Credentials (Optional)</span>
                        <span className="text-[10px] text-slate-400 mt-1">PDF, Word up to 5MB</span>
                      </>
                    )}
                  </div>

                  <Button type="submit" className="w-full rounded-xl mt-4 bg-gradient-to-r from-[#00232A] to-[#017ACA] text-white text-xs font-bold uppercase tracking-wider border-0" size="sm">
                    <span>Submit Partnership Pitch</span>
                    <ArrowRight className="size-4 text-[#FDCD03]" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        <BrandCTA 
          title="Interested in collaboration capabilities?"
          description="Access empanelled guidelines and technology infrastructure schedules of our digital exam center campus in Bhubaneswar."
          buttonText="Explore Alliances"
          href="/contact"
        />
      </main>

      {/* Certificate detail modal */}
      <AnimatePresence>
        {selectedCert ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
            />
            
            <motion.div 
              className="relative bg-white border border-slate-200 rounded-3xl w-full max-w-md overflow-hidden shadow-2xl z-10"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
            >
              <div className="h-2 bg-gradient-to-r from-[#00232A] via-[#00FFE4] to-[#FDCD03]" />
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-20 size-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors focus:outline-none"
              >
                <X className="size-4" />
              </button>

              <div className="p-6 md:p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="size-11 rounded-xl bg-slate-50 border border-slate-100 p-2.5 text-[#017ACA] flex items-center justify-center">
                    <Award className="size-6 shrink-0" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 block uppercase font-mono">{certificationsLabel(selectedCert.authority)}</span>
                    <h3 className="text-lg font-black text-slate-800 tracking-tight leading-snug">{selectedCert.title}</h3>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 space-y-2 text-xs font-medium">
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Empanelment Authority</span>
                    <strong className="text-slate-800 font-extrabold">{selectedCert.authority}</strong>
                  </div>
                  <div className="border-t border-slate-200/60 pt-2">
                    <span className="text-[10px] text-slate-400 block uppercase">Scope & Capabilities</span>
                    <p className="text-slate-600 mt-0.5 leading-relaxed">{selectedCert.scope}</p>
                  </div>
                  <div className="border-t border-slate-200/60 pt-2 flex justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase">Reference Code</span>
                      <strong className="text-slate-800 font-mono font-bold">{selectedCert.code}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase">Status</span>
                      <span className="text-[#00FFE4] font-black uppercase text-[9px] bg-[#00232A] px-2 py-0.5 rounded">Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      
      <AnthemRouteMedia slug="partners" />
<Footer />
    </div>
  )
}

function certificationsLabel(auth: string) {
  if (auth.includes("Tata")) return "Authorized Partner"
  if (auth.includes("West")) return "Government Empanelment"
  return "E-Governance Registration"
}

