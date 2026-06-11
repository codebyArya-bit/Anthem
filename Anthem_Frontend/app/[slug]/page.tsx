// app/[slug]/page.tsx
import { redirect } from "next/navigation";
import { isRedirectError } from "next/dist/client/components/redirect";
import { API_URL } from "@/lib/config";
import { resolveSlug, generateSlug } from "@/lib/team";
import { fallbackTeamMembers } from "@/lib/fallback-team";

const readableServiceAliases: Record<string, string> = {
  // Aliases mapping to dynamic routes
  "website design & development": "/it-services/design-development",
  "website design and development": "/it-services/design-development",
  "website-design-development": "/it-services/design-development",
  "custom software development": "/it-services/custom-software",
  "custom-software-development": "/it-services/custom-software",
  "mobility services": "/it-services/iphone-app",
  "mobility-services": "/it-services/iphone-app",
  "e-commerce solutions": "/it-services/ecommerce",
  "ecommerce solutions": "/it-services/ecommerce",
  "e-commerce-solutions": "/it-services/ecommerce",
  "digitization & document processing": "/it-services/digitization",
  "digitization and document processing": "/it-services/digitization",
  "digitization-document-processing": "/it-services/digitization",
  "biometric solutions": "/it-services/biometric-solution",
  "biometric-solutions": "/it-services/biometric-solution",
  "vehicle tracking system": "/it-services/vehicle-tracking-system",
  "outsourcing": "/it-services/outsourcing",
  "e-waste management": "/it-services/ewaste-management",
  "ewaste management": "/it-services/ewaste-management",
  "e-waste-management": "/it-services/ewaste-management",

  // Direct paths mapping to dynamic routes
  "design-development": "/it-services/design-development",
  "custom-software": "/it-services/custom-software",
  "iphone-app": "/it-services/iphone-app",
  "ecommerce": "/it-services/ecommerce",
  "digitization": "/it-services/digitization",
  "biometric-solution": "/it-services/biometric-solution",
  "vehicle-tracking-system": "/it-services/vehicle-tracking-system",
  "ewaste-management": "/it-services/ewaste-management",
  "education-erp": "/it-services/education-erp",
  "jeemocktest": "/it-services/jeemocktest"
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

  try {
    let members = [];
    try {
      const res = await fetch(`${API_URL}/api/team/`, {
        cache: "no-store",
      });
      if (res.ok) {
        members = await res.json();
      }
    } catch (err) {
      console.error("API error in RootSlugPage, using fallback team:", err);
    }

    // Merge API data with fallback data
    const mergedMembers = [...members];
    fallbackTeamMembers.forEach(fb => {
      if (!mergedMembers.some(m => generateSlug(m.name) === generateSlug(fb.name))) {
        mergedMembers.push(fb);
      }
    });

    const realSlug = resolveSlug(params.slug, mergedMembers);

    if (!realSlug) {
      redirect("/team");
    }

    redirect(`/team/${realSlug}`);
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    console.error("Error fetching team in RootSlugPage:", error);
    redirect("/team");
  }
}
