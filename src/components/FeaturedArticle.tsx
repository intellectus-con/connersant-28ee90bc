import { Link } from "react-router-dom";
import type { Article } from "@/content/articles";

interface FeaturedArticleProps {
  article: Article;
}

const FeaturedArticle = ({ article }: FeaturedArticleProps) => {
  const imageUrl = article.thumbnail?.src;
  
  return (
    <article className="mb-8">
      <Link to={`/article/${article.slug}`} className="block group">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          {/* Image */}
          {imageUrl && (
            <div className="w-full md:w-1/2 flex-shrink-0">
              <img 
                src={imageUrl}
                alt={article.heroImage?.alt || article.thumbnail?.alt || article.title}
                className="w-full aspect-[16/10] object-cover"
              />
            </div>
          )}
          
          {/* Content */}
          <div className="flex flex-col justify-center py-2">
            <h2 className="article-title text-2xl md:text-3xl lg:text-4xl mb-3 group-hover:opacity-70 transition-opacity">
              {article.title}
            </h2>
            <p className="article-subheader text-base md:text-lg mb-3">
              {article.subheader}
            </p>
            <time className="article-meta text-muted-foreground">
              {article.date}
            </time>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default FeaturedArticle;
