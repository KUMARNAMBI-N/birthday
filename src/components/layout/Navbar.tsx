import React, { useState, useEffect } from 'react'
import { birthdayContent } from '../../config/birthdayContent'

/**
 * Fixed navigation bar — only visible after user scrolls past the hero.
 * The hero section has its own embedded compact nav row,
 * so this bar is hidden on the first screen to keep the design clean.
 */
export const Navbar: React.FC = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar only after scrolling ~80% of window height (past hero)
      setVisible(window.scrollY > window.innerHeight * 0.7)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Chapter I', href: '#chapter-1' },
    { name: 'Chapter II', href: '#chapter-2' },
    { name: 'Our Memories', href: '#memories-section' },
    { name: 'Chapter III', href: '#chapter-3' },
    { name: 'Blessings', href: '#wish-section' },
    { name: 'Surprise', href: '#surprise-section' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 bg-[#F8F1E3]/92 backdrop-blur-md border-b border-[rgba(198,161,91,0.25)] py-2.5 transition-all duration-400 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}
      aria-hidden={!visible}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#hero"
          className="flex items-center gap-2 group focus:outline-none"
          aria-label="Back to top"
        >
          <div
            className="w-7 h-7 rounded-full bg-[#650B1B] flex items-center justify-center shrink-0"
            style={{ boxShadow: '0 0 0 1px rgba(198,161,91,0.5)' }}
          >
            <span className="font-script text-[13px] text-[#EAD196] leading-none">
              {birthdayContent.recipient.name.charAt(0)}
            </span>
          </div>
          <span className="font-serif italic text-[13px] font-medium text-[#650B1B] tracking-wide">
            Aurora
          </span>
        </a>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-sans text-[10px] uppercase tracking-[0.18em] text-[#806B60] hover:text-[#650B1B] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* For Kriti pill */}
        <div
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-sans uppercase tracking-[0.15em] text-[#650B1B]"
          style={{
            background: 'rgba(198,161,91,0.12)',
            border: '1px solid rgba(198,161,91,0.3)',
          }}
        >
          For {birthdayContent.recipient.name}
        </div>
      </div>
    </header>
  )
}
