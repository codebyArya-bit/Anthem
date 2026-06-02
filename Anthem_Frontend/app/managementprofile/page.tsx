"use client"

import { Footer } from "@/components/Footer"
import { PageHero } from "@/components/corporate/PageHero"
import { SectionHeading } from "@/components/corporate/SectionHeading"
import { ProfileCard } from "@/components/corporate/ProfileCard"
import { TiltedCard } from "@/components/reactbits/TiltedCard"
import { Users } from "lucide-react"
import { SectionWatermark } from "@/components/corporate/brand-patterns/SectionWatermark"
import { DataLineDivider } from "@/components/corporate/brand-patterns/DataLineDivider"
import { BrandCTA } from "@/components/corporate/brand-patterns/BrandCTA"

const managementTeam = [
  {
    name: "Manas Ranjan Pattnaik",
    role: "Chairman",
    statBadge: "30+ Years Experience",
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
      "30+ years of domestic and international advisory consulting experience."
    ],
    bio: [
      "A Techno-commercial expert with a Master's degree in Computer Science from San Diego State University, California, USA. He has over 30 years of experience in various domestic and international assignments in the fields of Information Technology and Consulting. He has served extensively in Botswana, Ivory Coast, Algeria, Nepal, Bhutan, and Mauritius assisting governments in setting up their IT and supporting infrastructure.",
      "He was the technical in charge of the ambitious E-governance project of the Indian Judicial System under the aegis of the Hon'ble Supreme Court of India. As Director of Software Technology Parks of India (STPI) he managed 45+ STPI centers across India and also helped in creating 30 of those. He has played a key role in providing consulting services to the ICT programmes and policy formation in China and Panama.",
      "He is also currently actively promoting Entrepreneurship development and has setup his own Information Technology firm which is handling several high profile IT and Data management projects, under the National E-governance program, like Census Data collection and processing, digitization of legal documents, and management systems for railways."
    ]
  },
  {
    name: "Rajesh Kumar Acharya",
    role: "Director",
    statBadge: "25+ Years Experience",
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
      "25+ years of software industry leadership and computer science teaching.",
      "Orchestrated scale operations for regional network monitoring facilities.",
      "Successfully trained and empanelled thousands of youths under National Skill initiatives.",
      "Pioneered secure training delivery centers in Bhubaneswar and Bhilai."
    ],
    bio: [
      "A Techno-commercial expert with M. Tech in Computer Science. He has over 25 years of experience in both Industry and Technical Education.",
      "Has handled many domestic and international assignments in the fields of Information Technology & Consulting. He has expertise in Infrastructure, Software Development, Education & Training, Network operations centers, remote infrastructure management, government relations and business development etc.",
      "He is currently handling Skill and Entrepreneurship development under National Skill Development Program to promote employability and empower youth with technical competencies."
    ]
  },
  {
    name: "Chakradhara Panda",
    role: "Chief Executive Officer (CEO)",
    statBadge: "15+ Years Experience",
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
      "15+ years of software delivery experience in high-impact public projects.",
      "Led massive Socio-economic & Census digitisation operations in multiple states.",
      "Proven track record of managing projects with zero data leaks.",
      "Built highly capable regional technical offices for legal document processing."
    ],
    bio: [
      "Mr. Chakradhara Panda is the CEO of Anthem Global Technologies Pvt Ltd and he is responsible for execution of projects.",
      "He has over 15+ years of delivery experience in implementing high-impact e-governance projects. He was instrumental in building highly capable technical teams in various states for delivering large-scale Socio-economic & Census projects.",
      "His core expertise includes end-to-end project implementation, team building, and operational team management to ensure timely project delivery and compliance."
    ]
  }
]

export default function ManagementProfilePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F7FAFB] text-slate-800 relative overflow-hidden">
      <PageHero
        title="Management Profile"
        description="Anthem Global is steered by visionary leaders and technical pioneers who combine decades of national and international experience in software systems, e-governance, and enterprise project execution."
        image="/Anthem Assests/images_ban-managprofile.jpg"
        icon={Users}
        stats={[
          { value: "30+ Yrs", label: "Consulting expertise" },
          { value: "45+", label: "STPI centers managed" },
        ]}
        darkTheme={true}
      />

      <main className="container mx-auto px-4 py-16 md:px-6 md:py-20 relative">
        <SectionWatermark className="top-[20%] right-[3%] opacity-[0.015]" size={420} />
        <SectionWatermark className="bottom-[25%] left-[2%] opacity-[0.02]" size={380} />
        
        <SectionHeading
          eyebrow="Visionary Leadership"
          title="Steering Anthem's Technological Vision"
          description="Our leadership combines global software craftsmanship with massive public-sector implementation track records."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto relative z-10 mt-10 items-stretch">
          {managementTeam.map((member) => (
            <TiltedCard key={member.name} className="w-full" scale={1.01} maxRotate={3}>
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

      <Footer />
    </div>
  )
}