import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Clock } from "lucide-react"
import { guidePosts } from "@/data/posts"

export default function GuideArticlePage({ params }: { params: { slug: string } }) {
  const post = guidePosts.find((post) => post.slug === params.slug)

  if (!post) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Guide Not Found</h1>
        <p className="mb-6">The guide you're looking for doesn't exist or has been moved.</p>
        <Link href="/guides">
          <Button>
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to Guides
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
          <Link href="/guides" className="text-sm text-muted-foreground hover:text-foreground flex items-center">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Guides
          </Link>
        </div>

        {/* Guide Header */}
        <div className="mb-8">
          <div className="text-sm text-sky-500 font-medium mb-2">{post.category}</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>

          {post.readTime && (
            <div className="flex items-center mb-4">
              <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{post.readTime} min read</span>
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

        {/* Table of Contents */}
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
          <ol className="space-y-2">
            <li>
              <a href="#introduction" className="text-sky-600 hover:underline">
                Introduction
              </a>
            </li>
            <li>
              <a href="#getting-started" className="text-sky-600 hover:underline">
                Getting Started
              </a>
            </li>
            <li>
              <a href="#basic-techniques" className="text-sky-600 hover:underline">
                Basic Techniques
              </a>
            </li>
            <li>
              <a href="#advanced-tips" className="text-sky-600 hover:underline">
                Advanced Tips
              </a>
            </li>
            <li>
              <a href="#troubleshooting" className="text-sky-600 hover:underline">
                Troubleshooting
              </a>
            </li>
            <li>
              <a href="#conclusion" className="text-sky-600 hover:underline">
                Conclusion
              </a>
            </li>
          </ol>
        </div>

        {/* Guide Content */}
        <div className="prose prose-lg max-w-none">
          <p className="lead">{post.excerpt}</p>

          <h2 id="introduction">Introduction</h2>

          <p>
            Apple devices offer powerful capabilities that can significantly enhance your productivity, creativity, or
            technical skills. This guide will walk you through everything you need to know to master these features and
            get the most out of your Apple products.
          </p>

          <p>
            Whether you're a beginner just getting started or an experienced user looking to deepen your knowledge,
            you'll find valuable information and practical tips that you can apply immediately.
          </p>

          <h2 id="getting-started">Getting Started</h2>

          <p>
            Before diving into advanced techniques, it's important to ensure you have the basics covered. Make sure your
            device is updated to the latest software version to access all available features and security improvements.
          </p>

          <div className="bg-blue-50 p-4 rounded-md border border-blue-100 my-6">
            <h4 className="text-blue-800 font-medium mb-2">Pro Tip</h4>
            <p className="text-blue-700 text-sm m-0">
              To check for software updates, go to Settings > General > Software Update. Enabling automatic updates
              ensures you always have the latest features and security patches.
            </p>
          </div>

          <p>
            Familiarize yourself with the fundamental controls and navigation gestures for your device. These basics
            form the foundation for more advanced interactions and will make your experience more intuitive.
          </p>

          <h2 id="basic-techniques">Basic Techniques</h2>

          <p>
            Now that you're set up, let's explore some essential techniques that will improve your efficiency and
            experience with your Apple device:
          </p>

          <ol>
            <li>
              <strong>Customize your settings</strong> - Take time to adjust settings according to your preferences and
              needs. This includes display brightness, notification preferences, and privacy controls.
            </li>
            <li>
              <strong>Learn keyboard shortcuts</strong> - If you're using a Mac or iPad with a keyboard, mastering
              keyboard shortcuts can significantly speed up your workflow.
            </li>
            <li>
              <strong>Organize your home screen</strong> - Arrange apps in a way that makes sense for how you use your
              device. Consider creating folders for related apps to reduce clutter.
            </li>
            <li>
              <strong>Set up Focus modes</strong> - Configure different Focus modes for various activities to minimize
              distractions and stay productive.
            </li>
          </ol>

          <h2 id="advanced-tips">Advanced Tips</h2>

          <p>
            Once you've mastered the basics, these advanced techniques will help you take full advantage of your Apple
            device's capabilities:
          </p>

          <p>[Detailed advanced tips would be included here, specific to the guide topic]</p>

          <h2 id="troubleshooting">Troubleshooting</h2>

          <p>Even with the best preparation, you might encounter issues. Here are solutions to common problems:</p>

          <div className="bg-amber-50 p-4 rounded-md border border-amber-100 my-6">
            <h4 className="text-amber-800 font-medium mb-2">Common Issue</h4>
            <p className="text-amber-700 text-sm m-0">
              If your device becomes unresponsive, try a force restart. For most recent iPhones, press and quickly
              release the volume up button, press and quickly release the volume down button, then press and hold the
              side button until the Apple logo appears.
            </p>
          </div>

          <p>[Additional troubleshooting tips would be included here]</p>

          <h2 id="conclusion">Conclusion</h2>

          <p>
            By following this guide, you've gained valuable knowledge that will help you get the most out of your Apple
            device. Remember that mastery comes with practice, so don't hesitate to experiment with these techniques in
            your daily use.
          </p>

          <p>
            As Apple continues to update and improve their products, stay curious and open to learning new features and
            capabilities. The investment in understanding your device will pay dividends in productivity, creativity,
            and enjoyment.
          </p>
        </div>

        {/* Guide Footer */}
        <div className="mt-12 pt-8 border-t">
          <h3 className="text-xl font-bold mb-4">Related Guides</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {guidePosts
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
                    <Link href={`/guides/${relatedPost.subcategory}/${relatedPost.slug}`}>
                      <Button variant="outline" size="sm">
                        Read Guide
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

