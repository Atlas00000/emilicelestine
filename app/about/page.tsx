"use client"

import { useState, useRef, useEffect, useCallback, useMemo, lazy, Suspense } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import {
  Code,
  Database,
  Smartphone,
  Globe,
  Award,
  Users,
  Calendar,
  BookOpen,
  Briefcase,
  GraduationCap,
  ArrowLeft,
  Download,
  MapPin,
  Mail,
  Phone,
  Loader2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"
import ParticleBackground from "@/components/particle-background"
import LazySection from "@/components/lazy-section"
import LoadingSkeleton from "@/components/loading-skeleton"
import OptimizedImage from "@/components/optimized-image"
import Link from "next/link"

// Lazy load heavy components
const SkillsSection = lazy(() => import('@/components/skills-section'))
const TimelineSection = lazy(() => import('@/components/timeline-section'))

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

// Optimized animated counter - simplified logic
const AnimatedCounter = ({
  end,
  duration = 1500,
  suffix = "",
}: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (isInView) {
      setIsLoading(false)
      const startTime = Date.now()
      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        setCount(Math.floor(progress * end))
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [isInView, end, duration])

  return (
    <span ref={ref} className="font-bold">
      {isLoading ? (
        <Loader2 className="w-6 h-6 animate-spin inline" />
      ) : (
        `${count}${suffix}`
      )}
    </span>
  )
}

// Optimized Stats Component with memoization
const StatsSection = () => {
  const stats = useMemo(() => [
    { label: "Projects Completed", value: 7, icon: Award, suffix: "+" },
    { label: "Technologies Mastered", value: 15, icon: Code, suffix: "+" },
    { label: "Years Experience", value: 5, icon: Calendar, suffix: "+" },
    { label: "Happy Clients", value: 50, icon: Users, suffix: "+" },
  ], [])

  return (
    <div className="grid grid-cols-2 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="group"
        >
          <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm text-center p-6 transition-all duration-300 group-hover:scale-[1.05] group-hover:border-blue-500/50">
            <CardContent className="p-0">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

// Optimized Profile Image Component with Next.js Image
const ProfileImage = () => {
  return (
    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl relative overflow-hidden">
      {/* Fallback to initials if no image */}
      <span>CE</span>
      
      {/* Future image implementation - uncomment when image is available */}
      {/* 
      <OptimizedImage
        src="/images/profile.jpg"
        alt="Celestine Emili"
        fill
        className="object-cover rounded-full"
        sizes="80px"
        priority
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        fallback={
          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
            CE
          </div>
        }
      />
      */}
    </div>
  )
}

// Enhanced Loading component for lazy-loaded sections
const SectionLoader = ({ sectionName }: { sectionName: string }) => (
  <div className="flex flex-col items-center justify-center py-12 space-y-4">
    <div className="relative">
      <div className="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
      <div className="absolute inset-0 w-12 h-12 border-4 border-transparent border-t-purple-500 rounded-full animate-spin" style={{ animationDelay: '-0.5s' }}></div>
    </div>
    <div className="text-center">
      <p className="text-gray-400 text-sm">Loading {sectionName}...</p>
      <p className="text-gray-600 text-xs mt-1">Please wait while we prepare your content</p>
    </div>
  </div>
)

// Progress indicator component
const LoadingProgress = ({ progress }: { progress: number }) => (
  <div className="w-full bg-gray-800 rounded-full h-2 mb-4">
    <motion.div
      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    />
  </div>
)

export default function AboutPage() {
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [isPageReady, setIsPageReady] = useState(false)

  const personalInfo = useMemo(() => ({
    name: "Celestine Emili",
    title: "Full-Stack Developer & Financial Systems Architect",
    location: "Lagos, Nigeria",
    email: "emilicelestine@gmail.com",
    phone: "+234 807 611 6744",
    bio: "With a foundation in accounting and a deep passion for technology, I specialize in building secure, scalable, and intelligent systems across web, mobile, and financial platforms. My journey has spanned across industries—finance, healthcare, education, and community development—blending technical excellence with real-world impact.",
  }), [])

  // Simulate loading progress
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingProgress(100)
      setTimeout(() => setIsPageReady(true), 500)
    }, 1000)
    
    return () => clearTimeout(timer)
  }, [])

  const handleDownloadResume = useCallback(() => {
    // Future implementation for resume download
    console.log("Download resume functionality")
  }, [])

  // Show loading screen initially
  if (!isPageReady) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center space-y-6 max-w-md mx-auto px-4">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin mx-auto"></div>
            <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-purple-500 rounded-full animate-spin mx-auto" style={{ animationDelay: '-0.5s' }}></div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Loading About Page
            </h2>
            <p className="text-gray-400 text-sm mb-4">
              Preparing your professional journey...
            </p>
            
            <LoadingProgress progress={loadingProgress} />
            
            <div className="flex justify-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <ParticleBackground />
      <Navigation />

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
              <Button variant="outline" size="sm" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                <ArrowLeft className="mr-2" size={16} />
                Back to Home
              </Button>
            </Link>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Discover my journey, expertise, and passion for creating innovative solutions that bridge technology and
              business needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Personal Introduction */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Personal Info Card */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="group"
            >
              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm h-full transition-all duration-300 group-hover:scale-[1.02] group-hover:border-blue-500/50">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <ProfileImage />
                    <div>
                      <h2 className="text-2xl font-bold text-white">{personalInfo.name}</h2>
                      <p className="text-blue-400 font-medium">{personalInfo.title}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6">{personalInfo.bio}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-gray-300">
                      <MapPin className="text-blue-400" size={18} />
                      <span>{personalInfo.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <Mail className="text-blue-400" size={18} />
                      <span>{personalInfo.email}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <Phone className="text-blue-400" size={18} />
                      <span>{personalInfo.phone}</span>
                    </div>
                  </div>

                  <Button 
                    onClick={handleDownloadResume}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <Download className="mr-2" size={18} />
                    Download Resume
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Stats Grid - Lazy Loaded */}
            <LazySection 
              fallback={<LoadingSkeleton type="stats" />}
              threshold={0.1}
              rootMargin="100px"
            >
              <StatsSection />
            </LazySection>
          </div>

          {/* Skills Section - Lazy Loaded with Suspense */}
          <LazySection 
            fallback={<LoadingSkeleton type="skills" />}
            threshold={0.1}
            rootMargin="150px"
          >
            <Suspense fallback={<SectionLoader sectionName="Technical Skills" />}>
              <SkillsSection />
            </Suspense>
          </LazySection>

          {/* Timeline Section - Lazy Loaded with Suspense */}
          <LazySection 
            fallback={<LoadingSkeleton type="timeline" />}
            threshold={0.1}
            rootMargin="200px"
          >
            <Suspense fallback={<SectionLoader sectionName="Professional Journey" />}>
              <TimelineSection />
            </Suspense>
          </LazySection>
        </div>
      </section>
    </div>
  )
}
