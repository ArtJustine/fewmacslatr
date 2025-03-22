type AdSize = "970x90" | "300x250" | "480x280" | "800x600";

interface AdBannerProps {
  size: AdSize;
  className?: string;
  id?: string;
}

export function AdBanner({ size, className = "", id }: AdBannerProps) {
  // Get dimensions from size
  const [width, height] = size.split("x").map(Number);

  return (
    <div
      id={id}
      className={`bg-gray-100 border border-gray-200 flex items-center justify-center mx-auto ${className}`}
      style={{ width, height, maxWidth: "100%" }}
    >
      <iframe
        id="iframe_342"
        src="//a.impactradius-go.com/gen-ad-code/2406390/2840060/18023/"
        width={width}
        height={height}
        scrolling="no"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
      ></iframe>
    </div>
  );
}
