import { useEffect, useRef } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Bestsellers from './components/Bestsellers'
import MenuSection from './components/MenuSection'
import Reviews from './components/Reviews'
import Vibes from './components/Vibes'
import Visit from './components/Visit'
import Footer from './components/Footer'

function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      if (ref.current) ref.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 right-0 h-1 origin-left"
      style={{ background: 'var(--yellow)', transform: 'scaleX(0)', zIndex: 110 }}
    />
  )
}

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <Hero />
      <Ticker />
      <Bestsellers />
      <MenuSection />
      <Ticker reverse bg="var(--pink)" rotate={1.5} />
      <Reviews />
      <Vibes />
      <Visit />
      <Footer />
    </>
  )
}
