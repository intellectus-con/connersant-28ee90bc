import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-8 mb-8">
      <div className="divider-thick mb-6" />
      <nav className="flex items-center justify-between">
        <Link to="/" className="masthead text-3xl md:text-4xl uppercase">
          Connersant
        </Link>
        <div className="flex gap-6 text-sm font-medium">
          <Link to="/" className="hover:opacity-70">Archive</Link>
          <Link to="/" className="hover:opacity-70">About</Link>
        </div>
      </nav>
      {/* Grey line under title extending to margins */}
      <div className="h-px bg-grid-line mt-4 -ml-[calc(100vw/2-50%+1rem)] -mr-[calc(100vw/2-50%+1rem)] md:-ml-[calc(100vw/2-50%+2rem)] md:-mr-[calc(100vw/2-50%+2rem)]" />
      <p className="text-muted-foreground text-sm mt-4">
        Geopolitics · Russia · Military History · Genetics · Technology · War
      </p>
    </header>
  );
};

export default Header;
