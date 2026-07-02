import InstagramIcon from './InstagramIcon'
import { INFO } from '../data/menu'
import { useReveal } from '../hooks'

const CHIPS = [
  { text: 'NO CAP, IT SLAPS', bg: 'var(--yellow)', rot: -5 },
  { text: "IT'S GIVING FLAVOR", bg: 'var(--pink)', rot: 3 },
  { text: 'POV: BEST SANDO IN TOWN', bg: 'var(--green)', rot: -2 },
  { text: 'LOWKEY OBSESSED', bg: 'var(--orange)', rot: 4 },
  { text: 'MAIN CHARACTER MEAL', bg: 'var(--cream)', rot: -3 },
]

function Kinetic({ text }: { text: string }) {
  const ref = useReveal<HTMLHeadingElement>(0.4)
  return (
    <h2
      ref={ref}
      className="kinetic font-display uppercase text-white leading-none"
      style={{ fontSize: 'clamp(40px, 8vw, 110px)' }}
    >
      {text.split(' ').map((w, i) => (
        <span key={i} className="word mr-[0.22em]" style={{ ['--i' as string]: i }}>
          <span>{w === 'GEN-Z' ? <span style={{ color: 'var(--yellow)' }}>{w}</span> : w}</span>
        </span>
      ))}
    </h2>
  )
}

export default function Vibes() {
  const chipsRef = useReveal<HTMLDivElement>(0.2)
  const ctaRef = useReveal<HTMLDivElement>(0.4)
  return (
    <section id="vibes" className="relative py-20 sm:py-24 overflow-hidden text-center">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'var(--purple-900)' }} />
      <div
        className="absolute inset-0 pointer-events-none animate-glow"
        style={{
          background:
            'radial-gradient(ellipse 50% 55% at 50% 50%, rgba(255,92,138,0.12), transparent 70%)',
        }}
      />
      <div className="relative max-w-5xl mx-auto px-5">
        <p
          className="font-bold uppercase tracking-[0.3em] text-xs sm:text-sm mb-4"
          style={{ color: 'var(--pink)' }}
        >
          The verdict is in
        </p>
        <Kinetic text="GEN-Z CAN'T GET ENOUGH" />

        <div
          ref={chipsRef}
          className="reveal-group mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          {CHIPS.map((c, i) => (
            <span
              key={c.text}
              className="reveal-item chip sticker rounded-full px-5 py-2.5 font-display uppercase text-sm sm:text-lg cursor-default"
              style={{
                background: c.bg,
                color: 'var(--purple-900)',
                ['--rot' as string]: `${c.rot}deg`,
                ['--reveal-delay' as string]: `${150 + i * 110}ms`,
                ['--pop-rot' as string]: `${c.rot * 4}deg`,
              }}
            >
              {c.text}
            </span>
          ))}
        </div>

        <div ref={ctaRef} className="reveal mt-12" style={{ ['--reveal-delay' as string]: '200ms' }}>
          <p className="text-white/60 text-sm mb-4">Tag us in your food pics — we repost the best ones.</p>
          <a
            href={INFO.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 font-bold text-sm sm:text-base text-white no-underline border-2 border-white/30 hover:border-(--pink) hover:scale-[1.05] active:scale-95"
            style={{ transition: 'transform 150ms, border-color 150ms' }}
          >
            <InstagramIcon size={18} /> Follow @brotherzpk
          </a>
        </div>
      </div>
    </section>
  )
}
