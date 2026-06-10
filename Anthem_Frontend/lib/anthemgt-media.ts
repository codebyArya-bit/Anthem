export type AnthemMediaAsset = {
  src: string;
  alt: string;
  credit: string;
  sourceUrl: string;
};

export type AnthemVideoAsset = AnthemMediaAsset & {
  poster: string;
};

export type AnthemMediaProfile = {
  slug: string;
  eyebrow: string;
  headline: string;
  summary: string;
  effect: "strategy" | "gallery" | "security" | "motion" | "operations";
  hero: AnthemMediaAsset;
  images: AnthemMediaAsset[];
  video?: AnthemVideoAsset;
};

export type AnthemOfficeLocation = {
  id: string;
  label: string;
  address: string;
  phone?: string;
  image: AnthemMediaAsset;
  mapsUrl: string;
};

const mediaBase = "/anthemgt-media";
const officeBase = "/anthemgt-offices";

const stockCredits = {
  unsplash: "Downloaded from Unsplash under the Unsplash License.",
  pexels: "Downloaded from Pexels under the Pexels License.",
  officeFallback: "Local fallback image. Replace with approved office photo when available.",
};

const stockSources = {
  strategyMeeting: "https://unsplash.com/photos/1517245386807-bb43f82c33c4",
  softwareTeam: "https://unsplash.com/photos/1551434678-e076c223a692",
  modernOffice: "https://unsplash.com/photos/1497366754035-f200968a6e72",
  officeBuilding: "https://unsplash.com/photos/1486406146926-c627a92ad1ab",
  digitalWorkflow: "https://unsplash.com/photos/1516321318423-f06f85e504b3",
  mobileDevelopment: "https://unsplash.com/photos/1512941937669-90a1b58e7e9c",
  ecommerce: "https://unsplash.com/photos/1556742049-0cfed4f6a45d",
  documentProcessing: "https://unsplash.com/photos/1450101499163-c8848c66ca85",
  biometricSecurity: "https://unsplash.com/photos/1555949963-aa79dcee981c",
  vehicleTracking: "https://unsplash.com/photos/1494783367193-149034c05e8f",
  careerTeam: "https://unsplash.com/photos/1522071820081-009f0129c71c",
  ewaste: "https://unsplash.com/photos/1611284446314-60a58ac0deb9",
  businessMeetingVideo: "https://www.pexels.com/video/business-people-having-a-meeting-5438640/",
};

function image(file: string, alt: string, sourceUrl: string): AnthemMediaAsset {
  return {
    src: `${mediaBase}/${file}`,
    alt,
    credit: stockCredits.unsplash,
    sourceUrl,
  };
}

const assets = {
  strategyMeeting: image("strategy-meeting.jpg", "Business team reviewing a digital strategy plan", stockSources.strategyMeeting),
  softwareTeam: image("software-team.jpg", "Software team collaborating around a workstation", stockSources.softwareTeam),
  modernOffice: image("modern-office.jpg", "Modern technology office interior", stockSources.modernOffice),
  officeBuilding: image("office-building.jpg", "Contemporary office building exterior", stockSources.officeBuilding),
  digitalWorkflow: image("digital-workflow.jpg", "Laptop screen showing digital workflow and analytics", stockSources.digitalWorkflow),
  mobileDevelopment: image("mobile-development.jpg", "Mobile app interface in a developer workspace", stockSources.mobileDevelopment),
  ecommerce: image("ecommerce.jpg", "Online commerce and payment workflow", stockSources.ecommerce),
  documentProcessing: image("document-processing.jpg", "Business documents prepared for digitization", stockSources.documentProcessing),
  biometricSecurity: image("biometric-security.jpg", "Secure software code and identity technology display", stockSources.biometricSecurity),
  vehicleTracking: image("vehicle-tracking.jpg", "Vehicle movement and location tracking context", stockSources.vehicleTracking),
  careerTeam: image("career-team.jpg", "Professional team working together in an office", stockSources.careerTeam),
  ewaste: image("ewaste.jpg", "Responsible electronics lifecycle and e-waste context", stockSources.ewaste),
};

const whoWeAreImages = [
  assets.modernOffice,
  assets.digitalWorkflow,
  assets.softwareTeam,
  assets.strategyMeeting,
  assets.officeBuilding,
  assets.mobileDevelopment,
  assets.ecommerce,
  assets.documentProcessing,
  assets.biometricSecurity,
  assets.vehicleTracking,
  assets.careerTeam,
  assets.ewaste,
];

