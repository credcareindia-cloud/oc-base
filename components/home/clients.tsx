import Image from "next/image"
import { Marquee, Reveal } from "@/components/site/motion"
import { clients } from "@/lib/content"

export function Clients() {
  return (
    <section id="clients" className="relative scroll-mt-24 border-y border-line bg-ink-2/40 py-12 sm:py-16">
      <div className="container-x">
        <Reveal>
          <p className="mb-8 text-center font-mono text-[11px] uppercase tracking-[0.22em] text-mute-2">
            Trusted by builders, retailers and brands across India & the UAE
          </p>
        </Reveal>
      </div>
      <Marquee duration={38}>
        {clients.map((c) => (
          <div
            key={c.name}
            className="flex h-16 w-32 shrink-0 items-center justify-center rounded-xl border border-line bg-white/[0.92] px-4 transition-all duration-500 hover:bg-white sm:h-[72px] sm:w-40"
            title={c.name}
          >
            <Image src={c.logo} alt={`${c.name} logo`} width={160} height={64} className="h-11 w-auto max-w-[120px] object-contain grayscale transition-all duration-500 hover:grayscale-0 sm:h-12" />
          </div>
        ))}
      </Marquee>
    </section>
  )
}
