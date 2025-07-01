"use client"

import { motion } from "framer-motion"
import LoadingSkeleton from "./loading-skeleton"

const AboutLoadingScreen = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Header Section Skeleton */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Back Button Skeleton */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-24 h-10 bg-gray-700 rounded animate-pulse"></div>
          </div>

          {/* Title Skeleton */}
          <LoadingSkeleton type="header" />
        </div>
      </section>

      {/* Main Content Skeleton */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Personal Info Card Skeleton */}
            <LoadingSkeleton type="profile" />

            {/* Stats Grid Skeleton */}
            <LoadingSkeleton type="stats" />
          </div>

          {/* Skills Section Skeleton */}
          <LoadingSkeleton type="skills" />

          {/* Timeline Section Skeleton */}
          <LoadingSkeleton type="timeline" />
        </div>
      </section>
    </div>
  )
}

export default AboutLoadingScreen 