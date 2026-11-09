import type { Metadata } from "next"
import { Hero } from "@/components/home/hero"
import { Clients } from "@/components/home/clients"
import { Manifesto } from "@/components/home/manifesto"
import { AecShowcase } from "@/components/home/aec-showcase"
import { Suite } from "@/components/home/suite"
import { Growth } from "@/components/home/growth"
import { Stats } from "@/components/home/stats"
import { Process } from "@/components/home/process"
import { Work } from "@/components/home/work"
import { Team } from "@/components/home/team"
import { Testimonials } from "@/components/home/testimonials"
import { FaqSection } from "@/components/home/faq-section"
import { CtaBand } from "@/components/site/cta-band"

export const metadata: Metadata = {
  title: "Opencoders — Software, Automation & Growth for the AEC Industry",
  description:
    "Opencoders builds BIM tools, automation, digital twins and AI for architecture, engineering & construction teams — plus CRM, HRMS, Accounting and Omnichannel Commerce, and growth services across India & the UAE.",
  alternates: { canonical: "/" },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Clients />
      <Manifesto />
      <AecShowcase />
      <Suite />
      <Growth />
      <Stats />
      <Process />
      <Work />
      <Team />
      <Testimonials />
      <FaqSection />
      <CtaBand />
    </>
  )
}
