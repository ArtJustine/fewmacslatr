import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronRight, Star } from "lucide-react"
import { PostCard } from "@/components/post-card"
import { SubcategoryNav, subcategories } from "@/components/subcategory-nav"
import { reviewPosts, getPostsBySubcategory, getFeaturedPostForSubcategory } from "@/data/posts"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return subcategories.map((subcategory) => ({
    subcategory: subcategory.slug,
  }))
}

export default function ReviewsSubcategoryPage({ params }: { params: { subcategory: string } }) {
  // Validate subcategory exists
  const subcategory = subcategories.find((s) => s.slug === params.subcategory)
  if (!subcategory) {
    notFound()
  }

  // Get posts for this subcategory
  const subcategoryPosts = getPostsBySubcategory(reviewPosts, params.subcategory)

  // Get featured post
  const featuredPost = getFeaturedPostForSubcategory(reviewPosts, params.subcategory)

  if (subcategoryPosts.length === 0) {
    return (
      <div className="container py-8 md:py-12">
        <SubcategoryNav category="reviews" className="mb-8" />
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold mb-4">No Reviews Found</h1>
          <p className="text-muted-foreground mb-6">We don't have any reviews for {subcategory.name} yet.</p>
          <Link href="/reviews">
            <Button>View All Reviews</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-8 md:py-12">
      {/* Subcategory Navigation */}
      <SubcategoryNav category="reviews" className="mb-8" />

      {/* Page Header */}
      <div className="mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{subcategory.name} Reviews</h1>
        <p className="text-muted-foreground max-w-3xl">
          In-depth reviews and analysis of Apple's {subcategory.name} products. Our expert team tests and evaluates
          every feature to help you make informed decisions.
        </p>
      </div>

      {/* Featured Review */}
      {featuredPost && (
        <div className="mb-12">
          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="relative h-[250px] md:h-auto md:w-1/2">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 md:w-1/2 md:flex md:flex-col md:justify-center">
                <div className="text-sm text-sky-500 font-medium mb-2">FEATURED REVIEW</div>
                <h2 className="text-2xl font-bold mb-3">{featuredPost.title}</h2>
                {featuredPost.rating && (
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < featuredPost.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                      />
                    ))}
                    <span className="ml-2 text-sm font-medium">{featuredPost.rating}/5</span>
                  </div>
                )}
                <p className="text-muted-foreground mb-4">{featuredPost.excerpt}</p>
                <div className="text-sm text-muted-foreground mb-4">
                  {featuredPost.author} • {featuredPost.date}
                </div>
                <Link href={`/reviews/${params.subcategory}/${featuredPost.slug}`}>
                  <Button>Read Full Review</Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Latest Reviews */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Latest {subcategory.name} Reviews</h2>
          <Button variant="ghost" size="sm" className="gap-1">
            View All <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subcategoryPosts.slice(featuredPost ? 1 : 0, 7).map((post) => (
            <PostCard key={post.slug} post={post} category={`reviews/${params.subcategory}`} showRating />
          ))}
        </div>
      </div>

      {/* Comparison Reviews */}
      {subcategoryPosts.length > 7 && (
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">{subcategory.name} Comparisons</h2>
            <Button variant="ghost" size="sm" className="gap-1">
              View All <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subcategoryPosts.slice(7, 13).map((post) => (
              <PostCard key={post.slug} post={post} category={`reviews/${params.subcategory}`} showRating />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

