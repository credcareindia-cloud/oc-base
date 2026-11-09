import type React from "react"
import type { Metadata, Viewport } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { Navbar } from "@/components/site/navbar"
import { Footer } from "@/components/site/footer"
import { SmoothScroll } from "@/components/site/smooth-scroll"
import { ScrollProgress } from "@/components/site/motion"
import { JsonLd } from "@/components/site/json-ld"
import { site, SITE_URL } from "@/lib/site"

const display = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
})

const body = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Opencoders — Software, Automation & Growth for the AEC Industry",
    template: "%s | Opencoders",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "AEC software development",
    "BIM software development",
    "Revit plugin development",
    "construction automation",
    "digital twin platform",
    "AEC AI agents",
    "CRM for construction companies",
    "HRMS software India UAE",
    "accounting software GST VAT",
    "omnichannel ecommerce inventory sync",
    "Meta ads automation",
    "Google ads agency UAE India",
    "influencer marketing UAE",
    "influencer marketing India",
    "lead conversion sales agents",
    "Opencoders",
    "Open Coders Kochi",
  ],
  authors: [{ name: site.legalName, url: SITE_URL }],
  creator: site.legalName,
  publisher: site.legalName,
  category: "technology",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: site.name,
    title: "Opencoders — Software, Automation & Growth for the AEC Industry",
    description: site.description,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Opencoders — Putting the vibe in AEC" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Opencoders — Software, Automation & Growth for AEC",
    description: site.description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
  formatDetection: { telephone: true, email: true, address: true },
}

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
}

const orgJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: site.name,
      legalName: site.legalName,
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/brand/opencoders-logo-white.png`, width: 1632, height: 400 },
      image: `${SITE_URL}/og-image.png`,
      description: site.description,
      foundingDate: site.founded,
      email: site.email,
      telephone: site.phoneE164,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: site.address.city,
        addressRegion: site.address.region,
        postalCode: site.address.postal,
        addressCountry: site.address.country,
      },
      areaServed: [{ "@type": "Country", name: "India" }, { "@type": "Country", name: "United Arab Emirates" }],
      sameAs: Object.values(site.social),
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: site.phoneE164,
          email: site.email,
          contactType: "sales",
          availableLanguage: ["en", "hi", "ml", "ar"],
          areaServed: ["IN", "AE"],
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: site.rating.value,
        reviewCount: site.rating.count,
        bestRating: 5,
      },
      knowsAbout: ["Building Information Modeling", "Construction automation", "Digital twins", "CRM", "HRMS", "Accounting software", "Omnichannel commerce", "Performance marketing", "Influencer marketing"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: site.name,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en",
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${GeistMono.variable} dark`} suppressHydrationWarning>
      <body className="min-h-dvh bg-ink text-paper">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-signal focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <JsonLd data={orgJsonLd} />
        <SmoothScroll>
          <ScrollProgress />
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
