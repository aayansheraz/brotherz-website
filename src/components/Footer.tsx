import { Phone } from 'lucide-react'
import InstagramIcon from './InstagramIcon'
import { INFO } from '../data/menu'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden pt-16 pb-8" style={{ background: 'var(--purple-950)' }}>
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex flex-wrap items-center justify-between gap-6 pb-10 border-b border-white/10">
          <div className="flex items-center gap-4">
            <img src="/img/logo.png" alt="Brotherz" className="h-12 w-auto" draggable={false} />
            <p className="text-white/70 text-sm max-w-xs">
              Fresh, fast & full of flavor.
              <br />
              M.A Jinnah Road, Okara.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={INFO.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:scale-110 hover:border-(--yellow) transition-transform"
            >
              <InstagramIcon size={20} />
            </a>
            <a
              href={INFO.phoneHref}
              aria-label="Call"
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:scale-110 hover:border-(--yellow) transition-transform"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>

        <div
          className="font-display uppercase text-center select-none leading-none pt-10 text-stroke"
          style={{ fontSize: 'clamp(64px, 17vw, 260px)' }}
        >
          BROTHERZ
        </div>

        <p className="text-center text-white/40 text-xs mt-6">
          © {new Date().getFullYear()} Brotherz Pk · Made fresh in Okara
        </p>
      </div>
    </footer>
  )
}
