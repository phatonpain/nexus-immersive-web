import { useCallback, useState } from "react";
import {
  Circle,
  Cloud,
  Layers3,
  MessageCircle,
  PanelsTopLeft,
  Rocket,
  TrendingUp,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { visualAssets, type VisualAssetSlot } from "../data/visualAssets";

type ArtworkSlotProps = {
  slot: VisualAssetSlot;
  className?: string;
};

const slotIcons: Record<VisualAssetSlot, LucideIcon> = {
  hero: Layers3,
  services: Cloud,
  portfolio: PanelsTopLeft,
  process: Workflow,
  plans: TrendingUp,
  values: Circle,
  faq: MessageCircle,
  contact: Rocket,
};

export function ArtworkSlot({ slot, className = "" }: ArtworkSlotProps) {
  const asset = visualAssets[slot];
  const Icon = slotIcons[slot];
  const [imageFailed, setImageFailed] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageRef = useCallback((node: HTMLImageElement | null) => {
    if (node?.complete && node.naturalWidth > 0) setImageLoaded(true);
  }, []);
  const srcSet = asset.sources?.length
    ? asset.sources.map(source => `${source.url} ${source.width}w`).join(", ")
    : undefined;
  const classes = [
    "artwork-slot",
    `artwork-slot--${slot}`,
    `artwork-slot--${asset.theme}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <figure
      className={classes}
      style={{ aspectRatio: asset.aspectRatio }}
      aria-label={`${asset.pdfSection}: ${asset.objective}`}
    >
      {asset.imageUrl && !imageFailed ? (
        <>
          <img
            ref={imageRef}
            className={`artwork-slot-image${imageLoaded ? " is-loaded" : ""}`}
            src={asset.imageUrl}
            srcSet={srcSet}
            sizes={srcSet ? asset.sizes : undefined}
            alt={asset.alt}
            loading={slot === "hero" ? "eager" : "lazy"}
            fetchPriority={slot === "hero" ? "high" : "auto"}
            decoding="async"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageFailed(true)}
          />
          {slot === "portfolio" && (
            <figcaption className="artwork-slot-caption">
              <span className="artwork-slot-site-section">
                {asset.siteSection}
              </span>
              <strong>{asset.caption}</strong>
              <span className="artwork-slot-status">
                ESTUDO VISUAL CONCEITUAL <i /> {asset.aspectLabel}
              </span>
            </figcaption>
          )}
        </>
      ) : (
        <>
          {imageFailed && (
            <span className="artwork-slot-fallback" role="status">
              A arte não carregou; exibindo uma composição de apoio.
            </span>
          )}
          <div
            className={`artwork-slot-scene artwork-slot-scene--${slot}`}
            aria-hidden="true"
          >
            <span className="artwork-glow artwork-glow--violet" />
            <span className="artwork-glow artwork-glow--blue" />
            <span className="artwork-orbit artwork-orbit--outer" />
            <span className="artwork-orbit artwork-orbit--inner" />
            <span className="artwork-glass-panel artwork-glass-panel--one" />
            <span className="artwork-glass-panel artwork-glass-panel--two" />
            <span className="artwork-glass-panel artwork-glass-panel--three" />
            <span className="artwork-core">
              <Icon size={32} strokeWidth={1.15} />
            </span>
            {asset.imageUrl && !imageFailed && (
              <span className="artwork-slot-code">{asset.pdfSection}</span>
            )}
          </div>
          {asset.imageUrl && !imageFailed && (
            <figcaption className="artwork-slot-caption">
              <span className="artwork-slot-site-section">
                {asset.siteSection}
              </span>
              <strong>{asset.caption}</strong>
            </figcaption>
          )}
        </>
      )}
    </figure>
  );
}
