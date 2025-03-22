"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface SubcategoryNavProps {
  category: string
  className?: string
}

export const subcategories = [
  { slug: "iphone", name: "iPhone" },
  { slug: "mac", name: "Mac" },
  { slug: "ipad", name: "iPad" },
  { slug: "apple-watch", name: "Apple Watch" },
  { slug: "airpods", name: "AirPods" },
  { slug: "home", name: "Home" },
  { slug: "services", name: "Services" },
  { slug: "accessories", name: "Accessories" },
]

export function SubcategoryNav({ category, className }: SubcategoryNavProps) {
  const pathname = usePathname()

  return (
    <div className={cn("overflow-x-auto", className)}>
      <div className="flex space-x-1 min-w-max pb-2">
        <Link
          href={`/${category}`}
          className={cn(
            "px-3 py-1.5 text-sm font-medium rounded-full whitespace-nowrap",
            pathname === `/${category}`
              ? "bg-sky-100 text-sky-800"
              : "text-muted-foreground hover:text-foreground hover:bg-gray-100",
          )}
        >
          All
        </Link>

        {subcategories.map((subcategory) => (
          <Link
            key={subcategory.slug}
            href={`/${category}/${subcategory.slug}`}
            className={cn(
              "px-3 py-1.5 text-sm font-medium rounded-full whitespace-nowrap",
              pathname === `/${category}/${subcategory.slug}`
                ? "bg-sky-100 text-sky-800"
                : "text-muted-foreground hover:text-foreground hover:bg-gray-100",
            )}
          >
            {subcategory.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

