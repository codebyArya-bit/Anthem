"use client";

import { AnthemMediaShowcase } from "@/components/anthemgt/AnthemMediaShowcase";
import { anthemMediaBySlug, officeLocations } from "@/lib/anthemgt-media";

type Props = {
  slug: string;
  showOffices?: boolean;
};

export function AnthemRouteMedia({ slug, showOffices = false }: Props) {
  return <AnthemMediaShowcase profile={anthemMediaBySlug[slug]} offices={officeLocations} showOffices={showOffices} />;
}
