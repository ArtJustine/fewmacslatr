// Post type definition
export interface Post {
  slug: string
  title: string
  excerpt: string
  author: string
  date: string
  image: string
  category: string
  subcategory: string
  rating?: number
  readTime?: number
}

// News Posts
export const newsPosts: Post[] = [
  {
    slug: "apple-announces-m3-macbook-pro",
    title: "Apple Announces New MacBook Pro with M3 Chip",
    excerpt:
      "Apple has unveiled its latest MacBook Pro lineup featuring the new M3 chip, promising significant performance improvements and enhanced battery life.",
    author: "John Smith",
    date: "March 15, 2025",
    image: "/placeholder.svg?height=500&width=800",
    category: "Product Launch",
    subcategory: "mac",
  },
  {
    slug: "ios-18-features-leak",
    title: "iOS 18: All the New Features Revealed in Latest Leak",
    excerpt:
      "A recent leak has revealed several exciting new features coming to iOS 18, including enhanced AI capabilities and a redesigned Control Center.",
    author: "Sarah Johnson",
    date: "March 12, 2025",
    image: "/placeholder.svg?height=200&width=350",
    category: "Software",
    subcategory: "iphone",
  },
  {
    slug: "apple-vision-pro-sales-milestone",
    title: "Apple Vision Pro Reaches 1 Million Sales Milestone",
    excerpt:
      "Apple's mixed reality headset has reached a significant sales milestone, indicating growing consumer interest in spatial computing.",
    author: "Michael Brown",
    date: "March 10, 2025",
    image: "/placeholder.svg?height=200&width=350",
    category: "Business",
    subcategory: "accessories",
  },
  {
    slug: "apple-store-redesign",
    title: "Apple Unveils New Store Design in New York",
    excerpt:
      "Apple has revealed a completely redesigned retail store in New York featuring sustainable materials and innovative community spaces.",
    author: "Emily Chen",
    date: "March 8, 2025",
    image: "/placeholder.svg?height=200&width=350",
    category: "Retail",
    subcategory: "services",
  },
  {
    slug: "apple-car-project-update",
    title: "Apple Car Project: New Patents Reveal Direction",
    excerpt:
      "Recently published patents provide new insights into Apple's secretive automotive project, suggesting a focus on autonomous driving technology.",
    author: "David Wilson",
    date: "March 5, 2025",
    image: "/placeholder.svg?height=200&width=350",
    category: "Innovation",
    subcategory: "services",
  },
  {
    slug: "apple-education-initiative",
    title: "Apple Expands Education Initiative to More Countries",
    excerpt:
      "Apple is expanding its education program to 10 more countries, providing coding resources and iPad devices to underserved communities.",
    author: "Lisa Taylor",
    date: "March 3, 2025",
    image: "/placeholder.svg?height=200&width=350",
    category: "Education",
    subcategory: "ipad",
  },
  {
    slug: "apple-music-classical-update",
    title: "Apple Music Classical Gets Major Update",
    excerpt:
      "Apple Music Classical has received a significant update with enhanced search capabilities and exclusive recordings.",
    author: "Robert Johnson",
    date: "March 1, 2025",
    image: "/placeholder.svg?height=200&width=350",
    category: "Services",
    subcategory: "services",
  },
  {
    slug: "iphone-16-production-begins",
    title: "iPhone 16 Production Reportedly Begins Ahead of Schedule",
    excerpt:
      "Supply chain sources indicate that Apple has started production of the iPhone 16 earlier than expected, suggesting a possible earlier release date.",
    author: "Jennifer Lee",
    date: "February 28, 2025",
    image: "/placeholder.svg?height=200&width=350",
    category: "Production",
    subcategory: "iphone",
  },
  {
    slug: "apple-watch-health-features",
    title: "New Health Features Coming to Apple Watch",
    excerpt:
      "Apple is reportedly working on new health monitoring features for the Apple Watch, including blood glucose monitoring and sleep apnea detection.",
    author: "Thomas Wright",
    date: "February 25, 2025",
    image: "/placeholder.svg?height=200&width=350",
    category: "Health",
    subcategory: "apple-watch",
  },
  {
    slug: "apple-tv-plus-new-shows",
    title: "Apple TV+ Announces Slate of New Original Shows",
    excerpt:
      "Apple's streaming service has announced several new original series and films featuring A-list Hollywood talent.",
    author: "Amanda Garcia",
    date: "February 22, 2025",
    image: "/placeholder.svg?height=200&width=350",
    category: "Entertainment",
    subcategory: "services",
  },
  {
    slug: "apple-environmental-goals",
    title: "Apple Accelerates Environmental Goals",
    excerpt:
      "Apple has announced more ambitious environmental goals, aiming to become completely carbon neutral across its entire supply chain by 2030.",
    author: "Mark Thompson",
    date: "February 20, 2025",
    image: "/placeholder.svg?height=200&width=350",
    category: "Environment",
    subcategory: "services",
  },
  {
    slug: "apple-developer-academy-expansion",
    title: "Apple Developer Academy Expands to Five New Locations",
    excerpt:
      "Apple is expanding its Developer Academy program to five new locations worldwide, offering more opportunities for aspiring app developers.",
    author: "Sophia Martinez",
    date: "February 18, 2025",
    image: "/placeholder.svg?height=200&width=350",
    category: "Development",
    subcategory: "services",
  },
  {
    slug: "apple-pay-later-global-rollout",
    title: "Apple Pay Later Begins Global Rollout",
    excerpt:
      "After a successful launch in the US, Apple is now rolling out its Buy Now, Pay Later service to international markets.",
    author: "Daniel Kim",
    date: "February 15, 2025",
    image: "/placeholder.svg?height=200&width=350",
    category: "Finance",
    subcategory: "services",
  },
  {
    slug: "ipad-pro-m3-leak",
    title: "iPad Pro with M3 Chip: Leaked Specs and Release Date",
    excerpt:
      "New leaks reveal details about the upcoming iPad Pro refresh, including the M3 chip and a new display technology.",
    author: "Chris Johnson",
    date: "February 12, 2025",
    image: "/placeholder.svg?height=200&width=350",
    category: "Rumors",
    subcategory: "ipad",
  },
  {
    slug: "airpods-max-2-rumors",
    title: "AirPods Max 2: Everything We Know So Far",
    excerpt:
      "Rumors suggest Apple is preparing to launch the second generation of its premium over-ear headphones with several new features.",
    author: "Michelle Lee",
    date: "February 10, 2025",
    image: "/placeholder.svg?height=200&width=350",
    category: "Rumors",
    subcategory: "airpods",
  },
  {
    slug: "homepod-with-screen-development",
    title: "Apple Developing HomePod with Built-in Screen",
    excerpt:
      "Sources indicate Apple is working on a new HomePod model with an integrated display to compete with smart home displays.",
    author: "Jason Miller",
    date: "February 8, 2025",
    image: "/placeholder.svg?height=200&width=350",
    category: "Rumors",
    subcategory: "home",
  },
]

