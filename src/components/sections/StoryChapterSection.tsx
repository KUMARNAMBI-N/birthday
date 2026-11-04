import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { FloralFlourish, WaxSeal } from '../decorations/GoldOrnaments'
import { StoryChapter } from '../../types/birthday'
import { birthdayContent } from '../../config/birthdayContent'

interface StoryChapterProps {
  chapter: StoryChapter
  showWaxSeal?: boolean
}

export const StoryChapterSection: React.FC<StoryChapterProps> = ({ 
  chapter,
  showWaxSeal = true 
}) => {
  const [isExpanded, setIsExpanded] = useState(false)

  // Mobile split: show first 4 paragraphs by default, expand on click
  const initialParagraphs = chapter.paragraphs.slice(0, 4)
  const remainingParagraphs = chapter.paragraphs.slice(4)

  return (
    <section 
      id={chapter.id} 
      className="relative py-16 sm:py-24 px-5 sm:px-8 bg-ivory scroll-mt-6"
    >
      <div className="w-full max-w-2xl mx-auto">
        {/* Chapter Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block px-3.5 py-1 rounded-full bg-champagne/60 border border-gold/30 font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-burgundy font-semibold mb-3">
            {chapter.chapterLabel}
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl text-burgundy font-normal tracking-tight mt-1">
            {chapter.heading}
          </h2>

          <div className="flex justify-center mt-2.5">
            <FloralFlourish className="w-32 sm:w-40 h-4 text-gold/60" />
          </div>

          <p className="font-serif italic text-sm sm:text-base text-espresso-muted max-w-md mx-auto mt-2.5 leading-relaxed">
            {chapter.subheading}
          </p>

          {chapter.date && (
            <div className="mt-4">
              <span className="inline-block font-sans text-[11px] sm:text-xs uppercase tracking-[0.2em] text-gold-dark font-medium border-b border-gold/40 pb-0.5">
                {chapter.date}
              </span>
            </div>
          )}
        </div>

        {/* Vintage Fine-Art Stationery Sheet */}
        <div className="relative bg-[#FCFBF7] rounded-sm p-6 sm:p-11 shadow-luxury border border-gold/30 paper-texture">
          {/* Salutation */}
          {chapter.salutation && (
            <div className="mb-6">
              <p className="font-script text-3xl sm:text-4xl text-burgundy">
                {chapter.salutation}
              </p>
            </div>
          )}

          {/* Body Content */}
          <div className="space-y-4 sm:space-y-5 font-serif text-[15px] sm:text-[17px] text-espresso leading-[1.8] tracking-wide">
            {initialParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            {isExpanded && (
              <div className="space-y-4 sm:space-y-5 pt-1 animate-fadeIn">
                {remainingParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Read More Toggle */}
          {remainingParagraphs.length > 0 && (
            <div className="mt-6 text-center sm:hidden">
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-1.5 text-xs font-serif uppercase tracking-widest text-burgundy hover:text-burgundy-light font-medium py-2 px-4 rounded-full bg-champagne/40 border border-gold/30 transition-colors"
                aria-expanded={isExpanded}
              >
                <span>{isExpanded ? 'Show Less' : 'Read Full Chapter'}</span>
                {isExpanded ? (
                  <ChevronUp className="w-3.5 h-3.5 text-gold-dark" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5 text-gold-dark" />
                )}
              </button>
            </div>
          )}

          {/* Desktop auto-reveals all remaining paragraphs */}
          <div className="hidden sm:block space-y-4 sm:space-y-5 mt-4 sm:mt-5 font-serif text-[17px] text-espresso leading-[1.8]">
            {!isExpanded && remainingParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Sign-off & Wax Seal */}
          {(chapter.signoff || chapter.signature || showWaxSeal) && (
            <div className="mt-9 pt-6 border-t border-gold/25 flex items-center justify-between gap-4">
              <div>
                {chapter.signoff && (
                  <p className="font-sans text-[11px] uppercase tracking-wider text-espresso-muted">
                    {chapter.signoff}
                  </p>
                )}
                {chapter.signature && (
                  <p className="font-script text-2xl sm:text-3xl text-gold-dark mt-1 font-semibold">
                    {chapter.signature}
                  </p>
                )}
              </div>

              {showWaxSeal && (
                <div className="shrink-0">
                  <WaxSeal size={52} initials={birthdayContent.recipient.name.charAt(0) || "K"} />
                </div>
              )}
            </div>
          )}
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
