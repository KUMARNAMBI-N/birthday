import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { birthdayContent } from '../../config/birthdayContent'

/**
 * Fixed navigation bar — visible after user scrolls past the hero.
 * Supports both desktop horizontal links and mobile dropdown menu
 * connecting every chapter and section of the site.
 */
export const Navbar: React.FC = () => {
  const [visible, setVisible] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.7)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Where It All Began', href: '#chapter-1' },
    { name: 'Safe Place', href: '#chapter-2' },
    { name: 'Our Memories', href: '#memories-section' },
    { name: 'Our Tomorrow', href: '#chapter-3' },
    { name: 'Blessings', href: '#wish-section' },
    { name: 'Surprise', href: '#surprise-section' },
    { name: 'Forever', href: '#final-section' },
  ]

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 bg-[#F8F1E3]/95 backdrop-blur-md border-b border-[rgba(198,161,91,0.25)] py-2.5 transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}
      aria-hidden={!visible}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault()
            if (window.location.hash) {
              window.history.replaceState(null, '', window.location.pathname)
            }
            window.scrollTo({ top: 0, behavior: 'smooth' })
            setMobileMenuOpen(false)
          }}
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
            {birthdayContent.recipient.name}
          </span>
        </a>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                handleLinkClick(link.href)
              }}
              className="font-sans text-[10px] uppercase tracking-[0.18em] text-[#806B60] hover:text-[#650B1B] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right side: For Kriti pill + mobile menu toggle */}
        <div className="flex items-center gap-2.5">
          <div
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-sans uppercase tracking-[0.15em] text-[#650B1B]"
            style={{
              background: 'rgba(198,161,91,0.12)',
              border: '1px solid rgba(198,161,91,0.3)',
            }}
          >
            For {birthdayContent.recipient.name}
          </div>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full text-[#650B1B] hover:bg-champagne/40 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-burgundy" /> : <Menu className="w-5 h-5 text-burgundy" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FCFBF7] border-b border-gold/30 px-6 py-4 animate-fadeIn shadow-lg">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleLinkClick(link.href)
                }}
                className="font-serif italic text-base text-burgundy hover:text-gold-dark transition-colors py-1 border-b border-gold/15 last:border-b-0 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-gold-dark">→</span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
