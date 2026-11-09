import Link from "next/link"
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react"
import { Logo } from "@/components/site/logo"
import { site, whatsappLink } from "@/lib/site"
import { aecSolutions, broline, ownProducts, products, services } from "@/lib/content"

const columns = [
  {
    title: "AEC Software",
    links: aecSolutions.map((s) => ({ label: s.title, href: `/aec#${s.slug}` })),
  },
  {
    title: "Business Suite",
    links: products.map((p) => ({ label: p.title, href: `/products#${p.slug}` })),
  },
  {
    title: "Growth",
    links: services.map((s) => ({ label: s.title, href: `/services#${s.slug}` })),
  },
  {
    title: "Our Products",
    links: ownProducts.map((p) => ({ label: p.name, href: p.url, external: true })),
  },
  {
    title: "Learn — Broline",
    links: [
      ...broline.tracks.map((t) => ({ label: t.title, href: `/broline#${t.slug}` })),
      { label: "Join courses on broline.in", href: broline.coursesUrl, external: true },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About & Team", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "LinkedIn", href: site.social.linkedin, external: true },
      { label: "Instagram", href: site.social.instagram, external: true },
    ],
  },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-ink">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-40 fade-bottom" aria-hidden />
      <div className="container-x relative py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Logo className="h-8" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-mute">
              Software, automation and growth for Architecture, Engineering & Construction — and the business systems
              that run behind them.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              <li>
                <a href={`mailto:${site.email}`} className="group inline-flex items-center gap-3 text-paper-2 hover:text-signal">
                  <Mail className="h-4 w-4 text-mute-2 group-hover:text-signal" /> {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phoneE164}`} className="group inline-flex items-center gap-3 text-paper-2 hover:text-signal">
                  <Phone className="h-4 w-4 text-mute-2 group-hover:text-signal" /> {site.phoneDisplay}
                </a>
              </li>
              <li className="inline-flex items-start gap-3 text-paper-2">
                <MapPin className="mt-0.5 h-4 w-4 text-mute-2" />
                <span>
                  {site.address.street}, {site.address.city}, {site.address.region} {site.address.postal}, India
                  <br />
                  <span className="text-mute">Operating across India & UAE</span>
                </span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="eyebrow mb-4">{col.title}</h3>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      {"external" in l && l.external ? (
                        <a href={l.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-mute transition-colors hover:text-paper">
                          {l.label} <ArrowUpRight className="h-3 w-3" />
                        </a>
                      ) : (
                        <Link href={l.href} className="text-sm text-mute transition-colors hover:text-paper">
                          {l.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-line pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-mute-2">
            © {new Date().getFullYear()} {site.legalName}. All rights reserved. Putting the vibe in AEC.
          </p>
          <a
            href={whatsappLink("Hi Opencoders! I'd like to talk about a project.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-xs text-paper-2 transition-colors hover:border-signal hover:text-signal"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Usually replies within an hour
          </a>
        </div>
      </div>

      <div className="relative select-none overflow-hidden pb-6" aria-hidden>
        <div className="container-x">
          <Logo className="h-auto w-full opacity-[0.045]" />
        </div>
      </div>
    </footer>
  )
}
