import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Collection', href: '/collection' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-canvas/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-fluid-lg py-fluid-sm">
        <Link
          to="/"
          className="font-bold text-primary no-underline"
          style={{ fontSize: '1.25rem', letterSpacing: '0.3em' }}
        >
          WEYSON
        </Link>
        <nav className="hidden md:flex items-center gap-fluid-md">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-contrast-medium hover:text-primary transition-colors duration-300 text-sm tracking-widest uppercase no-underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden md:inline-flex items-center border border-primary text-primary px-fluid-md py-static-xs text-xs tracking-widest uppercase no-underline hover:bg-primary hover:text-canvas transition-all duration-300"
        >
          Inquire
        </Link>
      </div>
    </header>
  );
}
