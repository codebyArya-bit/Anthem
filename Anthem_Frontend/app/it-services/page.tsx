"use client"
import { Footer } from "@/components/Footer";;
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { API_URL } from "@/lib/config";

type Service = {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  long_description: string;
  benefits: string[];
  technologies: string[];
  developers: number[];
  demo_video_url: string;
  status: string;
  sort_order: number;
  created_at: string;
  updated_at: string;
};

const fallbackITServices: Service[] = [
  {
    id: "custom-software",
    title: "Custom Software Development",
    description: "Tailored business software shaped around your actual workflows. Databases, CRM, ERP, and API integrations.",
    image: "/anthemgt-media/software-team.jpg",
    features: ["Workflow Automation", "Legacy Migration", "API Integration", "Secure Database Admin"],
    long_description: "",
    benefits: [],
    technologies: [],
    developers: [],
    demo_video_url: "",
    status: "active",
    sort_order: 1,
    created_at: "",
    updated_at: ""
  },
  {
    id: "biometric-solution",
    title: "Biometric Solutions",
    description: "Advanced identity validation systems, computer-based exam verification, and access control platforms.",
    image: "/anthemgt-media/biometric-security.jpg",
    features: ["Face Recognition", "Multi-Factor Authentication", "Candidate Verification", "Access Control"],
    long_description: "",
    benefits: [],
    technologies: [],
    developers: [],
    demo_video_url: "",
    status: "active",
    sort_order: 2,
    created_at: "",
    updated_at: ""
  },
  {
    id: "vehicle-tracking-system",
    title: "Vehicle Tracking Systems",
    description: "Real-time location intelligence, telematics routing, and geofencing to optimize movement logistics.",
    image: "/anthemgt-media/vehicle-tracking.jpg",
    features: ["High-Precision GPS", "IoT Sensors", "Geofencing Alerting", "Route Optimization"],
    long_description: "",
    benefits: [],
    technologies: [],
    developers: [],
    demo_video_url: "",
    status: "active",
    sort_order: 3,
    created_at: "",
    updated_at: ""
  },
  {
    id: "web-development",
    title: "Web Design and Development",
    description: "Responsive, high-performance web applications built for business scalability, transactional portals, and dashboards.",
    image: "/anthemgt-media/digital-workflow.jpg",
    features: ["Custom Frontends", "Progressive Web Apps", "E-Commerce Integrations", "Secure Dashboards"],
    long_description: "",
    benefits: [],
    technologies: [],
    developers: [],
    demo_video_url: "",
    status: "active",
    sort_order: 4,
    created_at: "",
    updated_at: ""
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    description: "Secure, native capabilities for iOS and Android to support field workflows and customer engagement.",
    image: "/anthemgt-media/mobile-development.jpg",
    features: ["Native iOS/Android", "Offline Capability", "Push Notifications", "App Store Operations"],
    long_description: "",
    benefits: [],
    technologies: [],
    developers: [],
    demo_video_url: "",
    status: "active",
    sort_order: 5,
    created_at: "",
    updated_at: ""
  },
  {
    id: "outsourcing",
    title: "Managed Workforce Outsourcing",
    description: "Gain access to top-tier technical squads and remote consulting managers for software and IT operations.",
    image: "/anthemgt-media/modern-office.jpg",
    features: ["Deployed Tech Teams", "Flexible Scale Up/Down", "Managed Delivery SLAs", "Continuous Learning Matrix"],
    long_description: "",
    benefits: [],
    technologies: [],
    developers: [],
    demo_video_url: "",
    status: "active",
    sort_order: 6,
    created_at: "",
    updated_at: ""
  }
];

