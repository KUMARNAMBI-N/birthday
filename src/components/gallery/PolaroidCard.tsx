import React from 'react'
import { PhotoItem } from '../../types/birthday'
import { RomanticImage } from '../decorations/RomanticImage'
import { Eye } from 'lucide-react'

interface MemoryPhotoCardProps {
  photo: PhotoItem
  index: number
  onSelect: (photo: PhotoItem) => void
}

export const MemoryPhotoCard: React.FC<MemoryPhotoCardProps> = ({ photo, index, onSelect }) => {
  const indexStr = String(index + 1).padStart(2, '0')

  return (
    <article
      className="group relative w-full cursor-pointer transition-all duration-300"
      onClick={() => onSelect(photo)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onSelect(photo)
        }
      }}
      aria-label={`View photo ${index + 1}: ${photo.caption}`}
    >
      {/* Fine-art Photo Frame with Clean Editorial Border */}
      <div className="bg-white p-3 sm:p-4 pb-4 sm:pb-5 rounded-sm shadow-md group-hover:shadow-luxury transition-all duration-300 border border-gold/25 transform group-hover:-translate-y-1">
        {/* Photo Container */}
        <div className="relative overflow-hidden aspect-[4/5] bg-ivory-dark rounded-[1px]">
          <RomanticImage
            src={photo.url}
            alt={photo.alt}
            aspectRatio="aspect-[4/5]"
            fallbackText={`Memory ${indexStr}`}
          />

          {/* Discreet luxury hover overlay */}
          <div className="absolute inset-0 bg-burgundy/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
            <span className="inline-flex items-center gap-1.5 text-ivory text-xs font-serif uppercase tracking-widest bg-burgundy/85 px-3 py-1.5 rounded-full border border-gold/40 shadow-sm">
              <Eye className="w-3.5 h-3.5 text-gold-light" />
              View
            </span>
          </div>

          {/* Discreet Top Corner Index Badge */}
          <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 text-[10px] font-sans tracking-widest text-ivory/90 uppercase">
            {indexStr}
          </div>
        </div>

        {/* Caption Area - Generous Spacing & High Readability */}
        <div className="mt-3.5 px-1 text-center">
          <p className="font-serif italic text-espresso text-base sm:text-lg leading-snug group-hover:text-burgundy transition-colors">
            "{photo.caption}"
          </p>
          {photo.date && (
            <p className="mt-1 font-sans text-[11px] tracking-[0.2em] uppercase text-espresso-muted">
              {photo.date}
            </p>
          )}
        </div>
      </div>
    </article>
  )
}

export const PolaroidCard = MemoryPhotoCard

