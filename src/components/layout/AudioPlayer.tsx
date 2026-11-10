import React, { useState, useRef, useEffect } from 'react'
import { Play, Pause } from 'lucide-react'
import { birthdayContent } from '../../config/birthdayContent'

const DEFAULT_VOLUME = 0.3

// Module-level references to guarantee a single active audio instance at all times
let activeAudioInstance: HTMLAudioElement | null = null
let activeSynthInstance: GentleMusicBox | null = null

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
    gain.gain.linearRampToValueAtTime(0.08 * DEFAULT_VOLUME, now + 0.04)
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.4)

    gain2.gain.setValueAtTime(0, now)
    gain2.gain.linearRampToValueAtTime(0.02 * DEFAULT_VOLUME, now + 0.03)
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
    if (activeSynthInstance && activeSynthInstance !== this) {
      activeSynthInstance.stop()
    }
    if (activeAudioInstance && !activeAudioInstance.paused) {
      activeAudioInstance.pause()
    }
    activeSynthInstance = this

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
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const synthRef = useRef<GentleMusicBox | null>(null)
  const useSynthRef = useRef(false)
  const userPausedRef = useRef(false)
  const unlockedRef = useRef(false)
  const autoPlayInFlightRef = useRef(false)
  const gesturePlayInFlightRef = useRef(false)
  const volumeInitializedRef = useRef(false)
  const triedRelativeFallbackRef = useRef(false)
  const cleanupListenersRef = useRef<(() => void) | null>(null)

  const attemptPlay = (isUserGesture: boolean) => {
    if (userPausedRef.current) return
    const currentAudio = audioRef.current
    if (!currentAudio) return

    // If audio is genuinely already playing, sync state and remove fallback listeners
    if (unlockedRef.current && !currentAudio.paused) {
      setIsPlaying(true)
      cleanupListenersRef.current?.()
      return
    }

    if (gesturePlayInFlightRef.current) return
    if (!isUserGesture && autoPlayInFlightRef.current) return

    // Guarantee single active audio instance
    if (activeAudioInstance && activeAudioInstance !== currentAudio) {
      activeAudioInstance.pause()
    }
    activeAudioInstance = currentAudio
    synthRef.current?.stop()

    if (!volumeInitializedRef.current) {
      currentAudio.volume = DEFAULT_VOLUME
      volumeInitializedRef.current = true
    }
    currentAudio.muted = false

    if (isUserGesture) {
      gesturePlayInFlightRef.current = true
    } else {
      autoPlayInFlightRef.current = true
    }

    const playPromise = currentAudio.play()
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          if (isUserGesture) {
            gesturePlayInFlightRef.current = false
          } else {
            autoPlayInFlightRef.current = false
          }
          if (userPausedRef.current) {
            currentAudio.pause()
            setIsPlaying(false)
            return
          }
          if (!currentAudio.paused) {
            unlockedRef.current = true
            setIsPlaying(true)
            cleanupListenersRef.current?.()
          }
        })
        .catch(() => {
          if (isUserGesture) {
            gesturePlayInFlightRef.current = false
          } else {
            autoPlayInFlightRef.current = false
          }
          // Browser blocked unmuted autoplay; keep listeners active for the first genuine user interaction
          if (currentAudio.paused) {
            setIsPlaying(false)
          }
        })
    } else {
      if (isUserGesture) {
        gesturePlayInFlightRef.current = false
      } else {
        autoPlayInFlightRef.current = false
      }
    }
  }

  useEffect(() => {
    if (!synthRef.current) {
      synthRef.current = new GentleMusicBox()
    }
    const audio = audioRef.current

    if (audio) {
      if (activeAudioInstance && activeAudioInstance !== audio) {
        activeAudioInstance.pause()
      }
      activeAudioInstance = audio
      if (!volumeInitializedRef.current) {
        audio.volume = DEFAULT_VOLUME
        volumeInitializedRef.current = true
      }
      audio.muted = false
    }

    const gestureEvents = [
      'click',
      'touchend',
      'pointerup',
      'keydown',
      'mousedown',
      'pointerdown',
      'touchstart',
    ]

    const unlockAudio = (e: Event) => {
      // Do not intercept clicks on the music button itself — let togglePlay handle it directly
      if (buttonRef.current && e.target instanceof Node && buttonRef.current.contains(e.target)) {
        return
      }

      // On touch devices, touchstart and touch pointerdown fire before the browser grants
      // user activation; skip them when userActivation is not yet active so pointerup/touchend/click succeeds
      if (
        e.type === 'touchstart' ||
        (e.type === 'pointerdown' && (e as PointerEvent).pointerType === 'touch')
      ) {
        const nav = navigator as Navigator & { userActivation?: { isActive: boolean } }
        if (nav.userActivation && !nav.userActivation.isActive) {
          return
        }
      }

      attemptPlay(true)
    }

    const handleCustomUnlock = () => {
      attemptPlay(true)
    }

    const cleanupListeners = () => {
      gestureEvents.forEach((evt) => {
        document.removeEventListener(evt, unlockAudio, { capture: true })
      })
      window.removeEventListener('birthday-unlock-audio', handleCustomUnlock)
    }
    cleanupListenersRef.current = cleanupListeners

    const handlePageClose = () => {
      autoPlayInFlightRef.current = false
      gesturePlayInFlightRef.current = false
      if (audioRef.current && !audioRef.current.paused) {
        audioRef.current.pause()
      }
      synthRef.current?.stop()
      setIsPlaying(false)
    }

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        handlePageClose()
      } else if (document.visibilityState === 'visible') {
        if (unlockedRef.current && !userPausedRef.current) {
          const currentAudio = audioRef.current
          if (currentAudio && !useSynthRef.current) {
            currentAudio.muted = false
            currentAudio.play().then(() => {
              setIsPlaying(true)
            }).catch(() => {
              setIsPlaying(false)
            })
          } else if (useSynthRef.current) {
            synthRef.current?.start()
            setIsPlaying(true)
          }
        }
      }
    }

    if (!unlockedRef.current && !userPausedRef.current) {
      gestureEvents.forEach((evt) => {
        document.addEventListener(evt, unlockAudio, { capture: true, passive: true })
      })
      window.addEventListener('birthday-unlock-audio', handleCustomUnlock)
    }

    // Attempt immediate autoplay on initial page load / refresh
    attemptPlay(false)

    window.addEventListener('pagehide', handlePageClose)
    window.addEventListener('beforeunload', handlePageClose)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      cleanupListeners()
      window.removeEventListener('pagehide', handlePageClose)
      window.removeEventListener('beforeunload', handlePageClose)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      // Do not pause during React 18 StrictMode's simulated unmount when the element remains in the DOM
      if (audio && !audio.isConnected) {
        handlePageClose()
        if (activeAudioInstance === audio) {
          activeAudioInstance = null
        }
      }
    }
  }, [])

  const togglePlay = async (e: React.MouseEvent) => {
    e.stopPropagation()

    const audio = audioRef.current

    // Check actual audio element state: if sound is currently playing, pause it immediately
    const isActuallyPlaying = audio && !useSynth ? !audio.paused : isPlaying

    if (isActuallyPlaying) {
      userPausedRef.current = true
      unlockedRef.current = true
      autoPlayInFlightRef.current = false
      gesturePlayInFlightRef.current = false
      cleanupListenersRef.current?.()
      if (audio) {
        audio.pause()
      }
      synthRef.current?.stop()
      setIsPlaying(false)
      return
    }

    // Otherwise sound is paused — start playing immediately on click
    userPausedRef.current = false
    if (audio && !useSynth) {
      try {
        if (activeAudioInstance && activeAudioInstance !== audio) {
          activeAudioInstance.pause()
        }
        activeAudioInstance = audio
        synthRef.current?.stop()
        if (!volumeInitializedRef.current) {
          audio.volume = DEFAULT_VOLUME
          volumeInitializedRef.current = true
        }
        audio.muted = false
        await audio.play()
        unlockedRef.current = true
        cleanupListenersRef.current?.()
        setIsPlaying(true)
        return
      } catch (err) {
        if (audio.error) {
          console.info('Switching to gentle chime synth.', err)
          useSynthRef.current = true
          setUseSynth(true)
        } else {
          setIsPlaying(false)
          return
        }
      }
    }

    if (audio && !audio.paused) {
      audio.pause()
    }
    synthRef.current?.start()
    unlockedRef.current = true
    cleanupListenersRef.current?.()
    setIsPlaying(true)
  }

  return (
    <div
      className="fixed z-[60]"
      style={{
        bottom: 'calc(env(safe-area-inset-bottom, 0px) + 20px)',
        right: '20px',
      }}
    >
      <audio
        ref={audioRef}
        src={birthdayContent.audio.src}
        loop
        playsInline
        preload="auto"
        onLoadedMetadata={() => {
          if (audioRef.current && !volumeInitializedRef.current) {
            audioRef.current.volume = DEFAULT_VOLUME
            volumeInitializedRef.current = true
          }
        }}
        onPlaying={() => {
          if (!userPausedRef.current) {
            unlockedRef.current = true
            cleanupListenersRef.current?.()
            setIsPlaying(true)
          }
        }}
        onPause={() => {
          setIsPlaying(false)
        }}
        onCanPlay={() => {
          if (!userPausedRef.current && !unlockedRef.current && audioRef.current && audioRef.current.paused) {
            attemptPlay(false)
          }
        }}
        onError={() => {
          // If absolute path failed under a relative subpath deployment, try relative path once
          if (audioRef.current && !triedRelativeFallbackRef.current && birthdayContent.audio.src.startsWith('/')) {
            triedRelativeFallbackRef.current = true
            audioRef.current.src = `.${birthdayContent.audio.src}`
            audioRef.current.load()
            attemptPlay(false)
            return
          }
          useSynthRef.current = true
          setUseSynth(true)
        }}
      />

      {/* Minimal circular music button */}
      <button
        ref={buttonRef}
        type="button"
        onClick={togglePlay}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
        title={isPlaying ? 'Pause music' : 'Play music'}
        className={`relative flex items-center justify-center w-11 h-11 rounded-full border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C6A15B] focus:ring-offset-1 ${
          isPlaying
            ? 'bg-[#650B1B] border-[rgba(198,161,91,0.6)] shadow-[0_4px_20px_rgba(101,11,27,0.35)]'
            : 'bg-[#F8F1E3]/95 backdrop-blur-sm border-[rgba(198,161,91,0.4)] shadow-[0_4px_16px_rgba(48,36,31,0.15)] hover:border-[rgba(198,161,91,0.7)]'
        }`}
      >
        {isPlaying ? (
          <Pause className="w-4 h-4 text-[#EAD196]" />
        ) : (
          <Play className="w-4 h-4 text-[#9A7432] translate-x-[1px]" />
        )}
      </button>
    </div>
  )
}
