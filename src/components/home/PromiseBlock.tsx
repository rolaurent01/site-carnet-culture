import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";

const benefits = [
  {
    icon: "📱",
    text: "Saisissez sur le terrain depuis votre téléphone",
  },
  {
    icon: "💻",
    text: "Retrouvez tout au bureau, organisé et à jour",
  },
  {
    icon: "🌱",
    text: "Suivez votre production de la graine au sachet",
  },
  {
    icon: "📦",
    text: "Gardez un stock fiable sans effort",
  },
  {
    icon: "📤",
    text: "Exportez vos données en un clic",
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