const sharedVideo: AnthemVideoAsset = {
  src: `${mediaBase}/business-meeting.mp4`,
  poster: assets.strategyMeeting.src,
  alt: "Business people discussing a project in a meeting",
  credit: stockCredits.pexels,
  sourceUrl: stockSources.businessMeetingVideo,
};

const profiles: AnthemMediaProfile[] = [
  {
    slug: "mission-vision",
    eyebrow: "Mission and Vision",
    headline: "Clarity, technology, and reliable delivery",
    summary: "A visual layer for Anthem's direction, values, and technology-first operating model.",
    effect: "strategy",
    hero: assets.strategyMeeting,
    images: whoWeAreImages,
    video: sharedVideo,
  },
  {
    slug: "why-anthem",
    eyebrow: "Why Anthem",
    headline: "Practical delivery with measurable business value",
    summary: "Animated proof points highlight turnaround, quality, reusable methods, and competitive execution.",
    effect: "operations",
    hero: assets.softwareTeam,
    images: whoWeAreImages,
    video: sharedVideo,
  },
  {
    slug: "managementprofile",
    eyebrow: "Management Profile",
    headline: "Experienced leadership for software and IT consulting",
    summary: "Leadership visuals support the management profile without replacing preserved scraped content.",
    effect: "strategy",
    hero: assets.modernOffice,
    images: whoWeAreImages,
  },
  {
    slug: "sister-concern-company",
    eyebrow: "Sister Organizations",
    headline: "Connected companies and operating strengths",
    summary: "Partner-style media cards give the page a more modern organizational presentation.",
    effect: "gallery",
    hero: assets.officeBuilding,
    images: whoWeAreImages,
  },
  {
    slug: "presentationnew",
    eyebrow: "Presentations",
    headline: "Company stories, decks, and project narratives",
    summary: "Media panels and gallery motion modernize the preserved presentation downloads.",
    effect: "motion",
    hero: assets.strategyMeeting,
    images: whoWeAreImages,
  },
  {
    slug: "career",
    eyebrow: "Careers",
    headline: "A workplace for builders, operators, and problem solvers",
    summary: "Team imagery and video motion make career content feel active and current.",
    effect: "gallery",
    hero: assets.careerTeam,
    images: whoWeAreImages,
    video: sharedVideo,
  },
  {
    slug: "partners",
    eyebrow: "Partners",
    headline: "Reliable collaboration for public and enterprise projects",
    summary: "Partner visuals support the existing client and project references.",
    effect: "operations",
    hero: assets.officeBuilding,
    images: [assets.strategyMeeting, assets.digitalWorkflow, assets.careerTeam],
    video: sharedVideo,
  },
  {
    slug: "clients",
    eyebrow: "Clients",
    headline: "Trusted by institutions, enterprises, and public-sector teams",
    summary: "Client cards and local media create a stronger proof-of-work section.",
    effect: "gallery",
    hero: assets.strategyMeeting,
    images: [assets.officeBuilding, assets.modernOffice, assets.softwareTeam],
  },
  {
    slug: "design-development",
    eyebrow: "Website Design and Development",
    headline: "Modern web experiences with robust implementation",
    summary: "Interactive visual treatments support web design, portals, and frontend delivery.",
    effect: "motion",
    hero: assets.digitalWorkflow,
    images: [assets.softwareTeam, assets.modernOffice, assets.strategyMeeting],
  },
  {
    slug: "custom-software",
    eyebrow: "Custom Software Development",
    headline: "Business software shaped around real workflows",
    summary: "Software delivery visuals support custom applications, inventory, reporting, and automation.",
    effect: "strategy",
    hero: assets.softwareTeam,
    images: [assets.digitalWorkflow, assets.strategyMeeting, assets.modernOffice],
    video: sharedVideo,
  },
  {
    slug: "iphone-app",
    eyebrow: "Mobility Services",
    headline: "Mobile-ready services for practical field and customer workflows",
    summary: "Mobile imagery updates the preserved mobility service page.",
    effect: "motion",
    hero: assets.mobileDevelopment,
    images: [assets.digitalWorkflow, assets.softwareTeam, assets.strategyMeeting],
  },
  {
    slug: "ecommerce",
    eyebrow: "E-Commerce Solutions",
    headline: "Commerce flows built for smoother online operations",
    summary: "Retail and payment imagery supports ecommerce software and web storefront content.",
    effect: "operations",
    hero: assets.ecommerce,
    images: [assets.digitalWorkflow, assets.softwareTeam, assets.modernOffice],
  },
  {
    slug: "digitization",
    eyebrow: "Digitization and Document Processing",
    headline: "Structured document workflows for faster information access",
    summary: "Document imagery reinforces records conversion, organization, and processing services.",
    effect: "strategy",
    hero: assets.documentProcessing,
    images: [assets.digitalWorkflow, assets.softwareTeam, assets.modernOffice],
  },
  {
    slug: "biometric-solution",
    eyebrow: "Biometric Solutions",
    headline: "Identity, attendance, and security workflows",
    summary: "Security-themed media and subtle canvas motion support biometric service content.",
    effect: "security",
    hero: assets.biometricSecurity,
    images: [assets.digitalWorkflow, assets.modernOffice, assets.softwareTeam],
  },
  {
    slug: "vehicle-tracking-system",
    eyebrow: "Vehicle Tracking System",
    headline: "Location intelligence for operational movement",
    summary: "Tracking and map-like visuals support vehicle monitoring and reporting features.",
    effect: "motion",
    hero: assets.vehicleTracking,
    images: [assets.digitalWorkflow, assets.strategyMeeting, assets.officeBuilding],
  },
  {
    slug: "outsourcing",
    eyebrow: "Outsourcing",
    headline: "Managed execution for deployed applications",
    summary: "Operations imagery supports mature application management and workforce services.",
    effect: "operations",
    hero: assets.modernOffice,
    images: [assets.careerTeam, assets.softwareTeam, assets.strategyMeeting],
    video: sharedVideo,
  },
  {
    slug: "ewaste-management",
    eyebrow: "E-Waste Management",
    headline: "Responsible technology lifecycle support",
    summary: "E-waste visuals reinforce responsible disposal and technology lifecycle messaging.",
    effect: "security",
    hero: assets.ewaste,
    images: [assets.officeBuilding, assets.documentProcessing, assets.digitalWorkflow],
  },
];

