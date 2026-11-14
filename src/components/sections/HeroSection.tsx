import React from 'react'
import { birthdayContent } from '../../config/birthdayContent'
import { BirthdayWelcomeOverlay, FloatingPetals } from '../decorations/FloatingPetals'

interface HeroSectionProps {
  onOpenLetter: () => void
}

/**
 * AURORA — Full-Background Portrait Hero
 *
 * ONE continuous visual composition:
 *
 *  ┌────────────────────────────────────┐  ← top of viewport
 *  │  ◉ Aurora          For Kriti      │  ← nav row (z-10, over photo)
 *  │                                    │
 *  │     [ BABY PHOTOGRAPH              │
 *  │       full background, face        │
 *  │       in upper ~55% of frame ]     │
 *  │                                    │
 *  │  ▓▓▓▓ dark gradient scrim ▓▓▓▓▓▓  │  ← starts ~45% from top
 *  │                                    │
 *  │  A LITTLE WORLD CREATED JUST FOR YOU │
 *  │  Happy Birthday,                   │
 *  │  My Beautiful Kriti                │
 *  │  Kriti                             │
 *  │  "Today is not just your birthday…" │
 *  │  [ Open My Heart ↓ ]              │
 *  └────────────────────────────────────┘  ← bottom of hero
 */
