'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, TrendingUp, Code2 } from 'lucide-react'
import { TechItem } from '@/lib/tech-stack-data'
import { cn } from '@/lib/utils'

export interface TechItemCardProps {
  tech: TechItem
  index?: number
  size?: 'small' | 'medium' | 'large'
  onHover?: (tech: TechItem | null) => void
  className?: string
}

export function TechItemCard({
  tech,
  index = 0,
  size = 'medium',
  onHover,
  className,
}: TechItemCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const sizeClasses = {
    small: 'h-[300px]',
    medium: 'h-[360px]',
    large: 'h-[420px]',
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
    onHover?.(tech)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    onHover?.(null)
  }

  return (
    <motion.div
      className={cn('relative group', className)}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        type: 'spring',
        stiffness: 100,
      }}
      whileHover={{
        y: -16,
        scale: 1.03,
        transition: { duration: 0.4, type: 'spring', stiffness: 300 },
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main Card Container - Fluid Design */}
      <div
        className={cn(
          'relative h-full w-full rounded-3xl overflow-hidden',
          'bg-gray-900/20 backdrop-blur-2xl',
          'border border-white/5',
          'transition-all duration-500',
          sizeClasses[size],
          isHovered && 'border-white/20 shadow-2xl shadow-cyan-500/10'
        )}
      >
        {/* Subtle Gradient Accent - Only on edges, not full overlay */}
        <motion.div
          className={cn(
            'absolute inset-0 opacity-0 pointer-events-none',
            'bg-gradient-to-br',
            tech.color
          )}
          animate={{
            opacity: isHovered ? 0.15 : 0,
          }}
          transition={{ duration: 0.5 }}
          style={{
            maskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, black 40%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, black 40%, transparent 70%)',
          }}
        />

        {/* Corner Gradient Accents */}
        <motion.div
          className={cn(
            'absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 pointer-events-none transition-opacity duration-500',
            `bg-gradient-to-br ${tech.color}`
          )}
          animate={{
            opacity: isHovered ? 0.2 : 0,
            scale: isHovered ? 1.2 : 1,
          }}
        />
        <motion.div
          className={cn(
            'absolute bottom-0 left-0 w-24 h-24 rounded-full blur-2xl opacity-0 pointer-events-none transition-opacity duration-500',
            `bg-gradient-to-tr ${tech.color}`
          )}
          animate={{
            opacity: isHovered ? 0.15 : 0,
            scale: isHovered ? 1.3 : 1,
          }}
        />

        {/* Animated Border Glow */}
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          animate={{
            boxShadow: isHovered
              ? [
                  '0 0 0 1px rgba(6, 182, 212, 0.1)',
                  '0 0 0 1px rgba(6, 182, 212, 0.2)',
                  '0 0 0 1px rgba(6, 182, 212, 0.1)',
                ]
              : '0 0 0 1px rgba(255, 255, 255, 0.05)',
          }}
          transition={{
            duration: 2,
            repeat: isHovered ? Infinity : 0,
            ease: 'easeInOut',
          }}
        />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col p-6 sm:p-8">
          {/* Top Section - Badges */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1" />
            <div className="flex flex-col items-end gap-2">
              {tech.featured && (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
                >
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 backdrop-blur-sm">
                    <Sparkles className="w-3 h-3" />
                    Featured
                  </span>
                </motion.div>
              )}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="text-xs text-gray-500 font-medium"
              >
                {tech.years}
              </motion.span>
            </div>
          </div>

          {/* Middle Section - Name & Description */}
          <div className="flex-1 space-y-4 mb-6">
            <motion.h3
              className={cn(
                'font-bold leading-tight',
                size === 'large' ? 'text-2xl sm:text-3xl' : size === 'medium' ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'
              )}
              whileHover={{ x: 4 }}
            >
              <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                {tech.name}
              </span>
            </motion.h3>

            <motion.p
              className="text-sm text-gray-400 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              {tech.description}
            </motion.p>

            {/* Frameworks Preview - More Fluid Design */}
            {tech.frameworks && tech.frameworks.length > 0 && (
              <motion.div
                className="flex flex-wrap gap-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {tech.frameworks.slice(0, 3).map((framework, fIndex) => (
                  <motion.span
                    key={framework}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + fIndex * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-sm text-xs text-gray-300 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300"
                  >
                    {framework}
                  </motion.span>
                ))}
                {tech.frameworks.length > 3 && (
                  <span className="px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-sm text-xs text-gray-500 border border-white/5">
                    +{tech.frameworks.length - 3}
                  </span>
                )}
              </motion.div>
            )}
          </div>

          {/* Bottom Section - Proficiency */}
          <div className="space-y-4 pt-6 border-t border-white/5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Proficiency
                </span>
              </div>
              <span className="text-sm font-bold text-white">{tech.level}%</span>
            </div>

            {/* Progress Bar - More Fluid */}
            <div className="relative h-2.5 bg-gray-800/30 rounded-full overflow-hidden backdrop-blur-sm">
              <motion.div
                className={cn('absolute inset-y-0 left-0 rounded-full', `bg-gradient-to-r ${tech.color}`)}
                initial={{ width: 0 }}
                whileInView={{ width: `${tech.level}%` }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.5,
                  delay: index * 0.1 + 0.4,
                  ease: 'easeOut',
                }}
              />
              {/* Animated Shimmer */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{
                  x: isHovered ? ['-100%', '200%'] : '-100%',
                }}
                transition={{
                  duration: 1.5,
                  repeat: isHovered ? Infinity : 0,
                  ease: 'linear',
                }}
              />
            </div>

            {/* Skill Level Indicators - Dots */}
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => {
                const filled = i < Math.floor(tech.level / 20)
                return (
                  <motion.div
                    key={i}
                    className={cn(
                      'h-2 w-2 rounded-full transition-all duration-300',
                      filled
                        ? `bg-gradient-to-r ${tech.color} shadow-lg`
                        : 'bg-gray-700/30'
                    )}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + i * 0.05 }}
                    whileHover={{ scale: 1.3 }}
                  />
                )
              })}
            </div>
          </div>
        </div>

        {/* Hover Indicator - Subtle */}
        <motion.div
          className="absolute bottom-4 right-4 pointer-events-none"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.8,
          }}
          transition={{ duration: 0.3 }}
        >
          <Code2 className="w-5 h-5 text-cyan-400/60" />
        </motion.div>

        {/* Floating Particles Effect on Hover */}
        {isHovered && (
          <>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className={cn('absolute w-1 h-1 rounded-full', `bg-gradient-to-r ${tech.color}`)}
                initial={{
                  x: '50%',
                  y: '50%',
                  opacity: 0.8,
                  scale: 0,
                }}
                animate={{
                  x: `${50 + (i - 1) * 30}%`,
                  y: `${50 + (i - 1) * 20}%`,
                  opacity: [0.8, 0],
                  scale: [0, 1.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: 'easeOut',
                }}
              />
            ))}
          </>
        )}
      </div>
    </motion.div>
  )
}
