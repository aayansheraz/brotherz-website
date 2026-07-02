import { Clock, MapPin, Phone } from 'lucide-react'
import InstagramIcon from './InstagramIcon'
import { INFO } from '../data/menu'
import { useReveal } from '../hooks'

export default function Visit() {
  const ref = useReveal(0.12)
  return (
    <section id="visit" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'var(--purple-900)' }} />
      <div ref={ref} className="reveal reveal-group relative max-w-6xl mx-auto px-5">
        <h2
          className="font-display uppercase text-white text-center leading-none mb-12"
          style={{ fontSize: 'clamp(40px, 8vw, 110px)' }}
        >
          PULL <span style={{ color: 'var(--yellow)' }}>UP</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          {/* info card */}
          <div
            className="rounded-[32px] p-7 sm:p-9 flex flex-col gap-6"
            style={{ background: 'var(--purple-800)', border: '1px solid rgba(255,246,233,0.1)' }}
          >
            {[
              { Icon: MapPin, title: 'Find us', body: INFO.address },
              { Icon: Clock, title: 'Hours', body: INFO.hours },
              { Icon: Phone, title: 'Call & order', body: INFO.phone, href: INFO.phoneHref },
              { Icon: InstagramIcon, title: 'Follow the drip', body: '@brotherzpk', href: INFO.instagram },
            ].map(({ Icon, title, body, href }, i) => (
              <div
                key={title}
                className="reveal-item flex items-start gap-4"
                style={{ ['--reveal-delay' as string]: `${i * 90}ms` }}
              >
                <span
                  className="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: 'rgba(255,196,46,0.14)', color: 'var(--yellow)' }}
                >
                  <Icon size={22} />
                </span>
                <div>
                  <p className="font-bold uppercase tracking-widest text-xs text-white/50">{title}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className="text-white text-lg font-semibold no-underline hover:text-(--yellow) transition-colors"
                    >
                      {body}
                    </a>
                  ) : (
                    <p className="text-white text-lg font-semibold">{body}</p>
                  )}
                </div>
              </div>
            ))}

            <a
              href={INFO.phoneHref}
              className="mt-auto flex items-center justify-center gap-3 rounded-full py-4 font-display uppercase text-xl no-underline hover:scale-[1.02] active:scale-95"
              style={{ background: 'var(--yellow)', color: 'var(--purple-900)', transition: 'transform 150ms' }}
            >
              <Phone size={20} strokeWidth={2.5} />
              Craving it? Order now
            </a>
          </div>

          {/* map (with branded fallback behind, in case embeds are blocked) */}
          <div
            className="relative rounded-[32px] overflow-hidden min-h-[380px]"
            style={{ border: '1px solid rgba(255,246,233,0.1)', background: 'var(--purple-800)' }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center p-8">
              <MapPin size={44} className="animate-wiggle" style={{ color: 'var(--yellow)' }} />
              <p className="font-display uppercase text-2xl text-white">RC3J+3F · Okara</p>
              <p className="text-white/60 text-sm max-w-xs">{INFO.address}</p>
              <a
                href={INFO.mapsLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full px-6 py-3 font-bold text-sm no-underline hover:scale-105 transition-transform"
                style={{ background: 'var(--green)', color: 'var(--purple-900)' }}
              >
                <MapPin size={16} /> Open in Google Maps
              </a>
            </div>
            <iframe
              title="Brotherz Pk on Google Maps"
              src={INFO.mapsEmbed}
              className="relative w-full h-full"
              style={{ border: 0, minHeight: 380, filter: 'saturate(0.9)' }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
