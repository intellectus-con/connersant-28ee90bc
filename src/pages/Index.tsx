import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleListItem from "@/components/ArticleListItem";
import { articles } from "@/data/articles";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Architectural grid lines - aligned with content structure */}
      <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
        {/* Vertical content margins */}
        <div className="absolute left-1/2 -translate-x-[min(50%,360px)] md:-translate-x-[min(50%,400px)] top-0 bottom-0 w-px bg-grid-line" />
        <div className="absolute left-1/2 translate-x-[min(50%,360px)] md:translate-x-[min(50%,400px)] top-0 bottom-0 w-px bg-grid-line" />
        {/* Header separation line */}
        <div className="absolute top-[160px] left-0 right-0 h-px bg-grid-line" />
        {/* Footer separation line */}
        <div className="absolute bottom-[80px] left-0 right-0 h-px bg-grid-line" />
        {/* Center vertical accent */}
        <div className="absolute left-1/2 top-[160px] bottom-[80px] w-px bg-grid-line opacity-50" />
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
