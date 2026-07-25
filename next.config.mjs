/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin the workspace root to this project so Next doesn't get confused by a
  // stray lockfile elsewhere on the machine when tracing build output.
  outputFileTracingRoot: import.meta.dirname,

  // The project keeps its existing (Vite-style) ESLint setup, so don't let
  // Next's separate lint integration block production builds.
  eslint: { ignoreDuringBuilds: true },

  // Don't advertise the framework in responses.
  poweredByHeader: false,

  // Safe, indexing-neutral security/response headers. Note: intentionally NO
  // `X-Robots-Tag` here — setting it wrong is a common way to accidentally
  // deindex a whole site. Indexing is controlled by the per-page robots meta.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
