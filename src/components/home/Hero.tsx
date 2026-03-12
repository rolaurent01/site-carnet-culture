import Button from "@/components/ui/Button";
import { APP_URL } from "@/lib/constants";

function DesktopMockup() {
  const rows = [
    { name: "Lavande", qty: "3.2 kg", status: "Récolté", statusStyle: "bg-sage-200 text-sage-700" },
    { name: "Thym", qty: "1.8 kg", status: "Séchage", statusStyle: "bg-amber-400/30 text-amber-600" },
    { name: "Sauge", qty: "0.9 kg", status: "Stock", statusStyle: "bg-sage-100 text-sage-500" },
    { name: "Menthe", qty: "2.1 kg", status: "Récolté", statusStyle: "bg-sage-200 text-sage-700" },
    { name: "Romarin", qty: "4.5 kg", status: "Séchage", statusStyle: "bg-amber-400/30 text-amber-600" },
  ];

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="bg-cream-50 rounded-2xl shadow-xl border border-sage-100 overflow-hidden">
        {/* Browser bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-cream-300 border-b border-sage-100">
          <span className="w-3 h-3 rounded-full bg-red-300/70" />
          <span className="w-3 h-3 rounded-full bg-amber-400/70" />
          <span className="w-3 h-3 rounded-full bg-sage-300/70" />
          <div className="ml-3 flex-1 h-5 bg-cream-200 rounded-md" />
        </div>
        {/* App content */}
        <div className="flex min-h-[220px]">
          {/* Sidebar */}
          <div className="w-16 bg-sage-500 p-3 flex flex-col gap-3 relative">
            <div className="w-full h-6 rounded bg-sage-400/50 mockup-sidebar-glow" style={{ animationDelay: "0s" }} />
            <div className="w-full h-6 rounded bg-sage-400/30 mockup-sidebar-glow" style={{ animationDelay: "0.5s" }} />
            <div className="w-full h-6 rounded bg-amber-400/50 mockup-sidebar-glow" style={{ animationDelay: "1s" }} />
            <div className="w-full h-6 rounded bg-sage-400/30 mockup-sidebar-glow" style={{ animationDelay: "1.5s" }} />
            <div className="w-full h-6 rounded bg-sage-400/30 mockup-sidebar-glow" style={{ animationDelay: "2s" }} />
            {/* Notification dot */}
            <div className="absolute top-3 right-2 w-2 h-2 rounded-full bg-amber-400 mockup-notif" />
          </div>
          {/* Main area */}
          <div className="flex-1 p-4 space-y-3">
            <div className="flex gap-2">
              <div className="h-5 w-20 rounded bg-sage-100" />
              <div className="h-5 w-16 rounded bg-amber-400/30" />
              <div className="h-5 w-24 rounded bg-sage-100" />
            </div>
            {/* Progress bar */}
            <div className="h-2 w-full rounded-full bg-sage-100 overflow-hidden">
              <div className="h-full rounded-full bg-sage-400/60 mockup-progress" />
            </div>
            {/* Table rows */}
            <div className="space-y-2 mt-2">
              {rows.map((row, i) => (
                <div
                  key={i}
                  className={`flex gap-2 items-center mockup-row-sweep mockup-row-enter-${i + 1} rounded-md px-1 py-0.5`}
                >
                  <div className="w-3 h-3 rounded-full bg-sage-400 animate-pulse-dot" style={{ animationDelay: `${i * 0.4}s` }} />
                  <div className="h-4 rounded bg-sage-100/80 flex-1 flex items-center px-1">
                    <span className="text-[7px] text-ink-muted">{row.name}</span>
                  </div>
                  <div className="h-4 w-12 rounded bg-cream-300 flex items-center justify-center">
                    <span className="text-[6px] text-ink-muted">{row.qty}</span>
                  </div>
                  <div
                    className={`h-4 w-14 rounded text-[8px] flex items-center justify-center font-semibold mockup-badge-pulse ${row.statusStyle}`}
                    style={{ animationDelay: `${i * 0.6}s` }}
                  >
                    {row.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileMockup() {
  return (
    <div className="relative w-32 md:w-36">
      <div className="bg-cream-50 rounded-3xl shadow-xl border border-sage-100 overflow-hidden">
        {/* Notch */}
        <div className="flex justify-center py-2">
          <div className="w-16 h-4 rounded-full bg-sage-100" />
        </div>
        {/* Content */}
        <div className="px-3 pb-4 space-y-3 min-h-[180px]">
          <div className="h-5 w-full rounded bg-sage-500 flex items-center justify-center">
            <span className="text-cream-50 text-[7px] font-semibold">Saisie terrain</span>
          </div>
          <div className="space-y-2">
            <div className="h-8 rounded-lg bg-cream-300 flex items-center px-2 relative overflow-hidden mockup-row-enter-1">
              <span className="text-[7px] text-ink-muted">🌿 Lavande fine</span>
              <span className="absolute right-2 w-[2px] h-4 bg-sage-500 mockup-cursor" />
            </div>
            <div className="h-8 rounded-lg bg-cream-300 flex items-center px-2 mockup-row-enter-2">
              <span className="text-[7px] text-ink-muted">📋 Cueillette</span>
            </div>
            <div className="h-8 rounded-lg bg-cream-300 flex items-center px-2 mockup-row-enter-3">
              <div className="flex items-center gap-1">
                <span className="text-[7px] text-ink-muted">⚖️</span>
                <div className="h-3 rounded bg-sage-200 overflow-hidden w-12">
                  <div className="h-full bg-sage-400/50 mockup-field-fill" />
                </div>
              </div>
            </div>
          </div>
          <div className="h-8 rounded-lg bg-sage-500 flex items-center justify-center mockup-btn-press">
            <span className="text-cream-50 text-[7px] font-semibold">Enregistrer</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      {/* Decorative SVG shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <svg
          className="absolute -top-20 -right-32 w-[600px] h-[600px] opacity-[0.06] animate-float-slow"
          viewBox="0 0 400 400"
        >
          <ellipse cx="200" cy="200" rx="180" ry="160" fill="#588157" />
        </svg>
        <svg
          className="absolute -bottom-40 -left-20 w-[500px] h-[500px] opacity-[0.05] animate-float"
          viewBox="0 0 400 400"
        >
          <ellipse cx="200" cy="200" rx="170" ry="190" fill="#3A5A40" />
        </svg>
        <svg
          className="absolute top-1/3 right-1/4 w-24 h-24 opacity-[0.08]"
          viewBox="0 0 100 100"
        >
          <path
            d="M50 5 C60 25, 90 30, 95 50 C90 70, 60 75, 50 95 C40 75, 10 70, 5 50 C10 30, 40 25, 50 5Z"
            fill="#588157"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="max-w-xl">
            <span className="inline-block font-body text-sm font-medium text-sage-400 tracking-wider uppercase mb-6">
              Application de gestion PAM
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-[3.4rem] font-semibold text-ink leading-[1.12] tracking-tight">
              De la graine au produit fini, votre activité PAM dans un seul outil.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-ink-muted leading-relaxed">
              Carnet Culture remplace vos fichiers Excel par une application claire et fiable,
              pensée pour les petites fermes de plantes aromatiques et médicinales.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button href={APP_URL} external size="lg" variant="primary">
                Accéder à l&apos;application
              </Button>
              <Button href="/contact" size="lg" variant="outline">
                Demander une démo
              </Button>
            </div>
          </div>

          {/* Mockups */}
          <div className="relative flex items-end justify-center lg:justify-end gap-[-20px]">
            <div className="relative z-10">
              <DesktopMockup />
            </div>
            <div className="absolute -bottom-4 -left-2 md:left-4 z-20">
              <MobileMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
