"use client"

import * as React from "react"
import Lenis from "lenis"
import { usePathname } from "next/navigation"

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const lenisRef = React.useRef<Lenis | null>(null)

  React.useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) return

    const lenis = new Lenis({
      lerp: 0.09,
      smoothWheel: true,
      syncTouch: false,
      anchors: { offset: -96 },
    })
    lenisRef.current = lenis
    let raf = 0
    const loop = (t: number) => {
      lenis.raf(t)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  React.useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      // let the new route paint, then jump to the anchor
      const id = window.setTimeout(() => {
        const el = document.querySelector<HTMLElement>(hash)
        if (!el) return
        if (lenisRef.current) lenisRef.current.scrollTo(el, { offset: -96, immediate: true })
        else el.scrollIntoView()
      }, 60)
      return () => window.clearTimeout(id)
    }
    lenisRef.current?.scrollTo(0, { immediate: true })
  }, [pathname])

  return <>{children}</>
}
