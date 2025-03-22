import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import { PostCard } from "@/components/post-card"
import { SubcategoryNav } from "@/components/subcategory-nav"
import { newsPosts } from "@/data/posts"

export default function NewsPage() {
  return (
    <div className="container py-8 md:py-12">
      {/* Subcategory Navigation */}
      <SubcategoryNav category="news" className="mb-8" />

      {/* Page Header */}
      <div className="mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Apple News</h1>
        <p className="text-muted-foreground max-w-3xl">
          Stay up-to-date with the latest news, announcements, and updates from Apple. Discover new product launches,
          software updates, and company developments.
        </p>
      </div>

      {/* Featured Post */}
      <div className="mb-12">
        <Card className="overflow-hidden">
          <div className="md:flex">
            <div className="relative h-[250px] md:h-auto md:w-1/2">
              <Image
                src={newsPosts[0].image || "/placeholder.svg"}
                alt={newsPosts[0].title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 md:w-1/2 md:flex md:flex-col md:justify-center">
              <div className="text-sm text-sky-500 font-medium mb-2">FEATURED</div>
              <h2 className="text-2xl font-bold mb-3">{newsPosts[0].title}</h2>
              <p className="text-muted-foreground mb-4">{newsPosts[0].excerpt}</p>
              <div className="text-sm text-muted-foreground mb-4">
                {newsPosts[0].author} • {newsPosts[0].date}
              </div>
              <Link href={`/news/${newsPosts[0].subcategory}/${newsPosts[0].slug}`}>
                <Button>Read Full Article</Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>

      {/* Latest News */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Latest News</h2>
          <Button variant="ghost" size="sm" className="gap-1">
            View All <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsPosts.slice(1, 7).map((post) => (
            <PostCard key={post.slug} post={post} category={`news/${post.subcategory}`} />
          ))}
        </div>
      </div>

      {/* Product Updates */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Product Updates</h2>
          <Button variant="ghost" size="sm" className="gap-1">
            View All <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsPosts.slice(7, 13).map((post) => (
            <PostCard key={post.slug} post={post} category={`news/${post.subcategory}`} />
          ))}
        </div>
      </div>
    </div>
  )
}

