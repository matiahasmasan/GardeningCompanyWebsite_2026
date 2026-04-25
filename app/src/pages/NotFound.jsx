import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <div className="w-full">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/copaci1.webp')" }}
        />
        <div className="absolute inset-0 bg-dark/70" />

        <Navbar />

        <div className="relative z-10 max-w-3xl mx-auto px-6 flex flex-col items-center justify-center">
          <div className="mb-8 animate-hero-badge">
            <div className="text-8xl md:text-9xl font-extrabold text-accent/80 mb-4">
              404
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 animate-hero-title">
            Pagina <span className="text-accent">nu există</span>
          </h1>

          <p className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed mb-12 animate-hero-desc">
            Ne pare rău, dar pagina pe care o cauți nu a fost găsită. Poate că
            s-a mutat sau nu mai este disponibilă.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 bg-white text-primary font-semibold px-8 py-3 rounded-full hover:bg-light transition-colors"
            >
              <i className="fas fa-home"></i>
              Înapoi la Acasă
            </Link>
            <Link
              to="/proiecte"
              className="flex items-center gap-2 border border-white/40 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
            >
              <i className="fas fa-images"></i>
              Vezi Proiectele
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <Footer />
    </div>
  );
}
