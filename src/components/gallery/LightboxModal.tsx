import React, { useEffect } from 'react'
import { PhotoItem } from '../../types/birthday'
import { RomanticImage } from '../decorations/RomanticImage'
import { FloralFlourish } from '../decorations/GoldOrnaments'
import { X } from 'lucide-react'

interface LightboxModalProps {
  photo: PhotoItem | null
  onClose: () => void
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ photo, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (photo) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = 'auto'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [photo, onClose])

  if (!photo) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-burgundy-deep/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Photo Lightbox"
    >
      <div
        className="relative max-w-lg w-full bg-ivory rounded-lg p-5 sm:p-7 shadow-2xl border-2 border-gold/40 text-center animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button - Safely Positioned for Mobile */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close Lightbox"
          className="absolute top-2.5 right-2.5 sm:-top-3 sm:-right-3 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-burgundy text-ivory border border-gold flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-transform focus:outline-none focus:ring-2 focus:ring-gold z-20"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Framing Header */}
        <div className="flex justify-center mb-3">
          <FloralFlourish className="w-36 h-5 text-gold" />
        </div>

        {/* Photo Container */}
        <div className="relative p-2 bg-white rounded shadow-inner border border-gold/20 overflow-hidden max-h-[75vh]">
          <RomanticImage
            src={photo.url}
            alt={photo.alt}
            aspectRatio="aspect-auto max-h-[70vh] object-contain mx-auto"
            fallbackText="A Timeless Memory"
          />
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.92) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .animate-scaleUp {
          animation: scaleUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  )
}
