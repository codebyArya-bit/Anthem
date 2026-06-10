export interface TeamMember {
  id: string;
  name: string;
  role: string;
  member_type: "founder" | "executive" | "employee";
  status: "Active" | "Alumni";
  image: string;
  bio: string;
  skills: string[];
  department: string;
  location: string;
  joinDate: string;
  achievements: string[];
  experience: string;
  education: string;
  linkedin_url?: string;
  social: {
    linkedin: string;
    twitter: string;
    github: string;
    email: string;
  };
  memberID?: string;
}

export const fallbackTeamMembers: TeamMember[] = [
  {
    id: "team-1",
    name: "Manas Ranjan Pattnaik",
    role: "Chairman",
    member_type: "founder",
    status: "Active",
    image: "/Anthem Assests/images_manas_pattnaik.png",
    bio: "Techno-commercial expert with a Master's degree in Computer Science from San Diego State University. 46+ years of international advisory and IT networks setup experience.",
    skills: ["Government Relations", "SEZ Management", "Policy & Regulatory", "IT Infrastructure"],
    department: "Executive Board",
    location: "Bhubaneswar HQ",
    joinDate: "2010",
    achievements: ["Technical In-Charge for Indian Judicial System E-Governance Project", "Managed 45+ STPI centers across India"],
    experience: "46+ Years",
    education: "M.S. in Computer Science (San Diego State University, California, USA)",
    linkedin_url: "https://linkedin.com/",
    social: {
      linkedin: "https://linkedin.com/",
      twitter: "#",
      github: "#",
      email: "manas.pattnaik@anthemgt.com"
    },
    memberID: "EMP-M01"
  },
  {
    id: "team-2",
    name: "Rajesh Kumar Acharya",
    role: "Director",
    member_type: "founder",
    status: "Active",
    image: "/Anthem Assests/images_rajeshsir.png",
    bio: "M. Tech in Computer Science with over 41 years of experience in technical education and infrastructure operations. Expert in skill training delivery frameworks.",
    skills: ["Skill Development", "Infrastructure Planning", "Network Ops", "Consulting & RIM"],
    department: "Executive Board",
    location: "Bhubaneswar HQ",
    joinDate: "2010",
    achievements: ["Successfully trained 10,000+ youth", "Established training delivery hubs in Bhilai"],
    experience: "41+ Years",
    education: "M. Tech in Computer Science",
    linkedin_url: "https://linkedin.com/",
    social: {
      linkedin: "https://linkedin.com/",
      twitter: "#",
      github: "#",
      email: "raja@anthemgt.com"
    },
    memberID: "EMP-R02"
  },
  {
    id: "team-3",
    name: "Chakradhara Panda",
    role: "Chief Executive Officer (CEO)",
    member_type: "executive",
    status: "Active",
    image: "/Anthem Assests/images_chakradhara_panda.png",
    bio: "31+ years of delivery experience in implementing high-impact e-governance projects. Spearheaded census and court digitization programs.",
    skills: ["Project Implementation", "Team Building", "E-Governance Delivery", "Team Management"],
    department: "Operations Management",
    location: "Bhubaneswar HQ",
    joinDate: "2012",
    achievements: ["Led massive Socio-economic & Census digitisation operations", "Established secure data pipeline networks"],
    experience: "31+ Years",
    education: "B.E. (Institution of Electronics & Telecommunication Engineers)",
    linkedin_url: "https://linkedin.com/",
    social: {
      linkedin: "https://linkedin.com/",
      twitter: "#",
      github: "#",
      email: "chakradhara.panda@anthemgt.com"
    },
    memberID: "EMP-C03"
  },
  {
    id: "team-4",
    name: "Animesh Senapati",
    role: "Senior Java Architect",
    member_type: "employee",
    status: "Active",
    image: "/Anthem Home Page Photo/Comfortable Workspace.jpg",
    bio: "Speciliazed in J2EE frameworks, Spring Security, database indexing clusters, and high-performance document parsing.",
    skills: ["Java EE", "Spring Boot", "Elasticsearch", "SQL optimization"],
    department: "Tech Division",
    location: "Bhubaneswar HQ",
    joinDate: "2016",
    achievements: ["Architected double-key metadata verification workflow", "Designed high-speed search indexers"],
    experience: "10 Years",
    education: "B.Tech in Computer Science",
    linkedin_url: "https://linkedin.com/",
    social: {
      linkedin: "https://linkedin.com/",
      twitter: "#",
      github: "#",
      email: "animesh@anthemgt.com"
    },
    memberID: "EMP-A04"
  },
  {
    id: "team-5",
    name: "Priyabrata Mohanty",
    role: "GIS Lead Engineer",
    member_type: "employee",
    status: "Active",
    image: "/products/AntLegal.jpg",
    bio: "LiDAR point cloud vectorization, corridor mapping, MLS points processing, and digital elevation mapping expert.",
    skills: ["LiDAR point cloud", "MicroStation", "ArcGIS", "TerraScan"],
    department: "Spatial Division",
    location: "Bhubaneswar HQ",
    joinDate: "2018",
    achievements: ["Delivered topographic vector sets for international rail corridors"],
    experience: "8 Years",
    education: "M.Tech in Geoinformatics",
    linkedin_url: "https://linkedin.com/",
    social: {
      linkedin: "https://linkedin.com/",
      twitter: "#",
      github: "#",
      email: "priyabrata@anthemgt.com"
    },
    memberID: "EMP-P05"
  },
  {
    id: "team-6",
    name: "Sweta Das",
    role: "Operations Head - Scanning",
    member_type: "employee",
    status: "Active",
    image: "/Anthem Home Page Photo/A Team Spirit.jpg",
    bio: "Manages scanning workflows, OCR indexing checks, physical document logistics, and security compliance SLAs.",
    skills: ["Workflow Management", "OCR Systems", "Compliance Audit", "Team Leadership"],
    department: "Operations Division",
    location: "Bhubaneswar HQ",
    joinDate: "2015",
    achievements: ["Supervised secure scanning of 10 Crore pages"],
    experience: "11 Years",
    education: "MBA in Operations Management",
    linkedin_url: "https://linkedin.com/",
    social: {
      linkedin: "https://linkedin.com/",
      twitter: "#",
      github: "#",
      email: "sweta@anthemgt.com"
    },
    memberID: "EMP-S06"
  }
];
