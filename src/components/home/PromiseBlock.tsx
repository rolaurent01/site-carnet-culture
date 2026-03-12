import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";

const benefits = [
  {
    icon: "📱",
    text: "Fini les bouts de papier : saisissez en 10 secondes sur le terrain",
  },
  {
    icon: "💻",
    text: "Ce soir au bureau, tout est déjà classé et à jour",
  },
  {
    icon: "🌱",
    text: "Dès la prochaine cueillette, votre stock se met à jour tout seul",
  },
  {
    icon: "🔗",
    text: "Le jour du contrôle, remontez un lot en 3 clics au lieu d'une heure",
  },
  {
    icon: "📤",
    text: "Export Excel prêt pour votre comptable ou votre certification en un clic",
  },
];

export default function PromiseBlock() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <ScrollReveal>
          <SectionTitle>Une seule application pour tout suivre.</SectionTitle>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto space-y-5">
          {benefits.map((item, i) => (
            <ScrollReveal key={i} stagger={i + 1}>
              <div className="flex items-start gap-5 bg-cream-50 rounded-2xl p-5 md:p-6 border border-sage-100/60 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                <span className="text-2xl flex-shrink-0 mt-0.5" aria-hidden="true">
                  {item.icon}
                </span>
                <p className="text-ink text-base md:text-lg leading-relaxed font-medium">
                  {item.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
