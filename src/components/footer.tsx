export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      {/* Footer */}
      <footer id="contact" className="bg-card border-t border-border pt-16 pb-8">
        <div className="container mx-auto px-4">
          
          <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
            <p>&copy; {currentYear} Yaseen. All rights reserved.</p>
          </div>

        </div>
      </footer>
    </div>
  );
};
