/**
 * 3D Text Component
 * Text with 3D perspective and depth effects
 */

'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { create3DTransformStyle } from '@/lib/utils/3d-transforms'
import { cn } from '@/lib/utils'

export interface Text3DProps extends React.HTMLAttributes<HTMLDivElement> {
  depth?: number
  perspective?: number
  children: React.ReactNode
}

export function Text3D({
  depth = 10,
  perspective = 1000,
  children,
  className,
  ...props
}: Text3DProps) {
  const transformStyle = create3DTransformStyle({
    perspective,
    translateZ: depth,
  })

  return (
    <motion.div
      className={cn('transform-gpu', className)}
      style={transformStyle}
      whileHover={{
        rotateX: 5,
        scale: 1.05,
        transition: { duration: 0.3 },
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

