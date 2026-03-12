import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";

const points = [
  {
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" aria-hidden="true">
        <circle cx="16" cy="16" r="14" fill="#588157" opacity="0.12" />
        <path d="M10 16l4 4 8-8" stroke="#3A5A40" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
    text: "Pensé par et pour des professionnels PAM",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" aria-hidden="true">
        <circle cx="16" cy="16" r="14" fill="#588157" opacity="0.12" />
        <path d="M10 16l4 4 8-8" stroke="#3A5A40" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
    text: "Testé sur une exploitation réelle",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" aria-hidden="true">
        <circle cx="16" cy="16" r="14" fill="#588157" opacity="0.12" />
        <path d="M10 16l4 4 8-8" stroke="#3A5A40" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
    text: "Conçu pour durer, pas pour impressionner",
  },
];

export default function ReassuranceBlock() {
  return (
    <section className="py-20 md:py-28 bg-cream-100 relative overflow-hidden">
      {/* Decorative organic shape */}
      <div className="absolute -right-20 top-10 w-64 h-64 opacity-[0.04] pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path
            d="M100 10 C140 10, 190 50, 180 100 C170 150, 130 190, 90 180 C50 170, 10 140, 20 90 C30 40, 60 10, 100 10Z"
            fill="#3A5A40"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-4xl px-5 md:px-8">
        <ScrollReveal>
          <SectionTitle>Conçu à partir d&apos;un vrai besoin terrain.</SectionTitle>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-center text-ink-muted text-lg leading-relaxed max-w-3xl mx-auto mb-12">
            Carnet Culture est né de la collaboration avec Les Jardins de la Sauge, une micro-ferme
            PAM en activité. Chaque fonctionnalité a été pensée pour répondre à des usages quotidiens
            concrets : la saisie sous la pluie, le stock qui doit tomber juste, la traçabilité qui
            ne doit pas prendre une heure.
          </p>
        </ScrollReveal>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          {points.map((point, i) => (
            <ScrollReveal key={i} stagger={i + 1}>
              <div className="flex items-center gap-3 bg-cream-50 rounded-2xl px-6 py-4 border border-sage-100/60 shadow-sm">
                {point.icon}
                <span className="text-ink font-medium text-sm">{point.text}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
