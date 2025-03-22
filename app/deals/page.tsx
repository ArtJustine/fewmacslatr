import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Percent, ChevronRight } from "lucide-react"

export default function DealsPage() {
  return (
    <div className="container py-8 md:py-12">
      {/* Page Header */}
      <div className="mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Apple Deals & Discounts</h1>
        <p className="text-muted-foreground max-w-3xl">
          Find the best deals on Apple products. We track prices across major retailers to help you save on your next
          Apple purchase.
        </p>
      </div>

      {/* Featured Deal */}
      <div className="mb-12">
        <Card className="overflow-hidden">
          <div className="md:flex">
            <div className="relative h-[250px] md:h-auto md:w-1/2">
              <Image
                src="/placeholder.svg?height=500&width=800"
                alt="MacBook Air M3 Deal"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 text-sm font-medium">HOT DEAL</Badge>
              </div>
            </div>
            <div className="p-6 md:w-1/2 md:flex md:flex-col md:justify-center">
              <div className="text-sm text-sky-500 font-medium mb-2">FEATURED DEAL</div>
              <h2 className="text-2xl font-bold mb-3">MacBook Air M3 - $200 Off</h2>
              <div className="flex items-center mb-3 text-red-500 font-bold">
                <Percent className="h-4 w-4 mr-1" />
                <span>Save 18%</span>
              </div>
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-muted-foreground">Regular Price:</span>
                  <span className="line-through">$1,099.00</span>
                </div>
                <div className="flex items-center justify-between text-lg font-bold">
                  <span>Deal Price:</span>
                  <span>$899.00</span>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                The latest MacBook Air with M3 chip is now on sale. This is the lowest price we've seen since its
                release.
              </p>
              <div className="flex items-center text-sm text-muted-foreground mb-4">
                <Clock className="h-4 w-4 mr-1" />
                <span>Deal expires in 2 days</span>
              </div>
              <div className="flex gap-3">
                <Button>Get This Deal</Button>
                <Button variant="outline">See Details</Button>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Today's Top Deals */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Today's Top Deals</h2>
          <Button variant="ghost" size="sm" className="gap-1">
            View All <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topDeals.map((deal, index) => (
            <DealCard key={index} deal={deal} />
          ))}
        </div>
      </div>

      {/* Deals by Category */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Deals by Category</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dealCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-md transition-shadow">
              <Link href={`/deals/${category.slug}`} className="block p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 bg-gray-100 p-4 rounded-full">{category.icon}</div>
                  <h3 className="font-bold mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                  <Button variant="ghost" size="sm" className="group-hover:bg-sky-50 group-hover:text-sky-600">
                    View Deals
                  </Button>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="mt-12 bg-gray-50 p-8 rounded-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Never Miss a Deal</h2>
          <p className="text-muted-foreground mb-6">
            Subscribe to our deals newsletter and be the first to know when we find new discounts on Apple products.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" className="flex-grow" />
            <Button>Subscribe to Deals</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Deal Card Component
function DealCard({ deal }) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative">
        <div className="relative h-[180px]">
          <Image src={deal.image || "/placeholder.svg"} alt={deal.title} fill className="object-cover" />
        </div>
        {deal.badge && (
          <div className="absolute top-3 left-3">
            <Badge className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 text-xs font-medium">{deal.badge}</Badge>
          </div>
        )}
        {deal.discount && (
          <div className="absolute top-3 right-3">
            <Badge className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 text-xs font-medium">
              {deal.discount}
            </Badge>
          </div>
        )}
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <div className="text-xs text-muted-foreground mb-1">{deal.category}</div>
        <h3 className="font-bold text-lg mb-2">{deal.title}</h3>
        <div className="mb-3 flex-grow">
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm text-muted-foreground">Regular:</span>
            <span className="text-sm line-through">${deal.regularPrice}</span>
          </div>
          <div className="flex items-center justify-between font-bold">
            <span>Now:</span>
            <span className="text-red-600">${deal.salePrice}</span>
          </div>
        </div>
        <div className="text-xs text-muted-foreground mb-4 flex items-center">
          <Clock className="h-3 w-3 mr-1" />
          <span>{deal.expiry}</span>
        </div>
        <Button variant="outline" size="sm" className="w-full">
          View Deal
        </Button>
      </div>
    </Card>
  )
}

// Sample Data
const topDeals = [
  {
    title: "AirPods Pro 2",
    category: "Audio",
    regularPrice: "249.00",
    salePrice: "189.99",
    discount: "-24%",
    badge: "LOWEST PRICE",
    image: "/placeholder.svg?height=180&width=320",
    expiry: "Ends in 3 days",
  },
  {
    title: "iPad Air (5th Gen)",
    category: "Tablets",
    regularPrice: "599.00",
    salePrice: "499.00",
    discount: "-17%",
    image: "/placeholder.svg?height=180&width=320",
    expiry: "Limited time offer",
  },
  {
    title: "Apple Watch Series 9",
    category: "Wearables",
    regularPrice: "399.00",
    salePrice: "329.00",
    discount: "-18%",
    image: "/placeholder.svg?height=180&width=320",
    expiry: "Ends tomorrow",
  },
  {
    title: "iPhone 15",
    category: "Smartphones",
    regularPrice: "799.00",
    salePrice: "699.00",
    discount: "-13%",
    badge: "WITH CARRIER",
    image: "/placeholder.svg?height=180&width=320",
    expiry: "Limited time offer",
  },
  {
    title: "Mac mini M2",
    category: "Desktops",
    regularPrice: "599.00",
    salePrice: "499.00",
    discount: "-17%",
    image: "/placeholder.svg?height=180&width=320",
    expiry: "Ends in 5 days",
  },
  {
    title: "Apple Pencil (2nd Gen)",
    category: "Accessories",
    regularPrice: "129.00",
    salePrice: "89.00",
    discount: "-31%",
    badge: "BEST SELLER",
    image: "/placeholder.svg?height=180&width=320",
    expiry: "While supplies last",
  },
]

// Deal Categories
const dealCategories = [
  {
    name: "iPhone Deals",
    slug: "iphone",
    description: "Save on the latest iPhones and accessories",
    icon: (
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
        className="h-6 w-6"
      >
        <rect width="12" height="20" x="6" y="2" rx="2" ry="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
  },
  {
    name: "Mac Deals",
    slug: "mac",
    description: "Discounts on MacBooks, iMacs and more",
    icon: (
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
        className="h-6 w-6"
      >
        <rect width="18" height="12" x="3" y="4" rx="2" ry="2" />
        <line x1="2" x2="22" y1="20" y2="20" />
      </svg>
    ),
  },
  {
    name: "iPad Deals",
    slug: "ipad",
    description: "Special offers on iPads and accessories",
    icon: (
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
        className="h-6 w-6"
      >
        <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
        <line x1="12" x2="12.01" y1="18" y2="18" />
      </svg>
    ),
  },
  {
    name: "Watch Deals",
    slug: "apple-watch",
    description: "Savings on Apple Watch and bands",
    icon: (
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
        className="h-6 w-6"
      >
        <circle cx="12" cy="12" r="6" />
        <polyline points="12 9 12 12 13.5 13.5" />
        <path d="M16.51 17.35 16.2 22h-8.4l-.31-4.65" />
        <path d="M7.8 2h8.4l.31 4.65" />
      </svg>
    ),
  },
]

// Input component for the newsletter
function Input({ className, ...props }) {
  return (
    <input
      className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  )
}