export default function ITServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  // Fetch services from API
  useEffect(() => {
    const fetchServices = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const response = await fetch(`${API_URL}/api/services/`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Filter active services and sort by sort_order
        const activeServices = data
          .filter((service: Service) => service.status === 'active')
          .sort((a: Service, b: Service) => a.sort_order - b.sort_order);
        
        setServices(activeServices);
      } catch (error) {
        console.error("Error fetching services, loading fallbacks:", error);
        setServices(fallbackITServices);
      } finally {
        setIsLoading(false);
      }
    };

    fetchServices();
  }, []);

  const slugifyTitle = (title: string) =>
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  const getImageUrl = (imagePath?: string | null, fallback = "/placeholder.svg") => {
    if (!imagePath) return fallback;
    const cleaned = imagePath.trim().replace(/^`+/, "").replace(/`+$/, "").trim();
    if (!cleaned) return fallback;
    if (cleaned.startsWith("http")) return cleaned;
    if (cleaned.startsWith("/") && (cleaned.startsWith("/images/") || cleaned.startsWith("/anthemgt-media/") || cleaned.startsWith("/certifications/") || cleaned.startsWith("/office_images/") || cleaned.startsWith("/placeholder"))) {
      return cleaned;
    }
    const normalized = cleaned.startsWith("/") ? cleaned : `/${cleaned}`;
    return `${API_URL}${normalized}`;
  };

  // Generate slug from service ID and title
  const generateServiceSlug = (id: string, title: string) => {
    const titleSlug = slugifyTitle(title);
    const isNumericId = /^\d+$/.test(id);
    return isNumericId ? `${id}-${titleSlug}` : id;
  };

  return (
    <div className="flex min-h-[100dvh] flex-col">
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-anthem-bgLight to-sky-100/10">
        <div className="container px-4 md:px-6 relative z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Empowering Innovation with Technology
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Building smart solutions in Web Development, Data Analytics, and
              AI to drive digital transformation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="w-full py-20 md:py-32 bg-background">
        <div className="container px-4 md:px-6">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 className="size-12 animate-spin text-primary mb-4" />
              <p className="text-muted-foreground">Loading our services...</p>
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <div className="text-red-500 mb-4">{error}</div>
              <Button onClick={() => window.location.reload()}>
                Try Again
              </Button>
            </div>
          ) : services.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-xl font-semibold mb-2">No Services Available</h3>
              <p className="text-muted-foreground">We're currently updating our services.</p>
            </div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {services.map((service, i) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <Card className="h-full w-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-blue-50/30 backdrop-blur transition-all hover:shadow-xl">
                    <div className="relative h-56 overflow-hidden bg-slate-50">
                      {failedImages[service.id] ? (
                        <div className="w-full h-full bg-gradient-to-br from-[#017ACA]/10 via-[#F4FAFF] to-[#017ACA]/5 flex flex-col items-center justify-center p-4 text-center select-none">
                          <span className="text-3xl mb-2">💻</span>
                          <span className="font-semibold text-xs text-[#003B66]">Anthem Technology</span>
                        </div>
                      ) : (
                        <>
                          <img
                            src={getImageUrl(service.image, "/placeholder.svg")}
                            alt={service.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            onError={() => setFailedImages((prev) => ({ ...prev, [service.id]: true }))}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                          <div className="absolute bottom-4 left-4">
                            <div className="text-white text-sm font-semibold bg-primary/90 px-3 py-1 rounded-full">
                              {service.features.length} Features
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {service.description}
                      </p>
                      <div className="space-y-2 mb-4">
                        {service.features.slice(0, 2).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="size-2 rounded-full bg-primary"></div>
                            <span className="text-sm text-muted-foreground">
                              {feature}
                            </span>
                          </div>
                        ))}
                        {service.features.length > 2 && (
                          <div className="flex items-center gap-2">
                            <div className="size-2 rounded-full bg-primary"></div>
                            <span className="text-sm text-muted-foreground">
                              And {service.features.length - 2} more...
                            </span>
                          </div>
                        )}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                        asChild
                      >
                        <Link href={`/it-services/${generateServiceSlug(service.id, service.title)}`}>
                          Learn More
                          <ArrowRight className="ml-2 size-3" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}