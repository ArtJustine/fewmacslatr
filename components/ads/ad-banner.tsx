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
      className={`bg-gray-100 border border-gray-200 flex flex-col items-center justify-center mx-auto ${className}`}
      style={{ width, height, maxWidth: "100%" }}
    >
      {/* Iframe Ad */}
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

      {/* Banner Ad */}
      <a
        rel="sponsored"
        href="https://belkin.evyy.net/c/2406390/276459/3736"
        target="_top"
        id="276459"
      >
        <img
          src="//a.impactradius-go.com/display-ad/3736-276459"
          border="0"
          alt=""
          width={width}
          height={height}
        />
      </a>
      <img
        height="0"
        width="0"
        src="https://belkin.evyy.net/i/2406390/276459/3736"
        style={{ position: "absolute", visibility: "hidden" }}
        border="0"
      />
    </div>
  );
}
