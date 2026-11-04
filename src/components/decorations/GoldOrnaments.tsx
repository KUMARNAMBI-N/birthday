import React from 'react'

interface FlourishProps {
  className?: string
  color?: string
}

/**
 * Delicate horizontal gold floral divider with central rosette & curling vines
 */
export const FloralFlourish: React.FC<FlourishProps> = ({ 
  className = "w-48 h-6 text-gold", 
  color = "currentColor" 
}) => (
  <svg 
    viewBox="0 0 300 36" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    aria-hidden="true"
  >
    <path 
      d="M10 18H115C125 18 132 12 135 7C137 3 140 3 142 6C145 10 148 18 150 18C152 18 155 10 158 6C160 3 163 3 165 7C168 12 175 18 185 18H290" 
      stroke={color} 
      strokeWidth="1.2" 
      strokeLinecap="round"
    />
    <circle cx="150" cy="18" r="3.5" fill={color} />
    <circle cx="130" cy="18" r="2" fill={color} />
    <circle cx="170" cy="18" r="2" fill={color} />
    <path 
      d="M140 18C136 24 130 27 122 26C116 25 114 20 120 16" 
      stroke={color} 
      strokeWidth="1" 
      strokeLinecap="round"
    />
    <path 
      d="M160 18C164 24 170 27 178 26C184 25 186 20 180 16" 
      stroke={color} 
      strokeWidth="1" 
      strokeLinecap="round"
    />
    <circle cx="150" cy="9" r="1.5" fill={color} />
    <circle cx="150" cy="27" r="1.5" fill={color} />
  </svg>
)

/**
 * Ornate Victorian/Editorial corner ornament for cards and letterheads
 */
export const CornerOrnament: React.FC<{ 
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  className?: string
  size?: number
}> = ({ position, className = "text-gold/60", size = 48 }) => {
  const rotation = {
    'top-left': 'rotate-0',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': '-rotate-90',
  }[position]

  return (
    <div className={`pointer-events-none select-none ${rotation} ${className}`} aria-hidden="true">
      <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 56V16C4 9.37 9.37 4 16 4H56" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M8 56V20C8 13.37 13.37 8 20 8H56" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 2" />
        <path d="M12 28C12 19.16 19.16 12 28 12" stroke="currentColor" strokeWidth="1" />
        <circle cx="16" cy="16" r="3" fill="currentColor" />
        <circle cx="4" cy="4" r="1.5" fill="currentColor" />
        <path d="M18 24C16 28 12 32 6 34" stroke="currentColor" strokeWidth="0.8" />
        <path d="M24 18C28 16 32 12 34 6" stroke="currentColor" strokeWidth="0.8" />
      </svg>
    </div>
  )
}

/**
 * Botanical laurel wreath crest with center heart / monogram
 */
export const BotanicalCrest: React.FC<{ className?: string; label?: string }> = ({ 
  className = "w-28 h-28 text-gold", 
  label = "Forever" 
}) => (
  <div className={`relative flex items-center justify-center ${className}`} aria-hidden="true">
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Laurel branches */}
      <path 
        d="M32 92C24 76 25 45 42 28C45 25 50 20 54 18" 
        stroke="currentColor" 
        strokeWidth="1.2" 
        strokeLinecap="round" 
      />
      <path 
        d="M88 92C96 76 95 45 78 28C75 25 70 20 66 18" 
        stroke="currentColor" 
        strokeWidth="1.2" 
        strokeLinecap="round" 
      />
      
      {/* Laurel Leaves left */}
      <path d="M30 80C24 78 20 72 23 66C26 68 31 73 30 80Z" fill="currentColor" opacity="0.8" />
      <path d="M28 62C22 59 19 52 23 47C26 50 30 55 28 62Z" fill="currentColor" opacity="0.8" />
      <path d="M33 45C28 41 27 34 32 30C35 34 37 39 33 45Z" fill="currentColor" opacity="0.8" />
      <path d="M43 32C39 27 40 20 46 18C48 22 48 28 43 32Z" fill="currentColor" opacity="0.8" />
      
      {/* Laurel Leaves right */}
      <path d="M90 80C96 78 100 72 97 66C94 68 89 73 90 80Z" fill="currentColor" opacity="0.8" />
      <path d="M92 62C98 59 101 52 97 47C94 50 90 55 92 62Z" fill="currentColor" opacity="0.8" />
      <path d="M87 45C92 41 93 34 88 30C85 34 83 39 87 45Z" fill="currentColor" opacity="0.8" />
      <path d="M77 32C81 27 80 20 74 18C72 22 72 28 77 32Z" fill="currentColor" opacity="0.8" />

      {/* Base Ribbon */}
      <path d="M50 96C55 93 65 93 70 96L68 104L60 100L52 104L50 96Z" fill="currentColor" opacity="0.9" />
      
      {/* Central Ring */}
      <circle cx="60" cy="58" r="24" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" />
      <circle cx="60" cy="58" r="20" stroke="currentColor" strokeWidth="1" />
      
      {/* Central Heart */}
      <path 
        d="M60 48C56 42 48 44 49 53C50 61 60 67 60 67C60 67 70 61 71 53C72 44 64 42 60 48Z" 
        fill="currentColor" 
      />
    </svg>
    {label && (
      <span className="absolute bottom-1 font-script text-xs tracking-wider text-gold-dark font-medium">
        {label}
      </span>
    )}
  </div>
)

/**
 * Realistic embossed burgundy & gold wax seal
 */
export const WaxSeal: React.FC<{ 
  size?: number
  className?: string
  initials?: string 
}> = ({ size = 64, className = "", initials = "K" }) => (
  <div 
    className={`relative inline-flex items-center justify-center rounded-full shadow-lg transition-transform duration-300 hover:scale-105 ${className}`}
    style={{ width: size, height: size }}
    aria-hidden="true"
  >
    {/* Wax body with irregular natural drips */}
    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#800f24] via-[#650B1B] to-[#390812] shadow-inner border border-[#961c33]/40" />
    
    {/* Inner debossed ring */}
    <div className="absolute inset-2 rounded-full border border-gold/40 flex items-center justify-center">
      <div className="w-full h-full rounded-full border border-dashed border-gold/30 flex items-center justify-center">
        <span className="font-script text-gold-light text-2xl font-bold tracking-widest drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
          {initials}
        </span>
      </div>
    </div>
    
    {/* Wax highlight shine */}
    <div className="absolute top-1 left-2 w-1/3 h-1/4 rounded-full bg-white/15 blur-[1px] transform -rotate-45 pointer-events-none" />
  </div>
)
