import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";

function MobileMockupDetailed() {
  return (
    <div className="bg-cream-50 rounded-3xl shadow-lg border border-sage-100 overflow-hidden w-48 mx-auto">
      <div className="flex justify-center py-2">
        <div className="w-16 h-4 rounded-full bg-sage-100" />
      </div>
      <div className="px-3 pb-4 space-y-2">
        <div className="h-8 rounded-lg bg-sage-500 flex items-center justify-center">
          <span className="text-cream-50 text-[9px] font-semibold">Saisie rapide</span>
        </div>
        {/* Animated form fields */}
        <div className="h-10 rounded-lg bg-cream-300 flex items-center gap-2 px-3 mockup-row-enter-1 relative overflow-hidden">
          <span className="w-5 h-5 rounded-full bg-sage-200 flex-shrink-0 animate-pulse-dot" />
          <div className="space-y-1 flex-1">
            <div className="h-2 w-16 rounded bg-sage-200" />
            <div className="h-2 rounded bg-sage-300/40 overflow-hidden w-10">
              <div className="h-full bg-sage-400/40 mockup-field-fill" style={{ animationDelay: "0s" }} />
            </div>
          </div>
          <span className="absolute right-3 w-[2px] h-5 bg-sage-500 mockup-cursor" />
        </div>
        <div className="h-10 rounded-lg bg-cream-300 flex items-center gap-2 px-3 mockup-row-enter-2">
          <span className="w-5 h-5 rounded-full bg-amber-400/40 flex-shrink-0 animate-pulse-dot" style={{ animationDelay: "0.5s" }} />
          <div className="space-y-1 flex-1">
            <div className="h-2 w-14 rounded bg-sage-200" />
            <div className="h-2 rounded bg-sage-300/40 overflow-hidden w-8">
              <div className="h-full bg-amber-400/40 mockup-field-fill" style={{ animationDelay: "0.8s" }} />
            </div>
          </div>
        </div>
        <div className="h-10 rounded-lg bg-cream-300 flex items-center gap-2 px-3 mockup-row-enter-3">
          <span className="w-5 h-5 rounded-full bg-sage-300 flex-shrink-0 animate-pulse-dot" style={{ animationDelay: "1s" }} />
          <div className="space-y-1 flex-1">
            <div className="h-2 w-12 rounded bg-sage-200" />
            <div className="h-2 rounded bg-sage-300/40 overflow-hidden w-6">
              <div className="h-full bg-sage-400/40 mockup-field-fill" style={{ animationDelay: "1.6s" }} />
            </div>
          </div>
        </div>
        <div className="h-10 rounded-xl bg-sage-500 flex items-center justify-center mt-2 mockup-btn-press">
          <span className="text-cream-50 text-[9px] font-semibold">Enregistrer</span>
        </div>
      </div>
    </div>
  );
}

function DesktopMockupDetailed() {
  const plants = ["Lavande", "Thym", "Sauge", "Menthe", "Romarin"];

  return (
    <div className="bg-cream-50 rounded-2xl shadow-lg border border-sage-100 overflow-hidden w-full max-w-sm mx-auto">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-cream-300 border-b border-sage-100">
        <span className="w-2.5 h-2.5 rounded-full bg-red-300/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-sage-300/70" />
        <div className="ml-2 flex-1 h-4 bg-cream-200 rounded" />
      </div>
      <div className="flex min-h-[200px]">
        <div className="w-14 bg-sage-500 p-2 flex flex-col gap-2 relative">
          {[0.7, 0.5, 0.8, 0.4, 0.6, 0.3].map((opacity, i) => (
            <div
              key={i}
              className="w-full h-5 rounded bg-sage-300 mockup-sidebar-glow"
              style={{ opacity, animationDelay: `${i * 0.4}s` }}
            />
          ))}
          <div className="absolute top-2 right-1 w-1.5 h-1.5 rounded-full bg-amber-400 mockup-notif" />
        </div>
        <div className="flex-1 p-3">
          <div className="flex gap-2 mb-2">
            <div className="h-6 w-20 rounded bg-sage-500 flex items-center justify-center">
              <span className="text-cream-50 text-[7px] font-semibold">Parcelles</span>
            </div>
            <div className="h-6 w-16 rounded bg-cream-300" />
            <div className="h-6 w-16 rounded bg-cream-300" />
          </div>
          {/* Progress bar */}
          <div className="h-1.5 w-full rounded-full bg-sage-100 overflow-hidden mb-2">
            <div className="h-full rounded-full bg-amber-400/50 mockup-progress" />
          </div>
          <div className="space-y-1.5">
            <div className="flex gap-1.5 text-[7px]">
              <div className="h-4 flex-1 rounded bg-sage-100 flex items-center px-2 text-ink-muted font-semibold">Variété</div>
              <div className="h-4 w-14 rounded bg-sage-100 flex items-center px-2 text-ink-muted font-semibold">Rang</div>
              <div className="h-4 w-16 rounded bg-sage-100 flex items-center px-2 text-ink-muted font-semibold">Statut</div>
            </div>
            {plants.map((plant, i) => (
              <div
                key={i}
                className={`flex gap-1.5 text-[7px] mockup-row-sweep mockup-row-enter-${i + 1} rounded-sm`}
              >
                <div className="h-4 flex-1 rounded bg-cream-200 flex items-center px-2 text-ink-muted">{plant}</div>
                <div className="h-4 w-14 rounded bg-cream-200 flex items-center px-2 text-ink-muted">R{i + 1}</div>
                <div
                  className={`h-4 w-16 rounded flex items-center justify-center font-semibold mockup-badge-pulse ${
                    i % 2 === 0 ? "bg-sage-200 text-sage-700" : "bg-amber-400/25 text-amber-600"
                  }`}
                  style={{ animationDelay: `${i * 0.5}s` }}
                >
                  {i % 2 === 0 ? "Actif" : "Récolte"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DeviceBlock() {
  return (
    <section className="py-20 md:py-28 bg-cream-100">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <ScrollReveal>
          <SectionTitle>Deux interfaces, chacune à sa place.</SectionTitle>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-5xl mx-auto">
          <ScrollReveal stagger={1}>
            <div className="text-center">
              <MobileMockupDetailed />
              <div className="mt-8">
                <h3 className="font-display text-2xl font-semibold text-ink mb-3">
                  Mobile — le terrain
                </h3>
                <p className="text-ink-muted text-sm leading-relaxed max-w-sm mx-auto">
                  Une interface ultra-simple pour saisir vos opérations les mains dans la terre.
                  Pas de menus, pas de tableaux. Juste l&apos;essentiel.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal stagger={2}>
            <div className="text-center">
              <DesktopMockupDetailed />
              <div className="mt-8">
                <h3 className="font-display text-2xl font-semibold text-ink mb-3">
                  Bureau — le pilotage
                </h3>
                <p className="text-ink-muted text-sm leading-relaxed max-w-sm mx-auto">
                  L&apos;application complète pour consulter, analyser, gérer vos recettes
                  et exporter vos données.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
