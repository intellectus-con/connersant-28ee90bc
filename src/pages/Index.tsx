import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeaturedArticle from "@/components/FeaturedArticle";
import ArticleListItem from "@/components/ArticleListItem";
import { articles } from "@/content/articles";

const Index = () => {
  const [featuredArticle, ...restArticles] = articles;

  return (
    <div className="min-h-screen bg-background relative">
      {/* Vertical grid lines - hidden on mobile */}
      <div className="fixed inset-0 pointer-events-none hidden md:block" aria-hidden="true">
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-grid-line" />
        <div className="absolute right-4 md:right-8 top-0 bottom-0 w-px bg-grid-line" />
      </div>
      
      <main className="container max-w-content mx-auto px-4 md:px-6 relative z-10">
        <Header />
        
        {/* Featured Article */}
        {featuredArticle && (
          <section className="py-4">
            <FeaturedArticle article={featuredArticle} />
            <div className="h-px bg-grid-line" />
          </section>
        )}
        
        {/* Article List */}
        <section className="py-2">
          {restArticles.map((article, index) => (
            <ArticleListItem
              key={article.slug}
              slug={article.slug}
              title={article.title}
              subheader={article.subheader}
              date={article.date}
              category={article.category}
              thumbnail={article.thumbnail || article.heroImage}
              isLast={index === restArticles.length - 1}
            />
          ))}
        </section>
        
        <Footer />
      </main>
    </div>
  );
};

export default Index;
