export default function TealLoader({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
    const sizeClasses = {
      sm: "w-8 h-8",
      md: "w-12 h-12",
      lg: "w-16 h-16"
    }
  
    return (
      <div className="relative inline-flex items-center justify-center">
        <div className={`${sizeClasses[size]} relative`}>
          {/* Outer spinning ring */}
          <div className="absolute inset-0 rounded-full border-4 border-pink-200/30 dark:border-pink-400/20"></div>
          
          {/* Animated spinning arc */}
          <div className="absolute inset-0 animate-spin">
            <div className="h-full w-full rounded-full border-4 border-transparent border-t-pink-500 dark:border-t-teal-400"></div>
          </div>
          
          {/* Inner pulsing dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-pink-500 dark:bg-pink-400 animate-pulse"></div>
          </div>
        </div>
      </div>
    )
  }
  