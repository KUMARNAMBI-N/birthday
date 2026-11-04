import React, { useState } from 'react'
import { PhotoItem } from '../../types/birthday'
import { RomanticImage } from '../decorations/RomanticImage'
import { LightboxModal } from '../gallery/LightboxModal'
import { FloralFlourish } from '../decorations/GoldOrnaments'
import { birthdayContent } from '../../config/birthdayContent'
import { Eye } from 'lucide-react'

export const MemoriesSection: React.FC = () => {
  const memories = birthdayContent.memories
  const photos = memories.photos
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null)

  // Duplicate photos for smooth infinite continuous loop
  const rollingPhotos = [...photos, ...photos, ...photos]

  return (
    <section 
      id="memories-section" 
      className="relative py-20 sm:py-28 scroll-mt-6 overflow-hidden"
    >
      {/* Full Background Photo — Family Portrait */}
      <img
        src="/images/birthday-family.jpeg"
        alt="Family Portrait Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ objectPosition: 'center 15%' }}
        loading="eager"
        decoding="async"
      />
      {/* Soft warm vignette & overlay for text legibility and rich colors */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none" 
        style={{
          background: 'linear-gradient(to bottom, rgba(20,4,10,0.40) 0%, rgba(20,4,10,0.18) 35%, rgba(20,4,10,0.22) 65%, rgba(15,3,8,0.52) 100%)'
        }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.28em] text-[#EAD196] font-semibold drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
            {memories.label}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#FFFDF8] mt-2 font-normal tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
            {memories.heading}
          </h2>
          <div className="flex justify-center mt-2.5">
            <FloralFlourish className="w-32 sm:w-40 h-4 text-[#C6A15B] drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]" />
          </div>
          <p className="font-serif italic text-sm sm:text-base text-[#F8F1E3] max-w-lg mx-auto mt-2.5 leading-relaxed px-4 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
            {memories.subheading}
          </p>
        </div>

        {/* Featured 3 Prominent Photographs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-14">
          {photos.map((photo, index) => {
            const photoNum = String(index + 1).padStart(2, '0')

            return (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className="group relative bg-[#FCFBF7] p-3.5 sm:p-4 pb-5 sm:pb-6 rounded-sm shadow-xl hover:shadow-2xl border border-gold/40 cursor-pointer transform transition-all duration-300 hover:-translate-y-2 select-none"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setSelectedPhoto(photo)
                  }
                }}
                aria-label={`View photo ${photoNum}: ${photo.caption}`}
              >
                {/* Photo Frame */}
                <div className="relative overflow-hidden aspect-[4/5] bg-ivory-dark rounded-[1px] shadow-inner">
                  <RomanticImage
                    src={photo.url}
                    alt={photo.alt}
                    aspectRatio="aspect-[4/5]"
                    fallbackText={`Memory ${photoNum}`}
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-burgundy/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                    <span className="inline-flex items-center gap-1.5 text-ivory text-xs font-serif uppercase tracking-widest bg-burgundy/90 px-3 py-1.5 rounded-full border border-gold/50 shadow-sm">
                      <Eye className="w-3.5 h-3.5 text-gold-light" />
                      View
                    </span>
                  </div>

                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-sm border border-gold/30 text-[10px] font-sans tracking-widest text-gold-light uppercase">
                    Photo {index + 1}
                  </div>
                </div>

                {/* Caption */}
                <div className="mt-4 text-center px-1">
                  <p className="font-serif italic text-espresso text-[15px] sm:text-[16px] leading-snug group-hover:text-burgundy transition-colors">
                    &ldquo;{photo.caption}&rdquo;
                  </p>
                  {photo.date && (
                    <p className="mt-1.5 font-sans text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-gold-dark font-medium">
                      {photo.date}
                    </p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Infinite Rolling Reel Container */}
      <div className="relative z-10 w-full overflow-hidden my-4 py-3">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-28 bg-gradient-to-r from-black/50 via-black/20 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-28 bg-gradient-to-l from-black/50 via-black/20 to-transparent z-10" />

        <div className="animate-infinite-roll flex items-center gap-4 sm:gap-6 px-4">
          {rollingPhotos.map((photo, index) => {
            const photoNum = String((index % photos.length) + 1).padStart(2, '0')

            return (
              <div
                key={`${photo.id}-${index}`}
                onClick={() => setSelectedPhoto(photo)}
                className="group relative w-[220px] sm:w-[260px] shrink-0 bg-white p-3 pb-4 rounded-sm shadow-md hover:shadow-luxury border border-gold/30 cursor-pointer transform transition-all duration-300 hover:-translate-y-1 select-none"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setSelectedPhoto(photo)
                  }
                }}
              >
                <div className="relative overflow-hidden aspect-[4/5] bg-ivory-dark rounded-[1px]">
                  <RomanticImage
                    src={photo.url}
                    alt={photo.alt}
                    aspectRatio="aspect-[4/5]"
                    fallbackText={`Memory ${photoNum}`}
                  />
                </div>
                <div className="mt-2.5 text-center px-1">
                  <p className="font-serif italic text-espresso text-xs sm:text-sm leading-snug line-clamp-1">
                    &ldquo;{photo.caption}&rdquo;
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
      />
    </section>
  )
}
