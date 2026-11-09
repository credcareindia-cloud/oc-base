"use client"

import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = React.useState<number | null>(0)
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={`faq-${i}`}
              className="group flex w-full items-start justify-between gap-6 py-6 text-left sm:py-7"
            >
              <span className={cn("font-display text-lg font-medium tracking-tight transition-colors sm:text-xl", isOpen ? "text-paper" : "text-paper-2 group-hover:text-paper")}>
                {item.q}
              </span>
              <span
                className={cn(
                  "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line transition-all duration-300",
                  isOpen ? "rotate-45 border-signal bg-signal text-white" : "text-mute group-hover:border-line-2"
                )}
              >
                <Plus className="h-4 w-4" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-3xl pb-7 text-base leading-relaxed text-mute">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
