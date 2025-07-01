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
  status: "Live" | "In Development" | "Completed"
  year: string
  features: string[]
  impact?: string
  color: string
  featured?: boolean
}

export const projects: Project[] = [
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
]

export const categories = ["All", "Full-Stack", "Frontend", "Backend", "Finance", "Healthcare", "Security", "Real Estate", "Investment", "Community", "Social Impact", "Business", "Education", "Gamification", "Crypto", "Communication"]

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