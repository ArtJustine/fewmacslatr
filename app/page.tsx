import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-sky-100 py-12 md:py-16">
        <div className="container grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Discover the Latest in Apple Innovations</h1>
            <p className="text-muted-foreground">
              Stay updated with the newest products, features, and news from Apple
            </p>
            <div className="flex gap-2">
              <Button>Learn More</Button>
              <Button variant="outline">Subscribe</Button>
            </div>
          </div>
          <div className="relative h-[250px] md:h-[300px]">
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="Apple Innovation"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container py-8 md:py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-12">
            {/* Latest Updates Section */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Latest Updates on Apple Devices</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {latestUpdates.map((article, index) => (
                  <ArticleCard key={index} article={article} />
                ))}
              </div>
            </section>

            {/* Insights Section */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Explore Our Latest Insights</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {insights.map((article, index) => (
                  <InsightCard key={index} article={article} />
                ))}
              </div>
            </section>

            {/* Newsletter Section */}
            <section className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Stay Updated with Apple News</h2>
              <p className="text-muted-foreground mb-4">
                Subscribe to our newsletter to receive the latest updates directly in your inbox
              </p>
              <div className="flex gap-2">
                <Input placeholder="Enter your email" className="max-w-md" />
                <Button>Subscribe</Button>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Latest Updates on Apple Devices</h3>
              <div className="space-y-4">
                {sidebarArticles.map((article, index) => (
                  <SidebarArticle key={index} article={article} />
                ))}
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Explore Our Latest Insights</h3>
              <Button variant="outline" className="w-full justify-between">
                View All <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-auto">
        <div className="container py-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  <span>info@appleblog.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span>123 Tech Street, San Francisco, CA</span>
                </div>
              </div>
            </div>
            <div className="relative h-[200px]">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Office"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400">
            <div className="flex flex-wrap justify-between gap-4">
              <div className="flex gap-4">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/privacy">Privacy</Link>
                <Link href="/terms">Terms</Link>
              </div>
              <p>© {new Date().getFullYear()} Apple Blog. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Article Card Component
function ArticleCard({ article }) {
  return (
    <Card className="overflow-hidden">
      <div className="p-4">
        <div className="text-sm text-muted-foreground mb-2">{article.category}</div>
        <h3 className="font-bold text-lg mb-2">{article.title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{article.excerpt}</p>
        <Button variant="outline" size="sm">
          Read More
        </Button>
      </div>
    </Card>
  )
}

// Insight Card Component
function InsightCard({ article }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-[150px]">
        <Image
          src={article.image || "/placeholder.svg?height=150&width=250"}
          alt={article.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <div className="text-xs text-muted-foreground mb-1">{article.category}</div>
        <h3 className="font-medium text-sm mb-2">{article.title}</h3>
        <div className="text-xs text-muted-foreground">
          {article.author} • {article.date}
        </div>
      </div>
    </Card>
  )
}

// Sidebar Article Component
function SidebarArticle({ article }) {
  return (
    <div className="border-b border-gray-200 pb-3 last:border-0 last:pb-0">
      <div className="text-xs text-muted-foreground mb-1">{article.category}</div>
      <h4 className="font-medium text-sm mb-1">{article.title}</h4>
      <div className="text-xs text-muted-foreground">{article.date}</div>
    </div>
  )
}

// Sample Data
const latestUpdates = [
  {
    category: "New Tech",
    title: "Apple Watch Series 9 Introduces New Health Features",
    excerpt: "The latest Apple Watch brings advanced health monitoring and improved battery life.",
  },
  {
    category: "Products",
    title: "Explore's MacBook Apple Products and Accessories",
    excerpt: "Discover the complete lineup of MacBook accessories to enhance your experience.",
  },
  {
    category: "Innovation",
    title: "The Future of Apple Ecosystem for Smart Homes",
    excerpt: "How Apple is revolutionizing smart home technology with seamless integration.",
  },
  {
    category: "Reviews",
    title: "iPhone 15 Pro: A Comprehensive Review",
    excerpt: "Our in-depth analysis of Apple's latest flagship smartphone and its features.",
  },
]

const insights = [
  {
    category: "Guide",
    title: "Top 10 Things You Need to Know About macOS",
    author: "John Smith",
    date: "2 days ago",
    image: "/placeholder.svg?height=150&width=250",
  },
  {
    category: "Tutorial",
    title: "How to Backup Your iPhone Data Properly",
    author: "Sarah Johnson",
    date: "3 days ago",
    image: "/placeholder.svg?height=150&width=250",
  },
  {
    category: "Review",
    title: "AirPods Pro 2: Worth the Upgrade?",
    author: "Michael Brown",
    date: "5 days ago",
    image: "/placeholder.svg?height=150&width=250",
  },
  {
    category: "Guide",
    title: "Apple Vision Pro: All You Need to Know",
    author: "Emily Chen",
    date: "1 week ago",
    image: "/placeholder.svg?height=150&width=250",
  },
  {
    category: "Tutorial",
    title: "How to Use Focus Modes Effectively",
    author: "David Wilson",
    date: "1 week ago",
    image: "/placeholder.svg?height=150&width=250",
  },
  {
    category: "Review",
    title: "iOS 17 Features That Boost Productivity",
    author: "Lisa Taylor",
    date: "2 weeks ago",
    image: "/placeholder.svg?height=150&width=250",
  },
]

const sidebarArticles = [
  {
    category: "News",
    title: "Apple Announces New MacBook Pro with M3 Chip",
    date: "2 hours ago",
  },
  {
    category: "Updates",
    title: "iOS 17.2 Beta Brings New Camera Features",
    date: "5 hours ago",
  },
  {
    category: "Events",
    title: "Apple's Spring Event: What to Expect",
    date: "1 day ago",
  },
  {
    category: "Rumors",
    title: "iPhone 16: All the Leaks and Rumors So Far",
    date: "2 days ago",
  },
  {
    category: "Analysis",
    title: "How Apple Silicon is Changing the Industry",
    date: "3 days ago",
  },
]

