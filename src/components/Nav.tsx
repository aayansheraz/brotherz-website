import { useEffect, useState } from 'react'
import { Menu as MenuIcon, Phone, X } from 'lucide-react'
import { INFO } from '../data/menu'

const LINKS = [
  { href: '#bestsellers', label: 'Bestsellers' },
  { href: '#menu', label: 'Menu' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#visit', label: 'Visit Us' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-0 inset-x-0" style={{ zIndex: 100 }}>
      <nav
        className="mx-auto mt-3 sm:mt-4 flex items-center justify-between rounded-full px-4 sm:px-6 py-2.5 max-w-5xl transition-all duration-300"
        style={{
          width: 'calc(100% - 24px)',
          background: scrolled ? 'rgba(32, 11, 51, 0.85)' : 'rgba(32, 11, 51, 0.35)',
          backdropFilter: 'blur(14px)',
          border: '1px solid rgba(255,246,233,0.12)',
          boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.35)' : 'none',
        }}
      >
        <a href="#hero" className="flex items-center no-underline">
          <img
            src="img/logo.png"
            alt="Brotherz"
            className="h-9 w-auto transition-transform duration-300 hover:scale-105 hover:-rotate-2"
            draggable={false}
          />
        </a>

        <div className="hidden md:flex items-center gap-7">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="navlink text-sm font-semibold text-white/80 hover:text-white transition-colors no-underline"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={INFO.phoneHref}
            className="hidden sm:flex items-center gap-2 rounded-full px-5 py-2.5 font-bold text-sm no-underline hover:scale-[1.05] active:scale-95"
            style={{
              background: 'var(--yellow)',
              color: 'var(--purple-900)',
              transition: 'transform 150ms',
            }}
          >
            <Phone size={15} strokeWidth={2.5} /> Order Now
          </a>
          <button
            aria-label="Toggle menu"
            className="md:hidden w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </nav>

      {/* mobile drawer */}
      {open && (
        <div
          className="md:hidden mx-3 mt-2 rounded-3xl p-5 panel-in"
          style={{
            background: 'rgba(32, 11, 51, 0.96)',
            backdropFilter: 'blur(14px)',
            border: '1px solid rgba(255,246,233,0.12)',
          }}
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 font-display text-2xl uppercase text-white no-underline border-b border-white/10 last:border-0"
            >
              {l.label}
            </a>
          ))}
          <a
            href={INFO.phoneHref}
            className="mt-4 flex items-center justify-center gap-2 rounded-full px-5 py-3 font-bold no-underline"
            style={{ background: 'var(--yellow)', color: 'var(--purple-900)' }}
          >
            <Phone size={16} strokeWidth={2.5} /> {INFO.phone}
          </a>
        </div>
      )}
    </header>
  )
}
