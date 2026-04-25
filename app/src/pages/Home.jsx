import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollIndicator from "../components/ScrollIndicator";

const services = [
  {
    icon: "fas fa-seedling",
    title: "Amenajare Grădini",
    desc: "Proiectare peisagistică și crearea de spații verzi moderne și funcționale, adaptate stilului tău de viață.",
  },
  {
    icon: "fas fa-tree",
    title: "Toaletare Copaci",
    desc: "Îngrijire profesională pentru copaci și arbuști ornamentali, inclusiv curățarea pomilor fructiferi.",
  },
  {
    icon: "fas fa-tint",
    title: "Sisteme de Irigații",
    desc: "Montaj și întreținere de sisteme automate de udare, pentru o grădină mereu verde și sănătoasă.",
  },
  {
    icon: "fas fa-water",
    title: "Canalizări & Drenaje",
    desc: "Soluții pentru instalații de apă, drenaje și canalizări, esențiale pentru întreținerea grădinilor.",
  },
  {
    icon: "fas fa-leaf",
    title: "Gazon Rulou",
    desc: "Montaj rapid de gazon rulou și servicii de întreținere pentru un spațiu verde impecabil.",
  },
  {
    icon: "fas fa-truck",
    title: "Transport & Excavator",
    desc: "Transport materiale și săpături cu excavatorul, ideale pentru proiecte de construcții și grădinărit.",
  },
  {
    icon: "fas fa-shield-alt",
    title: "Tratamente Plante",
    desc: "Fungicide, pesticide și insecticide pentru prevenirea și tratarea bolilor plantelor.",
  },
  {
    icon: "fas fa-cut",
    title: "Defrișări & Curățenie",
    desc: "Servicii complete de defrișare, curățare terenuri și dezăpezire, precum și lucrări agricole (arat, frezat).",
  },
];

const aboutImages = [
  { src: "/images/intretinere1-low.webp", alt: "Proiect amenajare grădină" },
  { src: "/images/toaletare1-low.webp", alt: "Amenajare peisagistică" },
  { src: "/images/gradina3-low.webp", alt: "Grădină cu palmieri" },
];

export default function Home() {
  return (
    <div className="w-full">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/gradina1.webp')" }}
        />
        <div className="absolute inset-0 bg-dark/70" />

        <Navbar />

        <div className="relative z-10 max-w-3xl mt-4 mx-auto px-6 flex flex-col items-center">
          <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6 animate-hero-badge">
            <i className="fas fa-award text-accent"></i>
            Peste 25 de ani de experiență
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 animate-hero-title">
            Gradina <span className="text-accent">ZAK</span>
          </h1>

          <p className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed mb-8 animate-hero-desc">
            Transformăm spațiile verzi în adevărate opere de artă peisagistică
            prin servicii profesionale de amenajare și întreținere grădini în
            Baia Mare și împrejurimi
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Link
              to="/contact"
              className="flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-full hover:bg-light transition-colors"
            >
              <i className="fas fa-seedling"></i>
              Solicită Deviz Gratuit
            </Link>
            <a
              href="tel:0766431164"
              className="flex items-center gap-2 border border-white/40 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
            >
              <i className="fas fa-phone"></i>
              0766 431 164
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-10 text-center">
            {[
              {
                icon: "fas fa-seedling",
                value: "300+",
                label: "Proiecte Realizate",
              },
              {
                icon: "fas fa-users",
                value: "100+",
                label: "Clienți Mulțumiți",
              },
              {
                icon: "fas fa-handshake",
                value: "5+",
                label: "Parteneri de Încredere",
              },
            ].map(({ icon, value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <i className={`${icon} text-accent text-xl`}></i>
                <div className="text-left">
                  <div className="font-bold text-xl leading-tight">{value}</div>
                  <div className="text-white/60 text-xs">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <ScrollIndicator targetId="about" />
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-light text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4">
              <i className="fas fa-circle text-[6px]"></i>
              Despre Noi
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-5">
              Peste 25 de Ani de{" "}
              <span className="text-secondary">Experiență în</span> Amenajare
              Grădini
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              <strong>Gradina ZAK</strong> este o firmă cu experiență
              îndelungată în domeniul amenajării și întreținerii spațiilor
              verzi. Cu o echipă de specialiști dedicați, oferim servicii
              complete de <strong>peisagistică în Baia Mare</strong> și zonele
              limitrofe din județul <strong>Maramureș</strong>.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Fiecare proiect de <strong>amenajare grădină</strong> este abordat
              cu atenție la detalii și profesionalism, asigurându-ne că
              rezultatul final depășește așteptările clienților noștri.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:0766431164"
                className="flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-dark transition-colors"
              >
                <i className="fas fa-phone"></i>
                Contactează-ne
              </a>
              <Link
                to="/proiecte"
                className="flex items-center gap-2 border border-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-50 transition-colors"
              >
                <i className="fas fa-images"></i>
                Vezi Portofoliul
              </Link>
            </div>
          </div>

          {/* Images grid */}
          <div className="grid grid-cols-2 gap-3">
            {aboutImages.map((img, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-xl bg-gray-100 ${i === 0 ? "row-span-2" : ""}`}
                style={{ minHeight: i === 0 ? "320px" : "150px" }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serviciile Noastre de Amenajare și Întreținere Grădini
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Descoperiți gama completă de servicii profesionale de{" "}
              <strong>
                peisagistică și întreținere spații verzi în Baia Mare și
                Maramureș
              </strong>
              . Oferim soluții complete pentru toate nevoile dumneavoastră de
              amenajare grădini.
            </p>
            <div className="w-12 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 bg-light rounded-full flex items-center justify-center mb-4">
                  <i className={`${s.icon} text-secondary text-xl`}></i>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/proiecte"
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-8 py-3 rounded-full hover:bg-dark transition-colors"
            >
              <i className="fas fa-th-large"></i>
              Vezi Toate Serviciile
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 bg-primary text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Gata să Îți Transformi Grădina?
          </h2>
          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            Contactează-ne astăzi pentru o{" "}
            <strong className="text-white">
              consultație gratuită de amenajare grădină
            </strong>{" "}
            și să discutăm despre visul tău de grădină perfectă
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="flex items-center gap-2 border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-primary transition-colors"
            >
              <i className="fas fa-seedling"></i>
              Solicită Deviz Gratuit
            </Link>
            <a
              href="tel:0766431164"
              className="flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-full hover:bg-light transition-colors"
            >
              <i className="fas fa-phone"></i>
              Sună Acum: 0766 431 164
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
