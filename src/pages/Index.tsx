import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleListItem from "@/components/ArticleListItem";
import { articles } from "@/data/articles";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container max-w-content mx-auto px-6">
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
