import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleListItem from "@/components/ArticleListItem";
import { articles } from "@/data/articles";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Architectural grid lines - in margins between content blocks */}
      <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
        {/* Outer margin lines - frame the page */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-grid-line" />
        <div className="absolute right-4 md:right-8 top-0 bottom-0 w-px bg-grid-line" />
      </div>
      <main className="container max-w-content mx-auto px-6 relative z-10">
        <Header />
        
        <section>
          <div className="divider mb-2" />
          {articles.map((article, index) => (
            <div key={article.slug}>
              <ArticleListItem article={article} />
              {index < articles.length - 1 && <div className="divider" />}
            </div>
          ))}
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default Index;
