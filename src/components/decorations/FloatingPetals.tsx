import React, { useEffect, useState } from 'react'
import confetti from 'canvas-confetti'

interface FallingPetal {
  id: number
  left: number
  size: number
  delay: number
  duration: number
  swayDuration: number
  variant: 'rose' | 'blossom'
  opacity: number
}

interface FloatingHeart {
  id: number
  left: number
  size: number
  delay: number
  duration: number
  color: string
  opacity: number
}

interface GoldenSparkle {
  id: number
  left: number
  top: number
  size: number
  delay: number
  duration: number
}

const FALLING_PETALS: FallingPetal[] = [
  { id: 1, left: 8, size: 13, delay: 0, duration: 15, swayDuration: 3.8, variant: 'rose', opacity: 0.48 },
  { id: 2, left: 22, size: 11, delay: 3.5, duration: 17, swayDuration: 4.2, variant: 'blossom', opacity: 0.45 },
  { id: 3, left: 38, size: 14, delay: 1.8, duration: 16, swayDuration: 3.6, variant: 'rose', opacity: 0.42 },
  { id: 4, left: 56, size: 12, delay: 5.2, duration: 18, swayDuration: 4.5, variant: 'blossom', opacity: 0.46 },
  { id: 5, left: 72, size: 13, delay: 2.4, duration: 15.5, swayDuration: 3.9, variant: 'rose', opacity: 0.44 },
  { id: 6, left: 86, size: 11, delay: 6.8, duration: 16.5, swayDuration: 4.1, variant: 'blossom', opacity: 0.45 },
  { id: 7, left: 93, size: 12, delay: 4.1, duration: 17.5, swayDuration: 3.7, variant: 'rose', opacity: 0.4 },
]

const FLOATING_HEARTS: FloatingHeart[] = [
  { id: 1, left: 12, size: 12, delay: 0.5, duration: 11, color: '#F4A9B8', opacity: 0.55 },
  { id: 2, left: 28, size: 10, delay: 4.2, duration: 13, color: '#EAD196', opacity: 0.5 },
  { id: 3, left: 46, size: 13, delay: 2.1, duration: 12, color: '#E8839B', opacity: 0.5 },
  { id: 4, left: 66, size: 11, delay: 6.0, duration: 12.5, color: '#FFF2D6', opacity: 0.48 },
  { id: 5, left: 81, size: 12, delay: 1.4, duration: 11.5, color: '#F4A9B8', opacity: 0.52 },
  { id: 6, left: 91, size: 10, delay: 5.0, duration: 13.5, color: '#C6A15B', opacity: 0.48 },
]

const GOLDEN_SPARKLES: GoldenSparkle[] = [
  { id: 1, left: 14, top: 18, size: 10, delay: 0.2, duration: 3.4 },
  { id: 2, left: 84, top: 16, size: 11, delay: 1.1, duration: 3.8 },
  { id: 3, left: 24, top: 44, size: 9, delay: 2.0, duration: 3.2 },
  { id: 4, left: 76, top: 42, size: 10, delay: 0.7, duration: 3.6 },
  { id: 5, left: 10, top: 68, size: 9, delay: 1.5, duration: 3.5 },
  { id: 6, left: 89, top: 64, size: 11, delay: 2.4, duration: 3.9 },
  { id: 7, left: 34, top: 76, size: 8, delay: 0.9, duration: 3.3 },
  { id: 8, left: 67, top: 74, size: 9, delay: 1.8, duration: 3.7 },
]

const WELCOME_GLITTER: GoldenSparkle[] = [
  { id: 1, left: 18, top: 24, size: 14, delay: 0.1, duration: 2.0 },
  { id: 2, left: 80, top: 22, size: 12, delay: 0.35, duration: 2.2 },
  { id: 3, left: 26, top: 36, size: 10, delay: 0.6, duration: 1.9 },
  { id: 4, left: 73, top: 35, size: 13, delay: 0.2, duration: 2.1 },
  { id: 5, left: 15, top: 62, size: 11, delay: 0.45, duration: 2.0 },
  { id: 6, left: 83, top: 64, size: 14, delay: 0.15, duration: 2.3 },
  { id: 7, left: 32, top: 70, size: 10, delay: 0.5, duration: 1.8 },
  { id: 8, left: 68, top: 69, size: 12, delay: 0.3, duration: 2.1 },
  { id: 9, left: 50, top: 20, size: 13, delay: 0.25, duration: 2.0 },
  { id: 10, left: 50, top: 76, size: 12, delay: 0.4, duration: 2.2 },
]

