export interface Project {
  id: string
  name: string
  description: string
  longDescription: string
  tech: string[]
  category: string[]
  url: string
  github?: string
  image: string
  status: "Live" | "In Development" | "Completed" | "Design Stage"
  year: string
  features: string[]
  impact?: string
  color: string
  featured?: boolean
  video?: string
}

export const projects: Project[] = [
  {
    id: "habitat",
    name: "Nature View - Global Wildlife Explorer",
    description: "Interactive wildlife exploration platform with global habitat mapping, species tracking, and conservation education.",
    longDescription:
      "A comprehensive wildlife education and conservation platform that combines interactive mapping, species tracking, and educational content. Features global habitat exploration across Arctic, Forest, Alpine, Safari, and Coastal regions with real-time statistics, achievement systems, and conservation impact tracking designed to inspire environmental awareness and wildlife protection.",
    tech: ["Next.js 14", "React 18", "TypeScript", "Three.js", "React Three Fiber", "Tailwind CSS", "Framer Motion"],
    category: ["Full-Stack", "Education", "3D Graphics", "Environmental"],
    url: "https://habitat-six.vercel.app/",
    github: "https://github.com/Atlas00000/habitat",
    image: "/projects/natureview.png",
    status: "Live",
    year: "2024",
    features: [
      "Global Habitat Mapping & Exploration",
      "Species Tracking & Statistics Dashboard",
      "Interactive Region Navigation (Arctic, Forest, Alpine, Safari, Coastal)",
      "Achievement & Progress Tracking System",
      "Real-time Conservation Impact Metrics",
      "Educational Content & Wildlife Lessons",
    ],
    impact: "Supporting 2,341+ active users with 150+ species tracking and conservation education",
    color: "from-emerald-500 to-green-600",
    featured: true,
    video: "https://habitat-six.vercel.app/",
  },
  {
    id: "claritywire",
    name: "ClarityWire",
    description: "Mental health platform focused on emotional support, therapy access, and community storytelling.",
    longDescription:
      "A comprehensive mental wellness platform that combines storytelling therapy with professional mental health resources. Features secure user authentication, real-time chat support, appointment scheduling, and a community-driven story sharing system designed to break mental health stigma.",
    tech: ["Next.js", "Firebase", "Tailwind CSS", "TypeScript", "Framer Motion", "Stripe"],
    category: ["Full-Stack", "Healthcare", "Community"],
    url: "https://claritywire.vercel.app/",
    github: "https://github.com/Atlas00000/claritywire",
    image: "/projects/claritywire-dashboard.jpg",
    status: "Live",
    year: "2024",
    features: [
      "Storytelling Therapy Sessions",
      "Professional Therapist Matching",
      "Community Support Groups",
      "Mental Health Resources",
      "Secure Chat & Video Calls",
      "Progress Tracking & Analytics",
    ],
    impact: "Supporting 500+ users in their mental health journey",
    color: "from-green-500 to-teal-600",
    featured: true,
  },
  {
    id: "luxenest",
    name: "Luxenest",
    description: "Real estate platform for property listings, virtual tours, and investment opportunities.",
    longDescription:
      "Premium real estate platform featuring advanced property search, virtual tours, investment analytics, and comprehensive market insights. Designed for both buyers and sellers with sophisticated filtering and recommendation systems.",
    tech: ["React", "Node.js", "MongoDB", "Three.js", "Mapbox", "Stripe"],
    category: ["Full-Stack", "Real Estate", "Investment"],
    url: "https://luxenest-six.vercel.app/",
    github: "https://github.com/Atlas00000/luxenest",
    image: "/projects/luxenest-property.jpg",
    status: "Live",
    year: "2024",
    features: [
      "Advanced Property Search",
      "Virtual Tours & 3D Walkthroughs",
      "Investment Analytics",
      "Market Insights & Trends",
      "Agent & Buyer Matching",
      "Secure Payment Processing",
    ],
    impact: "Facilitating $2M+ in property transactions",
    color: "from-purple-500 to-pink-600",
    featured: true,
  },
  {
    id: "sharedvoices",
    name: "Shared Voices",
    description: "Community-driven platform for amplifying marginalized voices through storytelling and blog publishing.",
    longDescription:
      "Community-driven platform designed to amplify marginalized voices through storytelling, blog publishing, and interactive forums. Features advanced content moderation, user verification systems, and sophisticated search capabilities to ensure authentic and meaningful conversations.",
    tech: ["React", "Django", "PostgreSQL", "Redis", "AWS S3", "Elasticsearch"],
    category: ["Full-Stack", "Community", "Social Impact"],
    url: "https://shared-voices.vercel.app/",
    github: "https://github.com/Atlas00000/sharedvoices",
    image: "/projects/shared-voices-blog.jpg",
    status: "Live",
    year: "2023",
    features: [
      "Content Publishing System",
      "Community Forums",
      "User Verification",
      "Advanced Content Moderation",
      "Search & Discovery",
      "Social Sharing Integration",
    ],
    impact: "Amplifying 200+ underrepresented voices",
    color: "from-orange-500 to-red-600",
    featured: true,
  },
  {
    id: "pocketledgerr",
    name: "Pocketledgerr",
    description: "A simplified financial tracking and budgeting tool built for everyday users and small businesses.",
    longDescription:
      "Comprehensive financial management solution offering expense tracking, budget planning, financial reporting, and business analytics. Designed with accounting principles and user-friendly interfaces to make financial management accessible to everyone.",
    tech: ["Django", "PostgreSQL", "Chart.js", "Bootstrap", "Celery", "Redis"],
    category: ["Full-Stack", "Finance", "Business"],
    url: "https://pocketledgerr.vercel.app/",
    github: "https://github.com/Atlas00000/Pocketledgerr",
    image: "/projects/pocketledgerr-dashboard.jpg",
    status: "Live",
    year: "2023",
    features: [
      "Expense Tracking & Categorization",
      "Budget Planning & Alerts",
      "Financial Reports & Analytics",
      "Multi-currency Support",
      "Data Export & Import",
      "Receipt Scanning",
    ],
    impact: "Managing $100K+ in tracked expenses",
    color: "from-blue-500 to-cyan-600",
    featured: true,
  },
  {
    id: "skillcraft",
    name: "Skillcraft",
    description: "An educational e-learning platform with gamified learning experiences and interactive courses.",
    longDescription:
      "Innovative e-learning platform that transforms education through gamification, interactive courses, and engaging learning experiences. Features comprehensive progress tracking, achievement systems, personalized learning paths, and collaborative learning tools designed to make education more engaging and effective.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "Gamification Engine", "Analytics"],
    category: ["Full-Stack", "Education", "Gamification"],
    url: "https://skillcraft-ten.vercel.app/",
    github: "https://github.com/Atlas00000/skillcraft-main-",
    image: "/projects/claritywire-dashboard.jpg",
    status: "Live",
    year: "2023",
    features: [
      "Gamified Learning Experience",
      "Interactive Course Content",
      "Progress Tracking & Analytics",
      "Achievement & Reward System",
      "Personalized Learning Paths",
      "Collaborative Learning Tools",
    ],
    impact: "Engaging 1000+ students in gamified learning",
    color: "from-indigo-500 to-purple-600",
  },
  {
    id: "coincanvas",
    name: "CoinCanvas",
    description: "A crypto dashboard and wallet viewer offering live market data and portfolio summaries.",
    longDescription:
      "Advanced cryptocurrency tracking platform with real-time market data, comprehensive portfolio analysis, intelligent price alerts, and sophisticated trading insights. Features secure wallet integration and professional-grade charting tools for serious crypto investors.",
    tech: ["React", "Node.js", "WebSocket", "Chart.js", "CoinGecko API", "Web3.js"],
    category: ["Frontend", "Finance", "Crypto"],
    url: "https://coincanvas-six.vercel.app/",
    github: "https://github.com/Atlas00000/coincanvas",
    image: "/projects/coincanvas-charts.jpg",
    status: "Live",
    year: "2024",
    features: [
      "Real-time Market Data",
      "Portfolio Tracking",
      "Price Alerts",
      "Advanced Charting",
      "Wallet Integration",
      "Trading Insights",
    ],
    impact: "Tracking $500K+ in crypto portfolios",
    color: "from-yellow-500 to-orange-600",
  },
  {
    id: "sypher",
    name: "Sypher",
    description: "Privacy-focused messaging and collaboration platform built with end-to-end encryption.",
    longDescription: "Enterprise-grade secure communication platform with advanced privacy controls, end-to-end encryption, and secure file sharing capabilities designed for teams and organizations that prioritize data security.",
    tech: ["React", "Node.js", "Socket.io", "Crypto-js", "WebRTC", "AES-256"],
    category: ["Full-Stack", "Security", "Communication"],
    url: "https://sypher-nu.vercel.app/",
    github: "https://github.com/celestine/sypher",
    image: "/projects/sypher-chat.jpg",
    status: "Live",
    year: "2024",
    features: [
      "End-to-End Encryption",
      "Secure File Sharing",
      "Group Chat & Channels",
      "Message Self-Destruct",
      "Two-Factor Authentication",
      "Audit Logs & Compliance",
    ],
    impact: "Securing communications for 200+ organizations",
    color: "from-red-500 to-pink-600",
  },
  {
    id: "skye",
    name: "Skye",
    description: "Advanced weather monitoring and forecasting platform with real-time data visualization.",
    longDescription: "Comprehensive weather monitoring system featuring real-time data collection, advanced forecasting algorithms, and interactive visualizations. Designed for meteorologists, researchers, and weather enthusiasts with sophisticated analytics and prediction capabilities.",
    tech: ["React", "Node.js", "MongoDB", "Chart.js", "Weather APIs", "WebSocket"],
    category: ["Full-Stack", "Data Science", "Analytics"],
    url: "https://skye.vercel.app/",
    github: "https://github.com/Atlas00000/skye",
    image: "/projects/skye-weather.jpg",
    status: "Live",
    year: "2024",
    features: [
      "Real-time Weather Data",
      "Advanced Forecasting",
      "Interactive Visualizations",
      "Historical Data Analysis",
      "Multi-location Monitoring",
      "Weather Alerts & Notifications",
    ],
    impact: "Providing accurate weather data to 10,000+ users",
    color: "from-blue-500 to-cyan-600",
    featured: true,
    video: "https://youtube.com/shorts/fIXopEcXTyc",
  },
  {
    id: "airviz",
    name: "Airviz",
    description: "Air quality monitoring and visualization platform with environmental data analytics.",
    longDescription: "Environmental monitoring platform that tracks air quality metrics, provides real-time pollution data, and offers comprehensive analytics for environmental research and public health awareness.",
    tech: ["React", "Node.js", "PostgreSQL", "D3.js", "IoT Sensors", "REST APIs"],
    category: ["Full-Stack", "Environmental", "IoT"],
    url: "https://airviz.vercel.app/",
    github: "https://github.com/Atlas00000/airviz",
    image: "/projects/airviz-dashboard.jpg",
    status: "Live",
    year: "2024",
    features: [
      "Real-time Air Quality Monitoring",
      "Environmental Data Analytics",
      "Interactive Data Visualization",
      "Pollution Level Tracking",
      "Health Impact Assessment",
      "Historical Trend Analysis",
    ],
    impact: "Monitoring air quality across 50+ cities",
    color: "from-green-500 to-emerald-600",
    featured: true,
    video: "https://youtu.be/qwSp-_yknwY",
  },
  {
    id: "biotrevase",
    name: "Biotrevase",
    description: "Advanced bioinformatics platform for genomic data analysis and biological research.",
    longDescription: "Comprehensive bioinformatics platform designed for genomic data analysis, biological research, and computational biology workflows. Features advanced algorithms for sequence analysis, protein structure prediction, and biological data visualization.",
    tech: ["React", "Python", "Django", "PostgreSQL", "BioPython", "D3.js", "AWS"],
    category: ["Full-Stack", "Bioinformatics", "Research", "Data Science"],
    url: "https://biotraverse.vercel.app/",
    github: "https://github.com/Atlas00000/biotraverse-.git",
    image: "/projects/biotrevase-dashboard.jpg",
    status: "In Development",
    year: "2024",
    features: [
      "Genomic Data Analysis",
      "Sequence Alignment Tools",
      "Protein Structure Prediction",
      "Biological Data Visualization",
      "Research Workflow Management",
      "Collaborative Analysis Tools",
    ],
    impact: "Supporting cutting-edge biological research",
    color: "from-teal-500 to-cyan-600",
    video: "https://youtu.be/HSg5_4zmaXo",
  },
  {
    id: "aerolens",
    name: "Aerolens",
    description: "Advanced aerial imaging and computer vision platform for drone-based applications.",
    longDescription: "Innovative aerial imaging platform that combines drone technology with advanced computer vision algorithms for applications in agriculture, surveillance, mapping, and environmental monitoring.",
    tech: ["React", "Python", "OpenCV", "TensorFlow", "WebRTC", "Three.js", "AWS"],
    category: ["Full-Stack", "Computer Vision", "IoT", "AI/ML"],
    url: "#",
    github: "https://github.com/Atlas00000/aerolens.git",
    image: "/projects/claritywire-dashboard.jpg", // Placeholder
    status: "Design Stage",
    year: "2024",
    features: [
      "Real-time Aerial Imaging",
      "Computer Vision Processing",
      "Drone Control Interface",
      "Image Analysis & Recognition",
      "Mapping & Surveying Tools",
      "Environmental Monitoring",
    ],
    impact: "Revolutionizing aerial data collection and analysis",
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: "maresim-tidalflow",
    name: "Maresim Tidalflow",
    description: "Oceanographic simulation platform for tidal flow modeling and marine ecosystem analysis.",
    longDescription: "Comprehensive oceanographic simulation platform designed for modeling tidal flows, marine currents, and ecosystem dynamics. Features advanced fluid dynamics algorithms and real-time environmental data integration.",
    tech: ["React", "Python", "NumPy", "SciPy", "WebGL", "Three.js", "Docker"],
    category: ["Full-Stack", "Simulation", "Environmental", "Data Science"],
    url: "#",
    github: "https://github.com/Atlas00000/maresim-tidalflow",
    image: "/projects/claritywire-dashboard.jpg", // Placeholder
    status: "Design Stage",
    year: "2024",
    features: [
      "Tidal Flow Simulation",
      "Ocean Current Modeling",
      "Marine Ecosystem Analysis",
      "Real-time Data Visualization",
      "Environmental Impact Assessment",
      "Predictive Modeling Tools",
    ],
    impact: "Advancing marine science and environmental protection",
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: "materialize-3d",
    name: "Materialize 3D",
    description: "3D printing and additive manufacturing platform with design optimization tools.",
    longDescription: "Comprehensive 3D printing platform that combines design tools, material science, and manufacturing optimization. Features advanced modeling capabilities, material simulation, and production workflow management.",
    tech: ["React", "Three.js", "WebGL", "Python", "Blender API", "Node.js", "MongoDB"],
    category: ["Full-Stack", "3D Printing", "Manufacturing", "Design"],
    url: "#",
    github: "https://github.com/Atlas00000/materialize-3d",
    image: "/projects/claritywire-dashboard.jpg", // Placeholder
    status: "Design Stage",
    year: "2024",
    features: [
      "3D Design & Modeling",
      "Material Optimization",
      "Print Simulation",
      "Quality Control Tools",
      "Manufacturing Workflow",
      "Design Collaboration",
    ],
    impact: "Streamlining 3D printing and additive manufacturing",
    color: "from-purple-500 to-pink-600",
  },
  {
    id: "seismosphere",
    name: "Seismosphere",
    description: "Seismic monitoring and earthquake prediction platform with real-time data analysis.",
    longDescription: "Advanced seismic monitoring platform that combines sensor networks, machine learning algorithms, and real-time data analysis for earthquake detection, prediction, and early warning systems.",
    tech: ["React", "Python", "TensorFlow", "IoT", "WebSocket", "PostgreSQL", "Redis"],
    category: ["Full-Stack", "IoT", "AI/ML", "Environmental"],
    url: "#",
    github: "https://github.com/Atlas00000/seismosphere",
    image: "/projects/claritywire-dashboard.jpg", // Placeholder
    status: "Design Stage",
    year: "2024",
    features: [
      "Real-time Seismic Monitoring",
      "Earthquake Prediction",
      "Early Warning Systems",
      "Sensor Network Management",
      "Data Visualization",
      "Risk Assessment Tools",
    ],
    impact: "Enhancing earthquake preparedness and safety",
    color: "from-red-500 to-orange-600",
  },
]

export const categories = ["All", "Full-Stack", "Frontend", "Backend", "Finance", "Healthcare", "Security", "Real Estate", "Investment", "Community", "Social Impact", "Business", "Education", "Gamification", "Crypto", "Communication", "Data Science", "Analytics", "Environmental", "IoT", "Bioinformatics", "Research", "Computer Vision", "AI/ML", "Simulation", "3D Printing", "Manufacturing", "Design", "3D Graphics"]

// Helper functions for filtering and sorting
export const filterProjects = (
  projects: Project[],
  selectedCategory: string,
  searchQuery: string
): Project[] => {
  return projects.filter((project) => {
    const matchesCategory = selectedCategory === "All" || project.category.includes(selectedCategory)
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })
}

export const sortProjects = (projects: Project[], sortBy: "year" | "name" | "status"): Project[] => {
  return [...projects].sort((a, b) => {
    switch (sortBy) {
      case "year":
        return b.year.localeCompare(a.year)
      case "name":
        return a.name.localeCompare(b.name)
      case "status":
        return a.status.localeCompare(b.status)
      default:
        return 0
    }
  })
} 