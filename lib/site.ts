export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://opencoders.io"

export const site = {
  name: "Opencoders",
  legalName: "Open Coders",
  tagline: "Software, automation & growth for the AEC industry",
  description:
    "Opencoders builds software for Architecture, Engineering & Construction — BIM tools, automation, digital twins and AI — plus a connected business suite (CRM, HRMS, Accounting, Omnichannel Commerce) and performance growth services across the UAE and India.",
  url: SITE_URL,
  email: "info@opencoders.io",
  phoneDisplay: "+91 70129 75494",
  phoneE164: "+917012975494",
  whatsapp: "917012975494",
  address: {
    street: "Tech Park, Innovation District",
    city: "Kochi",
    region: "Kerala",
    postal: "682001",
    country: "IN",
  },
  regions: ["India", "United Arab Emirates"],
  founded: "2021",
  rating: { value: 4.8, count: 42 },
  social: {
    linkedin: "https://www.linkedin.com/company/opencoders",
    instagram: "https://www.instagram.com/opencoders",
    github: "https://github.com/credcareindia-cloud",
  },
} as const

export const nav = [
  { href: "/aec", label: "AEC Software" },
  { href: "/products", label: "Business Suite" },
  { href: "/services", label: "Growth" },
  { href: "/broline", label: "Learn" },
  { href: "/about", label: "About" },
] as const

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
}

export function absoluteUrl(path = "/") {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`
}
