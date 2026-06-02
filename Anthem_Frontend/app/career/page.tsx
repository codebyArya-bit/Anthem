"use client"

import React, { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Footer } from "@/components/Footer"
import { PageHero } from "@/components/corporate/PageHero"
import { SectionHeading } from "@/components/corporate/SectionHeading"
import { InfoCard } from "@/components/corporate/InfoCard"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Briefcase, Award, GraduationCap, Flame, ArrowRight, UploadCloud, Eye, X, Check } from "lucide-react"
import { toast, Toaster } from "sonner"
import { CardCornerMark } from "@/components/corporate/brand-patterns/CardCornerMark"
import { ArrowAccent } from "@/components/corporate/brand-patterns/ArrowAccent"
import { LogoOrbitPattern } from "@/components/corporate/brand-patterns/LogoOrbitPattern"
import { SectionWatermark } from "@/components/corporate/brand-patterns/SectionWatermark"
import { DataLineDivider } from "@/components/corporate/brand-patterns/DataLineDivider"
import { BrandCTA } from "@/components/corporate/brand-patterns/BrandCTA"

const perks = [
  {
    title: "Mission-Critical Impact",
    description: "Work on national-scale digital infrastructure including judicial record modernisation, Census workflows, and e-governance systems.",
    icon: Flame,
    tag: "High Scale",
    color: "from-blue-600 to-[#017ACA]"
  },
  {
    title: "Continuous Learning",
    description: "Expand your capabilities in GIS mapping, LiDAR classification, applied AI models, custom J2EE, React, and Python crafts.",
    icon: GraduationCap,
    tag: "Skill Training",
    color: "from-blue-600 to-[#017ACA]"
  },
  {
    title: "Professional Culture",
    description: "Headquartered in a premier campus at Chandaka Industrial Estate, Bhubaneswar, offering a secure, compliant, and collaborative workspace.",
    icon: Award,
    tag: "Prime Campus",
    color: "from-blue-600 to-[#017ACA]"
  }
]

const focusAreas = [
  {
    title: "Custom Software Engineering",
    description: "Java, Python, ASP.NET MVC, React, and secure database administrators delivering robust transactional applications.",
    tag: "Tech Division"
  },
  {
    title: "GIS & LiDAR Point Cloud",
    description: "Advanced classification, DTM extraction, corridor mapping, MLS points vectorisation, and aerial photogrammetry experts.",
    tag: "Spatial Division"
  },
  {
    title: "Digitisation & Secure DMS",
    description: "High-volume secure scanning, industrial OCR indexing, metadata parsing, and compliance-level document archival.",
    tag: "Operations Division"
  }
]

const mockJobs = [
  {
    id: "job-1",
    title: "Senior Java Developer (e-Gov Systems)",
    department: "Tech Division",
    location: "Bhubaneswar HQ",
    type: "Full-Time",
    experience: "4-6 Years"
  },
  {
    id: "job-2",
    title: "GIS LiDAR Vectorisation Specialist",
    department: "Spatial Division",
    location: "Bhubaneswar HQ",
    type: "Full-Time",
    experience: "2-4 Years"
  },
  {
    id: "job-3",
    title: "React Frontend Engineer",
    department: "Tech Division",
    location: "Bhubaneswar HQ",
    type: "Full-Time",
    experience: "2-3 Years"
  },
  {
    id: "job-4",
    title: "High-Volume Scanning Operations lead",
    department: "Operations Division",
    location: "Bhubaneswar HQ",
    type: "Full-Time",
    experience: "3-5 Years"
  }
]

const galleryImages = [
  {
    image: "/Anthem Home Page Photo/A Team Spirit.jpg",
    title: "Team Spirit",
    description: "Collaborative, open conversations, and deep technical mentorship form the foundation of our execution squads."
  },
  {
    image: "/Anthem Home Page Photo/Comfortable Workspace.jpg",
    title: "Comfortable Workspace",
    description: "State-of-the-art corporate infrastructure designed to keep our engineers focused and secure."
  },
  {
    image: "/Anthem Home Page Photo/From Ideas to Impact.jpg",
    title: "From Ideas to Impact",
    description: "We brainstorm together, execute with discipline, and celebrate national delivery successes together."
  }
]

