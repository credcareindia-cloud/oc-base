import { ScrollText, Reveal } from "@/components/site/motion"

export function Manifesto() {
  return (
    <section className="relative py-28 sm:py-40">
      <div className="pointer-events-none absolute left-[-10%] top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-signal/10 blur-[160px]" aria-hidden />
      <div className="container-x">
        <Reveal>
          <p className="eyebrow mb-8">Why we exist</p>
        </Reveal>
        <ScrollText
          className="max-w-5xl font-display text-[1.9rem] font-medium leading-[1.18] tracking-[-0.02em] sm:text-4xl md:text-5xl lg:text-[3.6rem]"
          accentWords={["heroics", "systems"]}
          text="The AEC industry still runs on spreadsheets, PDFs and heroics. We replace heroics with systems — BIM tools, automations, digital twins and AI that fit the way studios and sites actually work. Then we connect the business behind it: leads, people, money and stock, in sync."
        />
      </div>
    </section>
  )
}
