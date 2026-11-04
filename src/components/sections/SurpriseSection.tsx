import React from 'react'
import { SurpriseEnvelope } from '../interactions/SurpriseEnvelope'
import { FloralFlourish } from '../decorations/GoldOrnaments'

export const SurpriseSection: React.FC = () => {
  return (
    <section 
      id="surprise-section" 
      className="relative py-24 px-4 sm:px-6 bg-gradient-to-b from-[#25050C] via-[#390812] to-[#4D0815] text-ivory overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        <SurpriseEnvelope />
      </div>
    </section>
  )
}
