import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

const audiences = [
  {
    icon: "🌿",
    text: "Fermes de plantes aromatiques et médicinales",
  },
  {
    icon: "🏠",
    text: "Ateliers de transformation artisanaux",
  },
  {
    icon: "👥",
    text: "Équipes de 2 à 5 personnes",
  },
  {
    icon: "📊",
    text: "Structures qui veulent sortir d'Excel sans se compliquer la vie",
  },
];

export default function AudienceBlock() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <ScrollReveal>
          <SectionTitle>
            Pensé pour les petites structures qui font les choses bien.
          </SectionTitle>
        </ScrollReveal>

        <div className="max-w-2xl mx-auto space-y-4 mb-10">
          {audiences.map((item, i) => (
            <ScrollReveal key={i} stagger={i + 1}>
              <div className="flex items-center gap-4 bg-cream-50 rounded-2xl p-5 border border-sage-100/60 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                <span className="text-2xl flex-shrink-0" aria-hidden="true">
                  {item.icon}
                </span>
                <p className="text-ink font-medium">{item.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center">
            <Button href="/pour-qui" variant="outline" size="md">
              En savoir plus →
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
