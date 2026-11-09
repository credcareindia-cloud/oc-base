import type { Metadata } from "next"
import { CTA } from "@/components/site/section"

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden pt-24">
      <div className="blueprint-grid absolute inset-0 fade-bottom opacity-70" aria-hidden />
      <div className="container-x relative text-center">
        <p className="eyebrow mb-5">404 — Off the drawing</p>
        <h1 className="text-5xl font-medium tracking-tight text-paper sm:text-7xl">This page isn't in the model.</h1>
        <p className="mx-auto mt-6 max-w-md text-base text-mute sm:text-lg">The link may be old or mistyped. Let's get you back to something that exists.</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CTA href="/">Back to home</CTA>
          <CTA href="/contact" variant="ghost">
            Contact us
          </CTA>
        </div>
      </div>
    </section>
  )
}
