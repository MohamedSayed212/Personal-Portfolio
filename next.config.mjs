/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin the workspace root to this project so Next doesn't get confused by a
  // stray lockfile elsewhere on the machine when tracing build output.
  outputFileTracingRoot: import.meta.dirname,

  // The project keeps its existing (Vite-style) ESLint setup, so don't let
  // Next's separate lint integration block production builds.
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