export default function CareerPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [role, setRole] = useState("Software Development")
  const [note, setNote] = useState("")
  const [activeDept, setActiveDept] = useState("All")
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  
  const fileInputRef = useRef<HTMLInputElement>(null)
  const formSectionRef = useRef<HTMLDivElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email || !phone) {
      toast.error("Please fill in all required fields.")
      return
    }
    toast.success("Application details registered!", {
      description: "Please also mail your resume directly to info@anthemgt.com to finalize your profile.",
      duration: 5000,
    })
    // Reset form
    setName("")
    setEmail("")
    setPhone("")
    setNote("")
    setUploadedFile(null)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0]
      if (file.type === "application/pdf" || file.name.endsWith(".doc") || file.name.endsWith(".docx")) {
        if (file.size <= 5 * 1024 * 1024) {
          setUploadedFile(file)
          toast.success(`Attached file: ${file.name}`)
        } else {
          toast.error("File exceeds 5MB limit.")
        }
      } else {
        toast.error("Only PDF or Word documents are supported.")
      }
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      setUploadedFile(file)
      toast.success(`Attached file: ${file.name}`)
    }
  }

  const handleApplyClick = (jobTitle: string) => {
    setRole(jobTitle.includes("GIS") ? "GIS & LiDAR point cloud" : jobTitle.includes("Scanning") ? "Digitisation Operations" : "Software Development")
    formSectionRef.current?.scrollIntoView({ behavior: "smooth" })
    toast.info(`Applying for: ${jobTitle}. Form focus updated.`)
  }

  const filteredJobs = activeDept === "All"
    ? mockJobs
    : mockJobs.filter(j => j.department === activeDept)

  return (
    <div className="flex min-h-screen flex-col bg-[#F7FAFB] text-slate-800 relative overflow-hidden">
      <Toaster position="bottom-right" richColors />
      
      <PageHero
        title="Career With Us"
        description="Join Anthem Global's engineering, spatial, and digitisation delivery teams to build secure, national-scale e-governance solutions."
        image="/Anthem Assests/images_ban-mission-vision.jpg"
        video="/videos/office-tour.mp4"
        icon={Briefcase}
        stats={[
          { value: "300+", label: "Professionals" },
          { value: "Bhubaneswar", label: "Delivery HQ" },
        ]}
        darkTheme={true}
      />

      <main className="container mx-auto px-4 py-16 md:px-6 md:py-20 relative">
        {/* Soft background watermarks */}
        <SectionWatermark className="top-[10%] right-[2%] opacity-[0.015]" size={420} />
        <SectionWatermark className="bottom-[25%] left-[2%] opacity-[0.02]" size={370} />

        {/* Culture Showcase Section */}
        <section className="mb-20 relative z-10">
          <SectionHeading
            eyebrow="Life at Anthem"
            title="Our Dynamic Workspace & Vibe"
            description="We combine hard-working software operations and secure scanning systems with a supportive, growth-oriented campus environment."
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
            {galleryImages.map((card, idx) => (
              <motion.div
                key={idx}
                className="cursor-pointer"
                onClick={() => setLightboxIndex(idx)}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 relative group rounded-2xl h-full">
                  <CardCornerMark position="top-right" />
                  <div className="relative h-56 w-full overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-4 left-4 text-white flex items-center gap-2">
                      <Eye className="size-4 text-[#00FFE4]" />
                      <h4 className="text-base font-extrabold tracking-tight">{card.title}</h4>
                    </div>
                  </div>
                  <CardContent className="p-5 bg-white">
                    <p className="text-sm leading-6 text-slate-500 font-medium">{card.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <DataLineDivider className="my-16" />

        {/* Job Openings Registry Section */}
        <section className="mb-20 relative z-10 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <SectionHeading
              eyebrow="Job Openings"
              title="Current Opportunities"
              description="Review our active requirements. We recruit local talent and tech experts."
              className="mb-0"
            />
            <div className="flex flex-wrap gap-2 text-xs font-bold">
              {["All", "Tech Division", "Spatial Division", "Operations Division"].map((dept) => (
                <button
                  key={dept}
                  onClick={() => setActiveDept(dept)}
                  className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                    activeDept === dept
                      ? "bg-[#00232A] text-[#00FFE4] border-[#00FFE4]/20"
                      : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <AnimatePresence mode="popLayout">
              {filteredJobs.map((job) => (
                <motion.div
                  key={job.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative group"
                >
                  <CardCornerMark position="top-right" className="opacity-40" />
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="anthem" className="rounded-md border border-[#00FFE4]/20 bg-slate-50 text-[#017ACA] text-[10px] font-bold">
                        {job.department}
                      </Badge>
                      <span className="text-[10px] font-bold text-slate-400 font-mono">{job.experience} Exp</span>
                    </div>
                    <h4 className="text-base font-extrabold text-slate-800 tracking-tight group-hover:text-primary transition-colors">
                      {job.title}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium mt-1">{job.location} · {job.type}</p>
                  </div>
                  <Button 
                    onClick={() => handleApplyClick(job.title)}
                    className="rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:bg-gradient-to-r hover:from-[#00232A] hover:to-[#017ACA] hover:text-white hover:border-transparent transition-all text-xs font-bold font-sans uppercase shrink-0"
                    size="sm"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="size-4 ml-1.5 text-[#FDCD03]" />
                  </Button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        <DataLineDivider className="my-16" />

        {/* Perks & Application Form split Section */}
        <div ref={formSectionRef} className="grid gap-10 lg:grid-cols-12 max-w-6xl mx-auto items-start mt-12 relative scroll-mt-28">
          <LogoOrbitPattern opacity={0.1} className="absolute inset-0 -top-10" />
          
          {/* Perks side */}
          <div className="lg:col-span-7 space-y-6 relative z-10">
            <SectionHeading
              eyebrow="Perks & Benefits"
              title="Why Build Your Career at Anthem?"
              description="We offer an elite ecosystem where software crafts, data protection, and professional satisfaction intersect."
            />
            <div className="space-y-4">
              {perks.map((perk) => (
                <div key={perk.title} className="relative group">
                  <CardCornerMark position="top-right" className="opacity-[0.15]" />
                  <InfoCard
                    icon={perk.icon}
                    title={perk.title}
                    description={perk.description}
                    tag={perk.tag}
                    className="border-slate-200/80 bg-white"
                  />
                </div>
              ))}
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
                  <h3 className="text-xl font-extrabold text-slate-800 tracking-tight">Quick Application</h3>
                  <p className="text-xs text-slate-400 mt-1">Submit your profile details to our recruiting team.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[10px] font-bold uppercase text-slate-500">Full Name *</Label>
                    <Input 
                      id="name" 
                      required 
                      placeholder="John Doe" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)}
                      className="rounded-xl border-slate-200 bg-white text-slate-800"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[10px] font-bold uppercase text-slate-500">Email Address *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      required 
                      placeholder="john@example.com" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)}
                      className="rounded-xl border-slate-200 bg-white text-slate-800"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[10px] font-bold uppercase text-slate-500">Contact Number *</Label>
                    <Input 
                      id="phone" 
                      required 
                      placeholder="+91 9999999999" 
                      value={phone} 
                      onChange={(e) => setPhone(e.target.value)}
                      className="rounded-xl border-slate-200 bg-white text-slate-800"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role" className="text-[10px] font-bold uppercase text-slate-500">Focus Area *</Label>
                    <select 
                      id="role"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-800 focus:outline-none"
                    >
                      <option>Software Development</option>
                      <option>GIS & LiDAR point cloud</option>
                      <option>Digitisation Operations</option>
                      <option>Other Openings</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="note" className="text-[10px] font-bold uppercase text-slate-500">Cover Note (Optional)</Label>
                    <Textarea 
                      id="note" 
                      placeholder="Brief summary of your skills or credentials..." 
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      rows={3}
                      className="rounded-xl border-slate-200 bg-white text-slate-800 resize-none"
                    />
                  </div>

                  {/* Drag-and-Drop Resume Box */}
                  <div 
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className="rounded-xl border border-dashed border-slate-200 p-4 bg-slate-50/50 text-center flex flex-col items-center justify-center cursor-pointer hover:bg-slate-100/50 transition-colors relative group"
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
                        <Check className="size-6 text-[#00FFE4] mb-1.5" />
                        <span className="text-xs font-bold text-slate-800 max-w-[200px] truncate">{uploadedFile.name}</span>
                        <span className="text-[10px] text-slate-400 mt-0.5">{(uploadedFile.size / 1024 / 1024).toFixed(2)} MB · Change file</span>
                      </div>
                    ) : (
                      <>
                        <UploadCloud className="size-8 text-primary/70 mb-2 group-hover:scale-105 transition-transform" />
                        <span className="text-xs font-bold text-slate-700">Attach Resume (Optional)</span>
                        <span className="text-[10px] text-slate-400 mt-1">Drag & drop PDF, DOC, DOCX up to 5MB</span>
                      </>
                    )}
                  </div>

                  <Button type="submit" className="w-full rounded-xl mt-4 bg-gradient-to-r from-[#00232A] to-[#017ACA] text-white text-xs font-bold uppercase tracking-wider border-0" size="sm">
                    <span>Submit Profile Details</span>
                    <ArrowRight className="size-4 text-[#FDCD03]" />
                  </Button>
                </form>

                <div className="mt-6 border-t border-slate-100 pt-4 text-center">
                  <p className="text-[10px] text-slate-500 leading-relaxed flex items-center justify-center gap-1 font-sans font-bold">
                    <Mail className="size-3.5 text-[#017ACA] shrink-0" />
                    You can also mail your CV directly to <a href="mailto:info@anthemgt.com" className="font-bold text-[#017ACA] hover:underline">info@anthemgt.com</a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <BrandCTA 
          className="mt-24"
          title="Looking to build digital infrastructure?"
          description="Explore our openings, tech frameworks, and competitive campus alignment program in Bhubaneswar."
          buttonText="Join Our Technical Team"
          href="mailto:info@anthemgt.com"
        />
      </main>

      {/* Lightbox Modal for Life at Anthem Gallery */}
      <AnimatePresence>
        {lightboxIndex !== null ? (
          <div className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4">
            <motion.div 
              className="absolute inset-0 bg-slate-950/85 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
            />
            
            <motion.div 
              className="relative max-w-3xl w-full bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
            >
              <button 
                onClick={() => setLightboxIndex(null)}
                className="absolute top-4 right-4 z-20 size-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-all focus:outline-none"
              >
                <X className="size-4" />
              </button>

              <div className="relative aspect-video w-full">
                <img 
                  src={galleryImages[lightboxIndex].image} 
                  alt={galleryImages[lightboxIndex].title} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 text-white bg-slate-950/90 border-t border-slate-800">
                <h4 className="text-lg font-black text-[#00FFE4] tracking-tight">{galleryImages[lightboxIndex].title}</h4>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">{galleryImages[lightboxIndex].description}</p>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <Footer />
    </div>
  )
}
