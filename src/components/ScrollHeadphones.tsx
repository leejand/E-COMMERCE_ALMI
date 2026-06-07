import { useEffect, useRef, useState } from 'react'

const FRAME_PATHS = Array.from({ length: 19 }, (_, i) =>
  `/frames/frame-${String(i + 1).padStart(2, '0')}.jpg`
)
const FRAME_COUNT = FRAME_PATHS.length

export default function ScrollHeadphones() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(FRAME_COUNT).fill(null))
  const currentFrameRef = useRef(0)
  const rafRef = useRef<number>(0)
  const [ready, setReady] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d')!
    const cvs = canvas
    const c = ctx
    const el = container

    let frameLoaded = 0

    function drawFrame(idx: number) {
      const img = imagesRef.current[idx]
      if (!img || !img.complete || !img.naturalWidth) return
      c.clearRect(0, 0, cvs.width, cvs.height)
      c.drawImage(img, 0, 0, cvs.width, cvs.height)
    }

    function onScroll() {
      const rect = el.getBoundingClientRect()
      const viewH = window.innerHeight
      const totalScroll = el.offsetHeight - viewH
      const scrolled = Math.max(0, Math.min(totalScroll, -rect.top))
      const prog = totalScroll > 0 ? scrolled / totalScroll : 0
      const frameIdx = Math.min(FRAME_COUNT - 1, Math.floor(prog * FRAME_COUNT))

      setProgress(prog)

      if (frameIdx !== currentFrameRef.current) {
        currentFrameRef.current = frameIdx
        drawFrame(frameIdx)
      }
    }

    function handleScroll() {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(onScroll)
    }

    FRAME_PATHS.forEach((src, i) => {
      const img = new Image()
      img.src = src
      img.onload = () => {
        imagesRef.current[i] = img
        frameLoaded++
        if (frameLoaded === FRAME_COUNT) {
          setReady(true)
          drawFrame(0)
          handleScroll()
        }
      }
      img.onerror = () => {
        frameLoaded++
        if (frameLoaded === FRAME_COUNT) {
          setReady(true)
          handleScroll()
        }
      }
    })

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  // Interpolate background: dark (#0f1419) → almi-beige (#E8E1D8)
  const bgR = Math.round(15 + (232 - 15) * progress)
  const bgG = Math.round(20 + (225 - 20) * progress)
  const bgB = Math.round(25 + (216 - 25) * progress)
  const bgColor = `rgb(${bgR},${bgG},${bgB})`

  // Text color: white → almi-black
  const textAlpha = progress > 0.5 ? (progress - 0.5) * 2 : 0
  const labelColor = progress < 0.5
    ? `rgba(255,255,255,${0.3 - progress * 0.6})`
    : `rgba(17,17,17,${textAlpha * 0.4})`

  // Accent label text that appears mid-scroll
  const showLabel = progress > 0.2 && progress < 0.85
  const labelOpacity = progress < 0.4
    ? (progress - 0.2) / 0.2
    : progress > 0.7
    ? 1 - (progress - 0.7) / 0.15
    : 1

  const scrollLabels = [
    { threshold: 0.15, text: 'Diseño que trasciende.' },
    { threshold: 0.4, text: 'Sonido Hi-Res 24-bit.' },
    { threshold: 0.65, text: 'ANC Adaptativo −42dB.' },
  ]

  const activeLabel = [...scrollLabels].reverse().find(l => progress >= l.threshold)

  return (
    <div
      ref={containerRef}
      className="scroll-headphones-container"
      style={{ background: bgColor, transition: 'background 0.1s linear' }}
    >
      <div className="scroll-headphones-sticky">
        {!ready && (
          <div className="scroll-headphones-loader">
            <span className="scroll-headphones-loader-text" style={{ color: labelColor }}>
              Cargando experiencia
            </span>
          </div>
        )}

        <canvas
          ref={canvasRef}
          width="1120"
          height="630"
          className="scroll-headphones-canvas"
          style={{ opacity: ready ? 1 : 0 }}
        />

        {/* Dynamic scroll label */}
        {ready && showLabel && activeLabel && (
          <div
            className="absolute left-1/2 top-12 -translate-x-1/2 pointer-events-none"
            style={{
              opacity: labelOpacity,
              transition: 'opacity 0.4s ease',
            }}
          >
            <span
              className="text-[11px] tracking-[0.3em] uppercase font-label-bold"
              style={{ color: progress > 0.5 ? 'rgba(0,71,204,0.8)' : 'rgba(255,255,255,0.5)' }}
            >
              {activeLabel.text}
            </span>
          </div>
        )}

        {/* Progress bar */}
        {ready && (
          <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'rgba(0,71,204,0.15)' }}>
            <div
              className="h-full bg-almi-blue transition-all duration-100"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        )}

        {ready && progress < 0.08 && (
          <div className="scroll-headphones-hud">
            <span className="scroll-headphones-hud-label" style={{ color: labelColor }}>
              Desliza para descubrir
            </span>
            <div
              className="scroll-headphones-hud-line"
              style={{ background: `linear-gradient(to bottom, ${progress < 0.5 ? 'rgba(255,255,255,0.25)' : 'rgba(17,17,17,0.2)'}, transparent)` }}
            />
          </div>
        )}
      </div>
    </div>
  )
}
