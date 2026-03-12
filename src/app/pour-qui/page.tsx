import { createMetadata } from "@/lib/metadata";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata = createMetadata({
  title: "Pour qui",
  description:
    "Carnet Culture est conçu pour les fermes de plantes aromatiques et médicinales, les ateliers de transformation et les petites équipes terrain.",
  path: "/pour-qui",
});

const profiles = [
  {
    emoji: "🌿",
    title: "Vous cultivez des plantes aromatiques et médicinales",
    text: "Que vous soyez en PPAM, en herboristerie paysanne ou en cueillette sauvage, l'application suit votre réalité : des variétés multiples, des parcours de transformation différents selon les plantes, un stock à trois dimensions.",
  },
  {
    emoji: "🏭",
    title: "Vous transformez et conditionnez vous-même",
    text: "Séchage, triage, mélange, mise en sachet : si vous gérez un atelier de transformation, Carnet Culture vous permet de tracer chaque étape sans paperasse.",
  },
  {
    emoji: "👥",
    title: "Vous êtes une petite équipe",
    text: "2 à 5 personnes, chacun avec son téléphone sur le terrain et un ordinateur partagé au bureau. L'application est pensée pour ce fonctionnement.",
  },
  {
    emoji: "📊",
    title: "Vous travaillez encore avec des fichiers Excel",
    text: "Plusieurs fichiers, plusieurs onglets, des copier-coller entre le plan de culture et le suivi de stock. Si vous sentez que ça ne tient plus, c'est le bon moment.",
  },
  {
    emoji: "🔗",
    title: "Vous avez besoin de traçabilité",
    text: "Numéros de lot, origine des plantes, fournisseurs, dates. La traçabilité se construit naturellement au fil de vos saisies, sans travail supplémentaire.",
  },
];

export default function PourQuiPage() {
  return (
    <main className="pt-28 pb-20">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <ScrollReveal>
          <SectionTitle subtitle="Découvrez si l'application correspond à votre situation.">
            Carnet Culture est fait pour vous si...
          </SectionTitle>
        </ScrollReveal>

        <div className="space-y-6">
          {profiles.map((profile, i) => (
            <ScrollReveal key={i} stagger={i + 1}>
              <Card className="flex flex-col md:flex-row items-start gap-5 md:gap-6">
                <span className="text-4xl flex-shrink-0" aria-hidden="true">
                  {profile.emoji}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink mb-2">
                    {profile.title}
                  </h3>
                  <p className="text-ink-muted leading-relaxed">{profile.text}</p>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center mt-14">
            <p className="text-ink-muted text-lg mb-6">
              Vous vous reconnaissez ? Parlons-en.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Demander une démo
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
