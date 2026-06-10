export interface UseCase {
  image: string;
  title: string;
  description: string;
  layout?: "image_left" | "image_right";
}

export interface ExploreSubsection {
  title: string;
  slug: string;
  short_description?: string;
  key_benefits?: string[];
  images?: string[];
  primary_block?: {
    title?: string;
    description?: string;
    features?: string[];
  };
}

export interface ExploreSection {
  title: string;
  subsections: ExploreSubsection[];
}

export interface GISService {
  id: string;
  slug?: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  long_description?: string;
  benefits?: string[];
  technologies?: string[];
  developers?: number[];
  use_cases?: UseCase[];
  explore?: ExploreSection;
}

export const fallbackGISServices: GISService[] = [
  {
    id: "1",
    slug: "photogrammetry",
    title: "Photogrammetry Services",
    description: "High-precision digital photogrammetry, triangulation, orthophoto generation, and stereo compilation for infrastructure mapping.",
    long_description: "Our Photogrammetry division uses state-of-the-art software pipelines to process aerial photographs, satellite images, and UAV datasets. We deliver precise topographic surveys, digital elevation models (DEM), planimetric mapping, and orthophoto tiles that support urban planning, forestry, and environmental compliance.",
    image: "/products/High Court of Orissa.jpg",
    features: [
      "Aerial Triangulation",
      "Digital Terrain Modeling (DTM)",
      "Orthophoto Production",
      "Planimetric Feature Extraction"
    ],
    benefits: [
      "Accurate topographic datasets tailored for engineering design.",
      "High-speed data generation via automated extraction scripts.",
      "Consistent quality assurance adhering to national mapping standards."
    ],
    technologies: ["TerraScan", "MicroStation", "QGIS", "ArcGIS"],
    use_cases: [
      {
        title: "Highway Corridor Mapping",
        description: "Planimetric mapping and orthophoto generation for highway expansion planning, detailing boundaries, pavements, and landmarks.",
        image: "/products/High Court of Orissa.jpg"
      }
    ],
    explore: {
      title: "Explore Photogrammetry",
      subsections: [
        {
          title: "Orthophoto Compilation",
          slug: "orthophoto-compilation",
          short_description: "Orthorectified image compilation for GIS databases.",
          key_benefits: ["Pixel-perfect alignment", "True ground coordinates"],
          primary_block: {
            title: "Advanced Ortho Engineering",
            description: "Orthophoto tiles corrected for terrain displacement and sensor tilt.",
            features: ["True Orthophoto", "Color Balancing", "Seamline Editing"]
          }
        }
      ]
    }
  },
  {
    id: "2",
    slug: "gis-database-mapping",
    title: "GIS Database & Mapping",
    description: "Structured spatial databases, theme compilation, geodatabase modeling, and custom topographic layouts.",
    long_description: "We compile, clean, and organize spatial databases to help utility providers, municipal bodies, and transportation agencies optimize their assets. Our services cover attribute capture, schema mapping, topology cleanup, and custom web-GIS portal configuration.",
    image: "/products/AntLegal.jpg",
    features: [
      "Geodatabase Schema Design",
      "Topology Cleanup",
      "Attribute Migration",
      "Web-GIS Integration"
    ],
    benefits: [
      "Centralized asset records for utility and municipal monitoring.",
      "Optimized query performance for millions of spatial features.",
      "Seamless integration with existing e-governance dashboards."
    ],
    technologies: ["PostGIS", "PostgreSQL", "QGIS Server", "GeoServer"],
    use_cases: [
      {
        title: "Municipal Utility Inventory",
        description: "Mapping city-wide water pipelines, streetlights, and fiber routes to build a unified maintenance portal.",
        image: "/products/AntLegal.jpg"
      }
    ],
    explore: {
      title: "Explore GIS Databases",
      subsections: [
        {
          title: "Utility Asset Management",
          slug: "utility-asset-management",
          short_description: "Interactive network tracing for gas and electricity lines.",
          key_benefits: ["Reduced repair time", "Outage tracking"],
          primary_block: {
            title: "Smart Utility Networks",
            description: "Build robust network connectivity models to simulate outages and route distribution.",
            features: ["Network Tracing", "Asset Lifespans", "Compliance Auditing"]
          }
        }
      ]
    }
  },
  {
    id: "3",
    slug: "cadastral-mapping",
    title: "Cadastral & Land Survey Mapping",
    description: "Parcel boundaries compilation, ownership maps vectorisation, and municipal zoning GIS mapping.",
    long_description: "Anthem Global has digitized over 20 years of municipal cadastral maps, converting fragile paper prints into high-fidelity vector sets. We resolve spatial overlapping and link title deed records to geographic parcels.",
    image: "/Anthem Assests/client-logo_Panchayatiraj.png",
    features: [
      "Deed Records Linking",
      "Overlapping Resolution",
      "Zoning GIS Database",
      "Parcel Polygon Vectorisation"
    ],
    benefits: [
      "Eliminates boundary disputes through geo-referenced coordinates.",
      "Speeds up land registration and ownership query verification.",
      "Provides planners with accurate local tax zoning boundaries."
    ],
    technologies: ["ArcGIS Pro", "Python CAD plugins", "PostGIS"],
    use_cases: [
      {
        title: "State Land Registry Portal",
        description: "Linking ownership certificates (ROR) to digitized boundary vectors across 5 administrative districts.",
        image: "/Anthem Assests/client-logo_Panchayatiraj.png"
      }
    ],
    explore: {
      title: "Explore Cadastral Mapping",
      subsections: [
        {
          title: "Land Records Modernisation",
          slug: "land-records-modernisation",
          short_description: "Empowering land record ministries with searchable digital maps.",
          key_benefits: ["Instant land query", "Fraud prevention"],
          primary_block: {
            title: "Smart Land Parcels",
            description: "Enabling public queries of land plots with linked tax information and ownership details.",
            features: ["ROR PDF links", "Geo-referencing", "Zoning overlays"]
          }
        }
      ]
    }
  }
];
