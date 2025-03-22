import Link from "next/link"
import { Mail, Phone, MapPin, Twitter, Facebook, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="font-bold text-xl inline-block mb-4">
              Few Macs <span className="text-sky-400">Latr</span>
            </Link>
            <p className="text-gray-400 text-sm mb-6 max-w-md">
              Your trusted source for the latest Apple news, in-depth reviews, helpful guides, and exclusive deals on
              Apple products.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://twitter.com"
                className="bg-gray-800 p-2 rounded-full hover:bg-sky-600 transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://facebook.com"
                className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://instagram.com"
                className="bg-gray-800 p-2 rounded-full hover:bg-pink-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://youtube.com"
                className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-base mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/news" className="text-gray-400 hover:text-white transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-gray-400 hover:text-white transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-gray-400 hover:text-white transition-colors">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/deals" className="text-gray-400 hover:text-white transition-colors">
                  Deals
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base mb-4">Contact Us</h3>
            <div className="space-y-3 text-gray-400 text-sm">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-sky-400" />
                <span>info@fewmacslatr.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-sky-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-sky-400 mt-0.5" />
                <span>
                  123 Tech Street
                  <br />
                  San Francisco, CA 94107
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-xs text-gray-500">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="flex flex-wrap gap-4">
              <Link href="/privacy" className="hover:text-gray-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-gray-300">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-gray-300">
                Sitemap
              </Link>
            </div>
            <p>© {new Date().getFullYear()} Apple Blog. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

