"use client"

import { motion, useReducedMotion } from "framer-motion"
import { CheckCircle2, GraduationCap, PlayCircle, Users, Workflow } from "lucide-react"

const EASE = [0.2, 0.8, 0.2, 1] as const

/* A compact Broline LMS mock: course progress, a running lesson and a cohort row. */
export function LmsVisual() {
  const reduce = useReducedMotion()
  const fade = (delay: number, y = 14) =>
    reduce
      ? {}
      : { initial: { opacity: 0, y }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.7, delay, ease: EASE } }

  const lessons = [
    { t: "01 · Map your workflows", done: true },
    { t: "02 · Connect CRM ↔ WhatsApp", done: true },
    { t: "03 · Build your first AI agent", done: false, live: true },
    { t: "04 · Reporting that runs itself", done: false },
  ]

  return (
    <div className="relative mx-auto w-full max-w-[520px] lg:max-w-none" aria-hidden>
      <motion.div {...fade(0.2)} className="glass noise relative rounded-3xl p-5 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.9)]">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-signal text-white">
              <GraduationCap className="h-4.5 w-4.5" />
            </span>
            <div>
              <p className="text-sm font-medium text-paper">Automate your business</p>
              <p className="font-mono text-[10px] uppercase tracking-wider text-mute-2">Broline LMS · Cohort 07</p>
            </div>
          </div>
          <span className="rounded-full bg-emerald-400/15 px-2.5 py-1 font-mono text-[10px] text-emerald-300">Week 3 / 4</span>
        </div>

        <div className="mb-4 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
          <motion.span
            initial={reduce ? false : { width: 0 }}
            whileInView={{ width: "68%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.6, ease: EASE }}
            className="block h-full rounded-full bg-gradient-to-r from-signal-deep to-signal"
          />
        </div>

        <ul className="space-y-1.5">
          {lessons.map((l, i) => (
            <motion.li
              key={l.t}
              {...fade(0.5 + i * 0.1, 8)}
              className={`flex items-center justify-between rounded-xl border px-3 py-2.5 text-[13px] ${
                l.live ? "border-signal/40 bg-signal/10 text-paper" : "border-line bg-ink/50 text-paper-2"
              }`}
            >
              <span className="flex items-center gap-2.5">
                {l.done ? (
                  <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                ) : l.live ? (
                  <PlayCircle className="h-4 w-4 text-signal" />
                ) : (
                  <span className="h-4 w-4 rounded-full border border-line-2" />
                )}
                {l.t}
              </span>
              {l.live && (
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-signal">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
                  </span>
                  Live now
                </span>
              )}
            </motion.li>
          ))}
        </ul>

        <div className="mt-4 flex items-center justify-between border-t border-line pt-4">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {["bg-signal", "bg-emerald-400", "bg-sky-400", "bg-violet-400"].map((c, i) => (
                <span key={i} className={`h-6 w-6 rounded-full border-2 border-ink-2 ${c}`} />
              ))}
            </div>
            <span className="text-xs text-mute">
              <Users className="mr-1 inline h-3 w-3" />
              24 learners in this cohort
            </span>
          </div>
          <span className="hidden items-center gap-1.5 whitespace-nowrap font-mono text-[10px] uppercase tracking-wider text-mute-2 sm:inline-flex">
            <Workflow className="h-3 w-3 text-signal" /> Project due Fri
          </span>
        </div>
      </motion.div>

      {/* certificate chip */}
      <motion.div
        {...fade(1.1, 20)}
        className="glass absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-xl sm:-left-8"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-paper">
          <GraduationCap className="h-4 w-4" />
        </span>
        <div>
          <p className="text-xs font-medium text-paper">Broline certificate</p>
          <p className="font-mono text-[10px] uppercase tracking-wider text-mute-2">Issued on completion</p>
        </div>
      </motion.div>
    </div>
  )
}
