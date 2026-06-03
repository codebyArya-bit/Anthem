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
import GradientText from "@/components/GradientText";
import ScrollFloat from "@/components/ScrollFloat";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import CircularGallery from "@/components/CircularGallery";
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
    <div className="relative overflow-hidden bg-slate-950 text-white">
      {profile && <MediaProfileSection profile={profile} />}
      {showOffices && offices.length > 0 && <OfficeLocationsSection offices={offices} />}
    </div>
  );
}

function MediaProfileSection({ profile }: { profile: AnthemMediaProfile }) {
  const reduceMotion = useReducedMotion();
  const galleryItems = profile.images.map((image) => ({
    image: image.src,
    text: image.alt,
  }));
  const chromaItems = profile.images.map((image, index) => ({
    image: image.src,
    title: ["Strategy", "Delivery", "Support"][index] ?? "Anthem",
    subtitle: image.alt,
    handle: profile.eyebrow,
    borderColor: ["#38bdf8", "#22c55e", "#f59e0b"][index] ?? "#38bdf8",
    gradient: ["linear-gradient(145deg, #0369a1, #020617)", "linear-gradient(145deg, #047857, #020617)", "linear-gradient(145deg, #b45309, #020617)"][index] ?? "linear-gradient(145deg, #0369a1, #020617)",
    url: image.sourceUrl,
  }));

  return (
    <section className="relative px-6 py-16 lg:px-8">
      <div className="absolute inset-0 opacity-50">
        <SoftAurora
          speed={0.35}
          color1={profile.effect === "security" ? "#22c55e" : "#38bdf8"}
          color2={profile.effect === "motion" ? "#f59e0b" : "#2563eb"}
          enableMouseInteraction={!reduceMotion}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <FloatingLines
          linesGradient={["#38bdf8", "#22c55e", "#f8fafc"]}
          interactive={!reduceMotion}
          lineCount={[3, 4, 3]}
          lineDistance={[8, 6, 9]}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div {...reveal}>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-cyan-100 backdrop-blur">
            <Sparkles className="h-4 w-4" />
            {profile.eyebrow}
          </div>
          <GradientText
            className="text-4xl font-black leading-tight md:text-6xl"
            colors={["#ffffff", "#67e8f9", "#4ade80", "#ffffff"]}
            animationSpeed={10}
          >
            {profile.headline}
          </GradientText>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">{profile.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contactus" className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-black text-slate-950 shadow-xl transition hover:bg-cyan-200">
              Start a Conversation
            </Link>
            <a href={profile.hero.sourceUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-black text-white transition hover:bg-white/10">
              Media Source <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <motion.div className="grid gap-4 sm:grid-cols-[0.9fr_1.1fr]" {...reveal}>
          <div className="group relative min-h-[340px] overflow-hidden rounded-2xl border border-white/10 bg-white/10 shadow-2xl">
            <img src={profile.hero.src} alt={profile.hero.alt} className="h-full min-h-[340px] w-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-black text-slate-950">
                <ImageIcon className="h-3.5 w-3.5" />
                Local stock image
              </p>
            </div>
          </div>
          <AnthemThreeCanvas color={profile.effect === "security" ? "#22c55e" : "#38bdf8"} />
        </motion.div>
      </div>

      <motion.div className="relative mx-auto mt-14 max-w-7xl" {...reveal}>
        <ScrollFloat
          containerClassName="text-center text-3xl font-black uppercase tracking-tight text-white md:text-5xl"
          textClassName="inline-block"
          animationDuration={reduceMotion ? 0.01 : 1}
        >
          Visual Delivery Layer
        </ScrollFloat>
      </motion.div>

      <motion.div className="relative mx-auto mt-10 grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]" {...reveal}>
        <div className="h-[420px] overflow-hidden rounded-2xl border border-white/10 bg-black/25 p-3">
          <CircularGallery items={galleryItems} bend={profile.effect === "motion" ? 4 : 2} textColor="#ffffff" borderRadius={0.04} />
        </div>
        <div className="grid gap-6">
          {profile.video && (
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/10 shadow-2xl">
              <div className="relative aspect-video">
                <video className="h-full w-full object-cover" src={profile.video.src} poster={profile.video.poster} autoPlay muted loop playsInline />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                <p className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-black text-slate-950">
                  <Film className="h-3.5 w-3.5" />
                  Local stock video
                </p>
              </div>
            </div>
          )}
          <div className="min-h-[360px]">
            <ChromaGrid items={chromaItems} columns={3} rows={1} radius={220} className="anthem-chroma-grid" />
          </div>
        </div>
      </motion.div>

      <motion.div className="relative mx-auto mt-12 max-w-5xl h-[520px] overflow-hidden rounded-2xl border border-white/10 bg-white/5" {...reveal}>
        <ScrollStack className="h-full" itemDistance={80} baseScale={0.88}>
          {profile.images.map((image) => {
            const details = getCorporateDetails(image.src);
            const IconComponent = details.icon;
            return (
              <ScrollStackItem key={image.src} itemClassName="border border-white/10 bg-slate-900/95 p-0 text-white group overflow-hidden">
                <div className="grid h-full overflow-hidden rounded-[inherit] md:grid-cols-[0.9fr_1.1fr]">
                  <div className="relative h-64 w-full overflow-hidden md:h-full">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent md:bg-gradient-to-r md:from-transparent md:to-slate-950" />
                  </div>
                  <div className="relative flex flex-col justify-between p-8 md:p-10">
                    <div>
                      <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border ${details.badgeBg}`}>
                        <IconComponent className="h-3.5 w-3.5" />
                        {details.category}
                      </span>
                      <h3 className="mt-4 text-2xl font-black tracking-tight text-white md:text-3xl leading-tight">
                        {details.title}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-slate-300 md:text-base">
                        {details.description}
                      </p>
                    </div>

                    <div className="mt-6 border-t border-white/10 pt-5">
                      <p className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 mb-3">Core Pillars</p>
                      <div className="flex flex-wrap gap-2">
                        {details.pillars.map((pillar) => (
                          <span
                            key={pillar}
                            className="text-xs bg-white/5 hover:bg-white/10 px-2.5 py-1.5 rounded-md border border-white/5 text-slate-200 transition-colors"
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
    <section className="border-t border-white/10 bg-white px-6 py-16 text-slate-950 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-blue-700">Office Locations</p>
            <h2 className="mt-2 text-3xl font-black md:text-5xl">Anthem offices and contact points</h2>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-slate-600">
            These are local fallback images. Replace files in <code className="rounded bg-slate-100 px-1 py-0.5">public/anthemgt-offices</code> with approved office photos when available.
          </p>
        </div>

        <Tabs defaultValue={offices[0]?.id} className="w-full">
          <TabsList className="hidden h-auto w-full gap-1 rounded-md bg-muted p-1 text-muted-foreground md:flex">
            {offices.map((office) => (
              <TabsTrigger key={office.id} value={office.id} className="flex-1 px-3 py-2 text-sm font-medium">
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
    <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl md:grid-cols-[1.1fr_0.9fr]">
      <img src={office.image.src} alt={office.image.alt} className="h-72 w-full object-cover md:h-full" />
      <div className="p-7 md:p-10">
        <p className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-blue-700">
          <MapPin className="h-4 w-4" />
          {office.label}
        </p>
        <h3 className="mt-5 text-3xl font-black">{office.label}</h3>
        <p className="mt-4 leading-7 text-slate-600">{office.address}</p>
        {office.phone && <p className="mt-3 text-sm font-bold text-slate-800">Tel: {office.phone}</p>}
        <a href={office.mapsUrl} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-blue-700 px-6 py-3 text-sm font-black text-white shadow-lg hover:bg-blue-800">
          Open in Google Maps <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
