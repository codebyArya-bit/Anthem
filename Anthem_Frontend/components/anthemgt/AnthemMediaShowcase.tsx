"use client";

import Link from "next/link";
import {
  ExternalLink,
  Film,
  Image as ImageIcon,
  MapPin,
  Sparkles,
  Shield,
  Cpu,
  TrendingUp,
  Activity,
  Smartphone,
  Globe,
  ShoppingCart,
  Layers,
  Navigation,
  Users,
  Recycle,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SplitText } from "@/components/reactbits/SplitText";
import GradientText from "@/components/GradientText";
import ScrollFloat from "@/components/ScrollFloat";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import ChromaGrid from "@/components/ChromaGrid";
import FloatingLines from "@/components/FloatingLines";
import SoftAurora from "@/components/SoftAurora";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnthemThreeCanvas } from "@/components/anthemgt/AnthemThreeCanvas";
import type { AnthemMediaProfile, AnthemOfficeLocation } from "@/lib/anthemgt-media";

type Props = {
  profile?: AnthemMediaProfile;
  offices?: AnthemOfficeLocation[];
  showOffices?: boolean;
};

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.55, ease: "easeOut" as const },
};

type CorporateCardDetails = {
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  pillars: string[];
  accentColor: string;
  badgeBg: string;
};

function getCorporateDetails(src: string): CorporateCardDetails {
  const lowercaseSrc = src.toLowerCase();

  if (lowercaseSrc.includes("strategy-meeting")) {
    return {
      category: "Strategy & Alignment",
      icon: TrendingUp,
      title: "Collaborative Strategic Planning",
      description: "Fusing domain expertise with business objectives to align stakeholders and deliver scalable roadmaps.",
      pillars: ["Stakeholder Alignment", "Domain Expertise", "Roadmap Definition"],
      accentColor: "from-cyan-500 to-blue-600",
      badgeBg: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
    };
  }
  if (lowercaseSrc.includes("software-team")) {
    return {
      category: "Product Engineering",
      icon: Cpu,
      title: "Agile Development & Execution",
      description: "Cross-functional engineering squads collaborating to design, build, and deploy production-grade software.",
      pillars: ["Continuous Integration", "Quality Assurance", "Agile Execution"],
      accentColor: "from-emerald-500 to-teal-600",
      badgeBg: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    };
  }
  if (lowercaseSrc.includes("modern-office") || lowercaseSrc.includes("office-building")) {
    return {
      category: "Global Infrastructure",
      icon: Globe,
      title: "Enterprise Delivery Centers",
      description: "State-of-the-art technology hubs equipped with secure network grids and fail-safe corporate operations.",
      pillars: ["ISO Certified Hubs", "Secure Operations", "Business Continuity"],
      accentColor: "from-blue-500 to-indigo-600",
      badgeBg: "bg-blue-500/10 text-blue-300 border-blue-500/20",
    };
  }
  if (lowercaseSrc.includes("digital-workflow") || lowercaseSrc.includes("document-processing")) {
    return {
      category: "Process Automation",
      icon: Activity,
      title: "Business Process Digitization",
      description: "Transforming legacy print, spreadsheets, and databases into modern digital workflows and structured data ecosystems.",
      pillars: ["Workflow Automation", "Legacy Migration", "Digital Archiving"],
      accentColor: "from-purple-500 to-pink-600",
      badgeBg: "bg-purple-500/10 text-purple-300 border-purple-500/20",
    };
  }
  if (lowercaseSrc.includes("mobile-development")) {
    return {
      category: "Mobile Experience",
      icon: Smartphone,
      title: "Cross-Platform Mobility",
      description: "Designing intuitive mobile interfaces with secure native capabilities for iOS, Android, and web touchpoints.",
      pillars: ["Native Performance", "Offline Capability", "Intuitive UX/UI"],
      accentColor: "from-sky-500 to-blue-600",
      badgeBg: "bg-sky-500/10 text-sky-300 border-sky-500/20",
    };
  }
  if (lowercaseSrc.includes("ecommerce")) {
    return {
      category: "Transactional Systems",
      icon: ShoppingCart,
      title: "Enterprise Commerce Solutions",
      description: "Optimized transactional flows, secure gateway integrations, and real-time inventory systems.",
      pillars: ["Payment Orchestration", "High-Volume Scaling", "PCI DSS Compliance"],
      accentColor: "from-amber-500 to-orange-600",
      badgeBg: "bg-amber-500/10 text-amber-300 border-amber-500/20",
    };
  }
  if (lowercaseSrc.includes("biometric-security")) {
    return {
      category: "Information Security",
      icon: Shield,
      title: "Secure Identity & Access Control",
      description: "Advanced biometric systems, multi-factor authentication, and military-grade cryptography for applications.",
      pillars: ["Identity Management", "Data Privacy (GDPR)", "Zero-Trust Security"],
      accentColor: "from-red-500 to-rose-600",
      badgeBg: "bg-red-500/10 text-red-300 border-red-500/20",
    };
  }
  if (lowercaseSrc.includes("vehicle-tracking")) {
    return {
      category: "GIS & Tracking",
      icon: Navigation,
      title: "Location & Spatial Intelligence",
      description: "Real-time fleet tracking, geofencing, and GIS systems to optimize logistics and routing operations.",
      pillars: ["High-Precision GPS", "Route Optimization", "IoT Sensor Data"],
      accentColor: "from-indigo-500 to-purple-600",
      badgeBg: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
    };
  }
  if (lowercaseSrc.includes("career-team") || lowercaseSrc.includes("professional-team")) {
    return {
      category: "Talent & Culture",
      icon: Users,
      title: "Collaborative Deployed Teams",
      description: "Nurturing top-tier technical talent to deliver on complex enterprise engineering projects.",
      pillars: ["Continuous Learning", "Team Integration", "Managed Delivery"],
      accentColor: "from-teal-500 to-emerald-600",
      badgeBg: "bg-teal-500/10 text-teal-300 border-teal-500/20",
    };
  }
  if (lowercaseSrc.includes("ewaste")) {
    return {
      category: "Sustainability",
      icon: Recycle,
      title: "Green IT & Lifecycle Management",
      description: "Eco-friendly disposal, hardware recycling, and sustainable electronics management compliance.",
      pillars: ["E-Waste Certification", "Eco Compliance", "Lifecycle Audits"],
      accentColor: "from-green-500 to-emerald-600",
      badgeBg: "bg-green-500/10 text-green-300 border-green-500/20",
    };
  }

  // Fallback
  return {
    category: "Anthem Solution",
    icon: Sparkles,
    title: "Enterprise Technology Services",
    description: "Delivering business value through software modernization, reliable IT support, and domain consulting.",
    pillars: ["Digital Transformation", "Custom Software", "Enterprise Scaling"],
    accentColor: "from-cyan-500 to-blue-600",
    badgeBg: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
  };
}

