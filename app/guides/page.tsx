import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronRight, Clock } from "lucide-react"
import { PostCard } from "@/components/post-card"
import { SubcategoryNav } from "@/components/subcategory-nav"
import { guidePosts } from "@/data/posts"

export default function GuidesPage() {
  return (
    <div className="container py-8 md:py-12">
      {/* Subcategory Navigation */}
      <SubcategoryNav category="guides" className="mb-8" />

      {/* Page Header */}
      <div className="mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Apple Guides & Tutorials</h1>
        <p className="text-muted-foreground max-w-3xl">
          Step-by-step guides, tutorials, and how-tos to help you get the most out of your Apple devices. Learn tips,
          tricks, and hidden features from our expert team.
        </p>
      </div>

      {/* Featured Guide */}
      <div className="mb-12">
        <Card className="overflow-hidden">
          <div className="md:flex">
            <div className="relative h-[250px] md:h-auto md:w-1/2">
              <Image
                src={guidePosts[0].image || "/placeholder.svg"}
                alt={guidePosts[0].title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 md:w-1/2 md:flex md:flex-col md:justify-center">
              <div className="text-sm text-sky-500 font-medium mb-2">FEATURED GUIDE</div>
              <h2 className="text-2xl font-bold mb-3">{guidePosts[0].title}</h2>
              <div className="flex items-center mb-3">
                <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{guidePosts[0].readTime} min read</span>
              </div>
              <p className="text-muted-foreground mb-4">{guidePosts[0].excerpt}</p>
              <div className="text-sm text-muted-foreground mb-4">
                {guidePosts[0].author} • {guidePosts[0].date}
              </div>
              <Link href={`/guides/${guidePosts[0].subcategory}/${guidePosts[0].slug}`}>
                <Button>Read Full Guide</Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>

      {/* Latest Guides */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Latest Guides</h2>
          <Button variant="ghost" size="sm" className="gap-1">
            View All <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guidePosts.slice(1, 7).map((post) => (
            <PostCard key={post.slug} post={post} category={`guides/${post.subcategory}`} showReadTime />
          ))}
        </div>
      </div>

      {/* Tips & Tricks */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Tips & Tricks</h2>
          <Button variant="ghost" size="sm" className="gap-1">
            View All <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guidePosts.slice(7, 13).map((post) => (
            <PostCard key={post.slug} post={post} category={`guides/${post.subcategory}`} showReadTime />
          ))}
        </div>
      </div>
    </div>
  )
}

