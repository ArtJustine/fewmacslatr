import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Clock } from "lucide-react"

interface PostCardProps {
  post: {
    slug: string
    title: string
    excerpt: string
    author: string
    date: string
    image: string
    rating?: number
    readTime?: number
  }
  category: string
  showRating?: boolean
  showReadTime?: boolean
}

export function PostCard({ post, category, showRating, showReadTime }: PostCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full border-0 shadow-md hover:shadow-lg transition-shadow">
      <Link href={`/${category}/${post.slug}`}>
        <div className="relative h-[200px]">
          <Image
            src={post.image || "/placeholder.svg?height=200&width=350"}
            alt={post.title}
            fill
            className="object-cover"
          />
          {showRating && post.rating && (
            <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-md">
              {post.rating}/5
            </div>
          )}
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <div className="text-xs text-sky-500 font-medium mb-1">{post.category}</div>
          <h3 className="font-bold text-base mb-2">{post.title}</h3>

          {showReadTime && post.readTime && (
            <div className="flex items-center mb-2">
              <Clock className="h-3 w-3 mr-1 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">{post.readTime} min read</span>
            </div>
          )}

          <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-2">{post.excerpt}</p>

          <div className="text-xs text-muted-foreground mb-3">
            {post.author} • {post.date}
          </div>

          <div className="mt-auto">
            <span className="text-sky-600 text-sm font-medium hover:underline">Read More</span>
          </div>
        </div>
      </Link>
    </Card>
  )
}

