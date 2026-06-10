"use client"

import React from "react"
import Link from "next/link"
import { Home, ChevronRight } from "lucide-react"
import { AnthemRouteMedia } from "@/components/anthemgt/AnthemRouteMedia"
import { Footer } from "@/components/Footer"
import { ProfileCard } from "@/components/corporate/ProfileCard"
import { TiltedCard } from "@/components/reactbits/TiltedCard"
import { SectionWatermark } from "@/components/corporate/brand-patterns/SectionWatermark"
import { BrandCTA } from "@/components/corporate/brand-patterns/BrandCTA"

const managementTeam = [
  {
    name: "Manas Ranjan Pattnaik",
    role: "Chairman",
    statBadge: "46+ Years Experience",
    avatar: "/Anthem Assests/images_manas_pattnaik.png",
    education: "M.S. in Computer Science (San Diego State University, California, USA)",
    emails: ["manas.pattnaik@anthemgt.com", "manaspattnaik@hotmail.com"],
    phone: "07873099999",
    expertise: ["Government Relations", "SEZ Management", "Policy & Regulatory", "IT Parks & Infrastructure"],
    responsibilities: [
      "Strategic vision and long-term corporate expansion mapping.",
      "National and international government relations & business alliances.",
      "Oversight of digital e-governance framework integrations.",
      "Directing policy formulation, SEZ regulations, and legal tenders."
    ],
    achievements: [
      "Technical In-Charge of the landmark E-Governance project for the Indian Judicial System (Hon'ble Supreme Court of India).",
      "Managed 45+ STPI centers across India and established 30 of them as Director of STPI.",
      "Served extensively in Botswana, Ivory Coast, Algeria, Mauritius, Nepal, and China setting up IT networks.",
      "46+ years of domestic and international advisory consulting experience."
    ],
    bio: [
      "A Techno-commercial expert with a Master's degree in Computer Science from San Diego State University, California, USA. He has over 46 years of experience in various domestic and international assignments in the fields of Information Technology and Consulting. He has served extensively in Botswana, Ivory Coast, Algeria, Nepal, Bhutan, and Mauritius assisting governments in setting up their IT and supporting infrastructure.",
      "He was the technical in charge of the ambitious E-governance project of the Indian Judicial System under the aegis of the Hon'ble Supreme Court of India. As Director of Software Technology Parks of India (STPI) he managed 45+ STPI centers across India and also helped in creating 30 of those. He has played a key role in providing consulting services to the ICT programmes and policy formation in China and Panama.",
      "He is also currently actively promoting Entrepreneurship development and has setup his own Information Technology firm which is handling several high profile IT and Data management projects, under the National E-governance program, like Census Data collection and processing, digitization of legal documents, and management systems for railways."
    ]
  },
  {
    name: "Rajesh Kumar Acharya",
    role: "Director",
    statBadge: "41+ Years Experience",
    avatar: "/Anthem Assests/images_rajeshsir.png",
    education: "M. Tech in Computer Science",
    emails: ["raja@anthemgt.com"],
    phone: "07873088888",
    expertise: ["Skill Development", "Infrastructure Planning", "Network Ops", "Consulting & RIM"],
    responsibilities: [
      "Managing Remote Infrastructure Management (RIM) and network centers.",
      "Leading national and international skill development programmes.",
      "Technical infrastructure planning and business development strategies.",
      "Fostering joint ventures with academic institutions and corporate allies."
    ],
    achievements: [
      "41+ years of software industry leadership and computer science teaching.",
      "Orchestrated scale operations for regional network monitoring facilities.",
      "Successfully trained and empanelled thousands of youths under National Skill initiatives.",
      "Pioneered secure training delivery centers in Bhubaneswar and Bhilai."
    ],
    bio: [
      "A Techno-commercial expert with M. Tech in Computer Science. He has over 41 years of experience in both Industry and Technical Education.",
      "Has handled many domestic and international assignments in the fields of Information Technology & Consulting. He has expertise in Infrastructure, Software Development, Education & Training, Network operations centers, remote infrastructure management, government relations and business development etc.",
      "He is currently handling Skill and Entrepreneurship development under National Skill Development Program to promote employability and empower youth with technical competencies."
    ]
  },
  {
    name: "Chakradhara Panda",
    role: "Chief Executive Officer (CEO)",
    statBadge: "31+ Years Experience",
    avatar: "/Anthem Assests/images_chakradhara_panda.png",
    education: "B.E. (Institution of Electronics & Telecommunication Engineers)",
    emails: ["chakradhara.panda@anthemgt.com"],
    phone: "07873077777",
    expertise: ["Project Implementation", "Team Building", "E-Governance Delivery", "Team Management"],
    responsibilities: [
      "Operational execution and SLA delivery for central and state programs.",
      "Directing scanning, digitisation, and document indexing project lines.",
      "Recruiting and structuring state-level high-capacity technology teams.",
      "Maintaining rigid compliance controls and secure data pipelines."
    ],
    achievements: [
      "31+ years of software delivery experience in high-impact public projects.",
      "Led massive Socio-economic & Census digitisation operations in multiple states.",
      "Proven track record of managing projects with zero data leaks.",
      "Built highly capable regional technical offices for legal document processing."
    ],
    bio: [
      "Mr. Chakradhara Panda is the CEO of Anthem Global Technologies Pvt Ltd and he is responsible for execution of projects.",
      "He has over 31+ years of delivery experience in implementing high-impact e-governance projects. He was instrumental in building highly capable technical teams in various states for delivering large-scale Socio-economic & Census projects.",
      "His core expertise includes end-to-end project implementation, team building, and operational team management to ensure timely project delivery and compliance."
    ]
  }
]

