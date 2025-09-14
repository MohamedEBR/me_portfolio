import React from 'react'

const LoadingSpinner = ({ size = 'medium', className = '' }) => {
  const sizeClasses = {
    small: 'w-6 h-6',
    medium: 'w-12 h-12',
    large: 'w-16 h-16',
    xlarge: 'w-24 h-24'
  }

  return (
    <div className={`flex items-center justify-center py-12 ${className}`}>
      <div className="relative">
        <div className={`${sizeClasses[size]} animate-spin rounded-full border-4 border-gray-200 border-t-accent`}></div>
        <div className={`${sizeClasses[size]} absolute top-0 left-0 animate-ping rounded-full border border-accent opacity-20`}></div>
      </div>
    </div>
  )
}

export default LoadingSpinner