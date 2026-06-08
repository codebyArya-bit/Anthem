"use client"
import { AnthemRouteMedia } from "@/components/anthemgt/AnthemRouteMedia";

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Footer } from "@/components/Footer"
import { PageHero } from "@/components/corporate/PageHero"
import { SectionHeading } from "@/components/corporate/SectionHeading"
import { TiltedCard } from "@/components/reactbits/TiltedCard"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Download, FileText, Monitor, Landmark, Presentation, Sparkles, Search, CheckCircle } from "lucide-react"
import { toast, Toaster } from "sonner"
import { CardCornerMark } from "@/components/corporate/brand-patterns/CardCornerMark"
import { ArrowAccent } from "@/components/corporate/brand-patterns/ArrowAccent"
import { SectionWatermark } from "@/components/corporate/brand-patterns/SectionWatermark"
import { DataLineDivider } from "@/components/corporate/brand-patterns/DataLineDivider"
import { BrandCTA } from "@/components/corporate/brand-patterns/BrandCTA"
import { FilterChips } from "@/components/corporate/FilterChips"

const categories = ["All Materials", "E-Governance & Judiciary", "STPI & OCAC", "Keynotes & Tech"]

const presentations = [
  {
    title: "Judicial System E-Governance Architecture",
    description: "Technical blueprint showcasing records digitisation, e-court registries, double-read metadata pipelines, and high-speed secure OCR indexing models.",
    slides: 34,
    size: "4.8 MB",
    format: "PDF / PPTX",
    category: "E-Governance & Judiciary",
    date: "May 2025",
    icon: Landmark,
    file: "/Anthem Assests/Presentation_page_Judicialsystem1.ppt",
  },
  {
    title: "Make in India IT Seminar",
    description: "Keynote presentation detailing IT parks expansion, local skill incubation under national schemes, and regional infrastructure scalability.",
    slides: 22,
    size: "3.2 MB",
    format: "PDF",
    category: "Keynotes & Tech",
    date: "April 2025",
    icon: Sparkles,
    file: "/Anthem Assests/Presentation_page_Final_MakeInIndia.ppt",
  },
  {
    title: "STPI Advantages & IT Infrastructure",
    description: "Detailed analysis of Software Technology Parks of India benefits, SEZ governance model, and regional data center hosting facilities.",
    slides: 18,
    size: "2.5 MB",
    format: "PDF",
    category: "STPI & OCAC",
    date: "March 2025",
    icon: Monitor,
    file: "/Anthem Assests/Presentation_page_STPI_Advantages.ppt",
  },
  {
    title: "STPI Presentation for OCAC",
    description: "Custom slide deck created for Odisha Computer Application Centre illustrating e-office software architecture, scanning workflows, and empanelled security SLAs.",
    slides: 28,
    size: "4.1 MB",
    format: "PDF / PPTX",
    category: "STPI & OCAC",
    date: "February 2025",
    icon: Landmark,
    file: "/Anthem Assests/Presentation_page_STPI_Presentation_for_OCAC-CATALYST.ppt",
  },
  {
    title: "Trends in IT Services & AI Automation",
    description: "Anthem Global's strategic forecast exploring applied AI/ML in document processing, ExamFlow online proctoring, and next-gen blockchain ledgers.",
    slides: 40,
    size: "5.5 MB",
    format: "PDF",
    category: "Keynotes & Tech",
    date: "January 2025",
    icon: FileText,
    file: "/Anthem Assests/Presentation_page_2_Presentation_TrendsInIT_1stMarch2014.ppt",
  },
  {
    title: "Sagitaur Group Partnership Overview",
    description: "Strategic joint-venture slides detailing combined capabilities, resource allocation, and international outsourcing execution matrices.",
    slides: 15,
    size: "1.9 MB",
    format: "PDF",
    category: "Keynotes & Tech",
    date: "November 2024",
    icon: Monitor,
    file: "/Anthem Assests/Presentation_page_Sagitaur_Group_-_Karnataka_Solar_Park-Chief_Minister_06-09-2012.pptx",
  }
]

