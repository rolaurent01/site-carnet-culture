import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";

const irritants = [
  {
    icon: "📂",
    title: "Infos éparpillées",
    text: "Plusieurs fichiers Excel, plusieurs onglets, des données partout — rien n'est centralisé.",
  },
  {
    icon: "✍️",
    title: "Double saisie",
    text: "Vous notez sur le terrain, puis vous re-saisissez au bureau. Deux fois le travail.",
  },
  {
    icon: "📉",
    title: "Stock approximatif",
    text: "Votre stock n'est jamais vraiment à jour. Vous comptez, recomptez, ajustez à la main.",
  },
  {
    icon: "🔗",
    title: "Traçabilité compliquée",
    text: "Remonter d'un lot au sachet de graines d'origine prend une heure de recherche.",
  },
  {
    icon: "🔍",
    title: "Temps perdu",
    text: "Vous cherchez une donnée ? Il faut retrouver le bon fichier, le bon onglet, la bonne ligne.",
  },
  {
    icon: "🌫️",
    title: "Aucune vue d'ensemble",
    text: "Impossible de voir rapidement où en est votre saison, votre stock, votre production.",
  },
];

export default function ProblemBlock() {
  return (
    <section className="py-20 md:py-28 bg-cream-100">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <ScrollReveal>
          <SectionTitle
            subtitle="Des heures perdues chaque semaine à naviguer entre fichiers, recompter le stock et chercher un numéro de lot."
          >
            Vos fichiers Excel vous ralentissent.
          </SectionTitle>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {irritants.map((item, i) => (
            <ScrollReveal key={i} stagger={i + 1}>
              <Card>
                <span className="text-2xl mb-3 block" aria-hidden="true">
                  {item.icon}
                </span>
                <h3 className="font-display text-lg font-semibold text-ink mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-ink-muted leading-relaxed">{item.text}</p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
