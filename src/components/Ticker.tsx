const WORDS = ['SANDO', 'LOADED FRIES', 'HOT WINGS', 'CHEESY PIZZA', 'CRISPY ZINGER', 'MALAI BOTI']

export default function Ticker({
  reverse = false,
  bg = 'var(--yellow)',
  rotate = -1.5,
}: {
  reverse?: boolean
  bg?: string
  rotate?: number
}) {
  const row = (
    <>
      {WORDS.map((w) => (
        <span key={w} className="flex items-center gap-6 px-6">
          <span className="font-display text-2xl sm:text-4xl uppercase whitespace-nowrap">{w}</span>
          <span className="font-display text-xl sm:text-3xl" aria-hidden>
            ✦
          </span>
        </span>
      ))}
    </>
  )
  return (
    <div
      className="relative py-3 sm:py-4 overflow-hidden"
      style={{
        background: bg,
        color: 'var(--purple-900)',
        transform: `rotate(${rotate}deg) scale(1.02)`,
        zIndex: 20,
      }}
    >
      <div className={`marquee-track${reverse ? ' reverse' : ''}`}>
        <div className="flex">{row}</div>
        <div className="flex" aria-hidden>
          {row}
        </div>
      </div>
    </div>
  )
}
