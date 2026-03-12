"use client";

import { useState, useEffect, useRef } from "react";

const SCENE_DURATION = 4000; // ms per scene
const TOTAL_SCENES = 3;

export default function AppDemo() {
  const [scene, setScene] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Intersection observer — only animate when visible
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Scene cycle
  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setScene((s) => (s + 1) % TOTAL_SCENES);
    }, SCENE_DURATION);
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section ref={ref} className="py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-4">
            Voyez l&apos;outil en action
          </h2>
          <p className="text-ink-muted text-lg max-w-2xl mx-auto">
            Du terrain au bureau, en trois étapes automatiques.
          </p>
        </div>

        {/* Scene indicators */}
        <div className="flex justify-center gap-3 mb-10">
          {["Saisie terrain", "Synchronisation", "Tableau de bord"].map(
            (label, i) => (
              <button
                key={i}
                onClick={() => setScene(i)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-500 ${
                  scene === i
                    ? "bg-sage-500 text-cream-50 shadow-md"
                    : "bg-cream-100 text-ink-muted hover:bg-sage-100"
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-full text-xs flex items-center justify-center font-bold ${
                    scene === i
                      ? "bg-cream-50/20 text-cream-50"
                      : "bg-sage-100 text-sage-500"
                  }`}
                >
                  {i + 1}
                </span>
                <span className="hidden sm:inline">{label}</span>
              </button>
            )
          )}
        </div>

        {/* Animation stage */}
        <div className="relative bg-cream-50 rounded-3xl border border-sage-100/60 shadow-lg overflow-hidden min-h-[380px] md:min-h-[420px]">
          {/* Scene 1 — Mobile field entry */}
          <div
            className={`absolute inset-0 flex items-center justify-center gap-8 md:gap-16 p-8 transition-all duration-700 ${
              scene === 0
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12 pointer-events-none"
            }`}
          >
            {/* Context illustration — field */}
            <div className="hidden md:block flex-shrink-0">
              <svg
                viewBox="0 0 160 200"
                className="w-40 h-50"
                fill="none"
                aria-hidden="true"
              >
                {/* Sun */}
                <circle cx="130" cy="30" r="18" fill="#DDA15E" opacity="0.3" />
                <circle cx="130" cy="30" r="10" fill="#DDA15E" opacity="0.5" />
                {/* Field rows */}
                <path
                  d="M10 160 Q80 140, 150 160"
                  stroke="#588157"
                  strokeWidth="2"
                  opacity="0.3"
                />
                <path
                  d="M10 175 Q80 155, 150 175"
                  stroke="#588157"
                  strokeWidth="2"
                  opacity="0.25"
                />
                <path
                  d="M10 190 Q80 170, 150 190"
                  stroke="#7DA27D"
                  strokeWidth="2"
                  opacity="0.2"
                />
                {/* Plants in field */}
                {[30, 55, 80, 105, 130].map((x, i) => (
                  <g key={i}>
                    <path
                      d={`M${x} ${155 - i * 2} C${x} ${140 - i * 2}, ${x} ${130 - i * 2}, ${x} ${120 - i * 2}`}
                      stroke="#3A5A40"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      className="demo-plant-grow"
                      style={{ animationDelay: `${i * 200}ms` }}
                    />
                    <path
                      d={`M${x} ${135 - i * 2} C${x - 8} ${128 - i * 2}, ${x - 10} ${124 - i * 2}, ${x - 6} ${120 - i * 2}`}
                      fill="#588157"
                      opacity="0.6"
                      className="demo-plant-grow"
                      style={{ animationDelay: `${i * 200 + 100}ms` }}
                    />
                    <path
                      d={`M${x} ${128 - i * 2} C${x + 8} ${122 - i * 2}, ${x + 10} ${118 - i * 2}, ${x + 6} ${114 - i * 2}`}
                      fill="#7DA27D"
                      opacity="0.5"
                      className="demo-plant-grow"
                      style={{ animationDelay: `${i * 200 + 200}ms` }}
                    />
                  </g>
                ))}
              </svg>
            </div>

            {/* Phone mockup with live entry */}
            <div className="w-48 md:w-56 flex-shrink-0">
              <div className="bg-cream-200 rounded-[2rem] p-2 shadow-xl border border-sage-100">
                <div className="bg-cream-50 rounded-[1.5rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="flex justify-between items-center px-5 py-2">
                    <span className="text-[8px] text-ink-muted">9:41</span>
                    <div className="w-20 h-5 rounded-full bg-sage-100" />
                    <div className="flex gap-1">
                      <div className="w-3 h-2 rounded-sm bg-sage-300" />
                      <div className="w-4 h-2 rounded-sm bg-sage-400" />
                    </div>
                  </div>
                  {/* App header */}
                  <div className="bg-sage-500 px-4 py-3">
                    <span className="text-cream-50 text-[10px] font-bold">
                      Nouvelle saisie
                    </span>
                  </div>
                  {/* Form fields */}
                  <div className="p-4 space-y-3">
                    <div className="demo-field-appear" style={{ animationDelay: "0.2s" }}>
                      <span className="text-[8px] text-ink-muted block mb-1">
                        Plante
                      </span>
                      <div className="h-8 rounded-lg bg-cream-100 border border-sage-100 flex items-center px-3 overflow-hidden">
                        <span className="text-[9px] text-ink demo-typing">
                          Lavande fine
                        </span>
                      </div>
                    </div>
                    <div className="demo-field-appear" style={{ animationDelay: "0.8s" }}>
                      <span className="text-[8px] text-ink-muted block mb-1">
                        Opération
                      </span>
                      <div className="h-8 rounded-lg bg-cream-100 border border-sage-100 flex items-center px-3">
                        <span className="text-[9px] text-ink demo-typing" style={{ animationDelay: "0.6s" }}>
                          Cueillette
                        </span>
                      </div>
                    </div>
                    <div className="demo-field-appear" style={{ animationDelay: "1.4s" }}>
                      <span className="text-[8px] text-ink-muted block mb-1">
                        Parcelle
                      </span>
                      <div className="h-8 rounded-lg bg-cream-100 border border-sage-100 flex items-center px-3">
                        <span className="text-[9px] text-ink demo-typing" style={{ animationDelay: "1.2s" }}>
                          Parcelle Sud
                        </span>
                      </div>
                    </div>
                    <div className="demo-field-appear" style={{ animationDelay: "2s" }}>
                      <span className="text-[8px] text-ink-muted block mb-1">
                        Poids (kg)
                      </span>
                      <div className="h-8 rounded-lg bg-cream-100 border border-sage-100 flex items-center px-3">
                        <span className="text-[9px] text-ink font-medium demo-typing" style={{ animationDelay: "1.8s" }}>
                          3.2
                        </span>
                      </div>
                    </div>
                    {/* Submit button */}
                    <div className="demo-field-appear" style={{ animationDelay: "2.8s" }}>
                      <div className="h-9 rounded-xl bg-sage-500 flex items-center justify-center demo-btn-glow">
                        <span className="text-cream-50 text-[10px] font-bold">
                          Enregistrer
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scene 2 — Sync animation */}
          <div
            className={`absolute inset-0 flex items-center justify-center p-8 transition-all duration-700 ${
              scene === 1
                ? "opacity-100 translate-x-0"
                : scene === 0
                ? "opacity-0 translate-x-12 pointer-events-none"
                : "opacity-0 -translate-x-12 pointer-events-none"
            }`}
          >
            <div className="flex items-center gap-6 md:gap-12">
              {/* Phone (small) */}
              <div className="w-20 md:w-24 flex-shrink-0">
                <div className="bg-cream-200 rounded-2xl p-1.5 shadow-lg border border-sage-100">
                  <div className="bg-cream-50 rounded-xl p-2 space-y-1.5">
                    <div className="h-3 rounded bg-sage-500 w-full" />
                    <div className="h-2 rounded bg-sage-100 w-3/4" />
                    <div className="h-2 rounded bg-sage-100 w-1/2" />
                    <div className="h-4 rounded bg-sage-400 flex items-center justify-center">
                      <span className="text-cream-50 text-[6px]">3.2 kg</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sync animation — data particles */}
              <div className="relative w-32 md:w-48 h-20">
                {/* Connection line */}
                <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-sage-200 -translate-y-1/2" />
                {/* Moving dots */}
                {[0, 1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full demo-sync-dot"
                    style={{
                      animationDelay: `${i * 0.4}s`,
                      backgroundColor:
                        i % 2 === 0 ? "#3A5A40" : "#DDA15E",
                    }}
                  />
                ))}
                {/* Wifi icon in center */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-cream-50 border-2 border-sage-200 flex items-center justify-center demo-sync-pulse">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 20h.01M8.5 16.5a5 5 0 017 0M5 13a9 9 0 0114 0M1.5 9.5a13 13 0 0121 0"
                      stroke="#3A5A40"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                {/* Labels */}
                <div className="absolute -bottom-6 left-0 text-[9px] text-ink-muted">
                  Terrain
                </div>
                <div className="absolute -bottom-6 right-0 text-[9px] text-ink-muted">
                  Bureau
                </div>
              </div>

              {/* Desktop (small) */}
              <div className="w-28 md:w-36 flex-shrink-0">
                <div className="bg-cream-200 rounded-xl p-1.5 shadow-lg border border-sage-100">
                  <div className="bg-cream-50 rounded-lg overflow-hidden">
                    <div className="flex gap-1 px-2 py-1 bg-cream-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-300/70" />
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400/70" />
                      <span className="w-1.5 h-1.5 rounded-full bg-sage-300/70" />
                    </div>
                    <div className="p-2 space-y-1">
                      <div className="h-2 rounded bg-sage-100 w-full demo-desk-fill" style={{ animationDelay: "0.5s" }} />
                      <div className="h-2 rounded bg-sage-100 w-3/4 demo-desk-fill" style={{ animationDelay: "0.8s" }} />
                      <div className="h-2 rounded bg-amber-400/30 w-1/2 demo-desk-fill" style={{ animationDelay: "1.1s" }} />
                      <div className="h-6 rounded bg-sage-400/20 demo-desk-fill" style={{ animationDelay: "1.4s" }} />
                    </div>
                  </div>
                </div>
                <div className="mx-auto w-10 h-1.5 rounded-b bg-cream-300" />
              </div>
            </div>
          </div>

          {/* Scene 3 — Dashboard */}
          <div
            className={`absolute inset-0 flex items-center justify-center p-6 md:p-8 transition-all duration-700 ${
              scene === 2
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12 pointer-events-none"
            }`}
          >
            <div className="w-full max-w-2xl">
              <div className="bg-cream-200 rounded-2xl p-2 shadow-xl border border-sage-100">
                <div className="bg-cream-50 rounded-xl overflow-hidden">
                  {/* Browser bar */}
                  <div className="flex items-center gap-2 px-4 py-2.5 bg-cream-300 border-b border-sage-100">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-300/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-sage-300/70" />
                    <div className="ml-3 flex-1 h-4 bg-cream-200 rounded-md flex items-center px-2">
                      <span className="text-[7px] text-ink-muted">
                        app.carnet-culture.fr/tableau-de-bord
                      </span>
                    </div>
                  </div>

                  <div className="flex min-h-[250px]">
                    {/* Sidebar */}
                    <div className="w-14 bg-sage-500 p-2 flex flex-col gap-2">
                      {["Accueil", "Saisies", "Stock", "Lots", "Export"].map(
                        (label, i) => (
                          <div
                            key={i}
                            className={`w-full h-5 rounded text-[5px] flex items-center justify-center text-cream-50/80 demo-sidebar-item ${
                              i === 0 ? "bg-sage-400/60" : "bg-sage-400/20"
                            }`}
                            style={{ animationDelay: `${i * 0.15}s` }}
                          >
                            {label}
                          </div>
                        )
                      )}
                    </div>

                    {/* Main content */}
                    <div className="flex-1 p-4 space-y-3">
                      {/* Stats row */}
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          {
                            label: "Récoltes ce mois",
                            value: "47",
                            sub: "+12 cette semaine",
                            color: "bg-sage-100",
                          },
                          {
                            label: "Stock total",
                            value: "128 kg",
                            sub: "23 variétés",
                            color: "bg-amber-400/15",
                          },
                          {
                            label: "Lots actifs",
                            value: "15",
                            sub: "3 en transformation",
                            color: "bg-sage-100",
                          },
                        ].map((stat, i) => (
                          <div
                            key={i}
                            className={`${stat.color} rounded-lg p-2 demo-stat-pop`}
                            style={{ animationDelay: `${i * 0.2}s` }}
                          >
                            <div className="text-[7px] text-ink-muted">
                              {stat.label}
                            </div>
                            <div className="text-sm font-bold text-ink font-display">
                              {stat.value}
                            </div>
                            <div className="text-[6px] text-sage-400">
                              {stat.sub}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Recent entries table */}
                      <div>
                        <div className="text-[8px] font-semibold text-ink mb-1.5">
                          Dernières saisies
                        </div>
                        <div className="space-y-1">
                          {[
                            {
                              plant: "Lavande fine",
                              op: "Cueillette",
                              qty: "3.2 kg",
                              time: "Il y a 2 min",
                              status: "Nouveau",
                              highlight: true,
                            },
                            {
                              plant: "Thym",
                              op: "Séchage",
                              qty: "1.8 kg",
                              time: "14:20",
                              status: "En cours",
                              highlight: false,
                            },
                            {
                              plant: "Mélisse",
                              op: "Triage",
                              qty: "2.4 kg",
                              time: "11:05",
                              status: "Terminé",
                              highlight: false,
                            },
                            {
                              plant: "Sauge",
                              op: "Cueillette",
                              qty: "0.9 kg",
                              time: "Hier",
                              status: "Terminé",
                              highlight: false,
                            },
                          ].map((row, i) => (
                            <div
                              key={i}
                              className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-[7px] demo-row-slide ${
                                row.highlight
                                  ? "bg-sage-200/40 ring-1 ring-sage-300/50"
                                  : "bg-cream-100/60"
                              }`}
                              style={{ animationDelay: `${0.4 + i * 0.15}s` }}
                            >
                              <span className="text-ink font-medium w-16 truncate">
                                {row.plant}
                              </span>
                              <span className="text-ink-muted w-14 truncate">
                                {row.op}
                              </span>
                              <span className="text-ink font-medium w-10">
                                {row.qty}
                              </span>
                              <span className="text-ink-muted flex-1 text-right hidden sm:block">
                                {row.time}
                              </span>
                              <span
                                className={`px-1.5 py-0.5 rounded text-[6px] font-semibold ${
                                  row.status === "Nouveau"
                                    ? "bg-sage-400/20 text-sage-600"
                                    : row.status === "En cours"
                                    ? "bg-amber-400/25 text-amber-600"
                                    : "bg-sage-100 text-sage-400"
                                }`}
                              >
                                {row.status}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Mini chart */}
                      <div className="flex items-end gap-1 h-10 mt-1">
                        {[40, 55, 35, 70, 60, 80, 50, 90, 65, 75, 85, 95].map(
                          (h, i) => (
                            <div
                              key={i}
                              className="flex-1 rounded-t demo-bar-grow"
                              style={{
                                height: `${h}%`,
                                backgroundColor:
                                  i === 11 ? "#DDA15E" : "#588157",
                                opacity: i === 11 ? 0.7 : 0.15 + i * 0.05,
                                animationDelay: `${0.8 + i * 0.08}s`,
                              }}
                            />
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-sage-100/50">
            <div
              className="h-full bg-sage-400/40 demo-scene-progress"
              key={scene}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
