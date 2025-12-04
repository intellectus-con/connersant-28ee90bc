import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleListItem from "@/components/ArticleListItem";
import { articles } from "@/data/articles";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Subtle grid lines */}
      <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute left-[10%] top-0 bottom-0 w-px bg-grid-line" />
        <div className="absolute left-[90%] top-0 bottom-0 w-px bg-grid-line" />
        <div className="absolute top-[20%] left-0 right-0 h-px bg-grid-line" />
        <div className="absolute top-[80%] left-0 right-0 h-px bg-grid-line" />
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
