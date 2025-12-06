/**
 * Enhanced Input Component
 * FAANG-level input with floating label, focus glow, and validation animations
 */

'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, XCircle, AlertCircle } from 'lucide-react'
import { FloatingLabel } from './floating-label'
import { cn } from '@/lib/utils'
import { getSemanticColor, hasSemanticAnimation } from '@/lib/design-tokens/semantic-colors'

export type InputValidationState = 'default' | 'success' | 'error' | 'warning'

export interface EnhancedInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  error?: string
  success?: string
  warning?: string
  validationState?: InputValidationState
  showValidationIcon?: boolean
  floatingLabel?: boolean
}

export function EnhancedInput({
  label,
  error,
  success,
  warning,
  validationState = 'default',
  showValidationIcon = true,
  floatingLabel = true,
  className,
  value,
  defaultValue,
  onFocus,
  onBlur,
  required,
  ...props
}: EnhancedInputProps) {
  const [isFocused, setIsFocused] = useState(false)
  const [hasValue, setHasValue] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  // Determine validation state
  const currentState: InputValidationState = error
    ? 'error'
    : success
    ? 'success'
    : warning
    ? 'warning'
    : validationState

  useEffect(() => {
    const inputValue = value ?? defaultValue ?? ''
    setHasValue(!!inputValue)
  }, [value, defaultValue])

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true)
    onFocus?.(e)
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false)
    onBlur?.(e)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(!!e.target.value)
    props.onChange?.(e)
  }

  const isFloating = hasValue || isFocused
  const stateColor = getSemanticColor(currentState === 'error' ? 'error' : currentState === 'success' ? 'success' : 'info', 500)
  const stateGlow = currentState !== 'default' ? `0 0 0 3px ${getSemanticColor(currentState === 'error' ? 'error' : currentState === 'success' ? 'success' : 'info', 500)}20` : undefined

  return (
    <div className="relative w-full">
      <div className="relative">
        {/* Input Field */}
        <motion.input
          ref={inputRef}
          type={props.type || 'text'}
          value={value}
          defaultValue={defaultValue}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          required={required}
          className={cn(
            'w-full px-3 pt-6 pb-2 bg-gray-900/50 border-2 rounded-lg text-white placeholder-transparent',
            'focus:outline-none transition-all duration-200',
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
            className="absolute right-3 top-1/2 -translate-y-1/2"
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

