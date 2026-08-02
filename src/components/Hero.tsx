import { useEffect, useRef } from 'react'
import { ArrowDown, Phone } from 'lucide-react'
import { INFO } from '../data/menu'

const HEADLINE_1 = ['FINALLY,', 'THE', 'BOSS', 'OF']
const HEADLINE_2 = ['THE', 'SANDOS', 'IS', 'HERE']

export default function Hero() {
  const centerRef = useRef<HTMLDivElement>(null)

  // subtle mouse parallax (desktop, fine pointers only)
  useEffect(() => {
    if (window.innerWidth < 768 || !matchMedia('(pointer: fine)').matches) return
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    let tx = 0
    let ty = 0
    let cx = 0
    let cy = 0
    const onMove = (e: MouseEvent) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 2
      ty = (e.clientY / window.innerHeight - 0.5) * 2
      if (!raf) raf = requestAnimationFrame(tick)
    }
    const tick = () => {
      cx += (tx - cx) * 0.06
      cy += (ty - cy) * 0.06
      if (centerRef.current)
        centerRef.current.style.transform = `translate(${cx * 12}px, ${cy * 8}px)`
      raf =
        Math.abs(tx - cx) > 0.001 || Math.abs(ty - cy) > 0.001 ? requestAnimationFrame(tick) : 0
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  let wordIndex = 0

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: 'var(--purple-900)' }}
    >
      <div className="relative w-full" style={{ minHeight: '100svh' }}>
        {/* warm glow */}
        <div
          className="absolute inset-0 pointer-events-none animate-glow"
          style={{
            background:
              'radial-gradient(ellipse 56% 46% at 50% 46%, rgba(255,196,46,0.22), transparent 70%)',
            zIndex: 1,
          }}
        />

        {/* grain */}
        <div className="grain" style={{ zIndex: 50 }} />

        {/* centered content */}
        <div
          ref={centerRef}
          className="relative flex flex-col items-center justify-center text-center px-5"
          style={{ minHeight: '100svh', zIndex: 10, paddingTop: 84, willChange: 'transform' }}
        >
          <p
            className="stagger-word font-bold uppercase tracking-[0.35em] text-xs sm:text-sm mb-5"
            style={{ color: 'var(--yellow)', ['--i' as string]: 0 }}
          >
            Okara's Gen-Z food spot
          </p>

          <img
            src="/img/logo.png"
            alt="Brotherz"
            draggable={false}
            className="animate-float"
            style={{
              width: 'clamp(210px, 28vw, 380px)',
              filter: 'drop-shadow(0 18px 34px rgba(0,0,0,0.45))',
            }}
          />

          <h1
            className="font-display uppercase text-white mt-6 sm:mt-8"
            style={{ fontSize: 'clamp(38px, 6.6vw, 92px)', lineHeight: 0.98 }}
          >
            <span className="block">
              {HEADLINE_1.map((w) => (
                <span
                  key={w + wordIndex}
                  className="stagger-word mr-[0.24em]"
                  style={{ ['--i' as string]: ++wordIndex }}
                >
                  {w}
                </span>
              ))}
            </span>
            <span className="block">
              {HEADLINE_2.map((w) => (
                <span
                  key={w + wordIndex}
                  className="stagger-word mr-[0.24em]"
                  style={{
                    ['--i' as string]: ++wordIndex,
                    color: w === 'SANDOS' ? 'var(--yellow)' : undefined,
                  }}
                >
                  {w}
                </span>
              ))}
            </span>
          </h1>

          <p
            className="stagger-word mt-5 max-w-xl text-sm sm:text-base text-white/80"
            style={{ lineHeight: 1.65, ['--i' as string]: 10 }}
          >
            Okara's most hyped fast food — crispy sandos, loaded fries, hot wings & cheesy pizza,
            made fresh on M.A Jinnah Road. Not everyone gets a Sando.{' '}
            <span className="font-bold text-white">Only the early ones do.</span>
          </p>

          <div
            className="stagger-word mt-8 flex flex-wrap items-center justify-center gap-3"
            style={{ ['--i' as string]: 12 }}
          >
            <a
              href={INFO.phoneHref}
              className="flex items-center gap-2.5 rounded-full px-7 py-3.5 font-bold text-sm sm:text-base no-underline hover:scale-[1.05] active:scale-95"
              style={{
                background: 'var(--yellow)',
                color: 'var(--purple-900)',
                transition: 'transform 150ms',
                boxShadow: '0 10px 30px rgba(255,196,46,0.25)',
              }}
            >
              <Phone size={17} strokeWidth={2.5} /> Order Now
            </a>
            <a
              href="#menu"
              className="flex items-center gap-2 rounded-full px-7 py-3.5 font-bold text-sm sm:text-base text-white no-underline border-2 border-white/30 hover:border-white hover:scale-[1.05] active:scale-95"
              style={{ transition: 'transform 150ms, border-color 150ms' }}
            >
              See the Menu <ArrowDown size={17} strokeWidth={2.5} />
            </a>
          </div>

          {/* scroll cue */}
          <div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
            aria-hidden
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.3em]">Scroll</span>
            <ArrowDown size={16} className="animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