export default function ManagementProfilePage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#F4FAFF] via-white to-[#EAF6FD] text-slate-800 relative overflow-hidden">
      
      {/* Custom Redesigned Premium Light Executive Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-24 border-b border-[#017ACA]/10">
        {/* Soft background grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(1,122,202,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(1,122,202,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        {/* Soft blue glow */}
        <div className="absolute left-[-10%] top-[-25%] h-[500px] w-[500px] rounded-full bg-[#017ACA]/5 blur-[110px] pointer-events-none" />

        {/* Soft yellow glow */}
        <div className="absolute right-[-10%] bottom-[-20%] h-[500px] w-[500px] rounded-full bg-[#FDCD02]/7 blur-[110px] pointer-events-none" />

        <div className="container relative mx-auto px-4 md:px-6 z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs md:text-sm text-slate-500 mb-8 max-w-5xl mx-auto">
            <Link href="/" className="hover:text-[#017ACA] transition-colors flex items-center gap-1">
              <Home className="size-3.5" /> Home
            </Link>
            <ChevronRight className="size-3.5 opacity-50" />
            <span className="opacity-80">Who We Are</span>
            <ChevronRight className="size-3.5 opacity-50" />
            <span className="text-[#017ACA] font-semibold">Management Profile</span>
          </div>

          <div className="mx-auto max-w-5xl text-center">
            <div className="mx-auto mb-6 inline-flex items-center rounded-full border border-[#017ACA]/15 bg-white/95 px-4.5 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#017ACA] shadow-sm">
              Leadership & Governance
            </div>

            <h1 className="text-4xl font-black tracking-tight text-[#003B66] md:text-6xl leading-tight">
              Management Profile
            </h1>

            <div className="mx-auto mt-6 h-[4px] w-20 rounded-full bg-gradient-to-r from-[#FDCD02] via-[#017ACA] to-[#FDCD02]" />

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#475569] md:text-lg font-medium">
              Meet the leadership team guiding Anthem Global with decades of experience, integrity, and a commitment to technology-driven progress.
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16 md:px-6 md:py-20 relative">
        <SectionWatermark className="top-[15%] right-[3%] opacity-[0.015]" size={420} />
        <SectionWatermark className="bottom-[25%] left-[2%] opacity-[0.02]" size={380} />
        
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 max-w-[1400px] mx-auto relative z-10 items-stretch">
          {managementTeam.map((member) => (
            <TiltedCard key={member.name} className="h-full w-full" scale={1.005} maxRotate={1.5}>
              <ProfileCard
                name={member.name}
                role={member.role}
                avatar={member.avatar}
                education={member.education}
                bio={member.bio}
                expertise={member.expertise}
                responsibilities={member.responsibilities}
                achievements={member.achievements}
                emails={member.emails}
                phone={member.phone}
                statBadge={member.statBadge}
              />
            </TiltedCard>
          ))}
        </div>

        <BrandCTA 
          className="mt-20"
          title="Fostering E-Governance Innovation"
          description="Anthem Global's executive management is committed to implementing reliable, high-performance IT integrations for state and national infrastructure programs."
          buttonText="Work With Our Group"
          href="/contact"
        />
      </main>

      <AnthemRouteMedia slug="managementprofile" />
      <Footer />
    </div>
  )
}
