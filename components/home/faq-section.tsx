import { faqs } from "@/lib/content"
import { Section, SectionHeading } from "@/components/site/section"
import { Faq } from "@/components/site/faq"
import { JsonLd } from "@/components/site/json-ld"
import { Reveal } from "@/components/site/motion"

export function FaqSection({ items = faqs }: { items?: { q: string; a: string }[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }
  return (
    <Section id="faq">
      <JsonLd data={jsonLd} />
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionHeading eyebrow="FAQ" title="Questions we hear before the first call." description="Anything else? WhatsApp us — a human replies." className="mb-0" />
        <Reveal>
          <Faq items={items} />
        </Reveal>
      </div>
    </Section>
  )
}
