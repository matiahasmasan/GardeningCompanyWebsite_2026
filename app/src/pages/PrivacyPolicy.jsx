import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollIndicator from "../components/ScrollIndicator";

export default function PrivacyPolicy() {
  return (
    <div className="w-full">
      <Helmet>
        <title>Politica de Confidențialitate | Grădina ZAK</title>
        <meta
          name="description"
          content="Aflați cum protejăm și utilizăm datele personale ale dumneavoastră pe site-ul Grădina ZAK. Conformitate GDPR și drepturi complete."
        />
        <meta
          property="og:title"
          content="Politica de Confidențialitate - Grădina ZAK"
        />
        <meta property="og:image" content="/images/gradina1.webp" />
        <link rel="canonical" href="https://gradinazak.ro/privacy-policy" />
      </Helmet>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/escavator1.webp')" }}
        />
        <div className="absolute inset-0 bg-dark/70" />

        <Navbar />

        <div className="relative z-10 max-w-3xl mx-auto px-6 flex flex-col items-center">
          <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6 animate-hero-badge">
            <i className="fas fa-lock text-accent"></i>
            Confidențialitate
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 animate-hero-title">
            Datele Dumneavoastră Sunt{" "}
            <span className="text-accent">Sigure</span>
          </h1>

          <p className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed mb-12 animate-hero-desc">
            Înțelegeți cum colectăm, utilizăm și protejăm informațiile personale
            în conformitate cu GDPR și legile în vigoare.
          </p>
        </div>

        <ScrollIndicator targetId="privacy-content" />
      </section>

      {/* ── CONTENT ── */}
      <section id="privacy-content" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Politica de Confidențialitate
            </h1>
            <p className="text-gray-600 text-lg">
              Ultima actualizare: aprilie 2026
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Informații Generale
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Grădina ZAK ("noi", "noastră" sau "ne") se angajează să protejeze
              confidențialitatea dumneavoastră. Această politică de
              confidențialitate explică cum colectăm, utilizăm, divulgăm și
              protejăm informațiile dumneavoastră atunci când vizitați
              website-ul nostru (https://gradinazak.ro/).
            </p>
          </div>

          {/* Data Collection */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Ce Date Colectăm
            </h2>
            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                <h3 className="font-bold text-gray-900 mb-2">
                  📝 Date de Contact (Formular)
                </h3>
                <ul className="text-gray-700 space-y-1 ml-4 list-disc">
                  <li>Nume</li>
                  <li>Email</li>
                  <li>Număr de telefon</li>
                  <li>Mesajul dumneavoastră</li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                <h3 className="font-bold text-gray-900 mb-2">
                  📊 Date Automate (Google Analytics)
                </h3>
                <ul className="text-gray-700 space-y-1 ml-4 list-disc">
                  <li>Tipul de browser și sistem de operare</li>
                  <li>Pagini vizitate și timp petrecut</li>
                  <li>Locația aproximativă (pe bază de IP)</li>
                  <li>Interacțiuni cu site-ul</li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                <h3 className="font-bold text-gray-900 mb-2">
                  🗺️ Date din Google Maps
                </h3>
                <ul className="text-gray-700 space-y-1 ml-4 list-disc">
                  <li>Interacțiuni cu harta noastră</li>
                  <li>Locația aproximativă</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Data Usage */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Cum Utilizăm Datele Dumneavoastră
            </h2>
            <p className="text-gray-700 mb-4">
              Utilizăm datele colectate pentru:
            </p>
            <ul className="space-y-2 text-gray-700 ml-4 list-disc">
              <li>
                <strong>Comunicare:</strong> Pentru a răspunde la întrebările și
                solicitările dumneavoastră
              </li>
              <li>
                <strong>Servicii:</strong> Pentru a furniza serviciile și
                suportul dumneavoastră
              </li>
              <li>
                <strong>Analiză:</strong> Pentru a înțelege cum utilizatorii
                interacționează cu site-ul și pentru a îl îmbunătăți
              </li>
              <li>
                <strong>Marketing:</strong> Pentru a vă trimite informații
                despre serviciile noastre (doar cu consimțământul dumneavoastră)
              </li>
              <li>
                <strong>Conformitate legală:</strong> Pentru a respecta
                obligațiile legale și a preveni frauda
              </li>
            </ul>
          </div>

          {/* Data Sharing */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Partajarea Datelor
            </h2>
            <p className="text-gray-700 mb-4">
              <strong>NU partajam datele dumneavoastră cu terți</strong> cu
              următoarele excepții:
            </p>
            <ul className="space-y-2 text-gray-700 ml-4 list-disc">
              <li>
                <strong>Google (Analytics & Maps):</strong> Pentru analiză și
                afișare hartă
              </li>
              <li>
                <strong>Furnizori de servicii:</strong> Care ne ajută să operez
                site-ul (hosting, email, etc.)
              </li>
              <li>
                <strong>Autoritățile legale:</strong> Dacă este necesar conform
                legii
              </li>
            </ul>
          </div>

          {/* Data Security */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Securitatea Datelor
            </h2>
            <div className="bg-green-50 border-l-4 border-green-500 p-6">
              <h3 className="font-bold text-gray-900 mb-3">
                🔒 Măsuri de Protecție
              </h3>
              <ul className="text-gray-700 space-y-2 ml-4 list-disc">
                <li>
                  <strong>HTTPS:</strong> Toate comunicațiile sunt criptate
                </li>
                <li>
                  <strong>Firewall:</strong> Server-ul este protejat de atacuri
                </li>
                <li>
                  <strong>Backup-uri regulare:</strong> Datele sunt salvate
                  periodic
                </li>
                <li>
                  <strong>Acces restricționat:</strong> Doar personalul
                  autorizat accesează datele
                </li>
              </ul>
            </div>
            <p className="text-gray-600 text-sm mt-4 italic">
              Notă: Nu putem garanta o securitate 100%, dar luăm măsuri
              rezonabile pentru a proteja datele dumneavoastră.
            </p>
          </div>

          {/* Retention */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Cât Timp Păstrăm Datele
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>Date din formular:</strong> Păstrăm contactele până când
                ințelegerea comercială se încheie, apoi le ștergem (poate fi mai
                mult dacă este necesar conform legii)
              </p>
              <p>
                <strong>Google Analytics:</strong> Datele sunt reținute conform
                politicii Google (până la 26 de luni)
              </p>
              <p>
                <strong>Cookies:</strong> Conform politicii noastre de cookies
              </p>
            </div>
          </div>

          {/* User Rights */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Drepturile Dumneavoastră (GDPR)
            </h2>
            <p className="text-gray-700 mb-4">
              Conform Regulamentului General de Protecția Datelor (GDPR), aveți
              următoarele drepturi:
            </p>
            <div className="space-y-3">
              <div className="border-l-4 border-accent bg-gray-50 p-4">
                <h3 className="font-bold text-gray-900">✅ Dreptul la Acces</h3>
                <p className="text-gray-700 text-sm mt-1">
                  Puteți cere o copie a datelor personale pe care le deținem
                </p>
              </div>
              <div className="border-l-4 border-accent bg-gray-50 p-4">
                <h3 className="font-bold text-gray-900">
                  ✏️ Dreptul la Rectificare
                </h3>
                <p className="text-gray-700 text-sm mt-1">
                  Puteți cere corecția datelor inexacte
                </p>
              </div>
              <div className="border-l-4 border-accent bg-gray-50 p-4">
                <h3 className="font-bold text-gray-900">
                  🗑️ Dreptul la Ștergere
                </h3>
                <p className="text-gray-700 text-sm mt-1">
                  Puteți cere ștergerea datelor dumneavoastră
                </p>
              </div>
              <div className="border-l-4 border-accent bg-gray-50 p-4">
                <h3 className="font-bold text-gray-900">
                  ⛔ Dreptul la Obiecție
                </h3>
                <p className="text-gray-700 text-sm mt-1">
                  Puteți refuza prelucrarea datelor dumneavoastră
                </p>
              </div>
              <div className="border-l-4 border-accent bg-gray-50 p-4">
                <h3 className="font-bold text-gray-900">
                  📥 Dreptul la Portabilitate
                </h3>
                <p className="text-gray-700 text-sm mt-1">
                  Puteți cere datele dumneavoastră într-un format accesibil
                </p>
              </div>
            </div>
          </div>

          {/* Third Party Links */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Link-uri Externe
            </h2>
            <p className="text-gray-700">
              Site-ul nostru poate conține link-uri către site-uri externe. Nu
              suntem responsabili pentru politicile de confidențialitate ale
              acestor site-uri. Vă recomandăm să citiți politica lor de
              confidențialitate înainte de a partaja informații personale.
            </p>
          </div>

          {/* Contact */}
          <div className="mb-10 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Contactați-ne
            </h2>
            <p className="text-gray-700 mb-4">
              Dacă aveți întrebări despre această politică de confidențialitate
              sau cum gestionăm datele dumneavoastră:
            </p>
            <div className="space-y-2 text-gray-700">
              <p>
                <strong>Email:</strong> contact@gradinazak.ro
              </p>
              <p>
                <strong>Telefon:</strong> 0766 431 164
              </p>
              <p>
                <strong>Locație:</strong> Baia Mare, Maramureș, România
              </p>
              <p className="text-sm text-gray-600 mt-4">
                Dacă credeți că drepturile dumneavoastră au fost încălcate,
                puteți depune o plângere la Autoritatea Națională de
                Supraveghere a Prelucrării Datelor cu Caracter Personal
                (ANSPDCP).
              </p>
            </div>
          </div>

          {/* Last Updated */}
          <div className="pt-6 border-t border-gray-300">
            <p className="text-gray-500 text-sm">
              Această politică de confidențialitate a fost actualizată în
              aprilie 2026 și poate fi modificată oricând. Verificați periodic
              pentru actualizări.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
