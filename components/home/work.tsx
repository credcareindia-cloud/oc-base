import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { work } from "@/lib/content"
import { Section, SectionHeading } from "@/components/site/section"
import { Stagger, StaggerItem } from "@/components/site/motion"

export function Work() {
  return (
    <Section id="work">
      <SectionHeading
        eyebrow="Selected work"
        title={
          <>
            Shipped, live and <span className="text-mute">making money.</span>
          </>
        }
        action={{ href: "/contact", label: "Become the next case study" }}
      />
      <Stagger className="grid gap-5 md:grid-cols-3">
        {work.map((w) => (
          <StaggerItem key={w.title}>
            <article className="group card-surface card-hover noise relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-[1.75rem] p-7">
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${w.accent} via-transparent to-transparent opacity-70 transition-opacity duration-700 group-hover:opacity-100`} aria-hidden />
              <div className="blueprint-grid-fine absolute inset-0 opacity-50" aria-hidden />
              <div className="relative flex items-start justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2.5 shadow-lg">
                  <Image src={w.image} alt={`${w.title} logo`} width={64} height={64} className="h-full w-full object-contain" />
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-paper-2 transition-all duration-500 group-hover:rotate-45 group-hover:border-signal group-hover:text-signal">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
              <div className="relative">
                <p className="eyebrow mb-3">{w.category}</p>
                <h3 className="text-2xl font-medium tracking-tight text-paper">{w.title}</h3>
                <p className="mt-2 text-sm text-mute">{w.result}</p>
              </div>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  )
}
