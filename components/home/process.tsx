"use client"

import * as React from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { process } from "@/lib/content"
import { Section, SectionHeading } from "@/components/site/section"
import { Reveal } from "@/components/site/motion"

export function Process() {
  const ref = React.useRef<HTMLOListElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] })
  const scale = useSpring(scrollYProgress, { stiffness: 80, damping: 24 })

  return (
    <Section id="process" className="bg-ink-2/30">
      <SectionHeading
        eyebrow="How we work"
        title={
          <>
            Discovery to launch in <span className="text-mute">weeks,</span> not quarters.
          </>
        }
        description="A simple, transparent process. You see working software every Friday, and you always know what ships next."
        align="center"
      />

      <ol ref={ref} className="relative grid gap-10 lg:grid-cols-4 lg:gap-8">
        {/* Progress line */}
        <div className="absolute left-[1.35rem] top-0 h-full w-px bg-line lg:left-0 lg:top-7 lg:h-px lg:w-full" aria-hidden>
          <motion.div style={{ scaleY: scale, scaleX: scale }} className="h-full w-full origin-top bg-signal lg:origin-left" />
        </div>

        {process.map((p, i) => {
          const Icon = p.icon
          return (
            <Reveal key={p.step} delay={i * 0.08} as="li" className="relative pl-16 lg:pl-0">
              <div className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-full border border-line-2 bg-ink text-paper lg:relative lg:mb-8 lg:h-14 lg:w-14">
                <Icon className="h-5 w-5 lg:h-6 lg:w-6" strokeWidth={1.5} />
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-signal font-mono text-[9px] font-semibold text-white">
                  {i + 1}
                </span>
              </div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-mute-2">Step {p.step}</p>
              <h3 className="mt-2 text-2xl font-medium tracking-tight text-paper">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mute sm:text-base">{p.text}</p>
            </Reveal>
          )
        })}
      </ol>
    </Section>
  )
}
