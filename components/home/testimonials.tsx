import { Quote, Star } from "lucide-react"
import { testimonials } from "@/lib/content"
import { SectionHeading } from "@/components/site/section"
import { Marquee } from "@/components/site/motion"
import { site } from "@/lib/site"

function Card({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <figure className="card-surface relative flex w-[320px] shrink-0 flex-col rounded-3xl p-6 sm:w-[400px] sm:p-7">
      <Quote className="absolute right-6 top-6 h-8 w-8 text-signal/25" aria-hidden />
      <div className="flex" aria-label={`${t.rating} out of 5 stars`}>
        {[...Array(t.rating)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <blockquote className="mt-4 text-base leading-relaxed text-paper-2">“{t.text}”</blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-signal/15 font-display font-semibold text-signal">{t.name.charAt(0)}</span>
        <div>
          <p className="text-sm font-medium text-paper">{t.name}</p>
          <p className="text-xs text-mute">{t.company}</p>
        </div>
      </figcaption>
    </figure>
  )
}

export function Testimonials() {
  const half = Math.ceil(testimonials.length / 2)
  return (
    <section id="testimonials" className="relative scroll-mt-24 overflow-hidden bg-ink-2/30 py-20 sm:py-28 lg:py-36">
      <div className="container-x">
        <SectionHeading
          eyebrow="Client words"
          title={
            <>
              Rated {site.rating.value}/5 by the people <span className="text-mute">who pay the invoices.</span>
            </>
          }
          align="center"
        />
      </div>
      <div className="space-y-5">
        <Marquee duration={48}>
          {testimonials.slice(0, half).map((t) => (
            <Card key={t.name} t={t} />
          ))}
        </Marquee>
        <Marquee duration={56} reverse>
          {testimonials.slice(half).concat(testimonials.slice(0, 1)).map((t, i) => (
            <Card key={`${t.name}-${i}`} t={t} />
          ))}
        </Marquee>
      </div>
    </section>
  )
}
