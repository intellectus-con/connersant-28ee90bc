import type { Article, ArticleImage } from '@/content/articles';

interface ImageFigureProps {
  image: ArticleImage;
  className?: string;
}

const ImageFigure = ({ image, className = '' }: ImageFigureProps) => (
  <figure className={`my-8 ${className}`}>
    <img
      src={image.src}
      alt={image.alt}
      className="w-full h-auto"
      loading="lazy"
    />
    {(image.caption || image.credit) && (
      <figcaption className="mt-2 text-sm text-muted-foreground">
        {image.caption}
        {image.credit && (
          <span className="block text-xs mt-1 opacity-70">{image.credit}</span>
        )}
      </figcaption>
    )}
  </figure>
);

// Hero image - full width at top of article
export const HeroImage = ({ image }: { image: ArticleImage }) => (
  <ImageFigure image={image} className="mb-10 -mx-6 md:mx-0" />
);

// Gallery - grid of images
export const ImageGallery = ({ images }: { images: ArticleImage[] }) => (
  <div className="my-10 grid grid-cols-2 gap-4">
    {images.map((image, index) => (
      <figure key={index} className="m-0">
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-auto aspect-square object-cover"
          loading="lazy"
        />
        {image.caption && (
          <figcaption className="mt-2 text-xs text-muted-foreground">
            {image.caption}
          </figcaption>
        )}
      </figure>
    ))}
  </div>
);

// Sidebar image - floated to the right
export const SidebarImage = ({ image }: { image: ArticleImage }) => (
  <figure className="float-right ml-6 mb-4 w-1/3 min-w-[200px] max-w-[300px]">
    <img
      src={image.src}
      alt={image.alt}
      className="w-full h-auto"
      loading="lazy"
    />
    {(image.caption || image.credit) && (
      <figcaption className="mt-2 text-xs text-muted-foreground">
        {image.caption}
        {image.credit && (
          <span className="block mt-1 opacity-70">{image.credit}</span>
        )}
      </figcaption>
    )}
  </figure>
);

// Inline image - used within body text
export const InlineImage = ({ image }: { image: ArticleImage }) => (
  <ImageFigure image={image} />
);

// Process body text to replace {{image:N}} placeholders with actual images
export const processBodyWithImages = (
  body: string,
  inlineImages?: ArticleImage[]
): React.ReactNode[] => {
  if (!inlineImages || inlineImages.length === 0) {
    return [<div key="body" dangerouslySetInnerHTML={{ __html: body }} />];
  }

  const parts: React.ReactNode[] = [];
  const regex = /\{\{image:(\d+)\}\}/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(body)) !== null) {
    // Add text before the placeholder
    if (match.index > lastIndex) {
      const textBefore = body.slice(lastIndex, match.index);
      parts.push(
        <div key={`text-${lastIndex}`} dangerouslySetInnerHTML={{ __html: textBefore }} />
      );
    }

    // Add the image
    const imageIndex = parseInt(match[1], 10);
    if (inlineImages[imageIndex]) {
      parts.push(
        <InlineImage key={`image-${imageIndex}`} image={inlineImages[imageIndex]} />
      );
    }

    lastIndex = match.index + match[0].length;
  }

  // Add remaining text after last placeholder
  if (lastIndex < body.length) {
    parts.push(
      <div key={`text-${lastIndex}`} dangerouslySetInnerHTML={{ __html: body.slice(lastIndex) }} />
    );
  }

  return parts;
};

// Main component that renders article images based on layout
export const ArticleImageRenderer = ({ article }: { article: Article }) => {
  switch (article.imageLayout) {
    case 'hero':
    case 'hero-split':
      return article.heroImage ? <HeroImage image={article.heroImage} /> : null;
    
    case 'gallery':
      return article.galleryImages ? <ImageGallery images={article.galleryImages} /> : null;
    
    case 'sidebar':
      return article.sidebarImage ? <SidebarImage image={article.sidebarImage} /> : null;
    
    case 'inline':
    case 'none':
    default:
      return null;
  }
};
