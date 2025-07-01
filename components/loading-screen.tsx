"use client"

import { motion } from "framer-motion"

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
    >
      <div className="text-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center font-bold text-white text-2xl mx-auto">
            CE
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <h2 className="text-xl font-semibold text-white mb-2">
            Celestine Emili
          </h2>
          <p className="text-gray-400">Loading portfolio...</p>
        </motion.div>

        {/* Loading Animation */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.2,
                repeat: Number.POSITIVE_INFINITY,
                delay: index * 0.15,
              }}
              className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
            />
          ))}
        </div>

        {/* Progress Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="mt-6 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto max-w-xs"
        />
      </div>
    </motion.div>
  )
}

export default LoadingScreen
