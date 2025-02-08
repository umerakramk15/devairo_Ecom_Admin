"use client";

const Footer = () => {
  return (
    <footer className="bg-background text-foreground/50 border-t text-center py-4 w-full fixed bottom-0">
      <p>&copy; {new Date().getFullYear()} Devairo. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
