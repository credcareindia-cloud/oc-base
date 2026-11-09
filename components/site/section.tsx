import * as React from "react"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Reveal } from "@/components/site/motion"

export function Section({
  children,
  className,
  id,
  bleed = false,
}: {
  children: React.ReactNode
  className?: string
  id?: string
  bleed?: boolean
}) {
  return (
    <section id={id} className={cn("relative scroll-mt-24 py-20 sm:py-28 lg:py-36", className)}>
      {bleed ? children : <div className="container-x">{children}</div>}
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  action,
}: {
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: "left" | "center"
  className?: string
  action?: { href: string; label: string }
}) {
  return (
    <div className={cn("mb-12 sm:mb-16 lg:mb-20", align === "center" && "mx-auto max-w-3xl text-center", className)}>
      <div className={cn("flex flex-col gap-6", align === "left" && "lg:flex-row lg:items-end lg:justify-between")}>
        <div className="max-w-3xl">
          {eyebrow && (
            <Reveal>
              <p className="eyebrow mb-4">{eyebrow}</p>
            </Reveal>
          )}
          <Reveal delay={0.05}>
            <h2 className="text-balance text-3xl font-medium leading-[1.05] tracking-tight text-paper sm:text-4xl md:text-5xl lg:text-[3.4rem]">
              {title}
            </h2>
          </Reveal>
          {description && (
            <Reveal delay={0.1}>
              <p className={cn("mt-5 max-w-2xl text-base leading-relaxed text-mute sm:text-lg", align === "center" && "mx-auto")}>{description}</p>
            </Reveal>
          )}
        </div>
        {action && (
          <Reveal delay={0.15}>
            <Link href={action.href} className="group inline-flex items-center gap-2 text-sm font-medium text-paper-2 hover:text-signal">
              {action.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        )}
      </div>
    </div>
  )
}

type BtnProps = {
  href: string
  children: React.ReactNode
  variant?: "primary" | "secondary" | "ghost"
  size?: "md" | "lg"
  className?: string
  external?: boolean
  icon?: "arrow" | "up" | "none"
}

export function CTA({ href, children, variant = "primary", size = "md", className, external, icon = "arrow" }: BtnProps) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-medium transition-all duration-300 active:scale-[0.98] focus-visible:outline-none"
  const sizes = size === "lg" ? "h-13 px-7 text-base sm:h-14 sm:px-8" : "h-11 px-5 text-sm sm:h-12 sm:px-6"
  const variants = {
    primary: "bg-signal text-white hover:bg-signal-2 signal-glow",
    secondary: "bg-paper text-ink hover:bg-white",
    ghost: "border border-line-2 text-paper hover:border-paper/40 hover:bg-white/[0.04]",
  }[variant]
  const Icon = icon === "up" ? ArrowUpRight : ArrowRight
  const content = (
    <>
      {variant === "primary" && (
        <span className="pointer-events-none absolute inset-y-0 w-1/3 bg-white/25 blur-md animate-shine opacity-0 group-hover:opacity-100" aria-hidden />
      )}
      <span className="relative">{children}</span>
      {icon !== "none" && (
        <Icon className={cn("relative h-4 w-4 transition-transform duration-300", icon === "up" ? "group-hover:translate-x-0.5 group-hover:-translate-y-0.5" : "group-hover:translate-x-1")} />
      )}
    </>
  )
  const cls = cn(base, sizes, variants, className)
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {content}
      </a>
    )
  }
  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  )
}
