import { createMetadata } from "@/lib/metadata";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import ProfileIllustration from "./ProfileIllustrations";

export const metadata = createMetadata({
  title: "Pour qui",
  description:
    "Carnet Culture est conçu pour les fermes de plantes aromatiques et médicinales, les ateliers de transformation et les petites équipes terrain.",
  path: "/pour-qui",
});

const testimonial = {
  quote:
    "Avant on faisait tout papier et c'était très fastidieux de devoir tout refaire sur un tableau Excel, maintenant on fait tout directement sur le téléphone et cela s'intègre directement dans notre ordinateur accessible partout.",
  author: "Véronique",
  role: "Paysanne à Cerdon",
};

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
    <main className="pt-28 pb-20 relative overflow-hidden">
      {/* Decorative background foliage */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none -z-10" aria-hidden="true">
        <svg viewBox="0 0 500 500" fill="none" className="w-full h-full animate-float-slow">
          <path d="M420 80 C380 120, 340 100, 300 140 C260 180, 280 220, 240 260" stroke="#3A5A40" strokeWidth="2" opacity="0.04" fill="none" />
          <path d="M350 60 C340 90, 320 80, 310 110 C300 140, 310 160, 290 180" stroke="#588157" strokeWidth="1.5" opacity="0.04" fill="none" />
          <ellipse cx="380" cy="120" rx="40" ry="25" fill="#3A5A40" opacity="0.03" transform="rotate(-30 380 120)" />
          <ellipse cx="320" cy="180" rx="35" ry="20" fill="#588157" opacity="0.03" transform="rotate(15 320 180)" />
          <ellipse cx="400" cy="200" rx="50" ry="30" fill="#7DA27D" opacity="0.025" transform="rotate(-20 400 200)" />
          <ellipse cx="280" cy="100" rx="30" ry="18" fill="#3A5A40" opacity="0.03" transform="rotate(25 280 100)" />
        </svg>
      </div>
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] pointer-events-none -z-10" aria-hidden="true">
        <svg viewBox="0 0 400 400" fill="none" className="w-full h-full animate-float">
          <ellipse cx="80" cy="300" rx="60" ry="35" fill="#588157" opacity="0.025" transform="rotate(10 80 300)" />
          <ellipse cx="150" cy="250" rx="45" ry="25" fill="#3A5A40" opacity="0.03" transform="rotate(-15 150 250)" />
          <path d="M60 320 C80 280, 100 300, 120 260" stroke="#3A5A40" strokeWidth="1.5" opacity="0.04" fill="none" />
        </svg>
      </div>
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <ScrollReveal>
          <SectionTitle subtitle="Si votre quotidien ressemble à ce qui suit, on a construit cet outil pour vous.">
            Carnet Culture est fait pour vous si...
          </SectionTitle>
        </ScrollReveal>

        {/* Testimonial */}
        <ScrollReveal>
          <blockquote className="relative bg-sage-500/[0.04] border-l-4 border-amber-400 rounded-r-2xl px-6 py-5 md:px-8 md:py-6 mb-14">
            <p className="text-ink italic text-lg leading-relaxed">
              &laquo;&nbsp;{testimonial.quote}&nbsp;&raquo;
            </p>
            <footer className="mt-3 text-sm text-ink-muted">
              — <strong className="text-ink font-medium">{testimonial.author}</strong>, {testimonial.role}
            </footer>
          </blockquote>
        </ScrollReveal>

        {/* Profiles with scenes */}
        <div className="space-y-8">
          {profiles.map((profile, i) => (
            <ScrollReveal key={i} stagger={Math.min(i + 1, 5)}>
              <Card className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-ink">
                    {profile.title}
                  </h3>
                  <ProfileIllustration index={i} />
                </div>
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
