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

const testimonials = [
  {
    quote:
      "On était trois à noter nos cueillettes sur des bouts de papier, puis on recopiait tout dans Excel le soir. On perdait des données chaque semaine.",
    author: "Marie",
    role: "Herboriste paysanne en Drôme",
  },
  {
    quote:
      "Le jour où j'ai dû retrouver la traçabilité d'un lot de tisane pour un contrôle, j'ai passé une demi-journée dans mes classeurs. Plus jamais.",
    author: "Antoine",
    role: "Producteur-transformateur dans le Lot",
  },
];

const profiles = [
  {
    title: "Vous jonglez entre 30 variétés et 4 parcelles",
    text: "Lavande, thym, sauge, mélisse, menthe… chaque plante a son calendrier, son séchage, son rendement. Vous avez besoin d'un outil qui comprend cette complexité sans vous la renvoyer à la figure.",
    scene:
      "Mardi matin, 7h. Vous partez cueillir la mélisse avant que le soleil ne tape. En trois gestes sur le téléphone, la cueillette est enregistrée — variété, parcelle, poids. Pas besoin de le noter sur un bout de papier.",
  },
  {
    title: "Vous séchez, triez et mettez en sachet vous-même",
    text: "Du champ au produit fini, tout passe par vos mains. Tronçonnage, séchage, triage, mélange, conditionnement. Chaque étape transforme votre stock — et c'est là que ça se complique avec Excel.",
    scene:
      "Jeudi après-midi au séchoir. Vous sortez les claies de thym, vous pesez, vous triez. À chaque étape, le stock se met à jour tout seul. Plus besoin de recalculer.",
  },
  {
    title: "Vous êtes deux ou trois, chacun sur le terrain",
    text: "Julie cueille pendant que Thomas trie au séchoir. Chacun saisit depuis son téléphone, et le soir tout est à jour au bureau sans se concerter. Pas besoin de se passer un cahier.",
    scene:
      "Vendredi soir, vous ouvrez l'ordinateur. Tout ce que l'équipe a fait dans la semaine est là, classé, à jour. Vous pouvez préparer les commandes et planifier la semaine suivante.",
  },
  {
    title: "Vos fichiers Excel commencent à craquer",
    text: "Un fichier pour le plan de culture, un pour le stock, un pour les lots, un pour les commandes. Des copier-coller entre onglets, des formules qui cassent, des lignes qu'on oublie de mettre à jour.",
    scene:
      "Vous connaissez ce moment : il faut retrouver combien il reste de lavande triée, et vous passez dix minutes à naviguer entre trois fichiers. Avec Carnet Culture, c'est une ligne sur l'écran.",
  },
  {
    title: "On vous demande de la traçabilité — et ça vous fait peur",
    text: "Numéro de lot, origine des graines, fournisseur, dates de récolte et de transformation. Tout ça doit être documenté. Mais vous n'avez ni le temps ni l'envie de remplir des formulaires.",
    scene:
      "Bonne nouvelle : la traçabilité se construit toute seule au fil de vos saisies quotidiennes. Le jour du contrôle, vous tapez un numéro de lot et tout remonte — du sachet de graines jusqu'au produit fini.",
  },
];

const notForYou = [
  "Carnet Culture ne fait pas de comptabilité",
  "Pas de gestion commerciale ni de facturation",
  "Pas de fonctions inutiles qui compliquent l'interface",
  "Juste le suivi de production, bien fait",
];

export default function PourQuiPage() {
  return (
    <main className="pt-28 pb-20">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <ScrollReveal>
          <SectionTitle subtitle="Si votre quotidien ressemble à ce qui suit, on a construit cet outil pour vous.">
            Carnet Culture est fait pour vous si...
          </SectionTitle>
        </ScrollReveal>

        {/* Opening testimonial */}
        <ScrollReveal>
          <blockquote className="relative bg-sage-500/[0.04] border-l-4 border-amber-400 rounded-r-2xl px-6 py-5 md:px-8 md:py-6 mb-14">
            <p className="text-ink italic text-lg leading-relaxed">
              &laquo;&nbsp;{testimonials[0].quote}&nbsp;&raquo;
            </p>
            <footer className="mt-3 text-sm text-ink-muted">
              — <strong className="text-ink font-medium">{testimonials[0].author}</strong>, {testimonials[0].role}
            </footer>
          </blockquote>
        </ScrollReveal>

        {/* Profiles with scenes */}
        <div className="space-y-8">
          {profiles.map((profile, i) => (
            <ScrollReveal key={i} stagger={Math.min(i + 1, 5)}>
              <Card className="space-y-4">
                <h3 className="font-display text-xl md:text-2xl font-semibold text-ink">
                  {profile.title}
                </h3>
                <p className="text-ink-muted leading-relaxed">{profile.text}</p>
                <div className="bg-cream-100 rounded-xl px-5 py-4 border-l-3 border-sage-300">
                  <p className="text-ink text-sm leading-relaxed italic">
                    {profile.scene}
                  </p>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Second testimonial */}
        <ScrollReveal>
          <blockquote className="relative bg-sage-500/[0.04] border-l-4 border-amber-400 rounded-r-2xl px-6 py-5 md:px-8 md:py-6 mt-14 mb-14">
            <p className="text-ink italic text-lg leading-relaxed">
              &laquo;&nbsp;{testimonials[1].quote}&nbsp;&raquo;
            </p>
            <footer className="mt-3 text-sm text-ink-muted">
              — <strong className="text-ink font-medium">{testimonials[1].author}</strong>, {testimonials[1].role}
            </footer>
          </blockquote>
        </ScrollReveal>

        {/* What we DON'T do */}
        <ScrollReveal>
          <div className="bg-cream-50 rounded-2xl border border-sage-100/60 p-6 md:p-8 mb-14">
            <h3 className="font-display text-xl font-semibold text-ink mb-5">
              Ce que Carnet Culture ne fait pas
            </h3>
            <p className="text-ink-muted text-sm mb-5 leading-relaxed">
              Et c&apos;est volontaire. On préfère faire peu de choses, mais les faire bien.
            </p>
            <ul className="space-y-3">
              {notForYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg viewBox="0 0 20 20" className="w-5 h-5 flex-shrink-0 mt-0.5 text-ink-muted" aria-hidden="true">
                    <line x1="5" y1="5" x2="15" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <line x1="15" y1="5" x2="5" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <span className="text-ink text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="text-center">
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
