import { CTA } from "@/components/site/section"
import { Reveal, WordReveal } from "@/components/site/motion"
import { site, whatsappLink } from "@/lib/site"

export function CtaBand({
  title = "Let's build the thing your competitors will copy.",
  subtitle = "Tell us what slows your team down. We'll show you what it looks like automated — on a free 30-minute call.",
  primary = { href: "/contact", label: "Book a discovery call" },
}: {
  title?: string
  subtitle?: string
  primary?: { href: string; label: string }
}) {
  return (
    <section className="relative py-10 sm:py-16">
      <div className="container-x">
        <Reveal>
          <div className="noise relative overflow-hidden rounded-[2rem] border border-line bg-ink-2 px-6 py-16 text-center sm:px-12 sm:py-24">
            <div className="blueprint-grid absolute inset-0 opacity-60 animate-grid-drift" aria-hidden />
            <div
              className="pointer-events-none absolute left-1/2 top-full h-[520px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal/30 blur-[120px]"
              aria-hidden
            />
            <div className="relative mx-auto max-w-3xl">
              <p className="eyebrow mb-5">Ready when you are</p>
              <h2 className="text-3xl font-medium leading-[1.05] tracking-tight text-paper sm:text-5xl lg:text-6xl">
                <WordReveal text={title} />
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-base text-mute sm:text-lg">{subtitle}</p>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <CTA href={primary.href} size="lg">
                  {primary.label}
                </CTA>
                <CTA href={whatsappLink("Hi Opencoders! I'd like to discuss a project.")} variant="ghost" size="lg" external icon="up">
                  WhatsApp us
                </CTA>
              </div>
              <p className="mt-6 text-xs text-mute-2">
                Or email <a href={`mailto:${site.email}`} className="text-paper-2 underline-offset-4 hover:underline">{site.email}</a>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