export const anthemMediaBySlug = Object.fromEntries(profiles.map((profile) => [profile.slug, profile])) as Record<
  string,
  AnthemMediaProfile
>;

export const anthemMediaSlugs = profiles.map((profile) => profile.slug);

export const officeLocations: AnthemOfficeLocation[] = [
  {
    id: "bhubaneswar",
    label: "Development Center (HQ)",
    address: "Anthem Tower, IDCO Plot No. N24, 25, 26 & 27, New IT Zone, Chandaka Industrial Estate, Bhubaneswar-751024",
    phone: "+91-674-6026325",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Anthem+Tower+New+IT+Zone+Chandaka+Industrial+Estate+Bhubaneswar",
    image: {
      src: "/image/bhubaneswaroffice.png",
      alt: "Development Center HQ office visual",
      credit: "Actual photo of Bhubaneswar Development Center (HQ)",
      sourceUrl: "/image/bhubaneswaroffice.png",
    },
  },
  {
    id: "registered-office",
    label: "Registered Office",
    address: "Registered office location for Anthem Global Technology Services.",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Anthem+Global+Technology+Services+registered+office",
    image: {
      src: `${officeBase}/registered-office.jpg`,
      alt: "Registered office visual",
      credit: stockCredits.officeFallback,
      sourceUrl: stockSources.modernOffice,
    },
  },
  {
    id: "agartala",
    label: "Agartala Office",
    address: "Agartala office location.",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Anthem+Global+Technology+Services+Agartala",
    image: {
      src: `${officeBase}/agartala-office.jpg`,
      alt: "Agartala office visual",
      credit: stockCredits.officeFallback,
      sourceUrl: stockSources.strategyMeeting,
    },
  },
  {
    id: "bhilai",
    label: "Bhilai Office",
    address: "Bhilai office location.",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Anthem+Global+Technology+Services+Bhilai",
    image: {
      src: `${officeBase}/bhilai-office.jpg`,
      alt: "Bhilai office visual",
      credit: stockCredits.officeFallback,
      sourceUrl: stockSources.softwareTeam,
    },
  },
  {
    id: "raipur",
    label: "Raipur Office",
    address: "Raipur office location.",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Anthem+Global+Technology+Services+Raipur",
    image: {
      src: `${officeBase}/raipur-office.jpg`,
      alt: "Raipur office visual",
      credit: stockCredits.officeFallback,
      sourceUrl: stockSources.digitalWorkflow,
    },
  },
];
