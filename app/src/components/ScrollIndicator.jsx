export default function ScrollIndicator({ targetId }) {
  return (
    <button
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce cursor-pointer bg-transparent border-none p-0"
      onClick={() => document.getElementById(targetId).scrollIntoView({ behavior: "smooth" })}
      aria-label="Scroll down"
    >
      <div className="w-6 h-9 border-2 border-white/40 rounded-full flex items-start justify-center pt-1.5">
        <div className="w-1 h-2 bg-white/60 rounded-full"></div>
      </div>
    </button>
  );
}
