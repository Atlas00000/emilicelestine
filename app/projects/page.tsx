"use client"

import { useState, useEffect } from "react"

// Force dynamic rendering to avoid SSR issues with hooks
export const dynamic = 'force-dynamic'
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { EnhancedNavigation } from "@/components/navigation/enhanced-navigation"
import { GridBackground } from "@/components/effects/grid-background"
import { ScrollProgress } from "@/components/interactive/scroll-progress"
import { EnhancedButton } from "@/components/ui/enhanced-button"
import { EnhancedProjectsSection } from "@/components/projects/enhanced-projects-section"
import LoadingScreen from "@/components/loading-screen"
import Link from "next/link"
import InDevelopmentSection from "@/components/in-development-section"
import DesignStageSection from "@/components/design-stage-section"

export default function ProjectsPage() {
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
      <section className="pt-24 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            <Link href="/">
              <EnhancedButton
                variant="outline"
                size="sm"
              >
                <ArrowLeft className="mr-2" size={16} />
                Back to Home
              </EnhancedButton>
            </Link>
          </motion.div>

        </div>
      </section>

      {/* Projects Section - Using EnhancedProjectsSection */}
      <EnhancedProjectsSection showAllProjects={true} />

              {/* In Development Section */}
        <InDevelopmentSection />

        {/* Design Stage Section */}
        <DesignStageSection />
    </div>
  )
}
