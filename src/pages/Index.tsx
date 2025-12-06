import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleListItem from "@/components/ArticleListItem";
import { articles } from "@/content/articles";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Vertical grid lines */}
      <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-grid-line" />
        <div className="absolute right-4 md:right-8 top-0 bottom-0 w-px bg-grid-line" />
      </div>
      
      <main className="container max-w-content mx-auto px-6 relative z-10">
        <Header />
        
        <section className="py-4">
          <div className="h-px bg-grid-line mb-2" />
          {articles.map((article, index) => (
            <ArticleListItem
              key={article.slug}
              slug={article.slug}
              title={article.title}
              subheader={article.subheader}
              date={article.date}
              category={article.category}
              isLast={index === articles.length - 1}
            />
          ))}
        </section>
        
        <Footer />
      </main>
    </div>
  );
};

export default Index;
