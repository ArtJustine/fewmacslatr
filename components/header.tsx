"use client"

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Search, Twitter, Facebook, Instagram, Youtube } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b sticky top-0 bg-white z-50">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-bold text-2xl">
            Few Macs <span className="text-sky-500">Latr</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/news" className="text-sm font-medium hover:text-sky-500 transition-colors">
              News
            </Link>
            <Link href="/reviews" className="text-sm font-medium hover:text-sky-500 transition-colors">
              Reviews
            </Link>
            <Link href="/guides" className="text-sm font-medium hover:text-sky-500 transition-colors">
              Guides
            </Link>
            <Link href="/deals" className="text-sm font-medium hover:text-sky-500 transition-colors">
              Deals
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-5">
          <div className="hidden md:flex items-center gap-4">
            <Link href="https://twitter.com" className="text-gray-500 hover:text-sky-500 transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="https://facebook.com" className="text-gray-500 hover:text-sky-500 transition-colors">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="https://instagram.com" className="text-gray-500 hover:text-sky-500 transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="https://youtube.com" className="text-gray-500 hover:text-sky-500 transition-colors">
              <Youtube className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
          <div className="hidden md:flex relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-[200px] pl-8 rounded-full border-gray-200 focus:border-sky-500 focus:ring-sky-500"
            />
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={isMenuOpen ? "hidden" : "block"}
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={isMenuOpen ? "block" : "hidden"}
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4">
            <nav className="flex flex-col gap-4">
              <Link href="/news" className="text-sm font-medium">
                News
              </Link>
              <Link href="/reviews" className="text-sm font-medium">
                Reviews
              </Link>
              <Link href="/guides" className="text-sm font-medium">
                Guides
              </Link>
              <Link href="/deals" className="text-sm font-medium">
                Deals
              </Link>
              <div className="flex items-center gap-4 mt-4">
                <Link href="https://twitter.com" className="text-gray-500 hover:text-sky-500">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="https://facebook.com" className="text-gray-500 hover:text-sky-500">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="https://instagram.com" className="text-gray-500 hover:text-sky-500">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="https://youtube.com" className="text-gray-500 hover:text-sky-500">
                  <Youtube className="h-5 w-5" />
                </Link>
              </div>
              <div className="relative mt-4">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search..." className="w-full pl-8 rounded-full" />
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

