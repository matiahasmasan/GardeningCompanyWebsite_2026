import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollIndicator from "../components/ScrollIndicator";

export default function CookiePolicy() {
  return (
    <div className="w-full">
      <Helmet>
        <title>Politica Cookie | Grădina ZAK</title>
        <meta
          name="description"
          content="Aflați cum folosim cookies pe site-ul Grădina ZAK pentru a îmbunătăți experiența dumneavoastră și a analiza vizitatorii."
        />
        <meta property="og:image" content="/images/gradina1.webp" />
        <link rel="canonical" href="https://gradinazak.ro/cookie-policy" />
      </Helmet>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/escavator2.webp')" }}
        />
        <div className="absolute inset-0 bg-dark/70" />

        <Navbar />

        <div className="relative z-10 max-w-3xl mx-auto px-6 flex flex-col items-center">
          <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6 animate-hero-badge">
            <i className="fas fa-shield-alt text-accent"></i>
            Politica Cookie
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 animate-hero-title">
            Transparență și <span className="text-accent">Protecție</span>
          </h1>

          <p className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed mb-12 animate-hero-desc">
            Înțelegeți cum folosim cookies și cum îi protejăm datele
            dumneavoastră. Informații complete și drepturi GDPR.
          </p>
        </div>

        <ScrollIndicator targetId="cookie-content" />
      </section>

      {/* ── CONTENT ── */}

      <section className="py-20 px-6 bg-white" id="cookie-content">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Politica Cookie
            </h1>
            <p className="text-gray-600 text-lg">
              Ultima actualizare: aprilie 2026
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Ce sunt Cookies?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Cookies sunt fișiere mici de text stocate pe dispozitivul
              dumneavoastră (calculator, telefon, tabletă) atunci când vizitați
              website-ul nostru. Acestea ajută website-ul să vă recunoască și să
              vă ofere o experiență mai bună. Cookies sunt inofensive și sunt
              utilizate de aproape toate site-urile moderne.
            </p>
          </div>

          {/* GA4 Cookies */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Cookies de Analiză (Google Analytics 4)
            </h2>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-4">
              <h3 className="font-bold text-gray-900 mb-2">
                📊 Google Analytics 4 (GA4)
              </h3>
              <ul className="text-gray-700 space-y-2 ml-4 list-disc">
                <li>
                  <strong>Scop:</strong> Analizează cum utilizatorii
                  interacționează cu site-ul nostru
                </li>
                <li>
                  <strong>Date colectate:</strong> Numărul de vizite, pagini
                  vizitate, timp petrecut pe site, locația aproximativă
                </li>
                <li>
                  <strong>Provider:</strong> Google LLC
                </li>
                <li>
                  <strong>Durata:</strong> până la 2 ani
                </li>
              </ul>
            </div>
            <p className="text-gray-700">
              Aceste informații ne ajută să înțelegem ce conținut este mai
              interesant pentru vizitatori și cum putem îmbunătăți website-ul.
              Nu colectăm informații personale identificabile prin GA4.
            </p>
          </div>

          {/* Google Maps */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Cookies din Hărți Google
            </h2>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-4">
              <h3 className="font-bold text-gray-900 mb-2">📍 Google Maps</h3>
              <ul className="text-gray-700 space-y-2 ml-4 list-disc">
                <li>
                  <strong>Scop:</strong> Afișează harta noastră de locație pe
                  pagina de contact
                </li>
                <li>
                  <strong>Date colectate:</strong> Interacțiuni cu harta (zoom,
                  deplasare), IP-ul dumneavoastră
                </li>
                <li>
                  <strong>Provider:</strong> Google LLC
                </li>
                <li>
                  <strong>Durata:</strong> Variază în funcție de setările Google
                </li>
              </ul>
            </div>
            <p className="text-gray-700">
              Google Maps cookies ne ajută să vă arătăm locația exactă a
              biroului nostru și să vă ușureze găsirea noastră.
            </p>
          </div>

          {/* Cookie Types */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Tipuri de Cookies Utilizate
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 bg-green-50 p-4">
                <h3 className="font-bold text-gray-900">
                  ✅ Cookies Esențiale (Strict Necessary)
                </h3>
                <p className="text-gray-700 mt-2">
                  Necesare pentru funcționarea site-ului. Fără acestea, site-ul
                  nu ar funcționa corect. Sunt activate automat.
                </p>
              </div>
              <div className="border-l-4 border-green-600 bg-green-100 p-4">
                <h3 className="font-bold text-gray-900">
                  ⚙️ Cookies de Performanță (Performance)
                </h3>
                <p className="text-gray-700 mt-2">
                  Cookies de la Google Analytics pentru a analiza cum
                  utilizatorii accesează site-ul. Necesită consimțământul
                  dumneavoastră.
                </p>
              </div>
              <div className="border-l-4 border-green-700 bg-green-200 p-4">
                <h3 className="font-bold text-gray-900">
                  🎯 Cookies Funcționale (Functional)
                </h3>
                <p className="text-gray-700 mt-2">
                  Google Maps și alte servicii pentru a vă oferi funcționalități
                  complete. Necesită consimțământul dumneavoastră.
                </p>
              </div>
            </div>
          </div>

          {/* Your Rights */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Drepturile Dumneavoastră
            </h2>
            <p className="text-gray-700 mb-4">
              Conform Regulamentului General de Protecția Datelor (GDPR), aveți
              următoarele drepturi:
            </p>
            <ul className="space-y-3 text-gray-700 ml-4 list-disc">
              <li>
                <strong>Dreptul la acces:</strong> Puteți solicita informații
                despre cookies-urile stocate
              </li>
              <li>
                <strong>Dreptul la ștergere:</strong> Puteți cere ștergerea
                cookies-urilor
              </li>
              <li>
                <strong>Dreptul la opțiune:</strong> Puteți refuza cookies-urile
                non-esențiale
              </li>
              <li>
                <strong>Portabilitatea datelor:</strong> Puteți cere datele
                dumneavoastră într-un format accesibil
              </li>
            </ul>
          </div>

          {/* Managing Cookies */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Cum Să Gestionați Cookies-urile
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">
                🔧 Opțiuni de Control
              </h3>
              <ul className="space-y-2 text-gray-700 ml-4 list-disc">
                <li>
                  <strong>Refuzați cookies-urile:</strong> La prima vizită, o
                  fereastră vă va permite să acceptați sau refuzați
                  cookies-urile. Puteți schimba această decizie oricând.
                </li>
                <li>
                  <strong>Setări browser:</strong> Puteți bloca cookies-urile
                  din setările browserului dumneavoastră (Chrome, Firefox,
                  Safari, Edge)
                </li>
                <li>
                  <strong>Do Not Track:</strong> Activați setarea "Do Not Track"
                  în browserul dumneavoastră
                </li>
                <li>
                  <strong>Cookies-urile existente:</strong> Puteți șterge
                  cookies-urile stocate oricând din setările browserului
                </li>
              </ul>
            </div>
            <p className="text-gray-600 text-sm mt-4 italic">
              Notă: Dacă refuzați cookies-urile esențiale, unele funcționalități
              ale site-ului pot nu funcționa corect.
            </p>
          </div>

          {/* Third-party Services */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Servicii Terțe
            </h2>
            <p className="text-gray-700 mb-4">
              Site-ul nostru utilizează următoarele servicii externe care pot
              stoca cookies:
            </p>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-3 text-left font-bold">
                    Serviciu
                  </th>
                  <th className="border border-gray-300 p-3 text-left font-bold">
                    Utilizare
                  </th>
                  <th className="border border-gray-300 p-3 text-left font-bold">
                    Link
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3">
                    Google Analytics
                  </td>
                  <td className="border border-gray-300 p-3">
                    Analiză vizitatori
                  </td>
                  <td className="border border-gray-300 p-3">
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Politica Google
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Google Maps</td>
                  <td className="border border-gray-300 p-3">Afișare hartă</td>
                  <td className="border border-gray-300 p-3">
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Politica Google
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Contact */}
          <div className="mb-10 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Întrebări sau Preocupări?
            </h2>
            <p className="text-gray-700 mb-4">
              Dacă aveți întrebări despre politica noastră de cookies sau cum
              gestionăm datele dumneavoastră, vă rugăm să ne contactați:
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
            </div>
          </div>

          {/* Last Updated */}
          <div className="pt-6 border-t border-gray-300">
            <p className="text-gray-500 text-sm">
              Această politică de cookies a fost actualizată în aprilie 2026 și
              poate fi modificată oricând. Verificați periodic pentru
              actualizări.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
