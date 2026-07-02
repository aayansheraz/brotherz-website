import { Star } from 'lucide-react'
import { INFO } from '../data/menu'
import { useReveal } from '../hooks'

const REVIEWS = [
  {
    name: 'M Zulqarnain',
    badge: 'Local Guide',
    text: "Honestly didn't expect food this good in Okara. Their Sando was the highlight, absolutely packed with flavor. The pizza was fresh and delicious, and the fried chicken was easily one of the best I've had in town.",
    rot: -2,
  },
  {
    name: 'Ibtasam Khalil',
    badge: 'Google Review',
    text: 'Really loved the food and the ambiance. Top notch, specially their sando.',
    rot: 1.5,
  },
  {
    name: 'Mazhar Rai',
    badge: 'Google Review',
    text: 'It was pretty good, the food was delicious and the environment is too good.',
    rot: -1,
  },
]

function Kinetic({ text }: { text: string }) {
  const ref = useReveal<HTMLHeadingElement>(0.4)
  return (
    <h2
      ref={ref}
      className="kinetic font-display uppercase text-white leading-none"
      style={{ fontSize: 'clamp(44px, 9vw, 120px)' }}
    >
      {text.split(' ').map((w, i) => (
        <span key={i} className="word mr-[0.22em]" style={{ ['--i' as string]: i }}>
          <span>{w === 'THINK' ? <span style={{ color: 'var(--yellow)' }}>{w}</span> : w}</span>
        </span>
      ))}
    </h2>
  )
}

export default function Reviews() {
  const lineRef = useReveal<HTMLDivElement>(0.4)
  const gridRef = useReveal(0.1)
  return (
    <section id="reviews" className="relative py-20 sm:py-28 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, var(--purple-950), var(--purple-900))' }}
      />
      <div className="relative max-w-6xl mx-auto px-5">
        <div className="text-center mb-12">
          <Kinetic text="WHAT PEOPLE THINK" />
          <div
            ref={lineRef}
            className="reveal mt-4 flex items-center justify-center gap-2 text-white/60 text-sm"
            style={{ ['--reveal-delay' as string]: '250ms' }}
          >
            <span className="flex gap-0.5" style={{ color: 'var(--yellow)' }}>
              {[...Array(4)].map((_, i) => (
                <Star key={i} size={15} fill="currentColor" />
              ))}
              <Star size={15} fill="currentColor" style={{ clipPath: 'inset(0 60% 0 0)' }} />
            </span>
            {INFO.rating} on Google · {INFO.reviews} reviews · "Outstanding Taste"
          </div>
        </div>

        <div ref={gridRef} className="reveal-group grid sm:grid-cols-2 gap-5">
          {REVIEWS.map((r, i) => (
            <figure
              key={r.name}
              className={`lift reveal-item rounded-[26px] p-6 ${i === 0 ? 'sm:col-span-2' : ''}`}
              style={{
                background: 'var(--purple-800)',
                border: '1px solid rgba(255,246,233,0.1)',
                ['--rot' as string]: `${r.rot}deg`,
                ['--reveal-delay' as string]: `${i * 120}ms`,
                ['--pop-rot' as string]: `${r.rot * 3}deg`,
              }}
            >
              <div className="flex gap-1 mb-3" style={{ color: 'var(--yellow)' }}>
                {[...Array(5)].map((_, s) => (
                  <Star key={s} size={14} fill="currentColor" />
                ))}
              </div>
              <blockquote className="text-white/85 text-sm sm:text-[15px] leading-relaxed">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <span
                  className="w-9 h-9 rounded-full flex items-center justify-center font-display transition-transform duration-300 hover:rotate-12"
                  style={{ background: 'var(--yellow)', color: 'var(--purple-900)' }}
                >
                  {r.name[0]}
                </span>
                <span>
                  <span className="block text-white font-bold text-sm">{r.name}</span>
                  <span className="block text-white/50 text-xs">{r.badge}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
