import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollIndicator from "../components/ScrollIndicator";

export default function Contact() {
  return (
    <div className="w-full">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/pool1.webp')" }}
        />
        <div className="absolute inset-0 bg-dark/70" />

        <Navbar />

        <div className="relative z-10 max-w-3xl mx-auto px-6 flex flex-col items-center">
          <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6 animate-hero-badge">
            <i className="fas fa-phone text-accent"></i>
            Contactează-ne
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 animate-hero-title">
            Să Creăm <span className="text-accent">Împreună</span>
          </h1>

          <p className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed mb-12 animate-hero-desc">
            Transformă-ți visul în realitate cu ajutorul experților noștri în
            peisagistică. Consultație gratuită și deviz personalizat.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-10 text-center">
            {[
              { icon: "fas fa-phone", value: "24/7", label: "Disponibilitate" },
              { icon: "fas fa-gift", value: "Consultație", label: "Gratuită" },
              { icon: "fas fa-bolt", value: "Răspuns", label: "Rapid" },
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

        <ScrollIndicator targetId="contact-methods" />
      </section>

      {/* ── CONTACT METHODS ── */}
      <section id="contact-methods" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Modalități de Contact
            </h2>
            <p className="text-gray-500">
              Alege metoda care îți convine cel mai bine pentru a ne contacta
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phone */}
            <div className="border border-gray-100 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-5">
                <i className="fas fa-phone text-gray-700 text-xl"></i>
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Sună Acum</h3>
              <p className="text-xl font-bold text-gray-900 mb-2">
                0766 431 164
              </p>
              <p className="text-gray-500 text-sm mb-6">
                Disponibili pentru urgențe și consultații
              </p>
              <a
                href="tel:0766431164"
                className="flex items-center gap-2 bg-dark text-white font-semibold px-6 py-2.5 rounded-full hover:bg-primary transition-colors text-sm"
              >
                <i className="fas fa-phone"></i>
                Apelează
              </a>
            </div>

            {/* Email */}
            <div className="border border-gray-100 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-5">
                <i className="fas fa-envelope text-gray-700 text-xl"></i>
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Email</h3>
              <p className="text-sm font-medium text-gray-900 mb-2">
                gradinazak@gmail.com
              </p>
              <p className="text-gray-500 text-sm mb-6">
                Trimite-ne detaliile proiectului tău
              </p>
              <a
                href="mailto:gradinazak@gmail.com"
                className="flex items-center gap-2 bg-dark text-white font-semibold px-6 py-2.5 rounded-full hover:bg-primary transition-colors text-sm"
              >
                <i className="fas fa-envelope"></i>
                Scrie Email
              </a>
            </div>

            {/* WhatsApp */}
            <div className="border border-gray-100 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-5">
                <i className="fab fa-whatsapp text-gray-700 text-xl"></i>
              </div>
              <h3 className="font-bold text-gray-900 mb-1">WhatsApp</h3>
              <p className="text-xl font-bold text-gray-900 mb-2">
                0766 431 164
              </p>
              <p className="text-gray-500 text-sm mb-6">
                Mesaje rapide și poze cu proiectul
              </p>
              <a
                href="https://wa.me/40766431164"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-dark text-white font-semibold px-6 py-2.5 rounded-full hover:bg-primary transition-colors text-sm"
              >
                <i className="fab fa-whatsapp"></i>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOCATION + MAP ── */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Unde Ne Găsești
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                  <i className="fas fa-map-marker-alt text-gray-600"></i>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Adresa Noastră</p>
                  <p className="text-gray-600 text-sm">
                    Strada Dealului Grosului nr. 16
                  </p>
                  <p className="text-primary text-sm font-medium">
                    Baia Mare, Maramureș
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                  <i className="fas fa-map text-gray-600"></i>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    Zona de Acoperire
                  </p>
                  <p className="text-gray-600 text-sm">
                    Deservim întregul județ{" "}
                    <span className="text-primary font-medium">Maramureș</span>{" "}
                    și zonele limitrofe din{" "}
                    <span className="text-primary font-medium">
                      județele vecine
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                  <i className="fab fa-facebook text-gray-600"></i>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Social Media</p>
                  <a
                    href="https://facebook.com/gradinazak"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm hover:underline"
                  >
                    Facebook: @gradinazak
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: map */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Locația pe Hartă
            </h2>
            <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-200 h-72">
              <iframe
                title="Locatie Gradina Zak"
                src="https://maps.google.com/maps?q=gradina%20zakcd &t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SCHEDULE ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Program de Lucru
          </h2>
          <p className="text-gray-500 mb-10">
            Suntem disponibili pentru tine în următorul program
          </p>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 relative">
            <div className="space-y-4 text-left">
              {[
                { day: "Luni - Vineri", hours: "08:00 - 18:00" },
                { day: "Sâmbătă", hours: "08:00 - 16:00" },
                { day: "Duminică", hours: "Închis" },
              ].map(({ day, hours }) => (
                <div
                  key={day}
                  className="flex items-center justify-between py-2 border-b border-gray-200 last:border-0"
                >
                  <span className="text-gray-700 font-medium">{day}</span>
                  <span
                    className={`font-semibold ${
                      hours === "Închis" ? "text-red-400" : "text-gray-900"
                    }`}
                  >
                    {hours}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-center gap-3 bg-white rounded-xl p-4 border border-gray-200">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <i className="fas fa-clock text-gray-600"></i>
              </div>
              <div className="text-center">
                <p className="font-semibold text-gray-900 text-sm">Urgențe:</p>
                <p className="text-gray-500 text-sm">Disponibili 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 bg-primary text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Gata să Începem?
          </h2>
          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            Contactează-ne astăzi pentru o consultație gratuită și să discutăm
            despre visul tău de grădină
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:0766431164"
              className="flex items-center gap-2 border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-primary transition-colors"
            >
              <i className="fas fa-phone"></i>
              Sună Acum: 0766 431 164
            </a>
            <a
              href="mailto:gradinazak@gmail.com"
              className="flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-full hover:bg-light transition-colors"
            >
              <i className="fas fa-envelope"></i>
              Trimite Email
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
