/**
 * Loading State Components
 * Various loading states for different use cases
 */

'use client'

import React from 'react'
import { LoadingSpinner } from './ui/loading-spinner'
import { EnhancedCard } from './ui/enhanced-card'
import { cn } from '@/lib/utils'

export interface LoadingStateProps {
  message?: string
  fullScreen?: boolean
  className?: string
}

/**
 * Full Screen Loading State
 */
export function FullScreenLoading({
  message = 'Loading...',
  className,
}: LoadingStateProps) {
  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm',
        className
      )}
    >
      <div className="text-center">
        <LoadingSpinner size="lg" className="mb-4" />
        <p className="text-white text-lg">{message}</p>
      </div>
    </div>
  )
}

/**
 * Inline Loading State
 */
export function InlineLoading({
  message = 'Loading...',
  className,
}: LoadingStateProps) {
  return (
    <div className={cn('flex items-center justify-center p-8', className)}>
      <LoadingSpinner size="md" className="mr-3" />
      <p className="text-gray-400">{message}</p>
    </div>
  )
}

/**
 * Card Loading State
 */
export function CardLoading({ className }: { className?: string }) {
  return (
    <EnhancedCard variant="glass" className={className}>
      <div className="flex items-center justify-center p-8">
        <LoadingSpinner size="md" />
      </div>
    </EnhancedCard>
  )
}

/**
 * Skeleton Loading State
 */
export function SkeletonLoading({
  className,
  lines = 3,
}: {
  className?: string
  lines?: number
}) {
  return (
    <div className={cn('animate-pulse space-y-4', className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="h-4 bg-gray-800 rounded"
          style={{
            width: i === lines - 1 ? '60%' : '100%',
          }}
        />
      ))}
    </div>
  )
}

/**
 * Button Loading State
 */
export function ButtonLoading({ className }: { className?: string }) {
  return (
    <div className={cn('inline-flex items-center gap-2', className)}>
      <LoadingSpinner size="sm" />
      <span>Loading...</span>
    </div>
  )
}

