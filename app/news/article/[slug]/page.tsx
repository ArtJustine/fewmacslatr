import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { newsPosts } from "@/data/posts"

export default function NewsArticlePage({ params }: { params: { slug: string } }) {
  const post = newsPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
        <p className="mb-6">The article you're looking for doesn't exist or has been moved.</p>
        <Link href="/news">
          <Button>
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to News
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link href="/news" className="text-sm text-muted-foreground hover:text-foreground flex items-center">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to News
          </Link>
        </div>

        {/* Article Header */}
        <div className="mb-8">
          <div className="text-sm text-sky-500 font-medium mb-2">{post.category}</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          <div className="text-muted-foreground mb-6">
            By {post.author} • {post.date}
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-[300px] md:h-[500px] mb-8">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover rounded-lg" />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p className="lead">{post.excerpt}</p>

          <p>
            Apple has consistently been at the forefront of technological innovation, and their latest announcement
            continues this tradition. The new features and capabilities introduced in this update represent a
            significant step forward for the company and its users.
          </p>

          <p>
            Industry analysts have responded positively to the news, with many highlighting the potential impact on both
            consumer experience and the broader technology landscape. "This development demonstrates Apple's commitment
            to pushing boundaries while maintaining their focus on user experience," noted one expert.
          </p>

          <h2>Key Highlights</h2>

          <p>The announcement includes several noteworthy elements that deserve special attention:</p>

          <ul>
            <li>Enhanced performance capabilities that significantly improve user experience</li>
            <li>New design elements that reflect Apple's commitment to aesthetic excellence</li>
            <li>Expanded functionality that addresses common user needs and requests</li>
            <li>Improved integration with existing Apple services and products</li>
          </ul>

          <p>
            These improvements build upon Apple's existing ecosystem while introducing new possibilities for developers
            and users alike. The company's approach combines innovation with refinement, ensuring that new features
            enhance rather than complicate the user experience.
          </p>

          <h2>Looking Ahead</h2>

          <p>
            As Apple continues to develop and expand its product lineup, we can expect to see further innovations that
            build upon this foundation. The company's roadmap suggests a focus on seamless integration, enhanced
            performance, and new capabilities that leverage emerging technologies.
          </p>

          <p>
            For users, these developments promise an increasingly intuitive and powerful experience across Apple's range
            of devices and services. The ecosystem approach remains central to Apple's strategy, with each new product
            or feature designed to complement and enhance the others.
          </p>

          <p>
            We'll continue to monitor these developments and provide updates as more information becomes available. Stay
            tuned for in-depth analysis and expert perspectives on what these changes mean for Apple users and the
            technology industry as a whole.
          </p>
        </div>

        {/* Article Footer */}
        <div className="mt-12 pt-8 border-t">
          <h3 className="text-xl font-bold mb-4">Related Articles</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {newsPosts
              .filter((p) => p.slug !== post.slug)
              .slice(0, 3)
              .map((relatedPost) => (
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
                    <h4 className="font-bold mb-2">{relatedPost.title}</h4>
                    <Link href={`/news/${relatedPost.subcategory}/${relatedPost.slug}`}>
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
    </div>
  )
}

