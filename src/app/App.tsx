import React, { useEffect } from 'react'
import { Navbar } from '../components/layout/Navbar'
import { AudioPlayer } from '../components/layout/AudioPlayer'
import { HeroSection } from '../components/sections/HeroSection'
import { StoryChapterSection } from '../components/sections/StoryChapterSection'
import { MemoriesSection } from '../components/sections/MemoriesSection'
import { WishSection } from '../components/sections/WishSection'
import { SurpriseSection } from '../components/sections/SurpriseSection'
import { FinalSection } from '../components/sections/FinalSection'
import { birthdayContent } from '../config/birthdayContent'

export const App: React.FC = () => {
  useEffect(() => {
    const el = document.getElementById('memories-section')
    const params = new URLSearchParams(window.location.search)
    if (params.get('section') === 'memories' && el) {
      el.scrollIntoView({ behavior: 'instant' as ScrollBehavior })
    } else if (window.location.hash) {
      setTimeout(() => {
        const hashEl = document.querySelector(window.location.hash)
        if (hashEl) {
          hashEl.scrollIntoView({ behavior: 'auto' })
        }
      }, 150)
    }
  }, [])

  const handleDiscoverStory = () => {
    const chapterEl = document.getElementById('chapter-1')
    if (chapterEl) {
      chapterEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative min-h-screen selection:bg-burgundy selection:text-ivory bg-[#F8F1E3] overflow-x-hidden">
      {/* Top Navigation Bar */}
      <Navbar />

      {/* Main Connected Love Story Journey */}
      <main>
        {/* Section 1: Opening Hero */}
        <HeroSection onOpenLetter={handleDiscoverStory} />

        {/* Section 2 — Chapter One: Where Our Story Began */}
        <StoryChapterSection 
          chapter={birthdayContent.chapterOne} 
          showWaxSeal={true} 
        />

        {/* Section 3 — Chapter Two: The Person I Want to Be in Your Life */}
        <StoryChapterSection 
          chapter={birthdayContent.chapterTwo} 
          showWaxSeal={true} 
        />

        {/* Section 4 — Our Memories (Rolling Strip) */}
        <MemoriesSection />

        {/* Section 5 — Chapter Three: Our Future Together */}
        <StoryChapterSection 
          chapter={birthdayContent.chapterThree} 
          showWaxSeal={true} 
        />

        {/* Section 6 — Birthday Blessings */}
        <WishSection />

        {/* Section 7 — Secret Surprise Envelope (3D Wax Seal & Confetti) */}
        <SurpriseSection />

        {/* Section 8 — Final Screen */}
        <FinalSection />
      </main>

      {/* Background Ambient Audio Player Control */}
      <AudioPlayer />
    </div>
  )
}

export default App
