"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { Logo } from "@/components/site/logo"
import { nav, site, whatsappLink } from "@/lib/site"
import { cn } from "@/lib/utils"

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const [hidden, setHidden] = React.useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0
    setScrolled(y > 24)
    setHidden(y > 160 && y > prev && !open)
  })

  React.useEffect(() => setOpen(false), [pathname])
  React.useEffect(() => {
    document.documentElement.classList.toggle("lenis-stopped", open)
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <>
      <motion.header
        animate={{ y: hidden ? -110 : 0 }}
        transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-5 sm:pt-4"
      >
        <nav
          aria-label="Primary"
          className={cn(
            "container-x flex h-14 items-center justify-between rounded-2xl transition-all duration-500 sm:h-16",
            scrolled || open ? "glass shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)]" : "border border-transparent"
          )}
        >
          <Link href="/" className="flex items-center gap-2" aria-label="Opencoders home">
            <Logo className="h-6 sm:h-7" priority />
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {nav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + "/")
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "relative rounded-full px-4 py-2 text-sm text-mute transition-colors hover:text-paper",
                      active && "text-paper"
                    )}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-white/[0.06]"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative">{item.label}</span>
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="group hidden items-center gap-1.5 rounded-full bg-paper px-4 py-2 text-sm font-medium text-ink transition-all hover:bg-signal hover:text-white sm:inline-flex"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-paper md:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-ink/95 backdrop-blur-xl md:hidden"
          >
            <div className="blueprint-grid absolute inset-0 opacity-50" aria-hidden />
            <div className="relative flex h-full flex-col px-6 pb-10 pt-28">
              <ul className="flex flex-col gap-2">
                {[...nav, { href: "/contact", label: "Contact" }].map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.06, duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center justify-between border-b border-line py-5 font-display text-3xl font-medium tracking-tight",
                        pathname === item.href ? "text-signal" : "text-paper"
                      )}
                    >
                      {item.label}
                      <ArrowUpRight className="h-6 w-6 text-mute" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-auto flex flex-col gap-3"
              >
                <a
                  href={whatsappLink("Hi Opencoders! I'd like to talk about a project.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-14 items-center justify-center rounded-2xl bg-signal text-base font-medium text-white"
                >
                  Chat on WhatsApp
                </a>
                <a href={`mailto:${site.email}`} className="text-center text-sm text-mute">
                  {site.email}
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