// Review Posts
export const reviewPosts: Post[] = [
  {
    slug: "iphone-15-pro-max-review",
    title: "iPhone 15 Pro Max: The Ultimate Camera Smartphone",
    excerpt:
      "Our comprehensive review of Apple's flagship iPhone 15 Pro Max, focusing on its revolutionary camera system, performance, and battery life.",
    author: "Jessica Williams",
    date: "March 14, 2025",
    image: "/placeholder.svg?height=500&width=800",
    rating: 4.5,
    category: "Smartphones",
    subcategory: "iphone",
  },
  {
    slug: "macbook-air-m3-review",
    title: "MacBook Air M3: The Perfect Balance of Power and Portability",
    excerpt:
      "The new MacBook Air with M3 chip delivers impressive performance in an incredibly thin package. Is it the best laptop for most people?",
    author: "Alex Chen",
    date: "March 11, 2025",
    image: "/placeholder.svg?height=200&width=350",
    rating: 4.5,
    category: "Laptops",
    subcategory: "mac",
  },
  {
    slug: "airpods-pro-2-review",
    title: "AirPods Pro 2: Noise Cancellation Perfected",
    excerpt:
      "Apple's second-generation AirPods Pro bring significant improvements to noise cancellation and sound quality. Here's our detailed review.",
    author: "Michael Stevens",
    date: "March 9, 2025",
    image: "/placeholder.svg?height=200&width=350",
    rating: 4,
    category: "Audio",
    subcategory: "airpods",
  },
  {
    slug: "apple-watch-series-9-review",
    title: "Apple Watch Series 9: Incremental but Important Upgrades",
    excerpt:
      "The Apple Watch Series 9 brings subtle but meaningful improvements to Apple's wearable lineup. We test all the new features.",
    author: "Samantha Lee",
    date: "March 7, 2025",
    image: "/placeholder.svg?height=200&width=350",
    rating: 4,
    category: "Wearables",
    subcategory: "apple-watch",
  },
  {
    slug: "ipad-pro-m2-review",
    title: "iPad Pro M2: A Laptop Replacement for Creatives",
    excerpt:
      "With the powerful M2 chip and improved display technology, the iPad Pro is closer than ever to replacing your laptop.",
    author: "Ryan Johnson",
    date: "March 4, 2025",
    image: "/placeholder.svg?height=200&width=350",
    rating: 4.5,
    category: "Tablets",
    subcategory: "ipad",
  },
  {
    slug: "homepod-mini-review",
    title: "HomePod Mini: Small Speaker, Big Sound",
    excerpt:
      "Apple's compact smart speaker delivers impressive audio quality and Siri capabilities at an affordable price point.",
    author: "Emma Davis",
    date: "March 2, 2025",
    image: "/placeholder.svg?height=200&width=350",
    rating: 3.5,
    category: "Smart Home",
    subcategory: "home",
  },
  {
    slug: "apple-tv-4k-review",
    title: "Apple TV 4K (2024): The Premium Streaming Experience",
    excerpt:
      "The latest Apple TV 4K brings faster performance and new features, but is it worth the premium price over other streaming devices?",
    author: "Jason Miller",
    date: "February 27, 2025",
    image: "/placeholder.svg?height=200&width=350",
    rating: 4,
    category: "Entertainment",
    subcategory: "home",
  },
  {
    slug: "iphone-vs-pixel-camera-comparison",
    title: "iPhone 15 Pro vs. Pixel 8 Pro: The Ultimate Camera Showdown",
    excerpt:
      "We compare the camera systems of Apple's iPhone 15 Pro and Google's Pixel 8 Pro in various shooting conditions to determine the winner.",
    author: "Victoria Chang",
    date: "February 24, 2025",
    image: "/placeholder.svg?height=200&width=350",
    rating: 5,
    category: "Comparisons",
    subcategory: "iphone",
  },
  {
    slug: "macbook-pro-vs-dell-xps",
    title: "MacBook Pro M3 vs. Dell XPS 14: Which Premium Laptop Reigns Supreme?",
    excerpt:
      "A detailed comparison of Apple's MacBook Pro with M3 chip and Dell's latest XPS 14, examining performance, display quality, and value.",
    author: "Christopher Adams",
    date: "February 21, 2025",
    image: "/placeholder.svg?height=200&width=350",
    rating: 4.5,
    category: "Comparisons",
    subcategory: "mac",
  },
  {
    slug: "airpods-vs-sony-wf",
    title: "AirPods Pro 2 vs. Sony WF-1000XM5: Noise-Cancelling Earbuds Face-Off",
    excerpt:
      "We test Apple's AirPods Pro 2 against Sony's flagship WF-1000XM5 earbuds to determine which offers the best audio experience.",
    author: "Olivia Wilson",
    date: "February 19, 2025",
    image: "/placeholder.svg?height=200&width=350",
    rating: 4,
    category: "Comparisons",
    subcategory: "airpods",
  },
  {
    slug: "apple-watch-vs-samsung-galaxy",
    title: "Apple Watch Series 9 vs. Samsung Galaxy Watch 6: Smartwatch Comparison",
    excerpt:
      "A comprehensive comparison of the latest smartwatches from Apple and Samsung, focusing on health features, performance, and ecosystem integration.",
    author: "Nathan Park",
    date: "February 17, 2025",
    image: "/placeholder.svg?height=200&width=350",
    rating: 4,
    category: "Comparisons",
    subcategory: "apple-watch",
  },
  {
    slug: "ipad-vs-surface",
    title: "iPad Air vs. Surface Pro 9: Productivity Tablet Showdown",
    excerpt:
      "We compare Apple's iPad Air with Microsoft's Surface Pro 9 to determine which device offers the best balance of productivity and entertainment.",
    author: "Rachel Green",
    date: "February 14, 2025",
    image: "/placeholder.svg?height=200&width=350",
    rating: 3.5,
    category: "Comparisons",
    subcategory: "ipad",
  },
  {
    slug: "apple-one-review",
    title: "Apple One Subscription: Is the Bundle Worth It in 2025?",
    excerpt:
      "We analyze the value proposition of Apple's all-in-one subscription bundle to determine if it's worth the monthly cost.",
    author: "Brian Taylor",
    date: "February 12, 2025",
    image: "/placeholder.svg?height=200&width=350",
    rating: 4,
    category: "Services",
    subcategory: "services",
  },
  {
    slug: "magsafe-accessories-roundup",
    title: "Best MagSafe Accessories for iPhone in 2025",
    excerpt:
      "We test and review the most useful MagSafe accessories for iPhone, from chargers to wallets and car mounts.",
    author: "Alicia Johnson",
    date: "February 10, 2025",
    image: "/placeholder.svg?height=200&width=350",
    rating: 4.5,
    category: "Accessories",
    subcategory: "accessories",
  },
  {
    slug: "apple-pencil-pro-review",
    title: "Apple Pencil Pro: The Ultimate Tool for Digital Artists",
    excerpt: "Our in-depth review of the new Apple Pencil Pro and how it enhances the creative experience on iPad.",
    author: "Marcus Wong",
    date: "February 8, 2025",
    image: "/placeholder.svg?height=200&width=350",
    rating: 5,
    category: "Accessories",
    subcategory: "accessories",
  },
]

