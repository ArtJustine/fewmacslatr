import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronRight, Star } from "lucide-react"
import { PostCard } from "@/components/post-card"
import { SubcategoryNav } from "@/components/subcategory-nav"
import { reviewPosts } from "@/data/posts"

export default function ReviewsPage() {
  return (
    <div className="container py-8 md:py-12">
      {/* Subcategory Navigation */}
      <SubcategoryNav category="reviews" className="mb-8" />

      {/* Page Header */}
      <div className="mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Product Reviews</h1>
        <p className="text-muted-foreground max-w-3xl">
          In-depth reviews of the latest Apple products. Our expert team tests and analyzes every feature to help you
          make informed purchasing decisions.
        </p>
      </div>

      {/* Featured Review */}
      <div className="mb-12">
        <Card className="overflow-hidden">
          <div className="md:flex">
            <div className="relative h-[250px] md:h-auto md:w-1/2">
              <Image
                src={reviewPosts[0].image || "/placeholder.svg"}
                alt={reviewPosts[0].title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 md:w-1/2 md:flex md:flex-col md:justify-center">
              <div className="text-sm text-sky-500 font-medium mb-2">FEATURED REVIEW</div>
              <h2 className="text-2xl font-bold mb-3">{reviewPosts[0].title}</h2>
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < reviewPosts[0].rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                  />
                ))}
                <span className="ml-2 text-sm font-medium">{reviewPosts[0].rating}/5</span>
              </div>
              <p className="text-muted-foreground mb-4">{reviewPosts[0].excerpt}</p>
              <div className="text-sm text-muted-foreground mb-4">
                {reviewPosts[0].author} • {reviewPosts[0].date}
              </div>
              <Link href={`/reviews/${reviewPosts[0].subcategory}/${reviewPosts[0].slug}`}>
                <Button>Read Full Review</Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>

      {/* Latest Reviews */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Latest Reviews</h2>
          <Button variant="ghost" size="sm" className="gap-1">
            View All <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewPosts.slice(1, 7).map((post) => (
            <PostCard key={post.slug} post={post} category={`reviews/${post.subcategory}`} showRating />
          ))}
        </div>
      </div>

      {/* Comparison Reviews */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Comparison Reviews</h2>
          <Button variant="ghost" size="sm" className="gap-1">
            View All <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewPosts.slice(7, 13).map((post) => (
            <PostCard key={post.slug} post={post} category={`reviews/${post.subcategory}`} showRating />
          ))}
        </div>
      </div>
    </div>
  )
}