export function AnthemMediaShowcase({ profile, offices = [], showOffices = false }: Props) {
  if (!profile && !showOffices) return null;

  return (
    <div className="relative overflow-hidden bg-[#F4FAFF] text-slate-800">
      {profile && <MediaProfileSection profile={profile} />}
      {showOffices && offices.length > 0 && <OfficeLocationsSection offices={offices} />}
    </div>
  );
}

function MediaProfileSection({ profile }: { profile: AnthemMediaProfile }) {
  const reduceMotion = useReducedMotion();
  const chromaItems = profile.images.slice(0, 3).map((image, index) => {
    const details = getCorporateDetails(image.src);
    const styleIndex = index % 3;
    const style = [
      {
        border: "#017ACA",
        gradient: "linear-gradient(145deg, #FFFFFF, #EAF6FD)",
      },
      {
        border: "#FDCD02",
        gradient: "linear-gradient(145deg, #FFFFFF, #FFF8D8)",
      },
      {
        border: "#003B66",
        gradient: "linear-gradient(145deg, #FFFFFF, #F4FAFF)",
      },
    ][styleIndex];

    return {
      image: image.src,
      title: details.title,
      subtitle: details.description,
      handle: details.category,
      borderColor: style.border,
      gradient: style.gradient,
      url: image.sourceUrl,
    };
  });

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F4FAFF] via-white to-[#EAF6FD] px-6 py-16 lg:px-8">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(1,122,202,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(1,122,202,0.045)_1px,transparent_1px)] bg-[size:36px_36px]" />
        <div className="absolute left-[-12%] top-[-20%] h-[420px] w-[420px] rounded-full bg-[#017ACA]/10 blur-[110px]" />
        <div className="absolute right-[-10%] top-[5%] h-[380px] w-[380px] rounded-full bg-[#FDCD02]/12 blur-[120px]" />
        <div className="absolute bottom-[-18%] left-[25%] h-[360px] w-[360px] rounded-full bg-[#017ACA]/7 blur-[120px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div {...reveal}>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#017ACA]/15 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#017ACA] shadow-sm backdrop-blur">
            <Sparkles className="h-4 w-4" />
            {profile.eyebrow}
          </div>
          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-slate-800 md:text-6xl">
            <SplitText text={profile.headline} />
          </h1>
          <div className="mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-[#FDCD02] via-[#017ACA] to-transparent" />
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#475569]">{profile.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contactus" className="rounded-full bg-[#017ACA] px-6 py-3 text-sm font-bold text-white shadow-[0_14px_34px_rgba(1,122,202,0.24)] transition hover:bg-[#005B99] hover:shadow-[0_18px_44px_rgba(1,122,202,0.28)]">
              Start a Conversation
            </Link>
          </div>
        </motion.div>

        <motion.div className="grid gap-4 sm:grid-cols-[0.9fr_1.1fr]" {...reveal}>
          <div className="group relative min-h-[340px] overflow-hidden rounded-3xl border border-[#017ACA]/12 bg-white/80 shadow-[0_24px_70px_rgba(0,59,102,0.10)] backdrop-blur">
            <img src={profile.hero.src} alt={profile.hero.alt} className="h-full min-h-[340px] w-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#003B66]/35 via-transparent to-transparent" />
          </div>
          <div
            className="relative aspect-square min-h-[280px] w-full overflow-hidden rounded-3xl border border-[#017ACA]/12 bg-gradient-to-br from-white via-[#F4FAFF] to-[#EAF6FD] shadow-[0_24px_70px_rgba(0,59,102,0.10)]"
            aria-label="Interactive technology visual"
          >
            <AnthemThreeCanvas color="#017ACA" />
          </div>
        </motion.div>
      </div>

      <motion.div className="relative mx-auto mt-14 max-w-7xl" {...reveal}>
        <ScrollFloat
          containerClassName="scroll-float text-center text-4xl font-extrabold uppercase tracking-tight text-slate-800 md:text-6xl"
          textClassName="inline-block whitespace-nowrap"
          animationDuration={reduceMotion ? 0.01 : 1}
        >
          Visual Delivery Layer
        </ScrollFloat>
        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-[#FDCD02] via-[#017ACA] to-[#FDCD02]" />
      </motion.div>

      <motion.div className="relative mx-auto mt-10 grid max-w-7xl gap-8" {...reveal}>
        <div className="min-h-[360px]">
          <ChromaGrid items={chromaItems} columns={3} rows={1} radius={220} className="anthem-chroma-grid" />
        </div>
      </motion.div>

      <motion.div className="relative mx-auto mt-12 max-w-5xl h-[500px] md:h-[600px] overflow-hidden rounded-3xl border border-[#017ACA]/12 bg-[#F4FAFF]/50 shadow-sm" {...reveal}>
        <ScrollStack className="h-full" itemDistance={80} baseScale={0.88}>
          {profile.images.slice(0, 5).map((image) => {
            const details = getCorporateDetails(image.src);
            const IconComponent = details.icon;
            const isImportant = details.category.toLowerCase().includes("strategy") || details.category.toLowerCase().includes("security");
            const badgeClassName = isImportant
              ? "inline-flex items-center gap-2 rounded-full border border-[#FDCD02]/30 bg-[#FFF7D6] px-3 py-1 text-xs font-black uppercase tracking-wider text-[#8A6A00]"
              : "inline-flex items-center gap-2 rounded-full border border-[#017ACA]/15 bg-[#EAF6FD] px-3 py-1 text-xs font-black uppercase tracking-wider text-[#017ACA]";
            return (
              <ScrollStackItem key={image.src} itemClassName="rounded-3xl border border-[#017ACA]/12 bg-white/90 p-0 text-[#334155] shadow-[0_28px_90px_rgba(0,59,102,0.12)] backdrop-blur group overflow-hidden">
                <div className="grid h-full overflow-hidden rounded-[inherit] md:grid-cols-[0.9fr_1.1fr]">
                  <div className="relative h-40 w-full overflow-hidden md:h-full">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#003B66]/45 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-white/95" />
                  </div>
                  <div className="relative flex flex-col justify-between p-6 md:p-8">
                    <div>
                      <span className={badgeClassName}>
                        <IconComponent className="h-3.5 w-3.5" />
                        {details.category}
                      </span>
                      <h3 className="mt-3 text-xl font-extrabold tracking-tight text-slate-800 md:text-2xl leading-tight">
                        {details.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-[#475569]/90 md:text-sm">
                        {details.description}
                      </p>
                    </div>

                    <div className="mt-4 border-t border-[#017ACA]/10 pt-4">
                      <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[#334155]/60 mb-2">Core Pillars</p>
                      <div className="flex flex-wrap gap-2">
                        {details.pillars.map((pillar) => (
                          <span
                            key={pillar}
                            className="text-xs bg-[#F4FAFF] hover:bg-[#EAF6FD] px-2.5 py-1 rounded-md border border-[#017ACA]/10 text-[#334155] transition-colors"
                          >
                            {pillar}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollStackItem>
            );
          })}
        </ScrollStack>
      </motion.div>
    </section>
  );
}

function OfficeLocationsSection({ offices }: { offices: AnthemOfficeLocation[] }) {
  return (
    <section className="border-t border-[#017ACA]/10 bg-white px-6 py-16 text-slate-950 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#017ACA]">Office Locations</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-800 md:text-5xl">Anthem offices and contact points</h2>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-[#475569]">
            These are local fallback images. Replace files in <code className="rounded bg-[#F4FAFF] border border-[#017ACA]/10 px-1.5 py-0.5">public/anthemgt-offices</code> with approved office photos when available.
          </p>
        </div>

        <Tabs defaultValue={offices[0]?.id} className="w-full">
          <TabsList className="hidden h-auto w-full gap-1 rounded-md bg-[#F4FAFF] border border-[#017ACA]/10 p-1 text-slate-500 md:flex">
            {offices.map((office) => (
              <TabsTrigger
                key={office.id}
                value={office.id}
                className="flex-1 px-3 py-2 text-sm font-medium data-[state=active]:bg-[#017ACA] data-[state=active]:text-white transition-all rounded"
              >
                {office.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="mt-6 grid gap-4 md:hidden">
            {offices.map((office) => (
              <OfficeCard key={office.id} office={office} />
            ))}
          </div>
          <div className="hidden md:block">
            {offices.map((office) => (
              <TabsContent key={office.id} value={office.id} className="mt-6">
                <OfficeCard office={office} />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
}

function OfficeCard({ office }: { office: AnthemOfficeLocation }) {
  return (
    <div className="grid overflow-hidden rounded-3xl border border-[#017ACA]/12 bg-white shadow-xl md:grid-cols-[1.1fr_0.9fr]">
      <img src={office.image.src} alt={office.image.alt} className="h-72 w-full object-cover md:h-full" />
      <div className="p-7 md:p-10">
        <p className="inline-flex items-center gap-2 rounded-full bg-[#EAF6FD] px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-[#017ACA] border border-[#017ACA]/10">
          <MapPin className="h-4 w-4" />
          {office.label}
        </p>
        <h3 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-800">{office.label}</h3>
        <p className="mt-4 leading-7 text-[#475569]">{office.address}</p>
        {office.phone && <p className="mt-3 text-sm font-bold text-[#334155]">Tel: {office.phone}</p>}
        <a
          href={office.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#017ACA] px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-[#005B99] transition-all"
        >
          Open in Google Maps <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
