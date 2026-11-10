import React, { useState, useRef, useEffect } from 'react'
import { Music } from 'lucide-react'
import { birthdayContent } from '../../config/birthdayContent'

/**
 * Procedural gentle music-box notes (romantic pentatonic melody)
 * played via Web Audio API when no local MP3 file exists.
 */
class GentleMusicBox {
  private ctx: AudioContext | null = null
  private isPlaying = false
  private timer: number | null = null
  private noteIndex = 0

  private melody = [
    261.63, 329.63, 392.00, 440.00, 523.25, 392.00, 329.63, 261.63,
    349.23, 440.00, 523.25, 587.33, 659.25, 523.25, 440.00, 349.23,
    392.00, 493.88, 587.33, 659.25, 783.99, 587.33, 493.88, 392.00,
    329.63, 392.00, 523.25, 659.25, 523.25, 392.00, 329.63, 261.63
  ]

  playNote(freq: number) {
    if (!this.ctx) return
    const now = this.ctx.currentTime

    const osc = this.ctx.createOscillator()
    const gain = this.ctx.createGain()

    const osc2 = this.ctx.createOscillator()
    const gain2 = this.ctx.createGain()

    osc.type = 'sine'
    osc.frequency.setValueAtTime(freq, now)

    osc2.type = 'triangle'
    osc2.frequency.setValueAtTime(freq * 2.01, now)

    gain.gain.setValueAtTime(0, now)
    gain.gain.linearRampToValueAtTime(0.08, now + 0.04)
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.4)

    gain2.gain.setValueAtTime(0, now)
    gain2.gain.linearRampToValueAtTime(0.02, now + 0.03)
    gain2.gain.exponentialRampToValueAtTime(0.0001, now + 1.2)

    osc.connect(gain)
    osc2.connect(gain2)
    gain.connect(this.ctx.destination)
    gain2.connect(this.ctx.destination)

    osc.start(now)
    osc2.start(now)
    osc.stop(now + 2.5)
    osc2.stop(now + 1.3)
  }

  start() {
    if (this.isPlaying) return
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      this.ctx = new AudioCtx()
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume()
    }
    this.isPlaying = true
    this.noteIndex = 0

    const step = () => {
      if (!this.isPlaying) return
      const freq = this.melody[this.noteIndex % this.melody.length]
      this.playNote(freq)
      this.noteIndex++
      this.timer = window.setTimeout(step, 620)
    }
    step()
  }

  stop() {
    this.isPlaying = false
    if (this.timer) {
      clearTimeout(this.timer)
      this.timer = null
    }
  }
}

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [useSynth, setUseSynth] = useState(false)
  const [showTooltip, setShowTooltip] = useState(true)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const synthRef = useRef<GentleMusicBox | null>(null)

  useEffect(() => {
    synthRef.current = new GentleMusicBox()
    
    // Auto-dismiss tooltip after 7s to never clutter mobile
    const timer = setTimeout(() => setShowTooltip(false), 7000)

    // Attempt to play the MP3 automatically on load or on first user interaction
    let unlocked = false
    const tryAutoPlay = async () => {
      if (unlocked || !audioRef.current) return
      try {
        await audioRef.current.play()
        unlocked = true
        setIsPlaying(true)
        setShowTooltip(false)
        cleanupListeners()
      } catch {
        // Browser blocked unmuted autoplay until first interaction
      }
    }

    const cleanupListeners = () => {
      window.removeEventListener('click', tryAutoPlay)
      window.removeEventListener('touchstart', tryAutoPlay)
      window.removeEventListener('keydown', tryAutoPlay)
    }

    tryAutoPlay()
    window.addEventListener('click', tryAutoPlay, { once: true })
    window.addEventListener('touchstart', tryAutoPlay, { once: true })
    window.addEventListener('keydown', tryAutoPlay, { once: true })

    return () => {
      clearTimeout(timer)
      cleanupListeners()
      synthRef.current?.stop()
    }
  }, [])

  const togglePlay = async () => {
    setShowTooltip(false)

    if (isPlaying) {
      if (audioRef.current && !useSynth) {
        audioRef.current.pause()
      }
      synthRef.current?.stop()
      setIsPlaying(false)
      return
    }

    if (audioRef.current && !useSynth) {
      try {
        await audioRef.current.play()
        setIsPlaying(true)
        return
      } catch (err) {
        console.info('Switching to gentle chime synth.', err)
        setUseSynth(true)
      }
    }

    synthRef.current?.start()
    setIsPlaying(true)
  }

  return (
    <div
      className="fixed z-50"
      style={{
        bottom: 'calc(env(safe-area-inset-bottom, 0px) + 20px)',
        right: '20px',
      }}
    >
      <audio
        ref={audioRef}
        src={birthdayContent.audio.src}
        loop
        preload="auto"
        onError={() => setUseSynth(true)}
      />

      {/* Minimal circular music button */}
      <button
        type="button"
        onClick={togglePlay}
        aria-label={isPlaying ? 'Pause music' : 'Play romantic music'}
        className={`relative flex items-center justify-center w-11 h-11 rounded-full border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C6A15B] focus:ring-offset-1 ${
          isPlaying
            ? 'bg-[#650B1B] border-[rgba(198,161,91,0.6)] shadow-[0_4px_20px_rgba(101,11,27,0.35)]'
            : 'bg-[#F8F1E3]/95 backdrop-blur-sm border-[rgba(198,161,91,0.4)] shadow-[0_4px_16px_rgba(48,36,31,0.15)] hover:border-[rgba(198,161,91,0.7)]'
        }`}
      >
        {isPlaying ? (
          /* Equalizer bars when playing */
          <div className="flex items-end gap-[2.5px] h-3.5">
            <span
              className="w-[3px] rounded-full bg-[#C6A15B]"
              style={{ animation: 'eqBar 0.8s ease-in-out infinite', height: '4px' }}
            />
            <span
              className="w-[3px] rounded-full bg-[#EAD196]"
              style={{ animation: 'eqBar 1.1s ease-in-out infinite 0.2s', height: '4px' }}
            />
            <span
              className="w-[3px] rounded-full bg-[#C6A15B]"
              style={{ animation: 'eqBar 0.9s ease-in-out infinite 0.4s', height: '4px' }}
            />
          </div>
        ) : (
          <Music className="w-4 h-4 text-[#9A7432]" />
        )}
      </button>

      {/* Minimal tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-2 pointer-events-none">
          <div className="bg-[#30050D] text-[#F8F1E3] text-[10px] font-sans px-2.5 py-1 rounded-lg border border-[rgba(198,161,91,0.3)] shadow-md whitespace-nowrap">
            ♪ Play music
          </div>
          {/* Tooltip arrow */}
          <div
            className="absolute right-4 top-full w-0 h-0"
            style={{
              borderLeft: '4px solid transparent',
              borderRight: '4px solid transparent',
              borderTop: '4px solid #30050D',
            }}
          />
        </div>
      )}

      <style>{`
        @keyframes eqBar {
          0%, 100% { height: 3px; }
          50% { height: 14px; }
        }
      `}</style>
    </div>
  )
}
