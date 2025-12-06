/**
 * Error Boundary Component
 * Catches and handles React errors gracefully
 */

'use client'

import React, { Component, ErrorInfo, ReactNode } from 'react'
import { EnhancedButton } from './ui/enhanced-button'
import { EnhancedCard } from './ui/enhanced-card'

interface Props {
  children: ReactNode
  fallback?: ReactNode
  onError?: (error: Error, errorInfo: ErrorInfo) => void
}

interface State {
  hasError: boolean
  error: Error | null
  errorInfo: ErrorInfo | null
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    }
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null,
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
    this.setState({
      error,
      errorInfo,
    })

    if (this.props.onError) {
      this.props.onError(error, errorInfo)
    }
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-black p-4">
          <EnhancedCard variant="glass" className="max-w-2xl w-full">
            <div className="p-8 text-center">
              <h1 className="text-3xl font-bold text-white mb-4">
                Something went wrong
              </h1>
              <p className="text-gray-400 mb-6">
                We're sorry, but something unexpected happened. Please try
                refreshing the page.
              </p>

              {process.env.NODE_ENV === 'development' && this.state.error && (
                <div className="mb-6 p-4 bg-red-900/20 border border-red-800 rounded-lg text-left">
                  <p className="text-red-400 font-mono text-sm mb-2">
                    {this.state.error.toString()}
                  </p>
                  {this.state.errorInfo && (
                    <pre className="text-red-300 text-xs overflow-auto">
                      {this.state.errorInfo.componentStack}
                    </pre>
                  )}
                </div>
              )}

              <div className="flex gap-4 justify-center">
                <EnhancedButton
                  variant="primary"
                  onClick={this.handleReset}
                >
                  Try Again
                </EnhancedButton>
                <EnhancedButton
                  variant="outline"
                  onClick={() => window.location.reload()}
                >
                  Refresh Page
                </EnhancedButton>
              </div>
            </div>
          </EnhancedCard>
        </div>
      )
    }

    return this.props.children
  }
}