export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenLetter }) => {
  const { hero, recipient } = birthdayContent

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden flex flex-col bg-[#22040A]"
      style={{ minHeight: '100svh' }}
      aria-label={`Birthday greeting for ${recipient.name}`}
    >
      {/* ── AUTOMATIC OPENING BIRTHDAY WELCOME OVERLAY ────────── */}
      <BirthdayWelcomeOverlay />

      {/* ── FLOATING HEARTS, PETALS & GOLDEN SPARKLES ─────────── */}
      <FloatingPetals />

      {/* ── FULL-BLEED BACKGROUND PHOTOGRAPH ──────────────────── */}
      {/*
        Ambient blurred backdrop on wide screens prevents harsh cropping
        while keeping the main portrait naturally proportioned and clear.
      */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <img
          src="/images/birthday-childhood.jpg"
          alt=""
          className="hidden md:block absolute inset-0 w-full h-full object-cover scale-105 blur-2xl opacity-55"
          style={{ objectPosition: 'center 25%' }}
          loading="eager"
          decoding="async"
        />

        <div className="relative w-full h-full max-w-4xl mx-auto">
          <img
            src="/images/birthday-childhood.jpg"
            alt={hero.heroPhotoCaption}
            className="w-full h-full object-cover hero-bg-photo"
            loading="eager"
            decoding="async"
          />
          {/* Subtle side feathering on wide desktop viewports */}
          <div
            className="hidden md:block absolute inset-y-0 left-0 w-24 pointer-events-none"
            style={{
              background: 'linear-gradient(to right, rgba(34,4,10,0.45), transparent)',
            }}
          />
          <div
            className="hidden md:block absolute inset-y-0 right-0 w-24 pointer-events-none"
            style={{
              background: 'linear-gradient(to left, rgba(34,4,10,0.45), transparent)',
            }}
          />
        </div>
      </div>

      {/*
        BURGUNDY GRADIENT OVERLAY — bottom portion only.
        Leaves the upper ~46% completely clear so Kriti's face and smile
        remain bright and natural, then transitions into a warm luxury burgundy.
      */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, ' +
            'rgba(34,4,10,0.12) 0%, ' +
            'transparent 14%, ' +
            'transparent 46%, ' +
            'rgba(77,8,21,0.28) 58%, ' +
            'rgba(62,7,18,0.64) 72%, ' +
            'rgba(46,5,13,0.82) 86%, ' +
            'rgba(34,4,10,0.90) 100%)',
        }}
        aria-hidden="true"
      />

      {/* ── NAVIGATION ROW (top, over photo) ──────────────────── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 pt-4 pb-2 flex items-center justify-between">
        {/* Brand mark */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault()
            if (window.location.hash) {
              window.history.replaceState(null, '', window.location.pathname)
            }
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#C6A15B] rounded-sm"
          aria-label="Back to top"
        >
          <div
            className="w-7 h-7 rounded-full bg-[#650B1B]/90 backdrop-blur-sm flex items-center justify-center shrink-0"
            style={{ border: '1px solid rgba(198,161,91,0.55)' }}
          >
            <span className="font-script text-[13px] text-[#EAD196] leading-none select-none">
              {recipient.name.charAt(0)}
            </span>
          </div>
          <span
            className="font-serif italic text-[13px] font-medium tracking-wide"
            style={{ color: 'rgba(255,248,235,0.92)', textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}
          >
            {recipient.name}
          </span>
        </a>

        {/* For Kriti pill */}
        <div
          className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-sans uppercase tracking-[0.2em] font-semibold"
          style={{
            background: 'rgba(46,5,13,0.48)',
            border: '1px solid rgba(198,161,91,0.45)',
            color: 'rgba(234,209,150,0.95)',
            backdropFilter: 'blur(4px)',
          }}
        >
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C6A15B]" aria-hidden="true" />
          For {recipient.name}
        </div>
      </div>

      {/* ── SPACER — keeps Kriti's face clearly visible on all screens ─────── */}
      <div className="flex-1 min-h-[38svh] sm:min-h-[42svh]" />

      {/* ── BIRTHDAY CONTENT (bottom, over warm burgundy scrim) ─────────────── */}
      <div
        className="relative z-10 w-full px-5 sm:px-8 pb-8 sm:pb-12 flex flex-col items-center text-center"
        style={{ animation: 'panelRise 0.9s cubic-bezier(0.22,1,0.36,1) 0.2s both' }}
      >
        {/* Kicker label */}
        <p
          className="font-sans font-semibold uppercase mb-2.5 sm:mb-3 select-none"
          style={{
            fontSize: '9.5px',
            letterSpacing: '0.28em',
            color: 'rgba(234,209,150,0.92)',
            textShadow: '0 1px 4px rgba(0,0,0,0.35)',
          }}
          aria-hidden="true"
        >
          {hero.decorativeLabel}
        </p>

        {/* Main heading */}
        <h1
          className="hero-heading-glow flex flex-col items-center mb-2.5 sm:mb-3"
          style={{ lineHeight: 1.14 }}
        >
          <span
            className="font-script"
            style={{
              fontSize: 'clamp(2.15rem, 8.5vw, 3.25rem)',
              color: '#FFFFFF',
            }}
          >
            Happy Birthday,
          </span>
          <span
            className="font-serif italic font-medium mt-0.5"
            style={{
              fontSize: 'clamp(1.5rem, 5.8vw, 2.35rem)',
              color: '#FFFFFF',
              letterSpacing: '0.01em',
            }}
          >
            My Princess Kriti!
          </span>
        </h1>

        {/* Name in gold */}
        <span
          className="font-serif font-semibold text-gold-foil mb-3 sm:mb-3.5"
          style={{
            fontSize: 'clamp(1.35rem, 5.2vw, 1.8rem)',
            letterSpacing: '0.14em',
            filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.4))',
          }}
        >
          {hero.herName}
        </span>

        {/* Birthday Date Display */}
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full mb-3.5 sm:mb-4 text-[10px] sm:text-[10.5px] font-sans uppercase tracking-[0.22em] text-[#EAD196]"
          style={{
            background: 'rgba(101,11,27,0.58)',
            border: '1px solid rgba(198,161,91,0.45)',
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" aria-hidden="true" />
          <span>{recipient.birthdayDate}</span>
        </div>

        {/* Thin gold rule */}
        <div
          className="w-16 mb-3.5 sm:mb-4"
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(198,161,91,0.85), transparent)',
          }}
          aria-hidden="true"
        />

        {/* Supporting text */}
        <p
          className="font-serif italic mb-2.5 max-w-sm sm:max-w-md px-3 sm:px-4 leading-relaxed"
          style={{
            fontSize: 'clamp(0.86rem, 3.3vw, 1rem)',
            color: 'rgba(255,248,235,0.92)',
            textShadow: '0 1px 6px rgba(0,0,0,0.38)',
          }}
        >
          &ldquo;{hero.introSentence}&rdquo;
        </p>

        {/* Heartfelt blessing message */}
        <p
          className="font-serif italic mb-3 max-w-sm sm:max-w-md px-3 sm:px-4 leading-relaxed"
          style={{
            fontSize: 'clamp(0.86rem, 3.3vw, 1rem)',
            color: 'rgba(255,248,235,0.95)',
            textShadow: '0 1px 6px rgba(0,0,0,0.38)',
          }}
        >
          &ldquo;Your presence is the most beautiful blessing my life has ever received. May your face always shine with a beautiful smile.&rdquo;
        </p>

        {/* Photo Caption */}
        <p
          className="font-serif italic mb-5 sm:mb-6 tracking-wide"
          style={{
            fontSize: 'clamp(0.76rem, 2.8vw, 0.88rem)',
            color: 'rgba(234,209,150,0.92)',
            textShadow: '0 1px 4px rgba(0,0,0,0.4)',
          }}
        >
          {hero.heroPhotoCaption}
        </p>

        {/* Primary CTA */}
        <button
          type="button"
          id="hero-open-letter-btn"
          onClick={onOpenLetter}
          className="hero-cta-btn group inline-flex items-center justify-center gap-2 rounded-full text-[#F8F1E3] transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] active:translate-y-0 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#C6A15B] focus:ring-offset-2 focus:ring-offset-transparent"
          style={{
            background: 'rgba(101,11,27,0.92)',
            border: '1px solid rgba(198,161,91,0.6)',
            padding: '13px 32px',
            fontSize: '11px',
            letterSpacing: '0.18em',
            boxShadow: '0 4px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(234,209,150,0.18)',
            backdropFilter: 'blur(4px)',
          }}
          aria-label={`Open birthday letter for ${recipient.name}`}
        >
          <span className="font-sans font-semibold uppercase">{hero.buttonText}</span>
        </button>

        {/* Bottom text */}
        <p
          className="mt-4 font-sans uppercase select-none"
          style={{
            fontSize: '8.5px',
            letterSpacing: '0.25em',
            color: 'rgba(255,248,235,0.52)',
          }}
        >
          A SPECIAL DAY. A SPECIAL PERSON. ENDLESS MEMORIES.
        </p>
      </div>

      <style>{`
        .hero-bg-photo {
          object-position: center 18%;
        }
        @media (min-width: 640px) {
          .hero-bg-photo {
            object-position: center 22%;
          }
        }
        @media (min-width: 1024px) {
          .hero-bg-photo {
            object-position: center 24%;
          }
        }
        .hero-cta-btn:hover {
          background: rgba(118, 14, 33, 0.96) !important;
          border-color: rgba(234, 209, 150, 0.85) !important;
          box-shadow: 0 8px 28px rgba(0, 0, 0, 0.42), 0 0 18px rgba(198, 161, 91, 0.25), inset 0 1px 0 rgba(234, 209, 150, 0.28) !important;
        }
        @keyframes heroHeadingGlow {
          0%, 100% {
            text-shadow: 0 2px 14px rgba(0, 0, 0, 0.5), 0 0 16px rgba(234, 209, 150, 0.22);
          }
          50% {
            text-shadow: 0 2px 14px rgba(0, 0, 0, 0.5), 0 0 26px rgba(234, 209, 150, 0.48), 0 0 42px rgba(244, 169, 184, 0.22);
          }
        }
        .hero-heading-glow span {
          animation: heroHeadingGlow 3.6s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-heading-glow span {
            animation: none;
            text-shadow: 0 2px 14px rgba(0, 0, 0, 0.5);
          }
        }
      `}</style>
    </section>
  )
}
