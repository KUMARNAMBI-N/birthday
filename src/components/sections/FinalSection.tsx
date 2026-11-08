import React from 'react'
import { ArrowUp } from 'lucide-react'
import { FloralFlourish, BotanicalCrest } from '../decorations/GoldOrnaments'
import { birthdayContent } from '../../config/birthdayContent'

export const FinalSection: React.FC = () => {
  const final = birthdayContent.final

  const scrollToTop = () => {
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname)
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer 
      id="final-section" 
      className="relative py-20 sm:py-28 px-6 sm:px-8 bg-gradient-to-b from-[#200308] to-[#140105] text-ivory text-center border-t border-gold/25"
    >
      <div className="w-full max-w-lg mx-auto flex flex-col items-center">
        {/* Single Refined Decorative Detail */}
        <div className="mb-3">
          <BotanicalCrest className="w-20 h-20 text-gold-light/90" label="Love" />
        </div>

        {/* Emotionally Memorable Headline */}
        <h2 className="font-script text-4xl sm:text-5xl text-gold-foil mb-2 font-normal">
          {final.mainWish}
        </h2>

        {/* Delicate Floral Divider */}
        <div className="my-2.5">
          <FloralFlourish className="w-36 sm:w-44 h-4 text-gold-light/60" />
        </div>

        {/* Closing Message Paragraphs */}
        <div className="space-y-3 font-serif italic text-[15px] sm:text-[17px] text-ivory/90 max-w-md mx-auto leading-relaxed my-5 px-3">
          {final.closingParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Made with Love Notice */}
        <div className="text-[11px] sm:text-xs font-sans tracking-[0.2em] uppercase text-gold-light/80 mt-4 mb-2">
          <span>{final.madeWithLoveText}</span>
        </div>

        {/* Final Signature */}
        <p className="font-script text-2xl sm:text-3xl text-gold-light mb-8">
          Always Yours ❤️
        </p>

        {/* Back to the Beginning Button */}
        <button
          type="button"
          id="back-to-top-btn"
          onClick={scrollToTop}
          className="group inline-flex items-center gap-2 min-h-[44px] px-7 py-2.5 rounded-full bg-burgundy/70 hover:bg-burgundy text-ivory font-serif text-xs uppercase tracking-widest border border-gold/40 shadow-sm transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-gold"
          aria-label="Back to the beginning"
        >
          <ArrowUp className="w-3.5 h-3.5 text-gold group-hover:-translate-y-0.5 transition-transform" />
          <span>{final.backToTopText}</span>
        </button>
      </div>
    </footer>
  )
}
