import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollIndicator from "../components/ScrollIndicator";
import Lightbox from "../components/Lightbox";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const categories = [
  { id: "toate", label: "Toate Proiectele", icon: "fas fa-th-large" },
  { id: "amenajare", label: "Amenajare", icon: "fas fa-seedling" },
  { id: "toaletare", label: "Toaletare", icon: "fas fa-tree" },
  { id: "irigatii", label: "Irigații", icon: "fas fa-tint" },
  { id: "intretinere", label: "Întreținere", icon: "fas fa-leaf" },
  { id: "gazon", label: "Gazon", icon: "fas fa-cut" },
  { id: "drenaje", label: "Drenaje", icon: "fas fa-stream" },
  { id: "transport", label: "Transport", icon: "fas fa-truck" },
  { id: "escavator", label: "Escavator", icon: "fas fa-arrow-right" },
  { id: "defrisari", label: "Defrișări", icon: "fas fa-times" },
];

const categoryStyle = {
  amenajare: { bg: "bg-primary", text: "Amenajare" },
  toaletare: { bg: "bg-teal-700", text: "Toaletare" },
  irigatii: { bg: "bg-cyan-600", text: "Irigații" },
  intretinere: { bg: "bg-green-600", text: "Întreținere" },
  gazon: { bg: "bg-lime-600", text: "Gazon" },
  drenaje: { bg: "bg-blue-600", text: "Drenaje" },
  transport: { bg: "bg-slate-600", text: "Transport" },
  escavator: { bg: "bg-teal-600", text: "Escavator" },
  defrisari: { bg: "bg-rose-600", text: "Defrișare" },
};

const projects = [
  // Amenajare
  {
    img: "/images/gradina1.webp",
    cat: "amenajare",
    year: 2022,
    loc: "Baia Mare",
  },
  {
    img: "/images/gradina2.webp",
    cat: "amenajare",
    year: 2021,
    loc: "Satu Mare",
  },
  {
    img: "/images/gradina3.webp",
    cat: "amenajare",
    year: 2024,
    loc: "Baia Mare",
  },
  { img: "/images/pool1.webp", cat: "amenajare", year: 2024, loc: "Săsar" },
  { img: "/images/pool2.webp", cat: "amenajare", year: 2023, loc: "Săsar" },
  { img: "/images/pool3.webp", cat: "amenajare", year: 2024, loc: "Satu Mare" },
  // Toaletare
  {
    img: "/images/toaletare1.webp",
    cat: "toaletare",
    year: 2024,
    loc: "Baia Mare",
  },
  {
    img: "/images/toaletare2.webp",
    cat: "toaletare",
    year: 2024,
    loc: "Italia",
  },
  {
    img: "/images/toaletare3.webp",
    cat: "toaletare",
    year: 2023,
    loc: "Baia Mare",
  },
  {
    img: "/images/copaci1.webp",
    cat: "intretinere",
    year: 2024,
    loc: "Maramureș",
  },
  {
    img: "/images/copaci2.webp",
    cat: "intretinere",
    year: 2023,
    loc: "Baia Mare",
  },
  {
    img: "/images/copaci3.webp",
    cat: "intretinere",
    year: 2024,
    loc: "Tăuții de Sus",
  },
  // Irigații
  {
    img: "/images/irigatii1.webp",
    cat: "irigatii",
    year: 2024,
    loc: "Baia Mare",
  },
  { img: "/images/irigatii2.webp", cat: "irigatii", year: 2024, loc: "Italia" },
  {
    img: "/images/irigatii3.webp",
    cat: "irigatii",
    year: 2023,
    loc: "Baia Mare",
  },
  // Întreținere
  {
    img: "/images/intretinere1.webp",
    cat: "intretinere",
    year: 2024,
    loc: "Baia Mare",
  },
  {
    img: "/images/intretinere2.webp",
    cat: "intretinere",
    year: 2024,
    loc: "Groși",
  },
  {
    img: "/images/intretinere3.webp",
    cat: "intretinere",
    year: 2023,
    loc: "Groși",
  },
  // Gazon
  { img: "/images/gazon1.webp", cat: "gazon", year: 2024, loc: "Maramureș" },
  { img: "/images/gazon2.webp", cat: "gazon", year: 2024, loc: "Ferneziu" },
  {
    img: "/images/gazon3.webp",
    cat: "gazon",
    year: 2023,
    loc: "Tăuții-Măgherăuș",
  },
  { img: "/images/rulouri1.webp", cat: "gazon", year: 2024, loc: "Groși" },
  { img: "/images/rulouri2.webp", cat: "gazon", year: 2024, loc: "Baia Mare" },
  { img: "/images/rulouri3.webp", cat: "gazon", year: 2023, loc: "Baia Mare" },
  // Transport
  {
    img: "/images/transport1.webp",
    cat: "transport",
    year: 2024,
    loc: "Baia Mare",
  },
  {
    img: "/images/transport2.webp",
    cat: "transport",
    year: 2024,
    loc: "Maramureș",
  },
  {
    img: "/images/transport3.webp",
    cat: "transport",
    year: 2023,
    loc: "Baia Mare",
  },
  // Escavator
  {
    img: "/images/escavator1.webp",
    cat: "escavator",
    year: 2024,
    loc: "Baia Mare",
  },
  {
    img: "/images/escavator2.webp",
    cat: "escavator",
    year: 2024,
    loc: "Baia Mare",
  },
  {
    img: "/images/escavator3.webp",
    cat: "escavator",
    year: 2023,
    loc: "Maramureș",
  },
  // Defrișări
  { img: "/images/desrisat1.webp", cat: "defrisari", year: 2024, loc: "Groși" },
  {
    img: "/images/desrisat2.webp",
    cat: "defrisari",
    year: 2024,
    loc: "Cernești",
  },
  {
    img: "/images/desrisat3.webp",
    cat: "defrisari",
    year: 2023,
    loc: "Baia Mare",
  },
  // Drenaje
  {
    img: "/images/drenaje1.webp",
    cat: "drenaje",
    year: 2024,
    loc: "Maramureș",
  },
  {
    img: "/images/drenaje2.webp",
    cat: "drenaje",
    year: 2024,
    loc: "Baia Mare",
  },
  {
    img: "/images/drenaje3.webp",
    cat: "drenaje",
    year: 2023,
    loc: "Maramureș",
  },
];

