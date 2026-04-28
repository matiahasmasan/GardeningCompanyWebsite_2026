import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      // Show banner after 1 second
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("consent", "update", { analytics_storage: "granted" });

    window.dispatchEvent(new Event("cookieConsentChanged"));
  };

  const handleRejectAll = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowBanner(false);
    window.dispatchEvent(new Event("cookieConsentChanged"));
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Banner */}
      <div className="relative bg-white shadow-2xl">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Message */}
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                🍪 Utilizăm Cookies
              </h3>
              <p className="text-gray-600 text-sm">
                Utilizăm cookies pentru a îmbunătăți experiența dumneavoastră și
                a analiza utilizarea site-ului. Cookies non-esențiale necesită
                consimțământul dumneavoastră.
              </p>
              <Link
                to="/cookie-policy"
                className="text-blue-600 hover:underline text-sm font-semibold mt-2 inline-block"
              >
                Citiți politica noastră de cookies →
              </Link>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={handleRejectAll}
                className="px-6 py-2.5 border-2 border-gray-300 text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-sm whitespace-nowrap"
              >
                ❌ Refuz
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-6 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors text-sm whitespace-nowrap"
              >
                ✅ Accept Toate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
