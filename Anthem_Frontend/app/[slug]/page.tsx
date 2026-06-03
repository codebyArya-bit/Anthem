// app/[slug]/page.tsx
import { redirect } from "next/navigation";
import { API_URL } from "@/lib/config";
import { resolveSlug } from "@/lib/team";

const readableServiceAliases: Record<string, string> = {
  "website design & development": "/design-development",
  "website design and development": "/design-development",
  "website-design-development": "/design-development",
  "custom software development": "/costom-software",
  "custom-software-development": "/costom-software",
  "mobility services": "/iphone-app",
  "mobility-services": "/iphone-app",
  "e-commerce solutions": "/ecommerce",
  "ecommerce solutions": "/ecommerce",
  "e-commerce-solutions": "/ecommerce",
  "digitization & document processing": "/digitization",
  "digitization and document processing": "/digitization",
  "digitization-document-processing": "/digitization",
  "biometric solutions": "/biometric-solution",
  "biometric-solutions": "/biometric-solution",
  "vehicle tracking system": "/vehicle-tracking-system",
  "vehicle-tracking-system": "/vehicle-tracking-system",
  outsourcing: "/outsourcing",
  "e-waste management": "/ewaste-management",
  "ewaste management": "/ewaste-management",
  "e-waste-management": "/ewaste-management",
};

function normalizeSlugAlias(slug: string) {
  try {
    return decodeURIComponent(slug).trim().replace(/\s+/g, " ").toLowerCase();
  } catch {
    return slug.trim().replace(/\s+/g, " ").toLowerCase();
  }
}

export default async function RootSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const servicePath = readableServiceAliases[normalizeSlugAlias(params.slug)];

  if (servicePath) {
    redirect(servicePath);
  }

  const res = await fetch(`${API_URL}/api/team/`, {
    cache: "no-store",
  });

  if (!res.ok) redirect("/team");

  const members = await res.json();

  const realSlug = resolveSlug(params.slug, members);

  if (!realSlug) {
    redirect("/team");
  }

  redirect(`/team/${realSlug}`);
}
