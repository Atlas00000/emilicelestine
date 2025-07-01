"use client"

import { motion } from "framer-motion"
import LoadingSkeleton from "./loading-skeleton"

const ProjectsLoadingScreen = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  }

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

          {/* Project Statistics Skeleton */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {[1, 2, 3, 4].map((i) => (
              <motion.div key={i} variants={itemVariants}>
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 animate-pulse">
                  <div className="w-16 h-16 bg-gray-700 rounded-full mx-auto mb-4"></div>
                  <div className="h-8 bg-gray-700 rounded mb-2"></div>
                  <div className="h-4 bg-gray-700 rounded w-3/4 mx-auto"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Content Skeleton */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Filter and Search Skeleton */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              {/* Search Bar Skeleton */}
              <div className="flex-1">
                <div className="h-12 bg-gray-900/50 border border-gray-800 rounded-lg animate-pulse"></div>
              </div>
              
              {/* Filter Buttons Skeleton */}
              <div className="flex gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-20 h-12 bg-gray-700 rounded-lg animate-pulse"></div>
                ))}
              </div>
            </div>

            {/* View Toggle Skeleton */}
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-16 h-10 bg-gray-700 rounded-lg animate-pulse"></div>
                ))}
              </div>
              <div className="w-24 h-10 bg-gray-700 rounded-lg animate-pulse"></div>
            </div>
          </motion.div>

          {/* Project Cards Grid Skeleton */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <LoadingSkeleton type="projects" />
          </motion.div>

          {/* Loading Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center py-12"
          >
            <div className="flex justify-center items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
            <p className="text-gray-400 text-sm">Loading projects...</p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ProjectsLoadingScreen 