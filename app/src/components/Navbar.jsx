import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  const linkClass = (path) =>
    `text-sm font-medium transition-colors hover:text-white ${
      pathname === path ? "text-white" : "text-white/70"
    }`;

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4">
      <Link to="/" className="flex items-center gap-2">
        <img
          src="/images/logo.jpg"
          alt="Gradina Zak"
          className="h-10 w-auto"
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

      <div className="flex items-center gap-8">
        <Link to="/" className={linkClass("/")}>
          Acasă
        </Link>
        <Link to="/proiecte" className={linkClass("/proiecte")}>
          Proiecte
        </Link>
        <Link to="/contact" className={linkClass("/contact")}>
          Contact
        </Link>
      </div>
    </nav>
  );
}
