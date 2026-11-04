import React, { useEffect, useState, useMemo } from 'react'

interface Petal {
  id: number
  left: number
  size: number
  delay: number
  duration: number
  swayDuration: number
  type: 'rose' | 'gold' | 'heart'
  opacity: number
}

/**
 * Romantic ambient floating rose petals and golden particles.
 * Optimized with CSS animations and reduced-motion detection.
 */
export const FloatingPetals: React.FC<{ active?: boolean }> = ({ active = true }) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  // Generate fixed pool of petals — kept small for restraint
  const petals: Petal[] = useMemo(() => {
    return Array.from({ length: 10 }, (_, i) => ({
      id: i,
      left: Math.random() * 94 + 3,
      size: Math.random() * 10 + 9,
      delay: Math.random() * 14,
      duration: Math.random() * 14 + 16,
      swayDuration: Math.random() * 3 + 3.5,
      type: i % 3 === 0 ? 'gold' : i % 3 === 1 ? 'rose' : 'heart',
      opacity: Math.random() * 0.28 + 0.2,
    }))
  }, [])

  if (!active || prefersReducedMotion) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden" aria-hidden="true">
      {petals.map((petal) => {
        return (
          <div
            key={petal.id}
            className="absolute top-[-40px]"
            style={{
              left: `${petal.left}%`,
              animation: `fallDown ${petal.duration}s linear infinite`,
              animationDelay: `${petal.delay}s`,
              opacity: petal.opacity,
            }}
          >
            <div
              style={{
                animation: `swayLeftRight ${petal.swayDuration}s ease-in-out infinite alternate`,
                transformOrigin: 'center',
              }}
            >
              {petal.type === 'rose' && (
                <svg
                  width={petal.size}
                  height={petal.size * 1.2}
                  viewBox="0 0 24 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transform rotate-12 drop-shadow-sm"
                >
                  <path
                    d="M12 2C7 6 4 14 6 20C8 26 16 27 18 22C20 17 19 8 12 2Z"
                    fill="url(#roseGradient)"
                  />
                  <defs>
                    <linearGradient id="roseGradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#C44558" />
                      <stop offset="50%" stopColor="#8A1328" />
                      <stop offset="100%" stopColor="#550714" />
                    </linearGradient>
                  </defs>
                </svg>
              )}

              {petal.type === 'gold' && (
                <svg
                  width={petal.size * 0.7}
                  height={petal.size * 0.7}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="drop-shadow-sm"
                >
                  <circle cx="8" cy="8" r="4" fill="url(#goldDustGradient)" />
                  <path
                    d="M8 1V15M1 8H15"
                    stroke="#ECC97D"
                    strokeWidth="0.75"
                    strokeLinecap="round"
                  />
                  <defs>
                    <radialGradient id="goldDustGradient">
                      <stop offset="0%" stopColor="#FFF2D6" />
                      <stop offset="60%" stopColor="#C6A15B" />
                      <stop offset="100%" stopColor="#9A7432" stopOpacity="0.4" />
                    </radialGradient>
                  </defs>
                </svg>
              )}

              {petal.type === 'heart' && (
                <svg
                  width={petal.size * 0.8}
                  height={petal.size * 0.8}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    fill="#A8283E"
                    opacity="0.75"
                  />
                </svg>
              )}
            </div>
          </div>
        )
      })}

      <style>{`
        @keyframes fallDown {
          0% {
            transform: translateY(-50px) rotate(0deg);
          }
          100% {
            transform: translateY(105vh) rotate(360deg);
          }
        }
        @keyframes swayLeftRight {
          0% {
            transform: translateX(-24px) rotate(-15deg);
          }
          100% {
            transform: translateX(24px) rotate(15deg);
          }
        }
      `}</style>
    </div>
  )
}
