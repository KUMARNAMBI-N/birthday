import React from 'react'
import { birthdayContent } from '../../config/birthdayContent'

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
      className="relative w-full overflow-hidden flex flex-col"
      style={{ minHeight: '100svh' }}
      aria-label={`Birthday greeting for ${recipient.name}`}
    >
      {/* ── FULL-BLEED BACKGROUND PHOTOGRAPH ──────────────────── */}
      {/*
        objectPosition: 'center 8%' ensures the baby's face stays
        in the upper portion of the frame on portrait mobile viewports.
        No overlay touches the face area.
      */}
      <img
        src="/images/birthday-childhood.jpg"
        alt={hero.heroPhotoCaption}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: 'center 8%' }}
        loading="eager"
        decoding="async"
      />

      {/*
        GRADIENT SCRIM — bottom half only.
        Starts transparent at ~40% from top (well below the face),
        deepens to a warm dark wine at the very bottom.
        This makes white text legible without touching the face.
      */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, ' +
            'transparent 0%, ' +
            'transparent 35%, ' +
            'rgba(30,4,10,0.25) 50%, ' +
            'rgba(30,4,10,0.65) 68%, ' +
            'rgba(20,3,8,0.88) 85%, ' +
            'rgba(20,3,8,0.94) 100%)',
        }}
        aria-hidden="true"
      />

      {/* ── NAVIGATION ROW (top, over photo) ──────────────────── */}
      <div className="relative z-10 w-full px-5 pt-4 pb-2 flex items-center justify-between">
        {/* Brand mark */}
        <a
          href="#hero"
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
            background: 'rgba(30,4,10,0.45)',
            border: '1px solid rgba(198,161,91,0.45)',
            color: 'rgba(234,209,150,0.95)',
            backdropFilter: 'blur(4px)',
          }}
        >
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C6A15B]" aria-hidden="true" />
          For {recipient.name}
        </div>
      </div>

      {/* ── SPACER — pushes content down, face stays clear ─────── */}
      <div className="flex-1" />

      {/* ── BIRTHDAY CONTENT (bottom, over scrim) ─────────────── */}
      <div
        className="relative z-10 w-full px-6 sm:px-8 pb-10 sm:pb-14 flex flex-col items-center text-center"
        style={{ animation: 'panelRise 0.9s cubic-bezier(0.22,1,0.36,1) 0.2s both' }}
      >
        {/* Kicker label */}
        <p
          className="font-sans font-semibold uppercase mb-3 select-none"
          style={{
            fontSize: '9.5px',
            letterSpacing: '0.28em',
            color: 'rgba(198,161,91,0.9)',
          }}
          aria-hidden="true"
        >
          {hero.decorativeLabel}
        </p>

        {/* Main heading */}
        <h1
          className="flex flex-col items-center mb-2"
          style={{ lineHeight: 1.1 }}
        >
          <span
            className="font-script"
            style={{
              fontSize: 'clamp(2rem, 9vw, 3rem)',
              color: '#FFFFFF',
              textShadow: '0 2px 12px rgba(0,0,0,0.5)',
            }}
          >
            Happy Birthday,
          </span>
          <span
            className="font-serif italic font-medium"
            style={{
              fontSize: 'clamp(1.45rem, 6vw, 2.25rem)',
              color: '#FFFFFF',
              textShadow: '0 2px 12px rgba(0,0,0,0.5)',
              letterSpacing: '-0.01em',
            }}
          >
            My Beautiful Kriti ❤️
          </span>
        </h1>

        {/* Name in gold */}
        <span
          className="font-serif font-semibold text-gold-foil mb-2"
          style={{
            fontSize: 'clamp(1.3rem, 5.5vw, 1.75rem)',
            letterSpacing: '0.12em',
            filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.4))',
          }}
        >
          {hero.herName}
        </span>

        {/* Birthday Date Display */}
        <div
          className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full mb-3 text-[10px] font-sans uppercase tracking-[0.22em] text-[#EAD196]"
          style={{
            background: 'rgba(101,11,27,0.5)',
            border: '1px solid rgba(198,161,91,0.4)',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" aria-hidden="true" />
          <span>{recipient.birthdayDate}</span>
        </div>

        {/* Thin gold rule */}
        <div
          className="w-16 mb-4"
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(198,161,91,0.8), transparent)',
          }}
          aria-hidden="true"
        />

        {/* Supporting text */}
        <p
          className="font-serif italic mb-3 max-w-sm sm:max-w-md px-4 leading-relaxed"
          style={{
            fontSize: 'clamp(0.85rem, 3.4vw, 0.98rem)',
            color: 'rgba(255,248,235,0.88)',
            textShadow: '0 1px 6px rgba(0,0,0,0.35)',
          }}
        >
          &ldquo;{hero.introSentence}&rdquo;
        </p>

        {/* Photo Caption */}
        <p
          className="font-serif italic mb-6 tracking-wide"
          style={{
            fontSize: 'clamp(0.75rem, 2.8vw, 0.85rem)',
            color: 'rgba(234,209,150,0.9)',
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
          className="group inline-flex items-center justify-center gap-2 rounded-full text-[#F8F1E3] transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-[#C6A15B] focus:ring-offset-2 focus:ring-offset-transparent"
          style={{
            background: 'rgba(101,11,27,0.9)',
            border: '1px solid rgba(198,161,91,0.55)',
            padding: '13px 32px',
            fontSize: '11px',
            letterSpacing: '0.18em',
            boxShadow: '0 4px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(234,209,150,0.15)',
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
            color: 'rgba(255,248,235,0.48)',
          }}
        >
          A SPECIAL DAY. A SPECIAL PERSON. ENDLESS MEMORIES.
        </p>
      </div>
    </section>
  )
}
