import { createMetadata } from "@/lib/metadata";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

export const metadata = createMetadata({
  title: "Suivi des cultures agricoles",
  description:
    "Suivez vos semis, plantations, cueillettes et récoltes parcelle par parcelle. Carnet Culture centralise le suivi de vos cultures de plantes aromatiques et médicinales.",
  path: "/fonctionnalites/suivi-cultures",
});

const steps = [
  {
    icon: "🌱",
    title: "Semis et plantations",
    text: "Enregistrez vos sachets de graines, suivez vos semis en mini-mottes ou caissettes, notez les levées et les repiquages. Chaque lot garde la trace de son origine et de son fournisseur.",
  },
  {
    icon: "🗺️",
    title: "Suivi parcelle par parcelle",
    text: "Documentez le travail de sol, les plantations, les soins de rang, les cueillettes et les arrachages. Chaque rang sait ce qu'il contient, depuis quand, et ce qu'il a produit.",
  },
  {
    icon: "📱",
    title: "Saisie terrain mobile",
    text: "Saisissez directement sur le terrain depuis votre téléphone, même sans connexion. Les données se synchronisent automatiquement au retour en Wi-Fi.",
  },
  {
    icon: "📊",
    title: "Vue d'ensemble et pilotage",
    text: "Tableau de bord avec vue sur vos parcelles, votre avancement par rapport au prévisionnel, et temps de travail cumulés par variété et par étape.",
  },
];

export default function SuiviCulturesPage() {
  return (
    <main className="pt-header pb-20">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <ScrollReveal>
          <SectionTitle
            subtitle="Centralisez le suivi de toutes vos cultures dans un seul outil. De la graine à la récolte, chaque étape est enregistrée et traçable."
          >
            Suivi des cultures agricoles
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
              Pour qui ?
            </h3>
            <p className="text-ink-muted mb-6 max-w-xl mx-auto">
              Producteurs PAM, maraîchers, petites fermes diversifiées — tous ceux qui veulent remplacer
              leurs fichiers Excel par un outil simple et fiable pour suivre leurs cultures au quotidien.
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
