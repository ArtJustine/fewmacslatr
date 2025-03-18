"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-bold text-xl">
            Apple<span className="text-sky-500">Blog</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium">
              Home
            </Link>
            <Link href="/news" className="text-sm font-medium">
              News
            </Link>
            <Link href="/reviews" className="text-sm font-medium">
              Reviews
            </Link>
            <Link href="/guides" className="text-sm font-medium">
              Guides
            </Link>
            <Link href="/about" className="text-sm font-medium">
              About
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search..." className="w-[200px] pl-8" />
          </div>
          <Button size="sm" className="hidden md:flex">
            Subscribe
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4">
            <nav className="flex flex-col gap-4">
              <Link href="/" className="text-sm font-medium">
                Home
              </Link>
              <Link href="/news" className="text-sm font-medium">
                News
              </Link>
              <Link href="/reviews" className="text-sm font-medium">
                Reviews
              </Link>
              <Link href="/guides" className="text-sm font-medium">
                Guides
              </Link>
              <Link href="/about" className="text-sm font-medium">
                About
              </Link>
              <div className="relative mt-2">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search..." className="w-full pl-8" />
              </div>
              <Button size="sm" className="mt-2">
                Subscribe
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

