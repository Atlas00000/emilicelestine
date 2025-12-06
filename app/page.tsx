"use client"

import React, { useState, useEffect } from "react"
import { ErrorBoundary } from "@/components/error-boundary"
import { EnhancedNavigation } from "@/components/navigation/enhanced-navigation"
import { EnhancedHero } from "@/components/sections/enhanced-hero"
import { ScrollProgress } from "@/components/interactive/scroll-progress"
import { FullScreenLoading } from "@/components/loading-states"
import LoadingScreen from "@/components/loading-screen"
import AboutSection from "@/components/about-section"
import { EnhancedProjectsSection } from "@/components/projects/enhanced-projects-section"
import ContactSection from "@/components/contact-section"
import ProfessionalBioSection from "@/components/professional-bio-section"
import CommunitySection from "@/components/community-section"
import { EnhancedTechStackSection } from "@/components/tech-stack/enhanced-tech-stack-section"
import { applyPolyfills } from "@/lib/utils/browser-compat"
import { GridBackground } from "@/components/effects/grid-background"

export const dynamic = 'force-dynamic'

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Apply browser polyfills
    applyPolyfills()

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
        {/* Global Grid Background */}
        <GridBackground />

        {/* Enhanced Interactive Elements */}
        <ScrollProgress />
        
        {/* Enhanced Navigation */}
        <EnhancedNavigation />

        <main id="main-content" className="relative z-10">
          {/* Enhanced Hero Section */}
          <EnhancedHero onScrollToSection={scrollToSection} />

          {/* Existing Sections */}
          <ProfessionalBioSection />
          <EnhancedProjectsSection />
          <EnhancedTechStackSection />
          <AboutSection />
          <CommunitySection />
          <ContactSection />
        </main>
      </div>
    </ErrorBoundary>
  )
}
