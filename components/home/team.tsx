"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { team } from "@/lib/content"
import { SectionHeading } from "@/components/site/section"
import { cn } from "@/lib/utils"

export function Team({ compact = true }: { compact?: boolean }) {
  const [constraint, setConstraint] = React.useState(0)
  const wrap = React.useRef<HTMLDivElement>(null)
  const track = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const measure = () => {
      if (!wrap.current || !track.current) return
      setConstraint(Math.max(0, track.current.scrollWidth - wrap.current.offsetWidth))
    }
    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [])

  return (
    <section id="team" className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28 lg:py-36">
      <div className="container-x">
        <SectionHeading
          eyebrow="The people"
          title={
            <>
              Young, hands-on and <span className="text-mute">obsessed</span> with the build.
            </>
          }
          description="Engineers, marketers and operators under one roof — you talk to the people doing the work, not an account layer."
          action={compact ? { href: "/about", label: "Meet the full team" } : undefined}
        />
      </div>

      <div ref={wrap} className="container-x cursor-grab active:cursor-grabbing">
        <motion.div
          ref={track}
          drag="x"
          dragConstraints={{ left: -constraint, right: 0 }}
          dragElastic={0.08}
          dragTransition={{ power: 0.25, timeConstant: 200 }}
          className="flex w-max gap-4 pr-6 sm:gap-6"
        >
          {team.map((m, i) => (
            <motion.figure
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ delay: i * 0.05, duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
              className={cn("group relative aspect-[4/5] w-[240px] shrink-0 overflow-hidden rounded-[1.5rem] border border-line bg-ink-2 sm:w-[280px]", i % 2 === 1 && "sm:mt-10")}
            >
              <Image
                src={m.image}
                alt={`${m.name}, ${m.role} at Opencoders`}
                fill
                sizes="(max-width: 640px) 240px, 280px"
                draggable={false}
                className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" aria-hidden />
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-xl font-medium tracking-tight text-paper">{m.name}</p>
                <p className="mt-0.5 text-sm text-mute">{m.role}</p>
              </figcaption>
              <span className="absolute right-4 top-4 h-2 w-2 rounded-full bg-signal opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.figure>
          ))}
        </motion.div>
      </div>
      <p className="container-x mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-mute-2">Drag to explore →</p>
    </section>
  )
}
