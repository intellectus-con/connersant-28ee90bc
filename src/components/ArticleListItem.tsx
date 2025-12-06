import { Link } from "react-router-dom";

interface ArticleListItemProps {
  slug: string;
  title: string;
  subheader: string;
  date: string;
  category: string;
  isLast?: boolean;
}

const ArticleListItem = ({ 
  slug, 
  title, 
  subheader, 
  date, 
  category,
  isLast = false 
}: ArticleListItemProps) => {
  return (
    <article className="py-6">
      <Link to={`/article/${slug}`} className="block group">
        <h2 className="article-title text-xl md:text-2xl mb-2 group-hover:opacity-70 transition-opacity">
          {title}
        </h2>
        <p className="article-subheader text-base mb-3">
          {subheader}
        </p>
        <div className="article-meta text-muted-foreground flex items-center gap-3">
          <span>{category}</span>
          <span className="text-border">·</span>
          <time>{date}</time>
        </div>
      </Link>
      {!isLast && <div className="h-px bg-grid-line mt-6" />}
    </article>
  );
};

export default ArticleListItem;