export default function PresentationNewPage() {
  const [activeFilter, setActiveFilter] = useState("All Materials")
  const [searchQuery, setSearchQuery] = useState("")

  const handleDownload = (title: string) => {
    toast.success(`Download started: ${title}`, {
      description: "Preparing official slide deck file.",
      duration: 3500,
    })
  }

  const filteredDecks = presentations.filter((deck) => {
    const matchesCategory = activeFilter === "All Materials" || deck.category === activeFilter
    const matchesSearch = deck.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          deck.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="flex min-h-screen flex-col bg-anthem-bg text-slate-800 relative overflow-hidden">
      <Toaster position="bottom-right" richColors />
      <PageHero
        title="Presentations & Slides"
        description="Download and view Anthem Global's slide presentation decks for STPI schemes, Make in India initiative, and Judicial E-governance architectures."
        image="/Anthem Assests/images_company-profile.jpg"
        icon={Presentation}
        stats={[
          { value: "6 Slide", label: "Decks archived" },
          { value: "STPI & OCAC", label: "Focused frameworks" },
        ]}
        darkTheme={true}
      />

      <main className="container mx-auto px-4 py-16 md:px-6 md:py-20 relative">
        <SectionWatermark className="top-[10%] left-[2%] opacity-[0.015]" size={420} />
        <SectionWatermark className="bottom-[15%] right-[2%] opacity-[0.02]" size={370} />
        
        {/* Search & Category Filter Section */}
        <div className="max-w-6xl mx-auto mb-10 flex flex-col md:flex-row gap-6 justify-between items-stretch md:items-center relative z-20">
          <div className="flex-1 max-w-md relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
            <Input 
              type="text"
              placeholder="Search presentations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 rounded-xl bg-white border-slate-200 text-slate-800 focus-visible:ring-[#017ACA] shadow-sm w-full"
            />
          </div>
          <FilterChips
            filters={categories}
            active={activeFilter}
            onChange={setActiveFilter}
          />
        </div>

        <SectionHeading
          eyebrow="Archival Assets"
          title="Technical Frameworks & Corporate Decks"
          description="Access our official blueprints, ICT briefings, and slide presentations submitted to key regional bodies like OCAC and STPI."
          align="center"
        />

        {/* Presentation Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto items-stretch relative z-10 mt-10">
          <AnimatePresence mode="popLayout">
            {filteredDecks.map((deck) => {
              const Icon = deck.icon
              return (
                <motion.div
                  key={deck.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <TiltedCard className="h-full" scale={1.01} maxRotate={3}>
                    <Card className="h-full border border-slate-200 bg-white shadow-[0_10px_30px_rgba(0,59,102,0.06)] hover:border-anthem-blue/30 hover:shadow-[0_15px_35px_rgba(0,59,102,0.12)] transition-all duration-300 flex flex-col justify-between overflow-hidden relative group rounded-[18px]">
                      <CardCornerMark position="top-right" />
                      <div>
                        <div className="h-1.5 bg-gradient-to-r from-[#017ACA] to-[#003B66]" />
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between gap-4 mb-5">
                            <div className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-primary/15 bg-slate-50 text-[#017ACA]">
                              <Icon className="size-5 shrink-0" />
                            </div>
                            <Badge variant="anthem" className="rounded-md px-2.5 py-1 border border-anthem-blue/20 bg-slate-50 text-anthem-navy">
                              <span className="flex items-center gap-1 font-bold text-[10px]">
                                <span>{deck.category.split(" & ")[0]}</span>
                                <ArrowAccent size={8} direction="right" />
                              </span>
                            </Badge>
                          </div>

                          <h3 className="text-lg font-extrabold text-slate-800 leading-snug line-clamp-2 tracking-tight group-hover:text-primary transition-colors">{deck.title}</h3>
                          <p className="mt-3 text-sm leading-6 text-slate-500 font-medium line-clamp-3">{deck.description}</p>
                        </CardContent>
                      </div>

                      <div className="px-6 pb-6 pt-4 border-t border-slate-100 bg-slate-50/50">
                        {/* Blue line details around metadata */}
                        <div className="flex justify-between items-center text-xs text-slate-500 font-mono mb-4 border-b border-anthem-blue/20 pb-2">
                          <span className="font-bold">{deck.slides} Slides</span>
                          <span className="font-bold">{deck.size}</span>
                          <Badge variant="outline" className="text-[10px] bg-white border-slate-200 font-bold">{deck.format}</Badge>
                        </div>
                        
                        <Button
                          asChild
                          className="w-full rounded-xl flex items-center justify-center gap-2 group bg-gradient-to-r from-[#003B66] to-[#017ACA] text-white border-0 text-xs font-bold uppercase tracking-wider hover:from-[#017ACA] hover:to-[#003B66] transition-all"
                          size="sm"
                        >
                          <a href={deck.file} download onClick={() => handleDownload(deck.title)}>
                            <Download className="size-4 group-hover:translate-y-0.5 transition-transform" />
                            <span>Download Slide Deck</span>
                            <ArrowAccent size={11} direction="right" className="text-anthem-yellow" />
                          </a>
                        </Button>
                      </div>
                    </Card>
                  </TiltedCard>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        <DataLineDivider className="my-16" />

        <BrandCTA 
          title="Looking for specific technical layouts?"
          description="Request official hard copies of our STPI empanelment structures, SEZ framework allocations, and legal records security matrices."
          buttonText="Request Presentation Archives"
          href="/contact"
        />
      </main>

      
      <AnthemRouteMedia slug="presentationnew" />
<Footer />
    </div>
  )
}

