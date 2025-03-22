type AdSize = "970x90" | "320x280" | "480x280" | "800x600"

interface AdBannerProps {
  size: AdSize
  className?: string
  id?: string
}

export function AdBanner({ size, className = "", id }: AdBannerProps) {
  // Get dimensions from size
  const [width, height] = size.split("x").map(Number)

  return (
    <div
      id={id}
      className={`bg-gray-100 border border-gray-200 flex items-center justify-center mx-auto ${className}`}
      style={{ width, height, maxWidth: "100%" }}
    >
      <div className="text-center text-gray-400 text-sm">
        <p>Advertisement</p>
        <p className="text-xs">{size}</p>
      </div>
    </div>
  )
}

