import Image from "next/image"

import Link from "next/link"

import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"

import { Card } from "@/components/ui/card"

import { Clock, ChevronRight } from "lucide-react"

import { newsPosts, reviewPosts, guidePosts } from "@/data/posts"

import { AdBanner } from "@/components/ads/ad-banner"



export default function Home() {

  return (

    <div className="flex flex-col min-h-screen">

      {/* Hero Section */}

      <section className="bg-gradient-to-r from-sky-50 to-blue-50 py-12 md:py-16 border-b">

        <div className="container grid md:grid-cols-2 gap-8 items-center">

          <div className="space-y-5">

            <span className="inline-block px-3 py-1 bg-sky-100 text-sky-800 rounded-full text-xs font-medium">

              LATEST NEWS

            </span>

            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Discover the Latest in Apple Innovations</h1>

            <p className="text-gray-400 mb-6 max-w-md">

              Your trusted source for the latest Apple news, in-depth reviews, helpful guides, and exclusive deals on

              Apple products.

            </p>

            <div className="flex gap-3">

              <Link href="/news">

                <Button className="rounded-full">Latest News</Button>

              </Link>

              <Link href="/reviews">

                <Button variant="outline" className="rounded-full">

                  Top Reviews

                </Button>

              </Link>

            </div>

          </div>

          <div className="relative h-[250px] md:h-[350px] rounded-xl overflow-hidden shadow-lg">

            <Image src="/placeholder.svg?height=350&width=600" alt="Apple Innovation" fill className="object-cover" />

          </div>

        </div>

      </section>



      {/* Main Content */}

      <div className="container py-12 md:py-16">

        <div className="grid lg:grid-cols-3 gap-10">

          {/* Main Content Area */}

          <div className="lg:col-span-2 space-y-16">

            {/* Trending Section */}

            <section>

              <div className="flex items-center justify-between mb-6">

                <h2 className="text-2xl font-bold">Trending Now</h2>

                <Link href="/news" className="text-sky-500 hover:text-sky-600 flex items-center text-sm font-medium">

                  View All <ChevronRight className="h-4 w-4 ml-1" />

                </Link>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <Link href={`/news/${newsPosts[0].subcategory}/${newsPosts[0].slug}`}>

                  <Card className="overflow-hidden border-0 shadow-lg">

                    <div className="relative h-[220px]">

                      <Image

                        src={newsPosts[0].image || "/placeholder.svg"}

                        alt={newsPosts[0].title}

                        fill

                        className="object-cover"

                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                      <div className="absolute bottom-0 left-0 p-4 text-white">

                        <div className="text-xs font-medium mb-2 text-sky-300">{newsPosts[0].category}</div>

                        <h3 className="font-bold text-xl mb-1">{newsPosts[0].title}</h3>

                        <div className="text-xs opacity-80">{newsPosts[0].date}</div>

                      </div>

                    </div>

                  </Card>

                </Link>

                <div className="space-y-4">

                  {newsPosts.slice(1, 4).map((article, index) => (

                    <Link

                      key={index}

                      href={`/news/${article.subcategory}/${article.slug}`}

                      className="flex gap-4 group"

                    >

                      <div className="relative w-24 h-24 flex-shrink-0 rounded-md overflow-hidden">

                        <Image

                          src={article.image || "/placeholder.svg"}

                          alt={article.title}

                          fill

                          className="object-cover"

                        />

                      </div>

                      <div>

                        <div className="text-xs text-sky-500 font-medium mb-1">{article.category}</div>

                        <h3 className="font-bold text-sm mb-1 group-hover:text-sky-600 transition-colors">

                          {article.title}

                        </h3>

                        <div className="text-xs text-muted-foreground">{article.date}</div>

                      </div>

                    </Link>

                  ))}

                </div>

              </div>

            </section>



            {/* Ad Banner after trending section */}

            <AdBanner size="480x280" className="mx-auto" id="home-mid-rectangle" />



            {/* Latest Reviews Section */}

            <section>

              <div className="flex items-center justify-between mb-6">

                <h2 className="text-2xl font-bold">Latest Reviews</h2>

                <Link href="/reviews" className="text-sky-500 hover:text-sky-600 flex items-center text-sm font-medium">

                  View All <ChevronRight className="h-4 w-4 ml-1" />

                </Link>

              </div>

              <div className="grid md:grid-cols-3 gap-6">

                {reviewPosts.slice(0, 3).map((review, index) => (

                  <Card key={index} className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow">

                    <Link href={`/reviews/${review.subcategory}/${review.slug}`}>

                      <div className="relative h-[160px]">

                        <Image

                          src={review.image || "/placeholder.svg"}

                          alt={review.title}

                          fill

                          className="object-cover"

                        />

                        {review.rating && (

                          <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-md">

                            {review.rating}/5

                          </div>

                        )}

                      </div>

                      <div className="p-4">

                        <div className="text-xs text-sky-500 font-medium mb-1">{review.category}</div>

                        <h3 className="font-bold text-base mb-2">{review.title}</h3>

                        <p className="text-xs text-muted-foreground line-clamp-2 mb-2">{review.excerpt}</p>

                        <div className="text-xs text-muted-foreground">{review.date}</div>

                      </div>

                    </Link>

                  </Card>

                ))}

              </div>

            </section>



            {/* Guides Section */}

            <section>

              <div className="flex items-center justify-between mb-6">

                <h2 className="text-2xl font-bold">Helpful Guides</h2>

                <Link href="/guides" className="text-sky-500 hover:text-sky-600 flex items-center text-sm font-medium">

                  View All <ChevronRight className="h-4 w-4 ml-1" />

                </Link>

              </div>

              <div className="grid md:grid-cols-2 gap-6">

                {guidePosts.slice(0, 4).map((guide, index) => (

                  <Card key={index} className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow">

                    <Link href={`/guides/${guide.subcategory}/${guide.slug}`} className="flex h-full">

                      <div className="relative w-1/3 flex-shrink-0">

                        <Image

                          src={guide.image || "/placeholder.svg"}

                          alt={guide.title}

                          fill

                          className="object-cover"

                        />

                      </div>

                      <div className="p-4 flex-grow">

                        <div className="text-xs text-sky-500 font-medium mb-1">{guide.category}</div>

                        <h3 className="font-bold text-base mb-2">{guide.title}</h3>

                        <div className="flex items-center text-xs text-muted-foreground mb-2">

                          <Clock className="h-3 w-3 mr-1" />

                          <span>{guide.readTime} min read</span>

                        </div>

                        <p className="text-xs text-muted-foreground line-clamp-2">{guide.excerpt}</p>

                      </div>

                    </Link>

                  </Card>

                ))}

              </div>

            </section>



            {/* Newsletter Section */}

            <section className="bg-gradient-to-r from-sky-50 to-blue-50 p-8 rounded-xl">

              <div className="max-w-xl">

                <h2 className="text-2xl font-bold mb-3">Stay Updated with Apple News</h2>

                <p className="text-muted-foreground mb-5">

                  Subscribe to our newsletter to receive the latest updates directly in your inbox

                </p>

                <div className="flex gap-2">

                  <Input placeholder="Enter your email" className="max-w-md rounded-full" />

                  <Button className="rounded-full">Subscribe</Button>

                </div>

              </div>

            </section>

          </div>



          {/* Sidebar */}

          <div className="space-y-8">

            {/* Popular Posts */}

            <div className="bg-gray-50 p-6 rounded-xl">

              <h3 className="text-lg font-bold mb-4 pb-2 border-b">Popular This Week</h3>

              <div className="space-y-4">

                {[...newsPosts, ...reviewPosts].slice(0, 5).map((article, index) => (

                  <Link

                    key={index}

                    href={

                      article.category === "Reviews"

                        ? `/reviews/${article.subcategory}/${article.slug}`

                        : `/news/${article.subcategory}/${article.slug}`

                    }

                    className="flex gap-3 group"

                  >

                    <div className="relative w-16 h-16 flex-shrink-0 rounded-md overflow-hidden">

                      <Image

                        src={article.image || "/placeholder.svg"}

                        alt={article.title}

                        fill

                        className="object-cover"

                      />

                    </div>

                    <div>

                      <h4 className="font-medium text-sm mb-1 group-hover:text-sky-600 transition-colors line-clamp-2">

                        {article.title}

                      </h4>

                      <div className="text-xs text-muted-foreground">{article.date}</div>

                    </div>

                  </Link>

                ))}

              </div>

            </div>



            {/* Sidebar Ad */}

            <AdBanner size="300x250" id="sidebar-rectangle" />



            {/* Hot Deals */}

            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-xl">

              <h3 className="text-lg font-bold mb-4 flex items-center">

                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full mr-2">HOT</span>

                Today's Best Deals

              </h3>

              <div className="space-y-4">

                {[1, 2, 3].map((_, index) => (

                  <Card key={index} className="overflow-hidden border-0 shadow-sm">

                    <Link href="/deals" className="flex p-3 items-center">

                      <div className="relative w-12 h-12 flex-shrink-0 rounded-md overflow-hidden mr-3">

                        <Image

                          src={`/placeholder.svg?height=50&width=50&text=Deal${index + 1}`}

                          alt={`Deal ${index + 1}`}

                          fill

                          className="object-cover"

                        />

                      </div>

                      <div className="flex-grow">

                        <h4 className="font-medium text-xs">AirPods Pro 2 - $50 Off</h4>

                        <div className="flex justify-between items-center mt-1">

                          <span className="text-xs line-through text-muted-foreground">$249</span>

                          <span className="text-xs font-bold text-red-600">$199</span>

                        </div>

                      </div>

                    </Link>

                  </Card>

                ))}

                <Link href="/deals">

                  <Button variant="outline" size="sm" className="w-full rounded-full">

                    View All Deals

                  </Button>

                </Link>

              </div>

            </div>



            {/* Second Sidebar Ad */}

            <AdBanner size="300x250" id="sidebar-rectangle-2" />



            {/* Follow Us */}

            <div className="bg-gray-50 p-6 rounded-xl">

              <h3 className="text-lg font-bold mb-4">Follow Us</h3>

              <div className="grid grid-cols-4 gap-2">

                <Link

                  href="https://twitter.com"

                  className="flex flex-col items-center p-3 bg-white rounded-lg hover:bg-sky-50 transition-colors"

                >

                  <Twitter className="h-6 w-6 text-sky-500 mb-1" />

                  <span className="text-xs">Twitter</span>

                </Link>

                <Link

                  href="https://facebook.com"

                  className="flex flex-col items-center p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors"

                >

                  <Facebook className="h-6 w-6 text-blue-600 mb-1" />

                  <span className="text-xs">Facebook</span>

                </Link>

                <Link

                  href="https://instagram.com"

                  className="flex flex-col items-center p-3 bg-white rounded-lg hover:bg-pink-50 transition-colors"

                >

                  <Instagram className="h-6 w-6 text-pink-600 mb-1" />

                  <span className="text-xs">Instagram</span>

                </Link>

                <Link

                  href="https://youtube.com"

                  className="flex flex-col items-center p-3 bg-white rounded-lg hover:bg-red-50 transition-colors"

                >

                  <Youtube className="h-6 w-6 text-red-600 mb-1" />

                  <span className="text-xs">YouTube</span>

                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  )

}



// Import the social media icons

function Twitter(props) {

  return (

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

      {...props}

    >

      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />

    </svg>

  )

}



function Facebook(props) {

  return (

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

      {...props}

    >

      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />

    </svg>

  )

}



function Instagram(props) {

  return (

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

      {...props}

    >

      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />

      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />

      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />

    </svg>

  )

}



function Youtube(props) {

  return (

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

      {...props}

    >

      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />

      <path d="m10 15 5-3-5-3z" />

    </svg>

  )

}
