import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { injectCriticalCSS } from "@/lib/critical-css"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: "Celestine Emili - Full-Stack Developer & Financial Systems Architect",
  description: "Building secure, scalable, and intelligent systems across web, mobile, and financial platforms.",
  generator: 'v0.dev',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Celestine Emili Portfolio',
  },
  formatDetection: {
    telephone: false,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Celestine Emili Portfolio" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Critical CSS injection */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              /* Critical styles for above-the-fold content */
              .min-h-screen { min-height: 100vh; }
              .bg-black { background-color: rgb(0 0 0); }
              .text-white { color: rgb(255 255 255); }
              .relative { position: relative; }
              .overflow-x-hidden { overflow-x: hidden; }
              .pt-24 { padding-top: 6rem; }
              .pb-12 { padding-bottom: 3rem; }
              .px-4 { padding-left: 1rem; padding-right: 1rem; }
              .max-w-7xl { max-width: 80rem; }
              .mx-auto { margin-left: auto; margin-right: auto; }
              .text-5xl { font-size: 3rem; line-height: 1; }
              .font-bold { font-weight: 700; }
              .mb-6 { margin-bottom: 1.5rem; }
              .flex { display: flex; }
              .items-center { align-items: center; }
              .gap-4 { gap: 1rem; }
              .mb-8 { margin-bottom: 2rem; }
              .bg-gray-900\\/50 { background-color: rgb(17 24 39 / 0.5); }
              .border-gray-800 { border-color: rgb(31 41 55); }
              .backdrop-blur-sm { backdrop-filter: blur(4px); }
              .h-full { height: 100%; }
              .transition-all { transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
              .duration-300 { transition-duration: 300ms; }
              @media (min-width: 768px) { .md\\:text-6xl { font-size: 3.75rem; line-height: 1; } }
              @media (min-width: 1024px) { .lg\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
