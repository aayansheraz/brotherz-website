import { useState } from 'react'
import { Info } from 'lucide-react'
import { CATEGORIES } from '../data/menu'
import { useReveal } from '../hooks'

export default function MenuSection() {
  const [active, setActive] = useState(CATEGORIES[0].id)
  const headRef = useReveal<HTMLDivElement>(0.3)
  const cat = CATEGORIES.find((c) => c.id === active)!

  return (
    <section id="menu" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'var(--purple-950)' }} />
      {/* giant ghost word */}
      <span
        className="absolute top-8 left-1/2 -translate-x-1/2 font-display uppercase text-stroke pointer-events-none select-none"
        style={{ fontSize: 'clamp(80px, 16vw, 240px)', lineHeight: 1, whiteSpace: 'nowrap' }}
      >
        THE MENU
      </span>

      <div className="relative max-w-5xl mx-auto px-5 pt-20 sm:pt-32">
        <div ref={headRef} className="reveal text-center mb-10">
          <h2 className="font-display uppercase text-white" style={{ fontSize: 'clamp(40px, 7vw, 84px)', lineHeight: 1 }}>
            PICK YOUR <span style={{ color: 'var(--yellow)' }}>FIGHTER</span>
          </h2>
          <p className="text-white/60 mt-3 text-sm sm:text-base">
            Every category, made fresh when you order it.
          </p>
        </div>

        {/* tabs — editorial numbered index */}
        <div
          className="flex flex-wrap items-baseline justify-center gap-x-8 gap-y-4 mb-12 pb-5"
          style={{ borderBottom: '1px solid rgba(255,246,233,0.12)' }}
        >
          {CATEGORIES.map((c, i) => {
            const on = c.id === active
            return (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`tab-btn${on ? ' on' : ''} group relative flex items-baseline gap-2 transition-transform duration-200 hover:-translate-y-0.5 active:scale-95`}
              >
                <span
                  className="text-[11px] font-bold transition-colors duration-200"
                  style={{ color: on ? 'var(--yellow)' : 'rgba(255,246,233,0.35)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  className="font-display uppercase text-xl sm:text-[26px] transition-colors duration-200 group-hover:text-white"
                  style={{ color: on ? 'white' : 'rgba(255,246,233,0.38)', lineHeight: 1 }}
                >
                  {c.label}
                </span>
                <span className="tab-underline" aria-hidden />
              </button>
            )
          })}
        </div>

        {/* items */}
        <div key={cat.id} className="panel-in grid grid-cols-1 md:grid-cols-2 gap-4">
          {cat.items.map((item, i) => (
            <div
              key={item.name}
              className="panel-in group flex items-center gap-4 rounded-3xl p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:rotate-[-0.5deg]"
              style={{
                background: 'var(--purple-800)',
                border: '1px solid rgba(255,246,233,0.09)',
                animationDelay: `${i * 60}ms`,
              }}
            >
              <div
                className="shrink-0 w-1.5 self-stretch rounded-full transition-all duration-300 group-hover:w-2.5"
                style={{ background: 'var(--yellow)', opacity: 0.7 }}
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-display uppercase text-lg text-white leading-tight">{item.name}</h3>
                  {item.tag && (
                    <span
                      className="rounded-full px-2 py-0.5 text-[10px] font-extrabold"
                      style={{ background: 'var(--pink)', color: 'var(--purple-900)' }}
                    >
                      {item.tag}
                    </span>
                  )}
                </div>
                {item.desc && <p className="text-white/55 text-xs sm:text-sm mt-1 leading-relaxed">{item.desc}</p>}
              </div>
              <span
                className="shrink-0 font-display text-base sm:text-lg whitespace-nowrap transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
                style={{ color: 'var(--yellow)' }}
              >
                {item.price}
              </span>
            </div>
          ))}
        </div>

        {cat.note && (
          <p
            className="flex items-start gap-2 mt-6 text-sm text-white/60 rounded-2xl p-4"
            style={{ background: 'rgba(255,246,233,0.05)', border: '1px dashed rgba(255,246,233,0.18)' }}
          >
            <Info size={16} className="shrink-0 mt-0.5" style={{ color: 'var(--yellow)' }} />
            {cat.note}
          </p>
        )}
      </div>
    </section>
  )
}
