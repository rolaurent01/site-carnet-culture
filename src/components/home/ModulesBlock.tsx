import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";

const modules = [
  {
    emoji: "🌱",
    title: "Semis",
    text: "Du sachet de graines aux plants prêts à planter. Suivez chaque étape, chaque caisse, chaque taux de réussite.",
  },
  {
    emoji: "🌿",
    title: "Parcelles",
    text: "Plantations, cueillettes, soins, arrachages. Chaque rang documenté, chaque variété suivie.",
  },
  {
    emoji: "🔄",
    title: "Transformation",
    text: "Tronçonnage, séchage, triage. Tracez les entrées et sorties à chaque étape.",
  },
  {
    emoji: "🧪",
    title: "Produits",
    text: "Créez vos recettes, produisez vos lots, suivez votre stock de produits finis.",
  },
  {
    emoji: "📦",
    title: "Stock",
    text: "Un stock calculé automatiquement à partir de vos opérations. Fiable et toujours à jour.",
  },
  {
    emoji: "📊",
    title: "Pilotage",
    text: "Tableaux de bord, prévisionnel, traçabilité. Prenez du recul sur votre saison.",
  },
];

export default function ModulesBlock() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <ScrollReveal>
          <SectionTitle>Tout le parcours de vos plantes, couvert.</SectionTitle>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {modules.map((mod, i) => (
            <ScrollReveal key={i} stagger={i + 1}>
              <Card className="group">
                <span className="text-3xl mb-4 block transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
                  {mod.emoji}
                </span>
                <h3 className="font-display text-xl font-semibold text-ink mb-2">
                  {mod.title}
                </h3>
                <p className="text-sm text-ink-muted leading-relaxed">{mod.text}</p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
