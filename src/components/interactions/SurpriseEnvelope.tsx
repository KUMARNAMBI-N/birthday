import React, { useState } from 'react'
import confetti from 'canvas-confetti'
import { Sparkles, Heart, Gift, RotateCcw } from 'lucide-react'
import { WaxSeal, FloralFlourish } from '../decorations/GoldOrnaments'
import { birthdayContent } from '../../config/birthdayContent'

export const SurpriseEnvelope: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpening, setIsOpening] = useState(false)
  const surprise = birthdayContent.surprise

  const triggerReveal = () => {
    if (isOpen || isOpening) return
    setIsOpening(true)

    // Restrained, elegant gold & rose confetti
    setTimeout(() => {
      confetti({
        particleCount: 38,
        spread: 60,
        origin: { y: 0.62 },
        colors: ['#EAD196', '#C6A15B', '#821327', '#FFF2D6'],
        disableForReducedMotion: true,
      })

      setIsOpen(true)
      setIsOpening(false)
    }, 500)
  }

  const handleReset = () => {
    setIsOpen(false)
  }

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {!isOpen ? (
        /* Sealed State: Interactive Card / Envelope */
        <div className="flex flex-col items-center text-center">
          <p className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.25em] text-gold-dark font-medium mb-2.5">
            {surprise.teaserLabel}
          </p>

          <h3 className="font-serif italic text-2xl sm:text-3xl text-ivory mb-6 sm:mb-8 font-normal">
            "{surprise.promptText}"
          </h3>

          {/* Interactive Envelope / Wax Sealed Card */}
          <div
            onClick={triggerReveal}
            className={`group relative w-full max-w-[310px] sm:max-w-xs h-48 bg-gradient-to-b from-[#2E050D] to-[#1C0308] rounded-sm border border-gold/40 shadow-2xl p-5 cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:border-gold flex flex-col items-center justify-center select-none ${
              isOpening ? 'scale-95 opacity-90' : ''
            }`}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                triggerReveal()
              }
            }}
            aria-label="Click to reveal your birthday surprise"
          >
            {/* Top envelope flap simulation */}
            <div 
              className={`absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#3E0712] to-[#25040B] border-b border-gold/30 shadow-md origin-top transition-transform duration-500 ${
                isOpening ? 'transform -rotate-x-90' : ''
              }`}
              style={{
                clipPath: 'polygon(0% 0%, 50% 100%, 100% 0%)',
              }}
            />

            {/* Central Wax Seal */}
            <div className={`relative z-10 transition-transform duration-300 ${isOpening ? 'scale-110' : 'group-hover:scale-105'}`}>
              <WaxSeal size={62} initials={birthdayContent.recipient.name.charAt(0) || "K"} />
            </div>

            <p className="relative z-10 font-script text-gold-light text-lg mt-3 drop-shadow">
              For {birthdayContent.recipient.name}
            </p>

            <span className="absolute bottom-2 font-sans text-[10px] tracking-widest uppercase text-gold/60">
              Tap to Open
            </span>
          </div>

          {/* Prominent Action Button: Reveal Your Surprise */}
          <div className="mt-7">
            <button
              type="button"
              id="reveal-surprise-btn"
              onClick={triggerReveal}
              disabled={isOpening}
              className="group relative inline-flex items-center justify-center gap-2 min-h-[48px] px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-light via-gold to-gold-dark text-burgundy font-serif font-medium text-xs sm:text-sm uppercase tracking-[0.2em] shadow-luxury hover:shadow-gold-glow transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <Gift className="w-4 h-4 text-burgundy shrink-0" />
              <span>{isOpening ? 'Unsealing...' : surprise.buttonText}</span>
            </button>
          </div>
        </div>
      ) : (
        /* Revealed State: Elegantly Unfolded Birthday Letter */
        <div className="relative bg-[#FCFAF5] text-espresso rounded-sm p-6 sm:p-9 shadow-2xl border border-gold/40 animate-unfurl">
          <div className="text-center mb-6">
            <FloralFlourish className="w-32 sm:w-36 h-4 text-gold mx-auto mb-2" />
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-burgundy leading-snug">
              {surprise.revealedHeading}
            </h3>
            <p className="font-serif italic text-sm sm:text-base text-espresso-muted mt-1.5">
              Unakku Eppovume Oru Thunai ❤️
            </p>
            <div className="w-12 h-0.5 bg-gold/40 mx-auto mt-2.5" />
          </div>

          {/* Letter Content - Clear 15-17px Typography, High Readability */}
          <div className="space-y-4 font-serif text-[15px] sm:text-[16px] text-espresso leading-[1.75] text-left">
            {surprise.messageParagraphs.map((paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Love Note */}
          {surprise.loveNote && (
            <div className="my-5 p-3.5 rounded-sm bg-champagne/30 border border-gold/25 text-center">
              <p className="font-serif italic text-burgundy text-sm sm:text-base flex items-center justify-center gap-2">
                <Heart className="w-3.5 h-3.5 text-gold-dark fill-gold-dark shrink-0" />
                <span>"{surprise.loveNote}"</span>
                <Heart className="w-3.5 h-3.5 text-gold-dark fill-gold-dark shrink-0" />
              </p>
            </div>
          )}

          {/* Signature */}
          <div className="mt-6 pt-4 border-t border-gold/25 text-right">
            <p className="font-script text-2xl sm:text-3xl text-gold-dark font-medium">
              {surprise.signature}
            </p>
          </div>

          {/* Reset Action */}
          <div className="mt-5 flex justify-center">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-[11px] font-sans tracking-wider uppercase text-espresso-muted hover:text-burgundy transition-colors py-1 px-3 focus:outline-none"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Fold Letter Again</span>
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes unfurl {
          0% {
            opacity: 0;
            transform: scale(0.96) translateY(12px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-unfurl {
          animation: unfurl 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  )
}
