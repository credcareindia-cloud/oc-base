import type { Metadata } from "next"
import { Suspense } from "react"
import Image from "next/image"
import { Clock, Mail, MapPin, Phone } from "lucide-react"
import { JsonLd } from "@/components/site/json-ld"
import { Reveal, WordReveal } from "@/components/site/motion"
import { ContactForm } from "./contact-form"
import { absoluteUrl, site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contact Opencoders — Book a discovery call",
  description:
    "Talk to Opencoders about AEC software, business automation (CRM, HRMS, Accounting, Commerce) or growth services in India & the UAE. WhatsApp, email or call — a human replies.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact Opencoders", description: "Book a free discovery call. WhatsApp, email or phone.", url: absoluteUrl("/contact"), images: ["/og-image.png"] },
}

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Opencoders",
    url: absoluteUrl("/contact"),
    mainEntity: { "@id": `${site.url}/#organization` },
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="blueprint-grid absolute inset-0 fade-bottom opacity-70" aria-hidden />
        <div className="pointer-events-none absolute -top-40 left-[-10%] h-[520px] w-[520px] rounded-full bg-signal/20 blur-[140px]" aria-hidden />
        <div className="container-x relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow mb-5">Contact</p>
            </Reveal>
            <h1 className="text-4xl font-medium leading-[1.02] tracking-tight text-paper sm:text-6xl">
              <WordReveal text="Let's talk about what's slowing you down." highlight={["slowing"]} delay={0.1} />
            </h1>
            <Reveal delay={0.3}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-mute sm:text-lg">
                Free 30-minute discovery call. You'll leave with a clear scope and honest numbers — whether or not you work with us.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <ul className="mt-10 space-y-5">
                <li>
                  <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-ink-2 text-paper transition-colors group-hover:border-signal group-hover:text-signal">
                      <Phone className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <span>
                      <span className="block font-mono text-[11px] uppercase tracking-[0.18em] text-mute">Phone / WhatsApp</span>
                      <span className="text-lg text-paper">{site.phoneDisplay}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${site.email}`} className="group flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-ink-2 text-paper transition-colors group-hover:border-signal group-hover:text-signal">
                      <Mail className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <span>
                      <span className="block font-mono text-[11px] uppercase tracking-[0.18em] text-mute">Email</span>
                      <span className="text-lg text-paper">{site.email}</span>
                    </span>
                  </a>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-ink-2 text-paper">
                    <MapPin className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <span>
                    <span className="block font-mono text-[11px] uppercase tracking-[0.18em] text-mute">Headquarters</span>
                    <address className="text-lg not-italic text-paper">
                      {site.address.street}, {site.address.city}
                      <br />
                      <span className="text-base text-mute">
                        {site.address.region} {site.address.postal}, India · Serving India & UAE
                      </span>
                    </address>
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-ink-2 text-paper">
                    <Clock className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <span>
                    <span className="block font-mono text-[11px] uppercase tracking-[0.18em] text-mute">Hours</span>
                    <span className="text-lg text-paper">Mon–Sat, 9:00–19:00 IST</span>
                    <span className="block text-base text-mute">(7:30–17:30 GST) — WhatsApp anytime</span>
                  </span>
                </li>
              </ul>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="mt-10 flex items-center gap-4 rounded-2xl border border-line bg-ink-2/60 p-4">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-line-2">
                  <Image src="/team/shah.webp" alt="Shah, CEO & Founder of Opencoders" fill sizes="56px" className="object-cover" />
                </div>
                <p className="text-sm text-mute">
                  <span className="text-paper">Shah, Founder</span> — “Every enquiry gets a reply from someone who can actually make decisions. Usually me.”
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <Suspense fallback={<div className="card-surface h-[640px] animate-pulse rounded-[1.75rem]" />}>
              <ContactForm />
            </Suspense>
          </Reveal>
        </div>
      </section>
    </>
  )
}
