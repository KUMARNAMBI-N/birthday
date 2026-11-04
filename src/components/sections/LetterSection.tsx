import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { FloralFlourish, WaxSeal } from '../decorations/GoldOrnaments'
import { birthdayContent } from '../../config/birthdayContent'

export const LetterSection: React.FC = () => {
  const { letter, openingWish, recipient } = birthdayContent
  const [isLetterExpanded, setIsLetterExpanded] = useState(false)
  const [isWishExpanded, setIsWishExpanded] = useState(false)

  // Personal letter paragraphs
  const letterInitial = letter.paragraphs.slice(0, 3)
  const letterRemaining = letter.paragraphs.slice(3)

  // Opening wish paragraphs
  const wishParagraphs = openingWish?.paragraphs || []
  const wishInitial = wishParagraphs.slice(0, 3)
  const wishRemaining = wishParagraphs.slice(3)

  return (
    <section 
      id="letter-section" 
      className="relative py-16 sm:py-24 px-5 sm:px-8 bg-ivory scroll-mt-6"
    >
      <div className="w-full max-w-xl mx-auto space-y-12 sm:space-y-16">

        {/* ── PART 1: BIRTHDAY WISH – MAIN OPENING MESSAGE ──────── */}
        {openingWish && (
          <div>
            {/* Opening Wish Header */}
            <div className="text-center mb-7 sm:mb-10">
              <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.25em] text-gold-dark font-medium">
                11 November 2003
              </span>
              <h2 className="font-serif italic text-2xl sm:text-3xl text-burgundy mt-1.5 font-normal tracking-tight px-2">
                &ldquo;{openingWish.dateHeading}&rdquo;
              </h2>
              <div className="flex justify-center mt-2.5">
                <FloralFlourish className="w-32 sm:w-40 h-4 text-gold/60" />
              </div>
            </div>

            {/* Opening Wish Stationery Card */}
            <div className="relative bg-[#FCFBF7] rounded-sm p-6 sm:p-10 shadow-luxury border border-gold/30 paper-texture">
              {/* Salutation */}
              <div className="mb-5 sm:mb-6">
                <p className="font-script text-3xl sm:text-4xl text-burgundy">
                  {openingWish.salutation}
                </p>
              </div>

              {/* Wish Body */}
              <div className="space-y-4 sm:space-y-5 font-serif text-[15px] sm:text-[17px] text-espresso leading-[1.75] tracking-wide">
                {wishInitial.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}

                {isWishExpanded && (
                  <div className="space-y-4 sm:space-y-5 pt-1 animate-fadeIn">
                    {wishRemaining.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile toggle for opening wish */}
              {wishRemaining.length > 0 && (
                <div className="mt-5 text-center sm:hidden">
                  <button
                    type="button"
                    onClick={() => setIsWishExpanded(!isWishExpanded)}
                    className="inline-flex items-center gap-1.5 text-xs font-serif uppercase tracking-widest text-burgundy hover:text-burgundy-light font-medium py-2 px-3 rounded-full bg-champagne/40 border border-gold/30 transition-colors"
                    aria-expanded={isWishExpanded}
                  >
                    <span>{isWishExpanded ? 'Show Less' : 'Read Full Message'}</span>
                    {isWishExpanded ? (
                      <ChevronUp className="w-3.5 h-3.5 text-gold-dark" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5 text-gold-dark" />
                    )}
                  </button>
                </div>
              )}

              {/* Desktop always shows full text */}
              <div className="hidden sm:block space-y-4 sm:space-y-5 mt-4 sm:mt-5 font-serif text-[17px] text-espresso leading-[1.75]">
                {!isWishExpanded && wishRemaining.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Signoff */}
              <div className="mt-8 pt-6 border-t border-gold/25 flex items-center justify-between gap-4">
                <div>
                  <p className="font-sans text-[11px] uppercase tracking-wider text-espresso-muted">
                    {openingWish.signoff}
                  </p>
                  <p className="font-script text-2xl sm:text-3xl text-gold-dark mt-1 font-semibold">
                    {openingWish.signature}
                  </p>
                </div>
                <div className="shrink-0">
                  <WaxSeal size={50} initials={recipient.name.charAt(0) || "K"} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Delicate Golden Divider */}
        <div className="flex items-center justify-center gap-3">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/40" />
          <FloralFlourish className="w-28 sm:w-36 h-4 text-gold/60" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/40" />
        </div>

        {/* ── PART 2: PERSONAL LETTER SECTION ───────────────────── */}
        <div>
          {/* Section Heading */}
          <div className="text-center mb-7 sm:mb-10">
            <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.25em] text-gold-dark font-medium">
              {letter.subheading}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-burgundy mt-1.5 font-normal tracking-tight">
              {letter.heading}
            </h2>
            <div className="flex justify-center mt-2.5">
              <FloralFlourish className="w-32 sm:w-40 h-4 text-gold/60" />
            </div>
          </div>

          {/* The Clean Editorial Letter Surface */}
          <div className="relative bg-[#FCFBF7] rounded-sm p-6 sm:p-10 shadow-luxury border border-gold/30 paper-texture">
            {/* Salutation */}
            <div className="mb-5 sm:mb-6">
              <p className="font-script text-3xl sm:text-4xl text-burgundy">
                My Dearest {recipient.name},
              </p>
            </div>

            {/* Letter Body */}
            <div className="space-y-4 sm:space-y-5 font-serif text-[15px] sm:text-[17px] text-espresso leading-[1.75] tracking-wide">
              {letterInitial.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}

              {isLetterExpanded && (
                <div className="space-y-4 sm:space-y-5 pt-1 animate-fadeIn">
                  {letterRemaining.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile toggle for letter */}
            {letterRemaining.length > 0 && (
              <div className="mt-5 text-center sm:hidden">
                <button
                  type="button"
                  onClick={() => setIsLetterExpanded(!isLetterExpanded)}
                  className="inline-flex items-center gap-1.5 text-xs font-serif uppercase tracking-widest text-burgundy hover:text-burgundy-light font-medium py-2 px-3 rounded-full bg-champagne/40 border border-gold/30 transition-colors"
                  aria-expanded={isLetterExpanded}
                >
                  <span>{isLetterExpanded ? 'Show Less' : 'Read Full Letter'}</span>
                  {isLetterExpanded ? (
                    <ChevronUp className="w-3.5 h-3.5 text-gold-dark" />
                  ) : (
                    <ChevronDown className="w-3.5 h-3.5 text-gold-dark" />
                  )}
                </button>
              </div>
            )}

            {/* Desktop always shows full letter */}
            <div className="hidden sm:block space-y-4 sm:space-y-5 mt-4 sm:mt-5 font-serif text-[17px] text-espresso leading-[1.75]">
              {!isLetterExpanded && letterRemaining.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Signoff and Wax Seal */}
            <div className="mt-8 pt-6 border-t border-gold/25 flex items-center justify-between gap-4">
              <div>
                <p className="font-sans text-[11px] uppercase tracking-wider text-espresso-muted">
                  {letter.signoff}
                </p>
                <p className="font-script text-2xl sm:text-3xl text-gold-dark mt-1 font-semibold">
                  {letter.signature}
                </p>
              </div>

              {/* Embossed Wax Seal */}
              <div className="shrink-0">
                <WaxSeal size={52} initials={recipient.name.charAt(0) || "K"} />
              </div>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
