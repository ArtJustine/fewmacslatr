import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Star } from "lucide-react"
import { reviewPosts } from "@/data/posts"

export default function ReviewArticlePage({ params }: { params: { slug: string } }) {
  const post = reviewPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Review Not Found</h1>
        <p className="mb-6">The review you're looking for doesn't exist or has been moved.</p>
        <Link href="/reviews">
          <Button>
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to Reviews
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
          <Link href="/reviews" className="text-sm text-muted-foreground hover:text-foreground flex items-center">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Reviews
          </Link>
        </div>

        {/* Review Header */}
        <div className="mb-8">
          <div className="text-sm text-sky-500 font-medium mb-2">{post.category}</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>

          {post.rating && (
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${i < post.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                />
              ))}
              <span className="ml-2 font-medium">{post.rating}/5</span>
            </div>
          )}

          <div className="text-muted-foreground mb-6">
            By {post.author} • {post.date}
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-[300px] md:h-[500px] mb-8">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover rounded-lg" />
        </div>

        {/* Review Summary */}
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold mb-4">Review Summary</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-2">Pros</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Exceptional performance and speed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Outstanding build quality and design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Improved battery life over previous models</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Excellent ecosystem integration</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Cons</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Premium price point</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Limited customization options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Some features require additional Apple products</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Review Content */}
        <div className="prose prose-lg max-w-none">
          <p className="lead">{post.excerpt}</p>

          <h2>Design and Build Quality</h2>

          <p>
            Apple's attention to detail is evident in every aspect of this product's design. The premium materials and
            precise manufacturing result in a device that not only looks stunning but feels substantial and durable in
            hand.
          </p>

          <p>
            The refined aesthetic builds upon Apple's design language while introducing subtle improvements that enhance
            both form and function. Every element serves a purpose, reflecting the company's commitment to thoughtful
            design.
          </p>

          <h2>Performance and Features</h2>

          <p>
            Performance is where this product truly shines. The hardware specifications translate to real-world benefits
            that users will notice in everyday use, from faster app launches to smoother multitasking.
          </p>

          <p>
            New features add genuine value rather than simply serving as marketing points. Apple has clearly considered
            how users interact with their devices and implemented capabilities that address actual needs and enhance the
            overall experience.
          </p>

          <h2>User Experience</h2>

          <p>
            The seamless integration with Apple's ecosystem remains a significant advantage. For those already invested
            in Apple products, the additional convenience and functionality are substantial benefits that competitors
            struggle to match.
          </p>

          <p>
            Software optimization ensures that the hardware capabilities are fully utilized, resulting in a responsive
            and intuitive experience. Apple's focus on the details of user interaction is evident throughout.
          </p>

          <h2>Value and Conclusion</h2>

          <p>
            While the premium pricing may deter some potential buyers, the combination of performance, design, and
            ecosystem benefits provides strong value for those who can justify the investment. The longevity of Apple
            products also factors into the value equation.
          </p>

          <p>
            Overall, this product represents another strong entry in Apple's lineup. It successfully balances innovation
            with refinement, delivering meaningful improvements while maintaining the qualities that have made Apple
            products so popular.
          </p>
        </div>

        {/* Review Footer */}
        <div className="mt-12 pt-8 border-t">
          <h3 className="text-xl font-bold mb-4">Related Reviews</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {reviewPosts
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
                    <Link href={`/reviews/${relatedPost.subcategory}/${relatedPost.slug}`}>
                      <Button variant="outline" size="sm">
                        Read Review
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

