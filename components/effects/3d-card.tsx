/**
 * 3D Card Component
 * Card with 3D flip and perspective effects
 */

'use client'

import React, { useState, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { calculate3DTilt } from '@/lib/utils/3d-transforms'
import { cn } from '@/lib/utils'

export interface Card3DProps extends React.HTMLAttributes<HTMLDivElement> {
  tilt?: boolean
  flip?: boolean
  children: React.ReactNode
}

export function Card3D({
  tilt = true,
  flip = false,
  children,
  className,
  ...props
}: Card3DProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 })
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['5deg', '-5deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-5deg', '5deg'])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tilt || !cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      className={cn('relative', className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={flip ? () => setIsFlipped(!isFlipped) : undefined}
      style={
        tilt
          ? {
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }
          : undefined
      }
      animate={
        flip
          ? {
              rotateY: isFlipped ? 180 : 0,
            }
          : {}
      }
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
      }}
      {...props}
    >
      <div style={{ transform: 'translateZ(20px)' }}>{children}</div>
    </motion.div>
  )
}

