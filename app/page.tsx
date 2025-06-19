"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import LoadingScreen from "@/components/loading-screen"
import ParticleBackground from "@/components/particle-background"
import TestimonialsSection from "@/components/testimonials-section"
import ProfessionalBioSection from "@/components/professional-bio-section"
import ServicesSection from "@/components/services-section"
import PublicationsSection from "@/components/publications-section"
import CommunitySection from "@/components/community-section"
import LeadershipSection from "@/components/leadership-section"
import TechStackSection from "@/components/tech-stack-section"
import SmoothScroll from "@/components/smooth-scroll"

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden transition-colors duration-300">
      <ParticleBackground />
      <SmoothScroll />
      <Navigation />
      <main>
        <HeroSection />
        <ProfessionalBioSection />
        <TechStackSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <PublicationsSection />
        <TestimonialsSection />
        <CommunitySection />
        <LeadershipSection />
        <ContactSection />
      </main>
    </div>
  )
}
