import { Flame } from 'lucide-react'
import { useReveal } from '../hooks'

const CARDS = [
  {
    name: 'The Brotherz Sando',
    desc: 'The signature crispy chicken sando the whole town talks about.',
    price: 'Rs. 590',
    tag: 'MOST HYPED',
    photo:
      'https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=900&auto=format&fit=crop',
    accent: 'var(--pink)',
  },
  {
    name: 'Brotherz Special Pizza',
    desc: 'Fresh dough, loaded toppings, cheese pull guaranteed.',
    price: 'from Rs. 649',
    tag: 'CHEESY',
    photo:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=900&auto=format&fit=crop',
    accent: 'var(--yellow)',
  },
  {
    name: 'Buffalo BBQ Wings',
    desc: 'Sticky, smoky, gone in sixty seconds.',
    price: 'from Rs. 500',
    tag: 'SPICY',
    photo:
      'https://images.unsplash.com/photo-1608039755401-742074f0548d?q=80&w=900&auto=format&fit=crop',
    accent: 'var(--red)',
  },
  {
    name: 'Loaded Fries',
    desc: 'Cheese sauce + crispy chicken + special drizzle. The real deal, straight from our kitchen.',
    price: 'Rs. 450',
    tag: 'FAN FAVE',
    photo: '/img/loaded-fries.jpg',
    accent: 'var(--green)',
  },
]

function Kinetic({ text }: { text: string }) {
  const ref = useReveal<HTMLHeadingElement>(0.4)
  return (
    <h2
      ref={ref}
      className="kinetic reveal-heading font-display uppercase text-white leading-none"
      style={{ fontSize: 'clamp(44px, 9vw, 130px)' }}
    >
      {text.split(' ').map((w, i) => (
        <span key={i} className="word mr-[0.22em]" style={{ ['--i' as string]: i }}>
          <span>{w}</span>
        </span>
      ))}
    </h2>
  )
}

export default function Bestsellers() {
  const gridRef = useReveal(0.08)
  return (
    <section id="bestsellers" className="relative py-20 sm:py-28 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, var(--purple-900), var(--purple-950))' }}
      />
      <div className="relative max-w-6xl mx-auto px-5">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-4">
          <div>
            <p
              className="flex items-center gap-2 font-bold uppercase tracking-[0.25em] text-sm mb-3"
              style={{ color: 'var(--yellow)' }}
            >
              <Flame size={16} /> The greatest hits
            </p>
            <Kinetic text="EVERYONE ORDERS THESE" />
          </div>
          <p className="text-white/60 max-w-xs text-sm leading-relaxed mb-2">
            Straight from the reviews — the four things Okara can't stop reordering.
          </p>
        </div>

        <div
          ref={gridRef}
          className="reveal-group grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10"
        >
          {CARDS.map((c, i) => (
            <article
              key={c.name}
              className="lift reveal-item group relative rounded-[28px] overflow-hidden"
              style={{
                background: 'var(--purple-800)',
                border: '1px solid rgba(255,246,233,0.1)',
                ['--rot' as string]: `${i % 2 === 0 ? -1 : 1}deg`,
                ['--reveal-delay' as string]: `${i * 100}ms`,
                ['--pop-rot' as string]: `${i % 2 === 0 ? -4 : 4}deg`,
              }}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={c.photo}
                  alt={c.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
                />
                <span
                  className="absolute top-3 left-3 sticker rounded-full px-3 py-1 text-[11px] font-extrabold uppercase"
                  style={{ background: c.accent, color: 'var(--purple-900)', transform: 'rotate(-4deg)' }}
                >
                  {c.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display uppercase text-xl text-white">{c.name}</h3>
                <p className="text-white/60 text-sm mt-1.5 leading-relaxed">{c.desc}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="font-display text-lg" style={{ color: c.accent }}>
                    {c.price}
                  </span>
                  <a
                    href="#visit"
                    className="rounded-full px-4 py-1.5 text-xs font-bold uppercase no-underline transition-transform hover:scale-105"
                    style={{ background: 'rgba(255,246,233,0.1)', color: 'white' }}
                  >
                    Order →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
