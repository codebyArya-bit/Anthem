"use client"
import { AnthemRouteMedia } from "@/components/anthemgt/AnthemRouteMedia";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion"
import Link from "next/link"
import { Home, ChevronRight, Users, Briefcase, UserCheck, ShieldCheck, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CardCornerMark } from "@/components/corporate/brand-patterns/CardCornerMark"
import { HeroBrandPattern } from "@/components/corporate/brand-patterns/HeroBrandPattern"
import { BrandCTA } from "@/components/corporate/brand-patterns/BrandCTA"
import { DataLineDivider } from "@/components/corporate/brand-patterns/DataLineDivider"
import { TiltedCard } from "@/components/reactbits/TiltedCard"

export default function OutsourcingPage() {
  const features = [
    {
      title: "Technical Resource Staffing",
      description: "Providing high-competency software engineers, UI/UX designers, and systems architects to augment your internal squads.",
      icon: <Users className="size-6 text-[#00FFE4]" />,
    },
    {
      title: "Operations Management (BPO)",
      description: "Managing secure data-entry loops, content review services, catalog management, and administrative workflows.",
      icon: <Briefcase className="size-6 text-[#00FFE4]" />,
    },
    {
      title: "GIS & Spatial Specialists",
      description: "Deploying highly qualified GIS engineers, CAD drafters, and remote sensing specialists for mapping runs.",
      icon: <UserCheck className="size-6 text-[#00FFE4]" />,
    },
    {
      title: "SLA-Driven Execution",
      description: "Structuring resource operations strictly around performance metrics, speed benchmarks, and daily reporting cycles.",
      icon: <ShieldCheck className="size-6 text-[#00FFE4]" />,
    },
  ]

  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-[#F7FAFB]">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-[#00232A] text-white">
        <HeroBrandPattern darkTheme={true} />
        
        <div className="container px-4 md:px-6 relative z-10 mx-auto max-w-6xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs md:text-sm text-[#A9C1C7] mb-8">
            <Link href="/" className="hover:text-[#00FFE4] transition-colors flex items-center gap-1">
              <Home className="size-3.5" /> Home
            </Link>
            <ChevronRight className="size-3.5 opacity-50" />
            <span className="opacity-80">Our Services</span>
            <ChevronRight className="size-3.5 opacity-50" />
            <span className="text-[#00FFE4] font-semibold">Outsourcing</span>
          </div>

          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-[#00FFE4] to-blue-400 bg-clip-text text-transparent">
                Outsourcing Services
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-[#A9C1C7] leading-relaxed max-w-3xl">
                Expand operational scale rapidly while controlling cost overheads. We provide highly trained technical and non-technical staff to execute your business workflows flawlessly.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Grid Content */}
      <section className="py-24 relative bg-white">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            
            {/* Visual Panel */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="border border-slate-200 bg-[#F7FAFB] shadow-md overflow-hidden relative group">
                <CardCornerMark position="top-right" />
                <CardContent className="p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="size-12 rounded-xl bg-[#00232A] flex items-center justify-center text-[#00FFE4] shadow-sm">
                      <Briefcase className="size-6" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 tracking-tight">Operational Excellence</h2>
                  </div>

                  <p className="text-sm md:text-base text-slate-600 leading-relaxed text-justify mb-4">
                    Finding, training, and retaining specialized personnel in core sectors can limit your developmental cycles. We solve this by matching highly certified resources directly to your operational demands.
                  </p>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed text-justify">
                    By providing structured Service Level Agreements (SLAs), detailed weekly reports, and transparent billing scales, we protect operational compliance and help you deploy fast.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Feature List Panel */}
            <div className="space-y-6">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <TiltedCard scale={1.01} maxRotate={2}>
                    <Card className="border border-slate-200/80 bg-white hover:shadow-md transition-all duration-300 relative group overflow-hidden">
                      <CardCornerMark position="top-right" />
                      <CardContent className="p-6 flex items-start gap-4">
                        <div className="size-12 rounded-xl bg-[#00232A] flex items-center justify-center shrink-0 shadow-inner">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-slate-800 mb-1">{item.title}</h3>
                          <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </TiltedCard>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <DataLineDivider className="my-8" />

      {/* Call to action */}
      <section className="py-20 bg-[#F7FAFB]">
        <div className="container px-4 md:px-6 mx-auto">
          <BrandCTA
            title="Augment Your Staff Competency"
            description="Get in touch with our resources coordinator to frame talent demands and schedule profile interviews."
            buttonText="Consult Resource Manager"
            href="/contact"
          />
        </div>
      </section>
      
      
      <AnthemRouteMedia slug="outsourcing" />
<Footer />
    </div>
  )
}

