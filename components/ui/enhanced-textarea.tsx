/**
 * Enhanced Textarea Component
 * FAANG-level textarea with floating label and validation
 */

'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, XCircle, AlertCircle } from 'lucide-react'
import { FloatingLabel } from './floating-label'
import { cn } from '@/lib/utils'
import { InputValidationState } from './enhanced-input'

export interface EnhancedTextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  label?: string
  error?: string
  success?: string
  warning?: string
  validationState?: InputValidationState
  showValidationIcon?: boolean
  floatingLabel?: boolean
  autoResize?: boolean
  minRows?: number
  maxRows?: number
}

export function EnhancedTextarea({
  label,
  error,
  success,
  warning,
  validationState = 'default',
  showValidationIcon = true,
  floatingLabel = true,
  autoResize = true,
  minRows = 3,
  maxRows = 10,
  className,
  value,
  defaultValue,
  onFocus,
  onBlur,
  required,
  ...props
}: EnhancedTextareaProps) {
  const [isFocused, setIsFocused] = useState(false)
  const [hasValue, setHasValue] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // Determine validation state
  const currentState: InputValidationState = error
    ? 'error'
    : success
    ? 'success'
    : warning
    ? 'warning'
    : validationState

  useEffect(() => {
    const textareaValue = value ?? defaultValue ?? ''
    setHasValue(!!textareaValue)
  }, [value, defaultValue])

  useEffect(() => {
    if (autoResize && textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      const scrollHeight = textareaRef.current.scrollHeight
      const lineHeight = 24 // Approximate line height
      const minHeight = minRows * lineHeight
      const maxHeight = maxRows * lineHeight
      const newHeight = Math.min(Math.max(scrollHeight, minHeight), maxHeight)
      textareaRef.current.style.height = `${newHeight}px`
    }
  }, [value, defaultValue, autoResize, minRows, maxRows])

  const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(true)
    onFocus?.(e)
  }

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(false)
    onBlur?.(e)
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHasValue(!!e.target.value)
    props.onChange?.(e)
  }

  const isFloating = hasValue || isFocused
  const stateGlow = currentState !== 'default' ? `0 0 0 3px ${currentState === 'error' ? 'rgba(239, 68, 68, 0.2)' : currentState === 'success' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(245, 158, 11, 0.2)'}` : undefined

  return (
    <div className="relative w-full">
      <div className="relative">
        {/* Textarea Field */}
        <motion.textarea
          ref={textareaRef}
          value={value}
          defaultValue={defaultValue}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          required={required}
          rows={!autoResize ? minRows : undefined}
          className={cn(
            'w-full px-3 pt-6 pb-2 bg-gray-900/50 border-2 rounded-lg text-white placeholder-transparent',
            'focus:outline-none transition-all duration-200 resize-none',
            'backdrop-blur-sm',
            currentState === 'error'
              ? 'border-red-500 focus:border-red-400'
              : currentState === 'success'
              ? 'border-green-500 focus:border-green-400'
              : currentState === 'warning'
              ? 'border-yellow-500 focus:border-yellow-400'
              : 'border-gray-700 focus:border-blue-500',
            className
          )}
          style={{
            boxShadow: isFocused ? stateGlow : undefined,
          }}
          whileFocus={{
            scale: 1.01,
            transition: { duration: 0.2 },
          }}
          animate={
            currentState === 'error'
              ? {
                  x: [0, -5, 5, -5, 5, 0],
                  transition: { duration: 0.5 },
                }
              : {}
          }
          {...props}
        />

        {/* Floating Label */}
        {floatingLabel && label && (
          <FloatingLabel
            label={label}
            isFloating={isFloating}
            isFocused={isFocused}
            error={!!error}
            required={required}
          />
        )}

        {/* Validation Icon */}
        {showValidationIcon && currentState !== 'default' && (
          <motion.div
            className="absolute right-3 top-3"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            {currentState === 'success' && (
              <CheckCircle2 size={20} className="text-green-500" />
            )}
            {currentState === 'error' && (
              <XCircle size={20} className="text-red-500" />
            )}
            {currentState === 'warning' && (
              <AlertCircle size={20} className="text-yellow-500" />
            )}
          </motion.div>
        )}
      </div>

      {/* Error/Success/Warning Messages */}
      <AnimatePresence>
        {(error || success || warning) && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={cn(
              'mt-2 text-sm',
              error && 'text-red-400',
              success && 'text-green-400',
              warning && 'text-yellow-400'
            )}
          >
            {error || success || warning}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

