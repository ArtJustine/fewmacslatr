import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Share2 } from "lucide-react"
import { newsPosts, getPostsBySubcategory } from "@/data/posts"
import { subcategories } from "@/components/subcategory-nav"
import { notFound } from "next/navigation"
import { AdBanner } from "@/components/ads/ad-banner"

export default function NewsArticlePage({ params }: { params: { subcategory: string; slug: string } }) {
  // Validate subcategory exists
  const subcategory = subcategories.find((s) => s.slug === params.subcategory)
  if (!subcategory) {
    notFound()
  }

  // Find the post
  const post = newsPosts.find((post) => post.slug === params.slug && post.subcategory === params.subcategory)

  if (!post) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
        <p className="mb-6">The article you're looking for doesn't exist or has been moved.</p>
        <Link href={`/news/${params.subcategory}`}>
          <Button>
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to {subcategory.name} News
          </Button>
        </Link>
      </div>
    )
  }

  // Get related posts from the same subcategory
  const relatedPosts = getPostsBySubcategory(newsPosts, params.subcategory)
    .filter((p) => p.slug !== params.slug)
    .slice(0, 3)

  // Get latest news (excluding current article)
  const latestNews = newsPosts.filter((p) => p.slug !== params.slug).slice(0, 4)

  return (
    <div className="container py-8 md:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        <div className="lg:col-span-2">
          {/* Breadcrumb */}
          <div className="mb-6">
            <div className="flex items-center text-sm text-muted-foreground">
              <Link href="/news" className="hover:text-foreground">
                News
              </Link>
              <span className="mx-2">/</span>
              <Link href={`/news/${params.subcategory}`} className="hover:text-foreground">
                {subcategory.name}
              </Link>
              <span className="mx-2">/</span>
              <span className="text-foreground truncate">{post.title}</span>
            </div>
          </div>

          {/* Article Header */}
          <div className="mb-8">
            <div className="text-sm text-sky-500 font-medium mb-2">{post.category}</div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            <div className="text-muted-foreground mb-6">
              By {post.author || "Apple Insider Staff"} • {post.date}
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-[300px] md:h-[500px] mb-8">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover rounded-lg" />
          </div>

          {/* Ad Banner after featured image */}
          <div className="mb-8">
            <AdBanner size="970x90" id="news-top-leaderboard" />
          </div>

          {/* Article Content - First Part */}
          <div className="prose prose-lg max-w-none">
            <p className="lead">
              {post.excerpt ||
                "Apple has unveiled its latest innovations, setting new standards in technology and design."}
            </p>

            <p>
              Apple's latest announcement has sent waves through the tech industry, with innovations that promise to
              redefine how we interact with technology. The new products showcase Apple's commitment to cutting-edge
              design and functionality.
            </p>

            <p>
              Industry analysts have praised the move, noting that these developments represent a significant step
              forward in Apple's product ecosystem. "This is exactly the kind of innovation we've come to expect from
              Apple," said tech analyst Jane Smith. "They're not just iterating, they're reimagining."
            </p>

            <h2>Key Features</h2>

            <p>
              The standout features of the new lineup include enhanced performance capabilities, improved battery life,
              and a suite of new software tools designed to maximize productivity and creativity.
            </p>

            <ul>
              <li>Next-generation processor with 40% performance improvement</li>
              <li>Advanced camera system with computational photography</li>
              <li>Extended battery life - up to 20 hours of continuous use</li>
              <li>New software features exclusive to the platform</li>
            </ul>
          </div>

          {/* Mid-article ad */}
          <div className="my-8 flex justify-center">
            <AdBanner size="480x280" id="news-mid-rectangle" />
          </div>

          {/* Article Content - Second Part */}
          <div className="prose prose-lg max-w-none">
            <p>
              These improvements come at a time when competition in the tech space is intensifying, with several major
              players releasing their own flagship products. However, Apple's ecosystem advantage continues to be a
              significant differentiator.
            </p>

            <h2>Market Impact</h2>

            <p>
              The announcement has already had a noticeable impact on Apple's stock price, with shares rising 3% in
              after-hours trading. Consumer interest has also been strong, with pre-order numbers reportedly exceeding
              expectations.
            </p>

            <div className="bg-blue-50 p-4 rounded-md border border-blue-100 my-6">
              <h4 className="text-blue-800 font-medium mb-2">Analyst Perspective</h4>
              <p className="text-blue-700 text-sm m-0">
                "Apple continues to demonstrate why they're the leader in consumer technology. These new products
                address real user needs while pushing the boundaries of what's possible," notes industry analyst Michael
                Chen.
              </p>
            </div>

            <p>
              As the products begin to reach consumers in the coming weeks, it will be interesting to see how they are
              received and what impact they have on the broader technology landscape. One thing is certain: Apple
              continues to set the pace for innovation in consumer technology.
            </p>

            <h2>What's Next</h2>

            <p>
              Looking ahead, Apple is expected to continue its focus on integrating hardware, software, and services.
              Rumors suggest that the company is working on several new initiatives in augmented reality, artificial
              intelligence, and health technology.
            </p>

            <p>
              For now, consumers and industry watchers alike will be closely monitoring the rollout of these new
              products and their reception in the market. Apple's ability to deliver on its promises will be crucial for
              maintaining its position as a leader in the tech industry.
            </p>
          </div>

          {/* Share Buttons */}
          <div className="flex items-center gap-4 mt-8 pt-6 border-t">
            <span className="text-sm font-medium">Share this article:</span>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="rounded-full h-8 w-8">
                <Share2 className="h-4 w-4" />
                <span className="sr-only">Share</span>
              </Button>
            </div>
          </div>

          {/* Author Info */}
          <div className="bg-muted/50 p-6 rounded-xl mt-8">
            <div className="flex items-center gap-4">
              <div className="relative h-12 w-12 rounded-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=50&width=50&text=Author"
                  alt="Author"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-medium">{post.author || "Apple Insider Staff"}</h3>
                <p className="text-sm text-muted-foreground">Technology Writer & Apple Specialist</p>
              </div>
            </div>
          </div>

          {/* Large ad at end of article */}
          <div className="my-12 flex justify-center">
            <AdBanner size="800x600" id="news-end-large-rectangle" />
          </div>

          {/* Related Articles */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-xl font-bold mb-4">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <div key={relatedPost.slug} className="border rounded-lg overflow-hidden">
                  <div className="relative h-[150px]">
                    <Image
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold mb-2 line-clamp-2">{relatedPost.title}</h4>
                    <Link href={`/news/${params.subcategory}/${relatedPost.slug}`}>
                      <Button variant="outline" size="sm">
                        Read Article
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Latest News */}
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-lg font-bold mb-4 pb-2 border-b">Latest News</h3>
            <div className="space-y-4">
              {latestNews.map((article) => (
                <Link
                  key={article.slug}
                  href={`/news/${article.subcategory}/${article.slug}`}
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
            <div className="mt-4 pt-4 border-t">
              <Link href="/news">
                <Button variant="outline" size="sm" className="w-full">
                  View All News
                </Button>
              </Link>
            </div>
          </div>

          {/* Sidebar Ad */}
          <AdBanner size="300x250" id="news-sidebar-rectangle" />

          {/* Hot Topics */}
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-lg font-bold mb-4 pb-2 border-b">Hot Topics</h3>
            <div className="space-y-2">
              <Link href="#" className="block py-2 px-3 bg-white rounded-md hover:bg-sky-50 transition-colors">
                iPhone
              </Link>
              <Link href="#" className="block py-2 px-3 bg-white rounded-md hover:bg-sky-50 transition-colors">
                MacBook Pro
              </Link>
              <Link href="#" className="block py-2 px-3 bg-white rounded-md hover:bg-sky-50 transition-colors">
                Apple Watch
              </Link>
              <Link href="#" className="block py-2 px-3 bg-white rounded-md hover:bg-sky-50 transition-colors">
                iOS Updates
              </Link>
              <Link href="#" className="block py-2 px-3 bg-white rounded-md hover:bg-sky-50 transition-colors">
                Apple Vision Pro
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-gradient-to-r from-sky-50 to-blue-50 p-6 rounded-xl">
            <h3 className="text-lg font-bold mb-2">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest Apple news and updates
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-3 py-2 text-sm rounded-md border"
              />
              <Button size="sm" className="w-full">
                Subscribe
              </Button>
            </div>
          </div>

          {/* Second Sidebar Ad */}
          <AdBanner size="300x250" id="news-sidebar-rectangle-2" />
        </div>
      </div>
    </div>
  )
}

