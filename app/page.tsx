import type { Metadata } from "next"
import { Hero } from "@/components/home/hero"
import { Clients } from "@/components/home/clients"
import { Manifesto } from "@/components/home/manifesto"
import { AecShowcase } from "@/components/home/aec-showcase"
import { Suite } from "@/components/home/suite"
import { Growth } from "@/components/home/growth"
import { Stats } from "@/components/home/stats"
import { Process } from "@/components/home/process"
import { Products } from "@/components/home/products"
import { Team } from "@/components/home/team"
import { Academy } from "@/components/home/academy"
import { Testimonials } from "@/components/home/testimonials"
import { FaqSection } from "@/components/home/faq-section"
import { CtaBand } from "@/components/site/cta-band"
import { JsonLd } from "@/components/site/json-ld"
import { ownProducts } from "@/lib/content"
import { SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  title: "Opencoders — Software, Automation & Growth for the AEC Industry",
  description:
    "Opencoders builds BIM tools, automation, digital twins and AI for architecture, engineering & construction teams — plus CRM, HRMS, Accounting and Omnichannel Commerce, and growth services across India & the UAE.",
  alternates: { canonical: "/" },
}

const productsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Opencoders products",
  itemListElement: ownProducts.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "SoftwareApplication",
      name: p.name,
      url: p.url,
      applicationCategory: "DesignApplication",
      operatingSystem: p.slug === "roostling" ? "Windows" : "Web",
      description: p.description,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  })),
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={productsJsonLd} />
      <Hero />
      <Clients />
      <Manifesto />
      <AecShowcase />
      <Suite />
      <Growth />
      <Stats />
      <Process />
      <Products />
      <Academy />
      <Team />
      <Testimonials />
      <FaqSection />
      <CtaBand />
    </>
  )
}
