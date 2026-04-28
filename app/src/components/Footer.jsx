import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/images/logo.jpg"
                alt="Gradina Zak"
                className="h-10 w-auto"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
              <span className="font-bold text-lg">Gradina Zak</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Creăm spații verzi extraordinare cu peste 25 de ani de experiență
              în peisagistică și întreținere grădini în Maramureș.
            </p>
            <a
              href="https://facebook.com/gradinazak"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
            >
              <i className="fab fa-facebook"></i>
              <span>Facebook</span>
            </a>
            <div className="mt-4 space-y-1">
              <Link
                to="/privacy-policy"
                className="block text-white/70 hover:text-white text-xs transition-colors"
              >
                Politica de Confidențialitate
              </Link>
              <Link
                to="/cookie-policy"
                className="block text-white/70 hover:text-white text-xs transition-colors"
              >
                Politica Cookie-uri
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="font-semibold text-sm uppercase tracking-wider text-white/70 mb-4">
              Servicii Principale
            </p>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link
                  to="/proiecte"
                  className="hover:text-white transition-colors"
                >
                  Amenajare grădini
                </Link>
              </li>
              <li>
                <Link
                  to="/proiecte"
                  className="hover:text-white transition-colors"
                >
                  Peisagistică
                </Link>
              </li>
              <li>
                <Link
                  to="/proiecte"
                  className="hover:text-white transition-colors"
                >
                  Toaletare copaci
                </Link>
              </li>
              <li>
                <Link
                  to="/proiecte"
                  className="hover:text-white transition-colors"
                >
                  Sisteme irigații
                </Link>
              </li>
              <li>
                <Link
                  to="/proiecte"
                  className="hover:text-white transition-colors"
                >
                  Drenaje
                </Link>
              </li>
              <li>
                <Link
                  to="/proiecte"
                  className="hover:text-white transition-colors"
                >
                  Transport materiale
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-semibold text-sm uppercase tracking-wider text-white/70 mb-4">
              Contact
            </p>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt mt-0.5 text-white/60"></i>
                <span>
                  Strada Dealului Grosului nr.16
                  <br />
                  Baia Mare, Maramureș
                </span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-phone text-white/60"></i>
                <a
                  href="tel:0766431164"
                  className="hover:text-white transition-colors"
                >
                  0766 431 164
                </a>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-envelope text-white/60"></i>
                <a
                  href="mailto:gradinazak@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  gradinazak@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-clock text-white/60"></i>
                <span>Luni - Vineri: 8:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/70">
          <span>© 2026 Gradina Zak SRL. Toate drepturile rezervate.</span>
          <div className="flex items-center gap-4">
            <Link
              to="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Politica de Confidențialitate
            </Link>
            <span>|</span>
            <Link
              to="/cookie-policy"
              className="hover:text-white transition-colors"
            >
              Politica Cookie-uri
            </Link>
          </div>
          <span className="text-center">
            Toate imaginile și textele sunt proprietatea Gradina Zak și nu pot
            fi preluate fără acordul în scris.
          </span>
        </div>
      </div>
    </footer>
  );
}
