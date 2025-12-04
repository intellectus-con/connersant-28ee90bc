import { Link } from "react-router-dom";
import type { Article } from "@/data/articles";

interface ArticleListItemProps {
  article: Article;
}

const ArticleListItem = ({ article }: ArticleListItemProps) => {
  return (
    <article className="py-6">
      <Link to={`/article/${article.slug}`} className="block group">
        <h2 className="article-title text-xl md:text-2xl mb-2 group-hover:opacity-70 transition-opacity">
          {article.title}
        </h2>
        <p className="article-subheader text-base mb-3">
          {article.subheader}
        </p>
        <div className="article-meta text-muted-foreground flex items-center gap-3">
          <span>{article.category}</span>
          <span className="text-border">·</span>
          <time>{article.date}</time>
        </div>
      </Link>
    </article>
  );
};

export default ArticleListItem;
