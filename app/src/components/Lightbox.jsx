import { useEffect, useCallback } from "react";

export default function Lightbox({ items, index, onClose, onPrev, onNext }) {
  const item = items[index];

  const handleKey = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      onClick={onClose}
    >
      {/* Close */}
      <button
        className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
        onClick={onClose}
        aria-label="Închide"
      >
        <i className="fas fa-times text-lg"></i>
      </button>

      {/* Prev */}
      <button
        className="absolute left-3 md:left-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Înapoi"
      >
        <i className="fas fa-chevron-left"></i>
      </button>

      {/* Image */}
      <div
        className="relative max-w-[90vw] max-h-[90vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.img}
          alt={`${item.cat} ${item.loc}`}
          className="max-w-[90vw] max-h-[80vh] object-contain rounded-xl shadow-2xl"
        />
        {/* Info bar */}
        <div className="mt-3 flex items-center gap-4 text-sm text-white/80">
          <span className="flex items-center gap-1.5">
            <i className="fas fa-calendar-alt text-white/50"></i>
            {item.year}
          </span>
          <span className="flex items-center gap-1.5">
            <i className="fas fa-map-marker-alt text-white/50"></i>
            {item.loc}
          </span>
          <span className="text-white/40 text-xs">
            {index + 1} / {items.length}
          </span>
        </div>
      </div>

      {/* Next */}
      <button
        className="absolute right-3 md:right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Înainte"
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
}
