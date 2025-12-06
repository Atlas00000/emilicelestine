/**
 * Tech Stack Data
 * Comprehensive technology stack with categories, proficiency levels, and metadata
 */

export interface TechItem {
  id: string
  name: string
  icon: string
  description: string
  level: number // 0-100
  years: string
  color: string // Gradient color class
  frameworks?: string[]
  useCases?: string[]
  featured?: boolean
}

export interface TechCategory {
  id: string
  name: string
  icon: string
  description: string
  color: string
  technologies: TechItem[]
}

export const techStack: TechCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend',
    icon: 'Globe',
    description: 'Modern web interfaces and user experiences',
    color: 'from-blue-500 to-cyan-500',
    technologies: [
      {
        id: 'react',
        name: 'React',
        icon: '⚛️',
        description: 'Component-based UI library',
        level: 90,
        years: '3+',
        color: 'from-blue-400 to-cyan-400',
        frameworks: ['Hooks', 'Context', 'Redux', 'Zustand'],
        useCases: ['SPAs', 'Component Libraries', 'State Management'],
        featured: true,
      },
      {
        id: 'nextjs',
        name: 'Next.js',
        icon: '▲',
        description: 'React framework for production',
        level: 88,
        years: '3+',
        color: 'from-gray-700 to-gray-900',
        frameworks: ['SSR', 'SSG', 'API Routes', 'App Router'],
        useCases: ['Full-Stack Apps', 'SEO', 'Performance'],
        featured: true,
      },
      {
        id: 'vue',
        name: 'Vue.js',
        icon: '💚',
        description: 'Progressive JavaScript framework',
        level: 82,
        years: '3+',
        color: 'from-green-400 to-emerald-500',
        frameworks: ['Composition API', 'Vuex', 'Pinia'],
        useCases: ['Interactive UIs', 'SPAs', 'Component Systems'],
      },
      {
        id: 'typescript',
        name: 'TypeScript',
        icon: '🔷',
        description: 'Type-safe JavaScript',
        level: 92,
        years: '3+',
        color: 'from-blue-500 to-indigo-600',
        frameworks: ['Type System', 'Generics', 'Decorators'],
        useCases: ['Type Safety', 'Large Codebases', 'Refactoring'],
        featured: true,
      },
      {
        id: 'tailwind',
        name: 'Tailwind CSS',
        icon: '🎨',
        description: 'Utility-first CSS framework',
        level: 95,
        years: '3+',
        color: 'from-cyan-400 to-teal-500',
        frameworks: ['Utility Classes', 'JIT', 'Plugins'],
        useCases: ['Rapid UI Development', 'Design Systems'],
        featured: true,
      },
      {
        id: 'threejs',
        name: 'Three.js',
        icon: '🎮',
        description: '3D graphics library',
        level: 85,
        years: '2+',
        color: 'from-purple-400 to-pink-500',
        frameworks: ['React Three Fiber', 'Drei', 'WebGL'],
        useCases: ['3D Visualizations', 'Interactive Scenes', 'WebGL'],
        featured: true,
      },
    ],
  },
  {
    id: 'backend',
    name: 'Backend',
    icon: 'Server',
    description: 'Server-side development and APIs',
    color: 'from-green-500 to-emerald-500',
    technologies: [
      {
        id: 'python',
        name: 'Python',
        icon: '🐍',
        description: 'Versatile programming language',
        level: 95,
        years: '2+',
        color: 'from-yellow-400 to-blue-500',
        frameworks: ['Django', 'FastAPI', 'Flask'],
        useCases: ['APIs', 'Data Processing', 'Automation'],
        featured: true,
      },
      {
        id: 'nodejs',
        name: 'Node.js',
        icon: '🟢',
        description: 'JavaScript runtime',
        level: 87,
        years: '2+',
        color: 'from-green-500 to-emerald-600',
        frameworks: ['Express', 'NestJS', 'Fastify'],
        useCases: ['REST APIs', 'Real-time Apps', 'Microservices'],
        featured: true,
      },
      {
        id: 'go',
        name: 'Go',
        icon: '🔵',
        description: 'Concurrent programming language',
        level: 75,
        years: '2+',
        color: 'from-cyan-400 to-blue-500',
        frameworks: ['Gin', 'Fiber', 'Echo'],
        useCases: ['High Performance', 'Microservices', 'CLI Tools'],
      },
    ],
  },
  {
    id: 'mobile',
    name: 'Mobile',
    icon: 'Smartphone',
    description: 'Cross-platform mobile development',
    color: 'from-purple-500 to-pink-500',
    technologies: [
      {
        id: 'flutter',
        name: 'Flutter',
        icon: '🦋',
        description: 'Cross-platform UI toolkit',
        level: 85,
        years: '3+',
        color: 'from-blue-400 to-cyan-500',
        frameworks: ['Dart', 'Widgets', 'State Management'],
        useCases: ['iOS & Android', 'Desktop Apps', 'Web Apps'],
        featured: true,
      },
      {
        id: 'react-native',
        name: 'React Native',
        icon: '📱',
        description: 'Native mobile apps with React',
        level: 80,
        years: '2+',
        color: 'from-blue-500 to-indigo-600',
        frameworks: ['Expo', 'React Navigation', 'Native Modules'],
        useCases: ['Cross-Platform', 'Code Sharing', 'Native Performance'],
      },
      {
        id: 'kotlin',
        name: 'Kotlin',
        icon: '🤖',
        description: 'Modern Android development',
        level: 70,
        years: '2+',
        color: 'from-purple-500 to-pink-500',
        frameworks: ['Coroutines', 'Ktor', 'Compose'],
        useCases: ['Android Apps', 'Backend Services'],
      },
      {
        id: 'swift',
        name: 'Swift',
        icon: '🍎',
        description: 'iOS and macOS development',
        level: 65,
        years: '1+',
        color: 'from-orange-400 to-red-500',
        frameworks: ['SwiftUI', 'Combine', 'UIKit'],
        useCases: ['iOS Apps', 'macOS Apps', 'Native Performance'],
      },
    ],
  },
  {
    id: 'database',
    name: 'Database',
    icon: 'Database',
    description: 'Data storage and management',
    color: 'from-blue-500 to-indigo-500',
    technologies: [
      {
        id: 'postgresql',
        name: 'PostgreSQL',
        icon: '🐘',
        description: 'Advanced open-source database',
        level: 88,
        years: '2+',
        color: 'from-blue-500 to-indigo-600',
        frameworks: ['TimescaleDB', 'PostGIS', 'JSONB'],
        useCases: ['Relational Data', 'Time-Series', 'Geospatial'],
        featured: true,
      },
      {
        id: 'mongodb',
        name: 'MongoDB',
        icon: '🍃',
        description: 'NoSQL document database',
        level: 82,
        years: '3+',
        color: 'from-green-500 to-emerald-600',
        frameworks: ['Aggregation', 'Atlas', 'Change Streams'],
        useCases: ['Document Storage', 'Real-time', 'Scalability'],
        featured: true,
      },
      {
        id: 'redis',
        name: 'Redis',
        icon: '🔴',
        description: 'In-memory data store',
        level: 78,
        years: '3+',
        color: 'from-red-500 to-orange-500',
        frameworks: ['Pub/Sub', 'Streams', 'Lua Scripting'],
        useCases: ['Caching', 'Sessions', 'Real-time'],
      },
      {
        id: 'mysql',
        name: 'MySQL',
        icon: '🐬',
        description: 'Relational database management',
        level: 85,
        years: '2+',
        color: 'from-blue-400 to-cyan-500',
        frameworks: ['InnoDB', 'Replication', 'Partitioning'],
        useCases: ['Web Apps', 'E-commerce', 'Content Management'],
      },
    ],
  },
  {
    id: 'tools',
    name: 'Tools & DevOps',
    icon: 'Zap',
    description: 'Development tools and infrastructure',
    color: 'from-yellow-500 to-orange-500',
    technologies: [
      {
        id: 'docker',
        name: 'Docker',
        icon: '🐳',
        description: 'Containerization platform',
        level: 83,
        years: '3+',
        color: 'from-blue-400 to-cyan-500',
        frameworks: ['Docker Compose', 'Multi-stage Builds'],
        useCases: ['Containerization', 'Deployment', 'CI/CD'],
        featured: true,
      },
      {
        id: 'github-actions',
        name: 'GitHub Actions',
        icon: '⚙️',
        description: 'CI/CD automation',
        level: 80,
        years: '2+',
        color: 'from-gray-600 to-gray-800',
        frameworks: ['Workflows', 'Actions', 'Self-hosted'],
        useCases: ['CI/CD', 'Automation', 'Deployment'],
        featured: true,
      },
      {
        id: 'tensorflow',
        name: 'TensorFlow',
        icon: '🧠',
        description: 'Machine learning framework',
        level: 75,
        years: '2+',
        color: 'from-orange-500 to-red-500',
        frameworks: ['Keras', 'TF.js', 'Lite'],
        useCases: ['ML Models', 'Neural Networks', 'Predictions'],
      },
      {
        id: 'pandas',
        name: 'Pandas',
        icon: '🐼',
        description: 'Data analysis library',
        level: 90,
        years: '2+',
        color: 'from-blue-500 to-indigo-600',
        frameworks: ['DataFrames', 'Time Series', 'GroupBy'],
        useCases: ['Data Analysis', 'ETL', 'Statistics'],
        featured: true,
      },
    ],
  },
]

export const techCategories = techStack.map((cat) => ({
  id: cat.id,
  name: cat.name,
  icon: cat.icon,
  color: cat.color,
}))

export function getTechByCategory(categoryId: string): TechItem[] {
  const category = techStack.find((cat) => cat.id === categoryId)
  return category?.technologies || []
}

export function getAllTech(): TechItem[] {
  return techStack.flatMap((cat) => cat.technologies)
}

export function getFeaturedTech(): TechItem[] {
  return getAllTech().filter((tech) => tech.featured)
}

