// Two self-hosted Google fonts, exposed as CSS variables.
//
// The site previously used the OS default font, which renders Arabic in
// whatever fallback the visitor's system happens to pick — usually a poor match
// for the Latin text next to it. Cairo is a modern Arabic face with matching
// Latin glyphs, so the Arabic page looks deliberate instead of accidental.
//
// next/font downloads and self-hosts these at build time: no external request
// at runtime, and no layout shift.

import { Inter, Cairo } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-latin",
});

export const cairo = Cairo({
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-arabic",
});

// Applied to <html> so both variables are available; index.css picks the right
// one based on [dir].
export const fontVariables = `${inter.variable} ${cairo.variable}`;
