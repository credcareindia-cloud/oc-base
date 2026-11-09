/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 414, 640, 768, 1024, 1280, 1536, 1920],
  },
  async redirects() {
    return [
      { source: "/development", destination: "/aec", permanent: true },
      { source: "/lead-generation", destination: "/services", permanent: true },
      { source: "/academy", destination: "/broline", permanent: true },
      { source: "/training", destination: "/broline", permanent: true },
      { source: "/learn", destination: "/broline", permanent: true },
      { source: "/courses", destination: "https://broline.in", permanent: false },
      { source: "/lms", destination: "https://broline.in", permanent: false },
    ]
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|png|webp|jpg|ico)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ]
  },
}

export default nextConfig
