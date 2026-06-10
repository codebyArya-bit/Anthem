"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { API_URL } from "@/lib/config";

const fallbackServices = [
  { id: "design-development", title: "Website Design & Development", slug: "design-development" },
  { id: "custom-software", title: "Custom Software Development", slug: "custom-software" },
  { id: "iphone-app", title: "Mobility Services", slug: "iphone-app" },
  { id: "ecommerce", title: "E-Commerce Solutions", slug: "ecommerce" },
  { id: "digitization", title: "Digitization & Document Processing", slug: "digitization" },
  { id: "biometric-solution", title: "Biometric Solutions", slug: "biometric-solution" },
  { id: "vehicle-tracking-system", title: "Vehicle Tracking System", slug: "vehicle-tracking-system" },
  { id: "outsourcing", title: "Outsourcing", slug: "outsourcing" },
  { id: "ewaste-management", title: "E-Waste Management", slug: "ewaste-management" }
];

const fallbackProducts = [
  { id: "jeemocktest", name: "TCS iON Digital PrepTest", url: "/it-services/jeemocktest" },
  { id: "education-erp", name: "Education ERP", url: "/it-services/education-erp" }
];

export function Footer() {
  const [services, setServices] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);

  const generateServiceSlug = (id: string | number, title: string) => {
    const titleSlug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    const isNumericId = /^\d+$/.test(String(id));
    return isNumericId ? `${id}-${titleSlug}` : String(id);
  };

  useEffect(() => {
    let active = true;

    const fetchServices = async () => {
      try {
        const res = await fetch(`${API_URL}/api/services/`);
        if (!res.ok) throw new Error("Failed to fetch services");
        const data = await res.json();
        const arr = Array.isArray(data) ? data : data.results || [];

        if (arr.length > 0 && active) {
          const mapped = arr
            .map((s: any, idx: number) => ({
              id: String(s.id ?? idx),
              slug: s.slug || undefined,
              title: s.title,
              status: s.status || "active",
              sort_order: typeof s.sort_order === "number" ? s.sort_order : idx
            }))
            .filter((s: any) => 
              s.status === "active" && 
              s.id !== "14" && 
              s.id !== "6" && 
              !s.title.toLowerCase().includes("lidar")
            )
            .sort((a: any, b: any) => a.sort_order - b.sort_order);

          if (mapped.length > 0) {
            setServices(mapped);
            return;
          }
        }
      } catch (err) {
        console.error("Error fetching services for footer:", err);
      }
      if (active) {
        setServices(fallbackServices);
      }
    };

    const fetchProducts = async () => {
      try {
        const res = await fetch(`${API_URL}/api/products/`);
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        const arr = Array.isArray(data) ? data : data.results || [];

        if (arr.length > 0 && active) {
          const mapped = arr
            .map((p: any, idx: number) => ({
              id: String(p.id ?? idx),
              name: p.name,
              status: p.status || "active",
              featured: p.featured || false,
              sortOrder: typeof p.sortOrder === "number" ? p.sortOrder : idx
            }))
            .sort((a: any, b: any) => {
              if (a.featured !== b.featured) return a.featured ? -1 : 1;
              return a.sortOrder - b.sortOrder;
            });

          if (mapped.length > 0) {
            setProducts(mapped);
            return;
          }
        }
      } catch (err) {
        console.error("Error fetching products for footer:", err);
      }
      if (active) {
        setProducts(fallbackProducts);
      }
    };

    fetchServices();
    fetchProducts();

    return () => {
      active = false;
    };
  }, []);

  return (
    <footer className="w-full border-t border-anthem-lightBlue/30 bg-anthem-bgLight/60 backdrop-blur-sm relative z-20">
      <div className="container px-4 py-10 md:px-6 lg:py-16 mx-auto">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Newsletter & Certification */}
          <div className="lg:col-span-1">
            <p className="text-sm text-slate-600 mb-6">Our insights to your inbox</p>
            <div className="flex gap-2 max-w-[280px]">
              <input
                type="email"
                placeholder="Your Email..."
                className="flex-1 px-3 py-2 text-sm border border-slate-200 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-anthem-blue"
              />
              <Button size="sm" variant="anthem">Send</Button>
            </div>
            {/* Anthem Footer Branding Image */}
            <div className="mt-5">
              <img
                src="/footer image.png"
                alt="Anthem Global Technology Services Pvt. Ltd. An ISO 9001:2008 Certified Company"
                className="h-auto max-w-[260px] object-contain rounded border border-anthem-lightBlue/10 shadow-sm"
              />
            </div>
          </div>

          {/* Our Company Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider mb-4 text-anthem-textDark">Our Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/aboutus" className="text-slate-600 hover:text-anthem-blue font-medium transition-colors">
                  Company Profile
                </Link>
              </li>
              <li>
                <Link href="/mission-vision" className="text-slate-600 hover:text-anthem-blue font-medium transition-colors">
                  Vision
                </Link>
              </li>
              <li>
                <Link href="/why-anthem" className="text-slate-600 hover:text-anthem-blue font-medium transition-colors">
                  Why Anthem Global
                </Link>
              </li>
              <li>
                <Link href="/managementprofile" className="text-slate-600 hover:text-anthem-blue font-medium transition-colors">
                  Management Profile
                </Link>
              </li>
              <li>
                <Link href="/sister-concern-company" className="text-slate-600 hover:text-anthem-blue font-medium transition-colors">
                  Sister Organizations
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-slate-600 hover:text-anthem-blue font-medium transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-600 hover:text-anthem-blue font-medium transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/career" className="text-slate-600 hover:text-anthem-blue font-medium transition-colors">
                  Career
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-600 hover:text-anthem-blue font-medium transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Products Links (Dynamic Routes) */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider mb-4 text-anthem-textDark">Our Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="text-slate-600 hover:text-anthem-blue font-medium transition-colors">
                  Product List
                </Link>
              </li>
              {products.map((p) => (
                <li key={p.id}>
                  <Link
                    href={p.url || `/products/${p.id}`}
                    className="text-slate-600 hover:text-anthem-blue font-medium transition-colors"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services Links (Dynamic Routes) */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider mb-4 text-anthem-textDark">Our Services</h4>
            <ul className="space-y-2 text-sm">
              {services.map((s) => {
                const baseSlug = s.slug || generateServiceSlug(s.id, s.title);
                return (
                  <li key={s.id}>
                    <Link
                      href={`/it-services/${baseSlug}`}
                      className="text-slate-600 hover:text-anthem-blue font-medium transition-colors"
                    >
                      {s.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Corporate Offices Address Grid */}
        <div className="border-t border-anthem-lightBlue/30 pt-8 mt-8">
          <h4 className="text-xs font-bold uppercase tracking-wider mb-6 text-anthem-textDark">Contact Us - Our Offices</h4>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {/* Development Center */}
            <div className="flex items-start gap-2.5">
              <MapPin className="size-4 text-anthem-blue mt-1 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-bold text-anthem-textDark mb-1">Development Center</p>
                <p className="text-slate-600 leading-relaxed">
                  Anthem Tower,<br />
                  IDCO Plot No. N24,25,26 & 27,<br />
                  New IT Zone, Chandaka Industrial Estate,<br />
                  Bhubaneswar-751024, Odisha
                </p>
                <p className="text-slate-800 mt-1.5 font-medium flex items-center gap-1.5">
                  <Phone className="size-4 text-anthem-blue flex-shrink-0" /> +91 78730 77777
                </p>
                <p className="text-slate-800 font-medium flex items-center gap-1.5 mt-0.5">
                  <Mail className="size-4 text-anthem-blue flex-shrink-0" /> info@anthemgt.com
                </p>
              </div>
            </div>

            {/* Registered Office */}
            <div className="flex items-start gap-2.5">
              <MapPin className="size-4 text-anthem-blue mt-1 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-bold text-anthem-textDark mb-1">Registered Office</p>
                <p className="text-slate-600 leading-relaxed">
                  HIG 84, Sailshree vihar,<br />
                  Chandrasekharpur,<br />
                  Bhubaneswar-751021, India
                </p>
              </div>
            </div>

            {/* Agartala Office */}
            <div className="flex items-start gap-2.5">
              <MapPin className="size-4 text-anthem-blue mt-1 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-bold text-anthem-textDark mb-1">Agartala Office</p>
                <p className="text-slate-600 leading-relaxed">
                  Adjacent to TFDPC Ltd.,<br />
                  East side of Raj Bhavan, PO: Kunjavan,<br />
                  Agartala, Tripura
                </p>
              </div>
            </div>

            {/* Bhilai Office */}
            <div className="flex items-start gap-2.5">
              <MapPin className="size-4 text-anthem-blue mt-1 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-bold text-anthem-textDark mb-1">Bhilai Office</p>
                <p className="text-slate-600 leading-relaxed">
                  STPI Incubation Centre,<br />
                  Mangal Bhavan, Nehru Nagar (East),<br />
                  Bhilai, Dist: Durg, Chhattisgarh - 490020
                </p>
              </div>
            </div>

            {/* Raipur Office */}
            <div className="flex items-start gap-2.5">
              <MapPin className="size-4 text-anthem-blue mt-1 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-bold text-anthem-textDark mb-1">Raipur Office</p>
                <p className="text-slate-600 leading-relaxed">
                  C-12, Jivan Vihar,<br />
                  Telibandha,<br />
                  Raipur, Chhattisgarh
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="flex flex-col gap-4 sm:flex-row justify-between items-center border-t border-anthem-lightBlue/30 pt-8 mt-8">
          <p className="text-xs text-slate-500">
            © 2026 Anthem Global Technology Services Pvt. Ltd. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/refund-policy" className="text-xs text-slate-500 hover:text-anthem-blue transition-colors">
              Refund Policy
            </Link>
            <Link href="/privacy-policy" className="text-xs text-slate-500 hover:text-anthem-blue transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="text-xs text-slate-500 hover:text-anthem-blue transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
