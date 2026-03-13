import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

export const metadata = createMetadata({
  title: "Traçabilité des lots agricoles",
  description:
    "Remontez la traçabilité d'un lot jusqu'au sachet de graines d'origine. Carnet Culture assure une traçabilité complète pour les producteurs PAM et transformateurs.",
  path: "/fonctionnalites/tracabilite-lots",
});

const steps = [
  {
    icon: "🏷️",
    title: "Lots numérotés et traçables",
    text: "Chaque lot de production est numéroté automatiquement. Créez vos recettes (tisanes, aromates, sels, sirops), produisez vos lots et ajustez les proportions si besoin.",
  },
  {
    icon: "🔗",
    title: "Traçabilité de bout en bout",
    text: "Remontez la chaîne d'un produit fini jusqu'au sachet de graines d'origine. Plus besoin de chercher pendant une heure dans vos fichiers : tout est lié automatiquement.",
  },
  {
    icon: "📋",
    title: "Export pour les contrôles",
    text: "Exportez vos tableaux en CSV ou Excel. Les données sont structurées et prêtes pour vos contrôles qualité ou certifications.",
  },
  {
    icon: "🔒",
    title: "Données fiables et pérennes",
    text: "Toutes les opérations sont horodatées et conservées. Aucune donnée n'est perdue, même en cas de coupure réseau grâce à la synchronisation hors-ligne.",
  },
];

export default function TracabilitePage() {
  return (
    <main className="pt-header pb-20">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <Link
          href="/fonctionnalites"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-sage-400 hover:text-sage-500 transition-colors mb-8"
        >
          <span aria-hidden="true">&larr;</span> Fonctionnalités
        </Link>
        <ScrollReveal>
          <SectionTitle
            subtitle="De la graine au produit fini, chaque étape est enregistrée. Remontez instantanément l'historique complet d'un lot en quelques clics."
          >
            Traçabilité des lots agricoles
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
              Simplifiez vos contrôles
            </h3>
            <p className="text-ink-muted mb-6 max-w-xl mx-auto">
              Fini le stress des contrôles de traçabilité. Avec Carnet Culture, retrouvez l'origine
              de n'importe quel lot en quelques secondes.
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
