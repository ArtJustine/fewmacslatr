import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import { PostCard } from "@/components/post-card"
import { SubcategoryNav, subcategories } from "@/components/subcategory-nav"
import { newsPosts, getPostsBySubcategory, getFeaturedPostForSubcategory } from "@/data/posts"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  if (Array.isArray(subcategories)) {
    return subcategories.map((subcategory) => ({
      subcategory: subcategory.slug,
    }));
  } else {
    console.error("subcategories is not an array or is undefined");
    return []; // Return an empty array to avoid build failure, or handle the error appropriately.
  }
}

export default function NewsSubcategoryPage({ params }: { params: { subcategory: string } }) {
  // ... rest of your component code ...
}  // Validate subcategory exists
  const subcategory = subcategories.find((s) => s.slug === params.subcategory)
  if (!subcategory) {
    notFound()
  }

  // Get posts for this subcategory
  const subcategoryPosts = getPostsBySubcategory(newsPosts, params.subcategory)

  // Get featured post
  const featuredPost = getFeaturedPostForSubcategory(newsPosts, params.subcategory)

  if (subcategoryPosts.length === 0) {
    return (
      <div className="container py-8 md:py-12">
        <SubcategoryNav category="news" className="mb-8" />
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold mb-4">No Articles Found</h1>
          <p className="text-muted-foreground mb-6">We don't have any news articles for {subcategory.name} yet.</p>
          <Link href="/news">
            <Button>View All News</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-8 md:py-12">
      {/* Subcategory Navigation */}
      <SubcategoryNav category="news" className="mb-8" />

      {/* Page Header */}
      <div className="mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{subcategory.name} News</h1>
        <p className="text-muted-foreground max-w-3xl">
          Stay up-to-date with the latest news, announcements, and updates about {subcategory.name} from Apple.
        </p>
      </div>

      {/* Featured Post */}
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
                <div className="text-sm text-sky-500 font-medium mb-2">FEATURED</div>
                <h2 className="text-2xl font-bold mb-3">{featuredPost.title}</h2>
                <p className="text-muted-foreground mb-4">{featuredPost.excerpt}</p>
                <div className="text-sm text-muted-foreground mb-4">
                  {featuredPost.author} • {featuredPost.date}
                </div>
                <Link href={`/news/${params.subcategory}/${featuredPost.slug}`}>
                  <Button>Read Full Article</Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Latest News */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Latest {subcategory.name} News</h2>
          <Button variant="ghost" size="sm" className="gap-1">
            View All <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subcategoryPosts.slice(featuredPost ? 1 : 0, 7).map((post) => (
            <PostCard key={post.slug} post={post} category={`news/${params.subcategory}`} />
          ))}
        </div>
      </div>

      {/* More Articles */}
      {subcategoryPosts.length > 7 && (
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">More {subcategory.name} Articles</h2>
            <Button variant="ghost" size="sm" className="gap-1">
              View All <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subcategoryPosts.slice(7, 13).map((post) => (
              <PostCard key={post.slug} post={post} category={`news/${params.subcategory}`} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

