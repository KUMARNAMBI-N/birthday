import React, { useState } from 'react'
import { Heart, Sparkles, Image as ImageIcon } from 'lucide-react'

interface RomanticImageProps {
  src: string
  alt: string
  className?: string
  aspectRatio?: string
  priority?: boolean
  fallbackText?: string
}

/**
 * Resilient luxury image component with built-in graceful fallback.
 * If the user has not placed real photos in `public/images/` yet,
 * it displays an exquisite editorial romantic placeholder rather than breaking!
 */
export const RomanticImage: React.FC<RomanticImageProps> = ({
  src,
  alt,
  className = "",
  aspectRatio = "aspect-[4/5]",
  fallbackText = "A Treasured Memory"
}) => {
  const [hasError, setHasError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-[#FAF3E0] via-[#F4E8D1] to-[#E9D6BA] ${aspectRatio} ${className}`}>
      {!hasError ? (
        <>
          <img
            src={src}
            alt={alt}
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={`w-full h-full object-cover transition-opacity duration-700 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
          {/* Skeleton shimmer while loading */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-gradient-to-r from-champagne/20 via-ivory/60 to-champagne/20 animate-pulse flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-gold/40 animate-spin" />
            </div>
          )}
        </>
      ) : (
        /* Luxury Editorial Fallback when image file is missing */
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#FAF5EC] via-[#F3E7D3] to-[#E5D2B3] border border-gold/20 select-none">
          {/* Delicate corner markers */}
          <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-gold/40" />
          <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-gold/40" />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-gold/40" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-gold/40" />
          
          <div className="w-12 h-12 rounded-full bg-ivory/80 border border-gold/30 flex items-center justify-center shadow-sm mb-3">
            <Heart className="w-5 h-5 text-burgundy/70 fill-burgundy/10" />
          </div>
          <span className="font-script text-gold-dark text-xl mb-1">
            {fallbackText}
          </span>
          <p className="font-serif text-[11px] text-luxury-muted uppercase tracking-widest max-w-[180px] leading-relaxed">
            {alt}
          </p>
          <span className="mt-3 text-[9px] font-sans text-gold/60 border border-dashed border-gold/30 px-2 py-0.5 rounded-full">
            Photo placeholder
          </span>
        </div>
      )}
    </div>
  )
}