export default function Projects() {
  const [active, setActive] = useState("toate");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered =
    active === "toate" ? projects : projects.filter((p) => p.cat === active);

  return (
    <div className="w-full">
      <Helmet>
        <title>Portofoliu Amenajări Grădini | Grădina ZAK Baia Mare</title>
        <meta
          name="description"
          content="Vezi proiectele noastre de amenajare grădini, gazon rulou și sisteme de irigații realizate în Baia Mare, Satu Mare și Maramureș."
        />
        <meta
          property="og:title"
          content="Proiecte de Excepție - Grădina ZAK"
        />
        <meta property="og:image" content="/images/pool2.webp" />
        <link rel="canonical" href="https://gradinazak.ro/proiecte" />
      </Helmet>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/pool2.webp')" }}
        />
        <div className="absolute inset-0 bg-dark/70" />

        <Navbar />

        <div className="relative z-10 max-w-3xl mx-auto px-6 flex flex-col items-center">
          <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6 animate-hero-badge">
            <i className="fas fa-images text-accent"></i>
            Galeria Noastră
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 animate-hero-title">
            Proiecte de <span className="text-accent">Excepție</span>
          </h1>

          <p className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed mb-12 animate-hero-desc">
            Peste 25 de ani de experiență în transformarea spațiilor verzi în
            adevărate opere de artă peisagistică
          </p>

          <div className="flex flex-wrap items-center justify-center gap-10 text-center">
            {[
              {
                icon: "fas fa-seedling",
                value: "300+",
                label: "Proiecte Finalizate",
              },
              { icon: "fas fa-users", value: "25+", label: "Ani Experiență" },
              { icon: "fas fa-smile", value: "100+", label: "Clienți" },
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

        <ScrollIndicator targetId="gallery" />
      </section>

      {/* ── FILTER ── */}
      <section id="gallery" className="pt-16 pb-6 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Explorează Categoriile
            </h2>
            <p className="text-gray-500 text-sm">
              Filtrează proiectele după tipul de serviciu pentru a găsi
              inspirația perfectă
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                  active === c.id
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-gray-600 border-gray-200 hover:border-primary hover:text-primary"
                }`}
              >
                <i className={`${c.icon} text-xs`}></i>
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── GRID ── */}
      <section className="pb-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p, i) => {
              const style = categoryStyle[p.cat];
              return (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white cursor-pointer"
                  onClick={() => setLightboxIndex(i)}
                >
                  <div className="relative">
                    <img
                      src={p.img}
                      alt={`${style.text} ${p.loc}`}
                      className="w-full h-52 object-cover"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                    <span
                      className={`absolute top-3 right-3 ${style.bg} text-white text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1`}
                    >
                      <i
                        className={`${categories.find((c) => c.id === p.cat)?.icon} text-[10px]`}
                      ></i>
                      {style.text}
                    </span>
                  </div>
                  <div className="flex items-center justify-between px-4 py-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <i className="fas fa-calendar-alt text-gray-400"></i>
                      {p.year}
                    </span>
                    <span className="flex items-center gap-1">
                      <i className="fas fa-map-marker-alt text-gray-400"></i>
                      {p.loc}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 bg-primary text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Inspirat de proiectele noastre?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Hai să creăm împreună următorul proiect de excepție pentru grădina
            ta
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              onClick={() => window.scrollTo(0, 0)}
              className="flex items-center gap-2 border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-primary transition-colors"
            >
              <i className="fas fa-seedling"></i>
              Începe Proiectul Tău
            </Link>
            <a
              href="tel:0766431164"
              className="flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-full hover:bg-light transition-colors"
            >
              <i className="fas fa-phone"></i>
              Sună pentru Detalii
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {lightboxIndex !== null && (
        <Lightbox
          items={filtered}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex(
              (lightboxIndex - 1 + filtered.length) % filtered.length,
            )
          }
          onNext={() => setLightboxIndex((lightboxIndex + 1) % filtered.length)}
        />
      )}
    </div>
  );
}
