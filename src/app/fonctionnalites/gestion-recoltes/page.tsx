import { createMetadata } from "@/lib/metadata";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

export const metadata = createMetadata({
  title: "Gestion des récoltes",
  description:
    "Enregistrez vos cueillettes et récoltes directement sur le terrain. Carnet Culture suit les quantités récoltées, les parcelles concernées et met à jour vos stocks automatiquement.",
  path: "/fonctionnalites/gestion-recoltes",
});

const steps = [
  {
    icon: "🌿",
    title: "Saisie rapide des cueillettes",
    text: "Enregistrez vos cueillettes en quelques secondes depuis le terrain. Plante, parcelle, quantité — c'est tout. L'application fait le reste.",
  },
  {
    icon: "⚖️",
    title: "Suivi des quantités récoltées",
    text: "Visualisez les quantités récoltées par plante, par parcelle et par période. Comparez avec vos prévisions et ajustez votre planification.",
  },
  {
    icon: "🔄",
    title: "Stock mis à jour automatiquement",
    text: "Chaque cueillette alimente directement votre stock de plantes fraîches. Plus de double saisie entre le terrain et le bureau.",
  },
  {
    icon: "⏱️",
    title: "Temps de travail par récolte",
    text: "Suivez le temps passé par variété et par étape. Des données essentielles pour optimiser votre organisation et chiffrer vos coûts de production.",
  },
];

export default function GestionRecoltesPage() {
  return (
    <main className="pt-40 pb-20">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <ScrollReveal>
          <SectionTitle
            subtitle="Enregistrez vos récoltes sur le terrain et retrouvez-les instantanément au bureau. Tout est synchronisé, rien n'est perdu."
          >
            Gestion des récoltes
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
              Du terrain au tableau de bord
            </h3>
            <p className="text-ink-muted mb-6 max-w-xl mx-auto">
              Carnet Culture est conçu pour les producteurs qui travaillent les mains dans la terre.
              Saisie rapide, synchronisation automatique, données fiables.
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
