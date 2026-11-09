"use client"

import * as React from "react"
import {
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
  animate,
  type MotionValue,
} from "framer-motion"
import { cn } from "@/lib/utils"

const EASE = [0.2, 0.8, 0.2, 1] as const

/* ───────── Reveal: fade + rise when scrolled into view ───────── */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  once = true,
  as: Tag = "div",
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
  once?: boolean
  as?: "div" | "section" | "li" | "span" | "p" | "h2" | "h3"
}) {
  const reduce = useReducedMotion()
  const MotionTag = motion[Tag] as typeof motion.div
  return (
    <MotionTag
      className={className}
      initial={reduce ? false : { opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  )
}

/* ───────── Stagger container ───────── */
export function Stagger({
  children,
  className,
  stagger = 0.08,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  stagger?: number
  delay?: number
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
    >
      {children}
    </motion.div>
  )
}

export const staggerItem = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: EASE } },
}

export function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  )
}

/* ───────── WordReveal: headline words rise in sequence ───────── */
export function WordReveal({
  text,
  className,
  delay = 0,
  highlight,
}: {
  text: string
  className?: string
  delay?: number
  highlight?: string[]
}) {
  const reduce = useReducedMotion()
  const words = text.split(" ")
  const norm = (s: string) => s.replace(/[^\w]/g, "").toLowerCase()
  return (
    <span className={cn("inline", className)} aria-label={text}>
      {words.map((w, i) => {
        const clean = norm(w)
        const isHi = highlight?.some((h) => norm(h) === clean)
        return (
          <span key={i} className="inline-block overflow-hidden align-bottom pb-[0.08em] -mb-[0.08em]">
            <motion.span
              className={cn("inline-block will-change-transform", isHi && "text-signal")}
              initial={reduce ? false : { y: "110%", rotate: 4 }}
              animate={{ y: 0, rotate: 0 }}
              transition={{ duration: 0.9, delay: delay + i * 0.06, ease: EASE }}
              aria-hidden
            >
              {w}
              {i < words.length - 1 ? "\u00A0" : ""}
            </motion.span>
          </span>
        )
      })}
    </span>
  )
}

/* ───────── ScrollText: paragraph words light up as you scroll ───────── */
function ScrollWord({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.14, 1])
  const color = useTransform(progress, range, ["#52525b", "#fafaf9"])
  return (
    <motion.span style={{ opacity, color }} className="inline-block mr-[0.28em] will-change-[opacity]">
      {children}
    </motion.span>
  )
}

export function ScrollText({ text, className, accentWords = [] }: { text: string; className?: string; accentWords?: string[] }) {
  const ref = React.useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] })
  const words = text.split(" ")
  return (
    <p ref={ref} className={cn("flex flex-wrap", className)}>
      {words.map((w, i) => {
        const start = i / words.length
        const end = start + 1 / words.length
        const clean = w.replace(/[^\w]/g, "").toLowerCase()
        if (accentWords.some((a) => a.toLowerCase() === clean)) {
          return (
            <span key={i} className="inline-block mr-[0.28em] text-signal">
              {w}
            </span>
          )
        }
        return (
          <ScrollWord key={i} progress={scrollYProgress} range={[start, end]}>
            {w}
          </ScrollWord>
        )
      })}
    </p>
  )
}

/* ───────── Counter ───────── */
export function Counter({
  value,
  decimals = 0,
  suffix = "",
  prefix = "",
  className,
  duration = 1.8,
}: {
  value: number
  decimals?: number
  suffix?: string
  prefix?: string
  className?: string
  duration?: number
}) {
  const ref = React.useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-20% 0px" })
  const [display, setDisplay] = React.useState(0)
  React.useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v),
    })
    return () => controls.stop()
  }, [inView, value, duration])
  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  )
}

/* ───────── Parallax ───────── */
export function Parallax({
  children,
  className,
  speed = 0.2,
}: {
  children: React.ReactNode
  className?: string
  speed?: number
}) {
  const ref = React.useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [speed * -200, speed * 200])
  return (
    <motion.div ref={ref} style={reduce ? undefined : { y }} className={className}>
      {children}
    </motion.div>
  )
}

/* ───────── Marquee ───────── */
export function Marquee({
  children,
  className,
  reverse = false,
  duration = 40,
  pauseOnHover = true,
}: {
  children: React.ReactNode
  className?: string
  reverse?: boolean
  duration?: number
  pauseOnHover?: boolean
}) {
  return (
    <div className={cn("group flex overflow-hidden fade-edges-x", className)} style={{ ["--marquee-duration" as string]: `${duration}s` }}>
      <div
        className={cn(
          "flex w-max shrink-0 items-center gap-10 pr-10",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {children}
        {children}
      </div>
    </div>
  )
}

/* ───────── Magnetic ───────── */
export function Magnetic({ children, className, strength = 0.35 }: { children: React.ReactNode; className?: string; strength?: number }) {
  const ref = React.useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 })
  const reduce = useReducedMotion()

  const onMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * strength)
    y.set((e.clientY - (r.top + r.height / 2)) * strength)
  }
  const onLeave = () => {
    x.set(0)
    y.set(0)
  }
  return (
    <motion.div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} style={{ x: sx, y: sy }} className={cn("inline-block", className)}>
      {children}
    </motion.div>
  )
}

/* ───────── TiltCard: 3D hover + spotlight ───────── */
export function TiltCard({ children, className, max = 8 }: { children: React.ReactNode; className?: string; max?: number }) {
  const ref = React.useRef<HTMLDivElement>(null)
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const mx = useMotionValue(50)
  const my = useMotionValue(50)
  const srx = useSpring(rx, { stiffness: 200, damping: 20 })
  const sry = useSpring(ry, { stiffness: 200, damping: 20 })
  const reduce = useReducedMotion()
  const spotlight = useTransform([mx, my], ([x, y]) => `radial-gradient(420px circle at ${x}% ${y}%, rgba(255,90,31,0.14), transparent 60%)`)

  const onMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    mx.set(px * 100)
    my.set(py * 100)
    ry.set((px - 0.5) * max * 2)
    rx.set(-(py - 0.5) * max * 2)
  }
  const onLeave = () => {
    rx.set(0)
    ry.set(0)
  }
  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 1000 }}
      className={cn("relative will-change-transform", className)}
    >
      <motion.div style={{ background: spotlight }} className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden />
      {children}
    </motion.div>
  )
}

/* ───────── Scroll progress bar ───────── */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })
  return <motion.div style={{ scaleX }} className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-signal" aria-hidden />
}
