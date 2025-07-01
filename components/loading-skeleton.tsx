interface LoadingSkeletonProps {
  type?: "card" | "grid" | "timeline" | "stats" | "profile" | "skills" | "header" | "contact"
  className?: string
}

const LoadingSkeleton = ({ type = "card", className = "" }: LoadingSkeletonProps) => {
  const renderSkeleton = () => {
    switch (type) {
      case "header":
        return (
          <div className="text-center mb-16 animate-pulse">
            <div className="h-16 bg-gray-700 rounded-lg mb-6 w-3/4 mx-auto"></div>
            <div className="h-6 bg-gray-700 rounded w-2/3 mx-auto"></div>
          </div>
        )

      case "profile":
        return (
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 animate-pulse">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-gray-700 rounded-full"></div>
              <div className="flex-1">
                <div className="h-6 bg-gray-700 rounded mb-2"></div>
                <div className="h-4 bg-gray-700 rounded w-3/4"></div>
              </div>
            </div>
            <div className="space-y-3 mb-6">
              <div className="h-4 bg-gray-700 rounded"></div>
              <div className="h-4 bg-gray-700 rounded w-5/6"></div>
              <div className="h-4 bg-gray-700 rounded w-4/6"></div>
            </div>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-gray-700 rounded"></div>
                <div className="h-4 bg-gray-700 rounded w-1/3"></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-gray-700 rounded"></div>
                <div className="h-4 bg-gray-700 rounded w-1/2"></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-gray-700 rounded"></div>
                <div className="h-4 bg-gray-700 rounded w-1/4"></div>
              </div>
            </div>
            <div className="h-12 bg-gray-700 rounded"></div>
          </div>
        )

      case "stats":
        return (
          <div className="grid grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 animate-pulse">
                <div className="w-16 h-16 bg-gray-700 rounded-full mx-auto mb-4"></div>
                <div className="h-8 bg-gray-700 rounded mb-2"></div>
                <div className="h-4 bg-gray-700 rounded w-3/4 mx-auto"></div>
              </div>
            ))}
          </div>
        )
      
      case "skills":
        return (
          <div className="mb-20">
            <div className="text-center mb-12 animate-pulse">
              <div className="h-10 bg-gray-700 rounded-lg mb-6 w-1/2 mx-auto"></div>
              <div className="h-5 bg-gray-700 rounded w-2/3 mx-auto"></div>
            </div>
            
            {/* Skill Category Filter Skeleton */}
            <div className="flex justify-center mb-8">
              <div className="flex gap-2 bg-gray-900/50 p-2 rounded-full border border-gray-800">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-16 h-8 bg-gray-700 rounded-full animate-pulse"></div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 animate-pulse">
                  <div className="w-16 h-16 bg-gray-700 rounded-full mx-auto mb-4"></div>
                  <div className="h-6 bg-gray-700 rounded mb-3"></div>
                  <div className="h-2 bg-gray-700 rounded mb-2"></div>
                  <div className="h-4 bg-gray-700 rounded w-1/2 mx-auto mb-2"></div>
                  <div className="h-3 bg-gray-700 rounded w-1/3 mx-auto"></div>
                </div>
              ))}
            </div>
          </div>
        )
      
      case "timeline":
        return (
          <div>
            <div className="text-center mb-12 animate-pulse">
              <div className="h-10 bg-gray-700 rounded-lg mb-6 w-1/3 mx-auto"></div>
              <div className="h-5 bg-gray-700 rounded w-1/2 mx-auto"></div>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-700 rounded-full"></div>
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center mb-12">
                  <div className="w-1/2 pr-8">
                    <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 animate-pulse">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-4 h-4 bg-gray-700 rounded"></div>
                        <div className="h-5 bg-gray-700 rounded w-20"></div>
                      </div>
                      <div className="h-6 bg-gray-700 rounded mb-2"></div>
                      <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
                      <div className="h-3 bg-gray-700 rounded w-full"></div>
                    </div>
                  </div>
                  <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        )

      case "contact":
        return (
          <div className="space-y-4 animate-pulse">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-4 h-4 bg-gray-700 rounded"></div>
                <div className="h-4 bg-gray-700 rounded w-1/3"></div>
              </div>
            ))}
          </div>
        )
      
      case "grid":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 animate-pulse">
                <div className="w-16 h-16 bg-gray-700 rounded-full mx-auto mb-4"></div>
                <div className="h-6 bg-gray-700 rounded mb-3"></div>
                <div className="h-2 bg-gray-700 rounded mb-2"></div>
                <div className="h-4 bg-gray-700 rounded w-1/2 mx-auto mb-2"></div>
                <div className="h-3 bg-gray-700 rounded w-1/3 mx-auto"></div>
              </div>
            ))}
          </div>
        )
      
      default:
        return (
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 animate-pulse">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-gray-700 rounded-full"></div>
              <div className="flex-1">
                <div className="h-6 bg-gray-700 rounded mb-2"></div>
                <div className="h-4 bg-gray-700 rounded w-3/4"></div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-700 rounded"></div>
              <div className="h-4 bg-gray-700 rounded w-5/6"></div>
              <div className="h-4 bg-gray-700 rounded w-4/6"></div>
            </div>
          </div>
        )
    }
  }

  return (
    <div className={className}>
      {renderSkeleton()}
    </div>
  )
}

export default LoadingSkeleton 