import { createMetadata } from "@/lib/metadata";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

export const metadata = createMetadata({
  title: "Fonctionnalités à venir",
  description:
    "Découvrez les prochaines fonctionnalités de Carnet Culture : module apiculture pour le suivi des ruches et du miel, et module maraîchage pour la gestion des cultures légumières.",
  path: "/fonctionnalites-a-venir",
});

const upcomingFeatures = [
  {
    icon: (
      <svg viewBox="0 0 80 80" className="w-20 h-20" aria-hidden="true">
        <path
          d="M40 12 C28 12, 16 22, 16 36 C16 50, 28 58, 40 64 C52 58, 64 50, 64 36 C64 22, 52 12, 40 12Z"
          fill="#DDA15E"
          opacity="0.2"
          stroke="#BC6C25"
          strokeWidth="2"
        />
        <line x1="40" y1="20" x2="40" y2="56" stroke="#BC6C25" strokeWidth="1.5" opacity="0.4" />
        <line x1="24" y1="30" x2="56" y2="30" stroke="#BC6C25" strokeWidth="1.5" opacity="0.3" />
        <line x1="22" y1="38" x2="58" y2="38" stroke="#BC6C25" strokeWidth="1.5" opacity="0.3" />
        <line x1="24" y1="46" x2="56" y2="46" stroke="#BC6C25" strokeWidth="1.5" opacity="0.3" />
        <circle cx="32" cy="34" r="3" fill="#DDA15E" opacity="0.6" />
        <circle cx="48" cy="42" r="3" fill="#DDA15E" opacity="0.6" />
      </svg>
    ),
    title: "Apiculture et miel",
    badge: "En conception",
    description:
      "Un module dédié au suivi de vos ruches et de votre production de miel. Pensé pour les apiculteurs qui veulent structurer leur activité sans complexité.",
    details: [
      {
        title: "Suivi des ruches",
        text: "Enregistrez vos ruchers, vos ruches, et documentez chaque visite : état de la colonie, présence de la reine, réserves, traitements.",
      },
      {
        title: "Récoltes de miel",
        text: "Tracez vos récoltes par ruche et par miellée. Suivez les quantités extraites, les mises en pot et les rendements par saison.",
      },
      {
        title: "Stock et traçabilité",
        text: "Gérez votre stock de miel (en fûts, en pots) et remontez la traçabilité d'un lot jusqu'à la ruche et la période de récolte.",
      },
      {
        title: "Calendrier apicole",
        text: "Planifiez vos interventions, traitements et transhumances. Gardez une vue d'ensemble sur l'état de votre cheptel.",
      },
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 80 80" className="w-20 h-20" aria-hidden="true">
        <rect x="12" y="28" width="56" height="36" rx="4" fill="#588157" opacity="0.12" stroke="#3A5A40" strokeWidth="2" />
        <line x1="12" y1="44" x2="68" y2="44" stroke="#588157" strokeWidth="1.5" opacity="0.3" />
        <line x1="12" y1="52" x2="68" y2="52" stroke="#588157" strokeWidth="1.5" opacity="0.3" />
        <line x1="30" y1="28" x2="30" y2="64" stroke="#588157" strokeWidth="1.5" opacity="0.3" />
        <line x1="50" y1="28" x2="50" y2="64" stroke="#588157" strokeWidth="1.5" opacity="0.3" />
        <path d="M22 28 C22 28, 22 16, 26 12" stroke="#3A5A40" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M40 28 C40 28, 40 14, 44 10" stroke="#588157" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M58 28 C58 28, 58 18, 54 14" stroke="#3A5A40" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="26" cy="11" r="3" fill="#588157" opacity="0.4" />
        <circle cx="44" cy="9" r="3.5" fill="#3A5A40" opacity="0.4" />
        <circle cx="54" cy="13" r="2.5" fill="#588157" opacity="0.4" />
      </svg>
    ),
    title: "Maraîchage",
    badge: "En réflexion",
    description:
      "Un module adapté aux maraîchers et aux fermes légumières. Planification des rotations, suivi des planches et gestion des récoltes hebdomadaires.",
    details: [
      {
        title: "Planification des planches",
        text: "Organisez vos planches de culture, planifiez vos rotations et vos successions. Visualisez l'occupation de votre terrain sur la saison.",
      },
      {
        title: "Suivi des itinéraires techniques",
        text: "Documentez chaque étape : préparation du sol, semis, repiquage, paillage, irrigation, désherbage. Par planche et par culture.",
      },
      {
        title: "Récoltes et paniers",
        text: "Enregistrez vos récoltes par légume et par planche. Suivez les volumes pour préparer vos paniers, marchés ou livraisons.",
      },
      {
        title: "Bilan de saison",
        text: "Analysez vos rendements par culture, le temps passé par planche, et identifiez ce qui a bien fonctionné pour la saison suivante.",
      },
    ],
  },
];

export default function FonctionnalitesAVenirPage() {
  return (
    <main className="pt-40 pb-20">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <ScrollReveal>
          <SectionTitle
            subtitle="Carnet Culture grandit avec vos besoins. Voici les prochains modules en préparation, conçus avec la même philosophie : simple, fiable, pensé pour le terrain."
          >
            Fonctionnalités à venir
          </SectionTitle>
        </ScrollReveal>

        <div className="space-y-20">
          {upcomingFeatures.map((feature, featureIndex) => (
            <ScrollReveal key={featureIndex}>
              <div className="bg-cream-50 rounded-3xl border border-sage-100/60 overflow-hidden">
                {/* Header */}
                <div className="p-8 pb-0 flex flex-col sm:flex-row items-start gap-6">
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink">
                        {feature.title}
                      </h2>
                      <span className="inline-block text-xs font-semibold uppercase tracking-wider text-amber-600 bg-amber-400/20 border border-amber-400/30 rounded-full px-3 py-1">
                        {feature.badge}
                      </span>
                    </div>
                    <p className="text-ink-muted leading-relaxed text-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {feature.details.map((detail, i) => (
                    <ScrollReveal key={i} stagger={i + 1}>
                      <div className="bg-white/60 rounded-2xl p-5 border border-sage-100/40">
                        <h3 className="font-display text-base font-semibold text-ink mb-2">
                          {detail.title}
                        </h3>
                        <p className="text-ink-muted text-sm leading-relaxed">
                          {detail.text}
                        </p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal>
          <div className="mt-20 bg-sage-500/5 border border-sage-200/40 rounded-2xl p-8 text-center">
            <h3 className="font-display text-2xl font-semibold text-ink mb-3">
              Une fonctionnalité vous intéresse ?
            </h3>
            <p className="text-ink-muted mb-6 max-w-xl mx-auto">
              Ces modules sont en cours de conception. Contactez-nous pour nous faire part de vos besoins
              et influencer les priorités de développement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="md" variant="primary">
                Nous contacter
              </Button>
              <Button href="/fonctionnalites" size="md" variant="outline">
                Fonctionnalités actuelles
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
