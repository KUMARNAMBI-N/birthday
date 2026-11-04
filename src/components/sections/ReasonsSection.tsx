import React from 'react'
import { FloralFlourish } from '../decorations/GoldOrnaments'
import { birthdayContent } from '../../config/birthdayContent'

export const ReasonsSection: React.FC = () => {
  const reasons = birthdayContent.reasons

  return (
    <section 
      id="reasons-section" 
      className="relative py-16 sm:py-24 px-5 sm:px-8 bg-ivory scroll-mt-6"
    >
      <div className="w-full max-w-xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.25em] text-gold-dark font-medium">
            {reasons.tag || "Why You Are Special"}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-burgundy mt-1.5 font-normal tracking-tight">
            {reasons.heading}
          </h2>
          <div className="flex justify-center mt-2.5">
            <FloralFlourish className="w-32 sm:w-40 h-4 text-gold/60" />
          </div>
          <p className="font-serif italic text-sm sm:text-base text-espresso-muted max-w-sm mx-auto mt-2 leading-relaxed">
            {reasons.subheading}
          </p>
        </div>

        {/* Refined Editorial List — Zero Bulky Cards */}
        <div className="space-y-0 divide-y divide-gold/20">
          {reasons.items.map((item, index) => {
            const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI']
            const numeral = romanNumerals[index] || String(index + 1)

            return (
              <div
                key={item.id}
                className="py-6 sm:py-7 first:pt-2 last:pb-2 flex items-start gap-4 sm:gap-6 group"
              >
                {/* Minimalist Gold Numeral Glyph */}
                <div className="shrink-0 w-8 sm:w-10 text-right pt-0.5">
                  <span className="font-serif italic text-gold-dark text-lg sm:text-xl font-medium tracking-wider">
                    {numeral}.
                  </span>
                </div>

                {/* Editorial Content */}
                <div className="flex-1">
                  <h3 className="font-serif text-base sm:text-lg font-medium text-burgundy group-hover:text-burgundy-light transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-serif text-[14px] sm:text-[16px] text-espresso/85 leading-[1.7] mt-1 font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
