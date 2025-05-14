import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { AdBanner } from "@/components/ads/ad-banner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Few Macs Latr - Latest Apple News and Innovations",
  description: "Stay updated with the latest Apple news, product reviews, and tech innovations",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {/* Leaderboard ad below header */}
          <div className="container py-4">
            <AdBanner size="728x90" id="header-leaderboard" />
          </div>
          <main>{children}</main>
          {/* Leaderboard ad above footer */}
          <div className="container py-4">
            <AdBanner size="728x90" id="footer-leaderboard" />
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

