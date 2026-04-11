import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = (path) =>
    `text-sm font-medium transition-colors hover:text-white ${
      pathname === path ? "text-white" : "text-white/70"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-dark/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0" onClick={() => window.scrollTo(0, 0)}>
          <img
            src="/images/logo.jpg"
            alt="Gradina Zak"
            className="h-9 w-auto"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
          <div className="text-white">
            <div className="font-bold text-base leading-tight">Gradina Zak</div>
            <div className="text-xs text-white/60 leading-tight">
              Design | Grădini
            </div>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className={linkClass("/")} onClick={() => window.scrollTo(0, 0)}>
            Acasă
          </Link>
          <Link to="/proiecte" className={linkClass("/proiecte")} onClick={() => window.scrollTo(0, 0)}>
            Proiecte
          </Link>
          <Link to="/contact" className={linkClass("/contact")} onClick={() => window.scrollTo(0, 0)}>
            Contact
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 cursor-pointer"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Meniu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 pb-4 gap-4 border-t border-white/10">
          <Link
            to="/"
            className={`${linkClass("/")} pt-4`}
            onClick={() => { setMenuOpen(false); window.scrollTo(0, 0); }}
          >
            Acasă
          </Link>
          <Link
            to="/proiecte"
            className={linkClass("/proiecte")}
            onClick={() => { setMenuOpen(false); window.scrollTo(0, 0); }}
          >
            Proiecte
          </Link>
          <Link
            to="/contact"
            className={linkClass("/contact")}
            onClick={() => { setMenuOpen(false); window.scrollTo(0, 0); }}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
