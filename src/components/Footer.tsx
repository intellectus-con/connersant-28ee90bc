const Footer = () => {
  return (
    <footer className="py-12 mt-12 border-t border-border">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} The Observer</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground transition-colors">RSS</a>
          <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
          <a href="#" className="hover:text-foreground transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
