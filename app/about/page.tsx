"use client"

import { useState, useEffect } from "react"

// Force dynamic rendering to avoid SSR issues with hooks
export const dynamic = 'force-dynamic'
import { motion } from "framer-motion"
import {
  Code,
  ArrowLeft,
  Target,
} from "lucide-react"
import { EnhancedButton } from "@/components/ui/enhanced-button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { EnhancedNavigation } from "@/components/navigation/enhanced-navigation"
import { GridBackground } from "@/components/effects/grid-background"
import { ScrollProgress } from "@/components/interactive/scroll-progress"
import LoadingScreen from "@/components/loading-screen"
import Link from "next/link"

// Import sections from homepage
import AboutSection from '@/components/about-section'
import { EnhancedTechStackSection } from '@/components/tech-stack/enhanced-tech-stack-section'

// Optimized animation variants - minimal imports
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 }
}

export default function AboutPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Global Grid Background */}
      <GridBackground />

      {/* Enhanced Interactive Elements */}
      <ScrollProgress />
      
      {/* Enhanced Navigation */}
      <EnhancedNavigation />

      {/* Header Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="flex items-center gap-4 mb-8"
          >
            <Link href="/">
              <EnhancedButton variant="outline" size="sm">
                <ArrowLeft className="mr-2" size={16} />
                Back to Home
              </EnhancedButton>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 pb-20 pt-4">
        <div className="max-w-7xl mx-auto">
          {/* My Development Approach Section */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-20"
          >
            <Card className="bg-gray-900/40 border-white/10 backdrop-blur-xl">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">My Development Approach</h3>
                </div>
                
                <div className="space-y-6 text-gray-300 leading-relaxed text-base md:text-lg">
                  <p>
                    My development philosophy is rooted in three core principles: <span className="text-cyan-400 font-semibold">purpose-driven design</span>, <span className="text-blue-400 font-semibold">continuous learning</span>, and <span className="text-purple-400 font-semibold">collaboration-first approach</span>. Every technology choice I make serves a specific purpose, whether it's optimizing for performance, ensuring scalability, or improving developer experience. I believe that the best solutions emerge from understanding the problem deeply before jumping into implementation.
                  </p>
                  
                  <p>
                    In an industry that evolves at breakneck speed, I maintain a commitment to continuous learning. I regularly explore emerging technologies, contribute to open-source projects, and stay current with industry best practices. This dedication to growth has allowed me to master a diverse tech stack spanning frontend frameworks like React and Next.js, backend technologies including Python, Node.js, and Go, mobile development with Flutter and React Native, and various database systems including PostgreSQL, MongoDB, and Redis.
                  </p>
                  
                  <p>
                    Collaboration is at the heart of everything I do. Having served as a teacher during my NYSC program and worked in team environments, I understand that the best solutions emerge from diverse perspectives. I choose technologies that enable effective team collaboration, knowledge sharing, and maintainable codebases. I'm passionate about clean code, comprehensive documentation, and creating systems that future developers can easily understand and extend.
                  </p>
                  
                  <p>
                    My work extends beyond just writing code. I'm deeply committed to using technology for social impact, as evidenced by my projects in healthcare, education, and community development. Whether it's building mental health platforms, educational tools, or community engagement systems, I believe technology should serve humanity and make a positive difference in people's lives. This commitment to purpose-driven development is what sets my work apart and what I bring to every collaboration.
                  </p>
                  
                  <p>
                    When approaching a new project, I begin with a comprehensive analysis of the problem space. This involves understanding user needs, business objectives, technical constraints, and long-term scalability requirements. I believe in building systems that not only solve immediate problems but also adapt and evolve as requirements change. This forward-thinking approach has enabled me to create applications that remain relevant and maintainable years after their initial deployment. I'm particularly skilled at identifying potential bottlenecks early in the development process and architecting solutions that scale gracefully.
                  </p>
                  
                  <p>
                    Quality assurance and testing are integral parts of my development workflow. I implement comprehensive testing strategies including unit tests, integration tests, and end-to-end testing to ensure reliability and performance. I'm also a strong advocate for code reviews, pair programming, and knowledge sharing sessions that help teams grow together. My experience in financial systems has instilled in me a deep appreciation for accuracy, data integrity, and the critical importance of thorough testing in production environments.
                  </p>
                    </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Technical Expertise Section */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-20"
          >
            <Card className="bg-gray-900/40 border-white/10 backdrop-blur-xl">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">Technical Expertise & Specializations</h3>
                </div>
                
                <div className="space-y-6 text-gray-300 leading-relaxed text-base md:text-lg">
                  <p>
                    My technical expertise spans the full software development lifecycle, from initial concept to deployment and maintenance. On the frontend, I specialize in building responsive, performant user interfaces using <span className="text-blue-400 font-semibold">React, Next.js, and TypeScript</span>. I have extensive experience with modern UI frameworks like Tailwind CSS and component libraries such as shadcn/ui, creating design systems that are both beautiful and functional. My 3D web development skills using Three.js and React Three Fiber have enabled me to create immersive, interactive experiences that push the boundaries of web technology.
                  </p>
                  
                  <p>
                    On the backend, I've architected and built robust APIs and microservices using <span className="text-yellow-400 font-semibold">Python (Django, FastAPI, Flask)</span>, <span className="text-green-400 font-semibold">Node.js (Express, NestJS)</span>, and <span className="text-cyan-400 font-semibold">Go</span>. I have deep expertise in database design and optimization, working with PostgreSQL, MongoDB, Redis, and MySQL to create efficient data models and query strategies. My background in accounting has given me a unique perspective on data integrity, transaction management, and the importance of accurate financial calculations in software systems.
                  </p>
                  
                  <p>
                    Mobile development is another area where I excel, having built cross-platform applications using <span className="text-blue-400 font-semibold">Flutter and React Native</span>. I understand the nuances of native mobile development, including platform-specific optimizations, push notifications, location services, and offline capabilities. My experience with containerization using Docker and CI/CD pipelines with GitHub Actions ensures that my applications are deployed reliably and efficiently.
                  </p>
                  
                  <p>
                    Beyond traditional software development, I have experience in data science and machine learning, using libraries like Pandas and TensorFlow to analyze data and build predictive models. This combination of software engineering and data science skills allows me to create intelligent systems that not only function well but also provide valuable insights and automation capabilities. Whether I'm building a financial dashboard that visualizes complex data or developing a recommendation system that learns from user behavior, I bring a holistic approach that considers both the technical implementation and the business value.
                  </p>
                  
                  <p>
                    DevOps and infrastructure management are crucial aspects of modern software development, and I have extensive experience in this area. I've set up and maintained CI/CD pipelines using GitHub Actions, configured containerized deployments with Docker, and managed cloud infrastructure on platforms like AWS and Vercel. I understand the importance of monitoring, logging, and performance optimization in production environments. My approach to DevOps emphasizes automation, reliability, and security, ensuring that applications are not only well-built but also well-deployed and well-maintained.
                  </p>
                  
                  <p>
                    Security is a top priority in all my projects. With my background in financial systems, I understand the critical importance of protecting sensitive data and ensuring compliance with industry standards. I implement security best practices including authentication and authorization systems, data encryption, secure API design, and regular security audits. I stay current with the latest security threats and mitigation strategies, ensuring that the applications I build are not only functional but also secure and trustworthy.
                  </p>
                  
                  <p>
                    User experience design is another area where I excel. I believe that great software should be intuitive, accessible, and delightful to use. I work closely with designers and stakeholders to create interfaces that are not only beautiful but also highly functional. I have experience with accessibility standards (WCAG), responsive design principles, and performance optimization techniques that ensure applications work seamlessly across devices and platforms. My goal is always to create experiences that users love and that drive business results.
                  </p>
                </div>
                </CardContent>
              </Card>
            </motion.div>

          {/* About Section from Homepage */}
          <AboutSection />

          {/* Tech Stack Section from Homepage */}
          <EnhancedTechStackSection />
        </div>
      </section>
    </div>
  )
}
