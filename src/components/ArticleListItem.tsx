import { Link } from "react-router-dom";
import type { ArticleImage } from "@/content/articles";

interface ArticleListItemProps {
  slug: string;
  title: string;
  subheader: string;
  date: string;
  category: string;
  thumbnail?: ArticleImage;
  isLast?: boolean;
}

const ArticleListItem = ({ 
  slug, 
  title, 
  subheader, 
  date, 
  category,
  thumbnail,
  isLast = false 
}: ArticleListItemProps) => {
  return (
    <article className="py-4 md:py-6">
      <Link to={`/article/${slug}`} className="block group">
        <div className="flex gap-4 md:gap-6">
          {/* Text content */}
          <div className="flex-1 min-w-0">
            <h2 className="article-title text-lg md:text-xl mb-1 md:mb-2 group-hover:opacity-70 transition-opacity line-clamp-2">
              {title}
            </h2>
            <p className="article-subheader text-sm md:text-base mb-2 md:mb-3 line-clamp-2">
              {subheader}
            </p>
            <div className="article-meta text-muted-foreground flex items-center gap-2 md:gap-3 text-xs md:text-sm">
              <time>{date}</time>
            </div>
          </div>
          
          {/* Thumbnail */}
          {thumbnail && (
            <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-24">
              <img 
                src={thumbnail.src}
                alt={thumbnail.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          )}
        </div>
      </Link>
      {!isLast && <div className="h-px bg-grid-line mt-4 md:mt-6" />}
    </article>
  );
};

export default ArticleListItem;
