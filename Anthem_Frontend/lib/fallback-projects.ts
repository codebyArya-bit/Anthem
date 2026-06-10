export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  gallery: string[];
  icon: string;
  category: string;
  technologies: string[];
  color: string;
  stats: Record<string, string>;
  details: string;
  challenges: string[];
  outcomes: string[];
  timeline: string;
  team: string;
  client: string;
  created_at?: string;
  liveUrl?: string;
  videoUrl?: string;
  status: "completed" | "ongoing" | "planned";
  featured?: boolean;
  testimonial_name?: string;
  testimonial_role?: string;
  testimonial_image?: string;
  testimonial_quote?: string;
  testimonial_rating?: number;
  sortOrder?: number;
}

export const fallbackProjects: Project[] = [
  {
    id: "1",
    title: "Judicial Records Digitisation & DMS",
    shortDescription: "High-volume secure scanning, OCR parsing, and double-key metadata verification for 310 court registries.",
    description: "Designed and executed the digital conversion of legacy judicial archives. Transitioned paper registries to a secure, compliant document repository.",
    image: "/products/High Court of Orissa.jpg",
    gallery: ["/products/High Court of Orissa.jpg", "/Anthem Home Page Photo/Comfortable Workspace.jpg"],
    icon: "Landmark",
    category: "govtech, saas, enterprise",
    technologies: ["Java Enterprise", "DSpace", "Python OCR", "PostgreSQL", "Apache Lucene"],
    color: "from-blue-600 to-[#017ACA]",
    stats: {
      "metric_1": "25 Cr+",
      "metric_1_label": "Pages Digitised",
      "metric_2": "310",
      "metric_2_label": "Courts Covered",
      "metric_3": "99.99%",
      "metric_3_label": "Verification Accuracy",
      "metric_4": "Zero",
      "metric_4_label": "Data Leak Incidents"
    },
    details: "Anthem Global deployed dedicated high-speed scanning pods inside court registries, training 200+ indexing professionals. Our custom pipeline featured double-key validation and automated OCR parsing for quick keyword search capability.",
    challenges: [
      "Handling fragile, century-old manuscripts safely.",
      "Enforcing strict on-site data compliance rules.",
      "Minimizing OCR recognition errors on handwriting."
    ],
    outcomes: [
      "Archived 250 million pages securely.",
      "Created instant electronic case history lookups.",
      "Reduces paper case search time from hours to seconds."
    ],
    timeline: "18 Months (Completed)",
    team: "250+ Engineers & Indexers",
    client: "High Court of Orissa",
    status: "completed",
    featured: true,
    testimonial_name: "Hon'ble Justice R. Pattnaik",
    testimonial_role: "Chairman, Computer Committee",
    testimonial_quote: "Anthem's execution team demonstrated absolute discipline and security while transforming our paper files into a modern e-court workspace.",
    testimonial_rating: 5,
    sortOrder: 1
  },
  {
    id: "2",
    title: "Socio-Economic & Census Digitisation",
    shortDescription: "National-scale data capture, validation, and database processing of socio-economic survey registries.",
    description: "Executed massive data extraction and secure processing workflows for regional census registers, ensuring compliance with strict public standards.",
    image: "/Anthem Assests/client-logo_Modernizing-Government.png",
    gallery: ["/Anthem Assests/client-logo_Modernizing-Government.png", "/Anthem Home Page Photo/A Team Spirit.jpg"],
    icon: "Globe",
    category: "govtech, enterprise",
    technologies: ["Spring Boot", "Oracle Database", "Data Verification Engine", "Apache Hadoop"],
    color: "from-sky-500 to-indigo-600",
    stats: {
      "metric_1": "50 Cr+",
      "metric_1_label": "Survey Pages",
      "metric_2": "100%",
      "metric_2_label": "SLA Compliance",
      "metric_3": "40+",
      "metric_3_label": "Ministries Served",
      "metric_4": "Secure",
      "metric_4_label": "VPN Archival"
    },
    details: "Implemented secure database validation networks to reconcile national socio-economic indicators. Enabled high-throughput processing systems to index multi-state data without record overlap.",
    challenges: [
      "Processing millions of surveys with high throughput.",
      "Reconciling spelling anomalies across localized language inputs.",
      "Maintaining high server uptime during peak batch processing."
    ],
    outcomes: [
      "Processed over 500 million database entries.",
      "Boosted data availability for state-level welfare mapping.",
      "Established standard operating procedures for future census runs."
    ],
    timeline: "24 Months",
    team: "150+ Operations Staff",
    client: "Odisha State Government",
    status: "completed",
    featured: true,
    sortOrder: 2
  },
  {
    id: "3",
    title: "TCS iON CBT Assessment Infrastructure",
    shortDescription: "Empowered test center campus hosting national exams (GATE, CAT, JEE, IBPS) with 550+ secure computer terminals.",
    description: "Operates state-of-the-art computer-based examination infrastructure with IP-locked routing, biometric proctoring, and fail-safe power backup.",
    image: "/Anthem Assests/images_ionlogo.jpg",
    gallery: ["/Anthem Assests/images_ionlogo.jpg", "/Anthem Home Page Photo/From Ideas to Impact.jpg"],
    icon: "GraduationCap",
    category: "edtech, enterprise",
    technologies: ["Redundant LAN", "Biometric Gateways", "TCS iON Software Suite", "IP-Locked Firewalls"],
    color: "from-emerald-500 to-teal-600",
    stats: {
      "metric_1": "550+",
      "metric_1_label": "Active Seats",
      "metric_2": "10,000+",
      "metric_2_label": "Tests Conducted",
      "metric_3": "20K sqft",
      "metric_3_label": "Campus Size",
      "metric_4": "Zero",
      "metric_4_label": "Network Failures"
    },
    details: "Our Chandaka Industrial Estate center hosts exams for IITs, AIIMS, and UPSC under TCS iON's flagship alliance. The center utilizes strict compliance controls, offline backup servers, and video monitoring matrices.",
    challenges: [
      "Preventing candidate proxy attempt with biometric check-ins.",
      "Configuring bulletproof network defenses against local routing interference.",
      "Orchestrating simultaneous exams with high reliability."
    ],
    outcomes: [
      "Empowered thousands of rural and urban youths to take national exams locally.",
      "Achieved 100% compliance score under TCS iON audit guidelines.",
      "Zero security incidents or exam rescheduling over five years of alliance."
    ],
    timeline: "Ongoing Partnership",
    team: "30+ Security & IT Staff",
    client: "TCS iON & Tata Consultancy Services",
    status: "ongoing",
    featured: true,
    testimonial_name: "CBT Operations Head",
    testimonial_role: "Regional Coordinator, TCS iON",
    testimonial_quote: "The Anthem Bhubaneswar center is consistently rated as one of our most compliant, secure, and well-managed assessment hubs in Eastern India.",
    testimonial_rating: 5,
    sortOrder: 3
  },
  {
    id: "4",
    title: "GIS Spatial Vectorisation & Mapping",
    shortDescription: "Advanced LiDAR point cloud classification, MLS corridor vectorisation, and aerial photogrammetry processing.",
    description: "Delivering GIS and mapping datasets for international client agencies. Providing highly precise planimetric and orthophoto drawings.",
    image: "/products/AntLegal.jpg",
    gallery: ["/products/AntLegal.jpg"],
    icon: "Globe",
    category: "govtech, enterprise",
    technologies: ["LiDAR Tools", "MicroStation", "TerraScan", "QGIS", "Python GIS Plugins"],
    color: "from-indigo-500 to-purple-600",
    stats: {
      "metric_1": "98%",
      "metric_1_label": "Vector Accuracy",
      "metric_2": "1.2M",
      "metric_2_label": "Points Classified",
      "metric_3": "Global",
      "metric_3_label": "Delivery Standards",
      "metric_4": "LiDAR",
      "metric_4_label": "Expertise"
    },
    details: "Processed LiDAR scans for high-density railway corridors, highway route designs, and urban topographic zones. Utilized advanced DTM classification models to provide engineering-grade CAD deliverables.",
    challenges: [
      "Vectorizing points under heavy tree canopy occlusion.",
      "Standardizing coordinates across global spatial datums.",
      "Handling terabytes of raw point cloud files without storage bottleneck."
    ],
    outcomes: [
      "Delivered complete corridors map for North American infrastructure partners.",
      "Reduced planimetric drawing time by 30% through automated script preprocessing.",
      "Ensured compatibility with AutoCAD, ArcGIS, and MicroStation environments."
    ],
    timeline: "12 Months",
    team: "40+ GIS Engineers",
    client: "International Engineering Firms",
    status: "completed",
    sortOrder: 4
  },
  {
    id: "5",
    title: "ExamFlow Online Proctoring System",
    shortDescription: "AI-proctored, custom online assessment engine featuring 60-second question extraction and offline sync.",
    description: "Built a modern computer-based examination product for remote recruitment and university evaluation drives, securing question bank pipelines.",
    image: "/products/AntLegal.jpg",
    gallery: ["/products/AntLegal.jpg"],
    icon: "Brain",
    category: "edtech, saas, ai",
    technologies: ["React.js", "Node.js", "TensorFlow.js", "SQLite Local Cache", "WebRTC"],
    color: "from-cyan-500 to-blue-600",
    stats: {
      "metric_1": "1M+",
      "metric_1_label": "Exams Served",
      "metric_2": "60 Sec",
      "metric_2_label": "Question Load",
      "metric_3": "AI",
      "metric_3_label": "Face Verification",
      "metric_4": "Offline",
      "metric_4_label": "Sync Capability"
    },
    details: "ExamFlow protects assessment integrity by utilizing TensorFlow face tracking and browser-lock APIs. If connection drops, SQLite caches responses locally and syncs them as soon as internet is restored.",
    challenges: [
      "Optimizing client-side face proctoring to run on low-end laptops.",
      "Enforcing copy-paste blocks and blocking dual-monitor setups.",
      "Syncing responses reliably in low-bandwidth rural locations."
    ],
    outcomes: [
      "Conducted online university entrance mock-exams for 50,000 students simultaneously.",
      "Identified and flagged proxy candidates with 98% detection success.",
      "Reduced assessment management overhead for client administration."
    ],
    timeline: "10 Months",
    team: "12 Software Architects",
    client: "Education & Public Institutions",
    status: "completed",
    sortOrder: 5
  },
  {
    id: "6",
    title: "Secure Land Records DMS Portal",
    shortDescription: "Digitisation, indexing, and regional storage portal for state land registers across West Bengal and Bihar.",
    description: "Constructed search portals and document indexing structures for land registry records, facilitating citizen access and ownership transparency.",
    image: "/Anthem Assests/images_webel_oppurtunities.jpg",
    gallery: ["/Anthem Assests/images_webel_oppurtunities.jpg"],
    icon: "Database",
    category: "govtech, saas",
    technologies: ["Spring Security", "PostgreSQL Clusters", "Secure DMS API", "React Admin"],
    color: "from-amber-500 to-orange-600",
    stats: {
      "metric_1": "5 Districts",
      "metric_1_label": "Coverage Scope",
      "metric_2": "Secured",
      "metric_2_label": "Access Audit",
      "metric_3": "50K+",
      "metric_3_label": "Daily Enquiries",
      "metric_4": "99.9%",
      "metric_4_label": "DMS Uptime"
    },
    details: "Helped index millions of land title deeds, boundary surveys, and tax receipts. The secure DMS features audit logging, permission controls, and encrypted REST endpoints to prevent unauthorized modifications.",
    challenges: [
      "Digitizing fragile documents from regional land registries.",
      "Enforcing strict database authentication rules.",
      "Integrating state portal structures legacy frameworks."
    ],
    outcomes: [
      "Enabled instant land record lookup for local administrative offices.",
      "Eliminated loss of record sheets from natural wear and tear.",
      "Improved citizen transparency for title deed verification."
    ],
    timeline: "15 Months",
    team: "80+ Scanning Personnel",
    client: "State Land Ministries",
    status: "completed",
    sortOrder: 6
  }
];
