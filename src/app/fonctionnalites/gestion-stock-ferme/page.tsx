import { createMetadata } from "@/lib/metadata";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import FeatureNav from "@/components/features/FeatureNav";

export const metadata = createMetadata({
  title: "Gestion des stocks ferme",
  description:
    "Gérez vos stocks de plantes et de produits finis en temps réel. Carnet Culture calcule automatiquement les entrées et sorties à chaque opération sur votre ferme.",
  path: "/fonctionnalites/gestion-stock-ferme",
});

const steps = [
  {
    icon: "📦",
    title: "Stock plantes en temps réel",
    text: "Le stock est calculé automatiquement à partir de toutes vos opérations. Six états possibles, de la plante fraîche à la plante triée. Aucune saisie manuelle nécessaire.",
  },
  {
    icon: "🏷️",
    title: "Stock produits finis",
    text: "Suivez le nombre de sachets, pots et bouteilles disponibles par produit. Les entrées et sorties sont mises à jour automatiquement à chaque production.",
  },
  {
    icon: "🔔",
    title: "Alertes de stock bas",
    text: "Configurez des seuils d'alerte par plante ou par produit. Soyez prévenu avant de vous retrouver en rupture pendant la saison de vente.",
  },
  {
    icon: "📈",
    title: "Historique et tendances",
    text: "Consultez l'évolution de vos stocks dans le temps. Anticipez vos besoins de production et optimisez votre planning de transformation.",
  },
];

export default function GestionStockPage() {
  return (
    <main className="pt-header pb-20">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <FeatureNav />
        <ScrollReveal>
          <SectionTitle
            subtitle="Fini les comptages approximatifs et les fichiers Excel obsolètes. Votre stock est toujours à jour, calculé en temps réel à partir de vos opérations."
          >
            Gestion des stocks ferme
          </SectionTitle>
        </ScrollReveal>

        <div className="space-y-8 mb-16">
          {steps.map((step, i) => (
            <ScrollReveal key={i} stagger={i + 1}>
              <div className="flex gap-5 items-start bg-cream-50 rounded-2xl p-6 border border-sage-100/60">
                <span className="text-3xl flex-shrink-0" aria-hidden="true">
                  {step.icon}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink mb-2">
                    {step.title}
                  </h3>
                  <p className="text-ink-muted leading-relaxed">{step.text}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="bg-sage-500/5 border border-sage-200/40 rounded-2xl p-8 text-center">
            <h3 className="font-display text-2xl font-semibold text-ink mb-3">
              Un stock toujours fiable
            </h3>
            <p className="text-ink-muted mb-6 max-w-xl mx-auto">
              Plus besoin de recompter. Carnet Culture maintient vos stocks à jour automatiquement,
              de la récolte au produit fini emballé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="md" variant="primary">
                Demander une démo
              </Button>
              <Button href="/fonctionnalites" size="md" variant="outline">
                Toutes les fonctionnalités
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
