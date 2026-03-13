import { createMetadata } from "@/lib/metadata";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

export const metadata = createMetadata({
  title: "Transformation de plantes aromatiques et médicinales",
  description:
    "Tracez chaque étape de transformation de vos plantes : tronçonnage, séchage, triage. Carnet Culture gère vos recettes, lots et stocks de matières premières.",
  path: "/fonctionnalites/transformation-pam",
});

const steps = [
  {
    icon: "✂️",
    title: "Étapes de transformation",
    text: "Tracez chaque étape : tronçonnage, séchage, triage. Les entrées et sorties sont enregistrées, le stock de matière première est mis à jour automatiquement.",
  },
  {
    icon: "📝",
    title: "Recettes et formulations",
    text: "Créez vos recettes de tisanes, aromates, sels, sucres et sirops. Définissez les proportions, ajustez-les si besoin. Chaque recette est réutilisable.",
  },
  {
    icon: "🏷️",
    title: "Production par lots",
    text: "Produisez vos lots à partir de vos recettes. Chaque lot est numéroté, daté et traçable. Les stocks de matières premières et de produits finis sont mis à jour en temps réel.",
  },
  {
    icon: "📊",
    title: "Rendements et pertes",
    text: "Suivez les taux de rendement à chaque étape de transformation. Identifiez les pertes et optimisez vos processus au fil des saisons.",
  },
];

export default function TransformationPage() {
  return (
    <main className="pt-header pb-20">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <ScrollReveal>
          <SectionTitle
            subtitle="De la plante fraîche au produit fini emballé, suivez chaque étape de transformation. Recettes, lots, rendements — tout est centralisé."
          >
            Transformation PAM
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
              Pensé pour les ateliers artisanaux
            </h3>
            <p className="text-ink-muted mb-6 max-w-xl mx-auto">
              Carnet Culture est conçu pour les petites structures qui transforment elles-mêmes
              leurs plantes. Simple, fiable, sans fonctionnalités superflues.
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