/**
 * Full-screen Opening Birthday Welcome Overlay.
 * Displays ONLY:
 *   HAPPY BIRTHDAY
 *   MY PRINCESS KRITI ❤️👑
 * with golden/white glowing typography, sparkles, and a gentle celebration burst,
 * then smoothly reveals the Hero Section.
 */
export const BirthdayWelcomeOverlay: React.FC = () => {
  const [phase, setPhase] = useState<'visible' | 'fading' | 'hidden'>('visible')

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches) {
      const quickFade = setTimeout(() => setPhase('fading'), 900)
      const quickHide = setTimeout(() => setPhase('hidden'), 1300)
      return () => {
        clearTimeout(quickFade)
        clearTimeout(quickHide)
      }
    }

    // Short, elegant celebration shimmer burst
    const confettiTimer = setTimeout(() => {
      try {
        confetti({
          particleCount: 36,
          spread: 72,
          origin: { y: 0.55 },
          colors: ['#FFF2D6', '#EAD196', '#C6A15B', '#F4A9B8', '#8A1328'],
          disableForReducedMotion: true,
        })
      } catch {
        // Ignore if canvas-confetti fails in non-browser environment
      }
    }, 320)

    const fadeTimer = setTimeout(() => setPhase('fading'), 2500)
    const hideTimer = setTimeout(() => setPhase('hidden'), 3350)

    return () => {
      clearTimeout(confettiTimer)
      clearTimeout(fadeTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  if (phase === 'hidden') return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center px-6 overflow-hidden select-none transition-opacity duration-800 ${
        phase === 'fading' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        background:
          'radial-gradient(circle at center, #580A19 0%, #34050E 52%, #1A0207 100%)',
        transitionDuration: '850ms',
      }}
      aria-live="polite"
    >
      {/* Ambient radial golden glow */}
      <div
        className="absolute w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(234,209,150,0.22) 0%, rgba(198,161,91,0.08) 45%, transparent 72%)',
          animation: 'welcomeHaloPulse 2.6s ease-in-out infinite',
        }}
        aria-hidden="true"
      />

      {/* Sparkle & glitter particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {WELCOME_GLITTER.map((sp) => (
          <div
            key={sp.id}
            className="absolute"
            style={{
              left: `${sp.left}%`,
              top: `${sp.top}%`,
              animation: `welcomeSparkle ${sp.duration}s ease-in-out infinite`,
              animationDelay: `${sp.delay}s`,
            }}
          >
            <svg
              width={sp.size}
              height={sp.size}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 1L14.2 9.8L23 12L14.2 14.2L12 23L9.8 14.2L1 12L9.8 9.8L12 1Z"
                fill="url(#welcomeSparkleGrad)"
              />
              <defs>
                <radialGradient id="welcomeSparkleGrad">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="55%" stopColor="#EAD196" />
                  <stop offset="100%" stopColor="#C6A15B" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        ))}
      </div>

      {/* Strictly ONLY the requested birthday welcome text */}
      <div
        className="relative z-10 flex flex-col items-center text-center"
        style={{
          animation: 'welcomeTextReveal 2.2s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        }}
      >
        <span
          className="font-serif font-semibold uppercase tracking-[0.26em] sm:tracking-[0.32em] mb-3 sm:mb-4"
          style={{
            fontSize: 'clamp(1.35rem, 5.2vw, 2.5rem)',
            color: '#FFFFFF',
            textShadow:
              '0 0 18px rgba(234,209,150,0.65), 0 0 36px rgba(198,161,91,0.35), 0 2px 10px rgba(0,0,0,0.5)',
          }}
        >
          HAPPY BIRTHDAY
        </span>

        <span
          className="font-serif font-bold uppercase tracking-[0.14em] sm:tracking-[0.2em]"
          style={{
            fontSize: 'clamp(1.5rem, 6.2vw, 3.1rem)',
            background: 'linear-gradient(135deg, #FFF6DF 0%, #EAD196 45%, #C6A15B 80%, #FFF2D6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 0 20px rgba(234,209,150,0.5)) drop-shadow(0 3px 10px rgba(0,0,0,0.55))',
          }}
        >
          MY PRINCESS KRITI ❤️👑
        </span>
      </div>

      <style>{`
        @keyframes welcomeTextReveal {
          0% {
            opacity: 0;
            transform: scale(0.88) translateY(10px);
            filter: blur(4px);
          }
          35% {
            opacity: 1;
            transform: scale(1) translateY(0px);
            filter: blur(0px);
          }
          100% {
            opacity: 1;
            transform: scale(1.04) translateY(0px);
            filter: blur(0px);
          }
        }
        @keyframes welcomeSparkle {
          0%, 100% {
            opacity: 0.2;
            transform: scale(0.6) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.2) rotate(45deg);
          }
        }
        @keyframes welcomeHaloPulse {
          0%, 100% {
            transform: scale(0.95);
            opacity: 0.75;
          }
          50% {
            transform: scale(1.08);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}

/**
 * Romantic ambient floating decorations for the Hero Section:
 * - Small animated hearts floating upwards
 * - Flower petals & occasional rose petals gently falling from the top
 * - Tiny golden sparkles twinkling and floating around
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

  if (!active || prefersReducedMotion) return null

  return (
    <div className="absolute inset-0 pointer-events-none z-[5] overflow-hidden" aria-hidden="true">
      {/* 1. Flower & Rose Petals Gently Falling From the Top */}
      {FALLING_PETALS.map((petal) => (
        <div
          key={`petal-${petal.id}`}
          className="absolute top-[-36px]"
          style={{
            left: `${petal.left}%`,
            animation: `heroFallDown ${petal.duration}s linear infinite`,
            animationDelay: `${petal.delay}s`,
            opacity: petal.opacity,
          }}
        >
          <div
            style={{
              animation: `heroSway ${petal.swayDuration}s ease-in-out infinite alternate`,
              transformOrigin: 'center',
            }}
          >
            {petal.variant === 'rose' ? (
              <svg
                width={petal.size}
                height={petal.size * 1.2}
                viewBox="0 0 24 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transform rotate-12"
              >
                <path
                  d="M12 2C7 6 4 14 6 20C8 26 16 27 18 22C20 17 19 8 12 2Z"
                  fill="url(#heroRosePetalGrad)"
                />
                <defs>
                  <linearGradient id="heroRosePetalGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#E8839B" />
                    <stop offset="55%" stopColor="#B82943" />
                    <stop offset="100%" stopColor="#650B1B" />
                  </linearGradient>
                </defs>
              </svg>
            ) : (
              <svg
                width={petal.size}
                height={petal.size}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 3C9 6 7 10 8 15C9 19 15 19 16 15C17 10 15 6 12 3Z"
                  fill="url(#heroBlossomGrad)"
                />
                <defs>
                  <linearGradient id="heroBlossomGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#FFF2F5" />
                    <stop offset="65%" stopColor="#F4A9B8" />
                    <stop offset="100%" stopColor="#D46A84" />
                  </linearGradient>
                </defs>
              </svg>
            )}
          </div>
        </div>
      ))}

      {/* 2. Small Animated Hearts Floating Upwards */}
      {FLOATING_HEARTS.map((heart) => (
        <div
          key={`heart-${heart.id}`}
          className="absolute bottom-[-28px]"
          style={{
            left: `${heart.left}%`,
            animation: `heroFloatUp ${heart.duration}s ease-in-out infinite`,
            animationDelay: `${heart.delay}s`,
            opacity: heart.opacity,
          }}
        >
          <svg
            width={heart.size}
            height={heart.size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill={heart.color}
            />
          </svg>
        </div>
      ))}

      {/* 3. Tiny Golden Sparkles Floating & Twinkling Around */}
      {GOLDEN_SPARKLES.map((sparkle) => (
        <div
          key={`sparkle-${sparkle.id}`}
          className="absolute"
          style={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            animation: `heroTwinkle ${sparkle.duration}s ease-in-out infinite`,
            animationDelay: `${sparkle.delay}s`,
          }}
        >
          <svg
            width={sparkle.size}
            height={sparkle.size}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 1L11.8 8.2L19 10L11.8 11.8L10 19L8.2 11.8L1 10L8.2 8.2L10 1Z"
              fill="#EAD196"
            />
            <circle cx="10" cy="10" r="2" fill="#FFFFFF" />
          </svg>
        </div>
      ))}

      <style>{`
        @keyframes heroFallDown {
          0% {
            transform: translateY(-40px) rotate(0deg);
          }
          100% {
            transform: translateY(105svh) rotate(320deg);
          }
        }
        @keyframes heroSway {
          0% {
            transform: translateX(-18px) rotate(-12deg);
          }
          100% {
            transform: translateX(18px) rotate(12deg);
          }
        }
        @keyframes heroFloatUp {
          0% {
            transform: translateY(0) translateX(0) scale(0.85);
            opacity: 0;
          }
          20% {
            opacity: 0.55;
          }
          80% {
            opacity: 0.45;
          }
          100% {
            transform: translateY(-88svh) translateX(-14px) scale(1.08);
            opacity: 0;
          }
        }
        @keyframes heroTwinkle {
          0%, 100% {
            opacity: 0.18;
            transform: translateY(0px) scale(0.75);
          }
          50% {
            opacity: 0.85;
            transform: translateY(-6px) scale(1.15);
          }
        }
      `}</style>
    </div>
  )
}