// Guide Posts
export const guidePosts: Post[] = [
  {
    slug: "iphone-photography-tips",
    title: "Master iPhone Photography: Pro Tips and Tricks",
    excerpt:
      "Learn how to take professional-quality photos with your iPhone using these expert techniques, camera settings, and recommended apps.",
    author: "Maria Rodriguez",
    date: "March 13, 2025",
    image: "/placeholder.svg?height=500&width=800",
    readTime: 12,
    category: "Photography",
    subcategory: "iphone",
  },
  {
    slug: "macos-productivity-tips",
    title: "10 macOS Tips to Boost Your Productivity",
    excerpt:
      "Discover hidden features and shortcuts in macOS that will help you work more efficiently and save time on daily tasks.",
    author: "James Wilson",
    date: "March 10, 2025",
    image: "/placeholder.svg?height=200&width=350",
    readTime: 8,
    category: "Productivity",
    subcategory: "mac",
  },
  {
    slug: "iphone-battery-optimization",
    title: "How to Maximize Your iPhone's Battery Life",
    excerpt:
      "Follow these practical tips to extend your iPhone's battery life and maintain battery health for longer device longevity.",
    author: "Laura Chen",
    date: "March 8, 2025",
    image: "/placeholder.svg?height=200&width=350",
    readTime: 6,
    category: "Maintenance",
    subcategory: "iphone",
  },
  {
    slug: "apple-watch-fitness-guide",
    title: "Complete Guide to Apple Watch Fitness Features",
    excerpt:
      "Learn how to use all the fitness and health tracking capabilities of your Apple Watch to achieve your wellness goals.",
    author: "David Thompson",
    date: "March 6, 2025",
    image: "/placeholder.svg?height=200&width=350",
    readTime: 10,
    category: "Health & Fitness",
    subcategory: "apple-watch",
  },
  {
    slug: "icloud-backup-guide",
    title: "iCloud Backup: Everything You Need to Know",
    excerpt:
      "A comprehensive guide to setting up, managing, and restoring iCloud backups to keep your data safe and accessible.",
    author: "Sophie Martin",
    date: "March 4, 2025",
    image: "/placeholder.svg?height=200&width=350",
    readTime: 7,
    category: "Data Management",
    subcategory: "services",
  },
  {
    slug: "airpods-pro-hidden-features",
    title: "7 Hidden AirPods Pro Features You Should Be Using",
    excerpt: "Discover lesser-known features and settings that will help you get the most out of your AirPods Pro.",
    author: "Kevin Lee",
    date: "March 2, 2025",
    image: "/placeholder.svg?height=200&width=350",
    readTime: 5,
    category: "Audio",
    subcategory: "airpods",
  },
  {
    slug: "ipad-drawing-tutorial",
    title: "Digital Art Basics: Getting Started with iPad and Apple Pencil",
    excerpt:
      "A beginner-friendly guide to digital drawing and painting using iPad, Apple Pencil, and popular art applications.",
    author: "Nina Patel",
    date: "February 28, 2025",
    image: "/placeholder.svg?height=200&width=350",
    readTime: 15,
    category: "Creativity",
    subcategory: "ipad",
  },
  {
    slug: "apple-shortcuts-automation",
    title: "Automate Your Life with Apple Shortcuts",
    excerpt: "Learn how to create powerful automation workflows using the Shortcuts app across your Apple devices.",
    author: "Carlos Mendez",
    date: "February 26, 2025",
    image: "/placeholder.svg?height=200&width=350",
    readTime: 9,
    category: "Automation",
    subcategory: "iphone",
  },
  {
    slug: "mac-security-guide",
    title: "Essential Security Tips for Mac Users",
    excerpt:
      "Protect your Mac and personal data with these important security practices and built-in macOS security features.",
    author: "Alicia Johnson",
    date: "February 24, 2025",
    image: "/placeholder.svg?height=200&width=350",
    readTime: 8,
    category: "Security",
    subcategory: "mac",
  },
  {
    slug: "iphone-accessibility-features",
    title: "Complete Guide to iPhone Accessibility Features",
    excerpt:
      "Discover how to customize your iPhone's accessibility settings to make it work better for your specific needs.",
    author: "Marcus Wong",
    date: "February 22, 2025",
    image: "/placeholder.svg?height=200&width=350",
    readTime: 7,
    category: "Accessibility",
    subcategory: "iphone",
  },
  {
    slug: "apple-tv-streaming-tips",
    title: "Getting the Most Out of Your Apple TV",
    excerpt: "Tips and tricks for optimizing your Apple TV experience, from picture settings to app recommendations.",
    author: "Tanya Roberts",
    date: "February 20, 2025",
    image: "/placeholder.svg?height=200&width=350",
    readTime: 6,
    category: "Entertainment",
    subcategory: "home",
  },
  {
    slug: "homepod-smart-home-setup",
    title: "Building a Smart Home with HomePod and HomeKit",
    excerpt:
      "A step-by-step guide to setting up and controlling your smart home devices using HomePod and Apple's HomeKit platform.",
    author: "Eric Nelson",
    date: "February 18, 2025",
    image: "/placeholder.svg?height=200&width=350",
    readTime: 11,
    category: "Smart Home",
    subcategory: "home",
  },
  {
    slug: "apple-music-playlists",
    title: "Creating the Perfect Apple Music Playlists",
    excerpt: "Learn how to organize and curate your music library with advanced playlist features in Apple Music.",
    author: "Jennifer Adams",
    date: "February 16, 2025",
    image: "/placeholder.svg?height=200&width=350",
    readTime: 8,
    category: "Entertainment",
    subcategory: "services",
  },
  {
    slug: "airpods-troubleshooting",
    title: "Troubleshooting Common AirPods Issues",
    excerpt:
      "Solutions for the most frequent problems AirPods users encounter, from connection issues to battery drain.",
    author: "Michael Chen",
    date: "February 14, 2025",
    image: "/placeholder.svg?height=200&width=350",
    readTime: 7,
    category: "Troubleshooting",
    subcategory: "airpods",
  },
  {
    slug: "apple-watch-complications",
    title: "Customizing Apple Watch Complications for Maximum Utility",
    excerpt: "A guide to setting up the perfect watch face with the most useful complications for your lifestyle.",
    author: "Sarah Johnson",
    date: "February 12, 2025",
    image: "/placeholder.svg?height=200&width=350",
    readTime: 9,
    category: "Customization",
    subcategory: "apple-watch",
  },
]

// Helper function to get posts by subcategory
export function getPostsBySubcategory(posts: Post[], subcategory: string): Post[] {
  return posts.filter((post) => post.subcategory === subcategory)
}

// Helper function to get featured post for a subcategory
export function getFeaturedPostForSubcategory(posts: Post[], subcategory: string): Post | null {
  const subcategoryPosts = getPostsBySubcategory(posts, subcategory)
  return subcategoryPosts.length > 0 ? subcategoryPosts[0] : null
}

