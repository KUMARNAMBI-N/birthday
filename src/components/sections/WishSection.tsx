import React from 'react'
import { FloralFlourish } from '../decorations/GoldOrnaments'
import { birthdayContent } from '../../config/birthdayContent'

export const WishSection: React.FC = () => {
  const wish = birthdayContent.wish

  return (
    <section 
      id="wish-section" 
      className="relative py-20 sm:py-28 px-6 sm:px-10 bg-gradient-to-b from-[#2E050D] via-[#4D0815] to-[#200308] text-ivory scroll-mt-6"
    >
      <div className="w-full max-w-xl mx-auto">
        {/* Minimalist Fine-Art Framing — Like a Page in a Luxury Book */}
        <div className="relative border border-gold/30 p-7 sm:p-12 rounded-sm bg-black/20 backdrop-blur-xs">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12">
            <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.28em] text-gold-light/90 font-medium">
              {wish.tag}
            </span>
            <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-ivory font-normal mt-2 tracking-tight">
              {wish.heading}
            </h2>
            <div className="flex justify-center mt-3">
              <FloralFlourish className="w-32 sm:w-40 h-4 text-gold-light/60" />
            </div>
          </div>

          {/* Heartfelt Blessings */}
          <div className="space-y-4 sm:space-y-5 font-serif text-[15px] sm:text-[17px] text-[#FAF4E8]/90 leading-[1.8] text-center tracking-wide font-normal">
            {wish.paragraphs.map((paragraph, index) => (
              <p key={index} className="max-w-md mx-auto">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Minimalist Blessing Footer */}
          {wish.blessing && (
            <div className="mt-10 pt-6 border-t border-gold/25 text-center">
              <p className="font-script text-2xl sm:text-3xl text-gold-light/95 font-normal">
                &ldquo;{wish.blessing}&rdquo;
              </p>
            </div>
          )}
        </div>

        {/* Next Section Connector to Surprise */}
        <div className="mt-8 text-center">
          <a
            href="#surprise-section"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gold/20 hover:bg-gold/30 border border-gold/40 text-gold-light font-serif italic text-sm sm:text-base tracking-wide transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shadow-sm"
            aria-label="Continue to Surprise"
          >
            <span>Oru Chinna Surprise Unakkaga ↓</span>
          </a>
        </div>
      </div>
    </section>
  )
}
