import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { articles } from "@/data/articles";

const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-background relative">
        <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute left-[10%] top-0 bottom-0 w-px bg-grid-line" />
          <div className="absolute left-[90%] top-0 bottom-0 w-px bg-grid-line" />
          <div className="absolute top-[20%] left-0 right-0 h-px bg-grid-line" />
          <div className="absolute top-[80%] left-0 right-0 h-px bg-grid-line" />
        </div>
        <main className="container max-w-content mx-auto px-6 relative z-10">
          <Header />
          <div className="py-16 text-center">
            <h1 className="article-title text-2xl mb-4">Article not found</h1>
            <Link to="/" className="text-muted-foreground hover:text-foreground">
              ← Back to home
            </Link>
          </div>
          <Footer />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative">
      <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute left-[10%] top-0 bottom-0 w-px bg-grid-line" />
        <div className="absolute left-[90%] top-0 bottom-0 w-px bg-grid-line" />
        <div className="absolute top-[20%] left-0 right-0 h-px bg-grid-line" />
        <div className="absolute top-[80%] left-0 right-0 h-px bg-grid-line" />
      </div>
      <main className="container max-w-content mx-auto px-6 relative z-10">
        <Header />
        
        <article className="py-8">
          <header className="mb-10">
            <div className="article-meta text-muted-foreground mb-4 flex items-center gap-3">
              <span>{article.category}</span>
              <span className="text-border">·</span>
              <time>{article.date}</time>
            </div>
            <h1 className="article-title text-3xl md:text-4xl lg:text-5xl mb-4 leading-tight">
              {article.title}
            </h1>
            <p className="article-subheader text-lg md:text-xl">
              {article.subheader}
            </p>
          </header>

          <div className="divider-thick mb-10" />

          <div 
            className="content-prose"
            dangerouslySetInnerHTML={{ __html: article.body }}
          />
        </article>

        <div className="py-8 border-t border-border">
          <Link to="/" className="article-meta text-muted-foreground hover:text-foreground">
            ← Back to all articles
          </Link>
        </div>

        <Footer />
      </main>
    </div>
  );
};

export default Article;
