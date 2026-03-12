import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";
import FeatureSection from "@/components/features/FeatureSection";
import AppDemo from "@/components/home/AppDemo";

export const metadata = createMetadata({
  title: "Fonctionnalités du logiciel agricole",
  description:
    "Découvrez toutes les fonctionnalités de Carnet Culture : suivi des cultures, traçabilité des lots, gestion des récoltes, stock ferme, transformation PAM et plus encore.",
  path: "/fonctionnalites",
});

const useCaseLinks = [
  { label: "Suivi des cultures", href: "/fonctionnalites/suivi-cultures" },
  { label: "Traçabilité des lots", href: "/fonctionnalites/tracabilite-lots" },
  { label: "Gestion des récoltes", href: "/fonctionnalites/gestion-recoltes" },
  { label: "Gestion des stocks", href: "/fonctionnalites/gestion-stock-ferme" },
  { label: "Transformation PAM", href: "/fonctionnalites/transformation-pam" },
];

const features = [
  {
    title: "Semis",
    description:
      "Enregistrez vos sachets de graines, suivez vos semis en mini-mottes ou en caissettes, notez les levées, les repiquages, les pertes. Chaque lot de semis garde la trace de son origine, de son fournisseur et de son taux de réussite.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16" aria-hidden="true">
        <circle cx="32" cy="44" r="12" fill="#588157" opacity="0.15" />
        <path d="M32 16 C32 16, 20 28, 24 38 C26 42, 30 44, 32 44" stroke="#3A5A40" strokeWidth="2" fill="none" />
        <path d="M32 16 C32 16, 44 28, 40 38 C38 42, 34 44, 32 44" stroke="#588157" strokeWidth="2" fill="none" />
        <circle cx="32" cy="44" r="3" fill="#3A5A40" />
        <path d="M24 48 L40 48" stroke="#DDA15E" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Suivi parcelles",
    description:
      "Documentez le travail de sol, les plantations, les soins de rang, les cueillettes et les arrachages. Chaque rang sait ce qu'il contient, depuis quand, et ce qu'il a produit.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16" aria-hidden="true">
        <rect x="12" y="20" width="40" height="28" rx="4" fill="#588157" opacity="0.15" />
        <line x1="12" y1="32" x2="52" y2="32" stroke="#588157" strokeWidth="1.5" opacity="0.4" />
        <line x1="12" y1="40" x2="52" y2="40" stroke="#588157" strokeWidth="1.5" opacity="0.4" />
        <line x1="24" y1="20" x2="24" y2="48" stroke="#588157" strokeWidth="1.5" opacity="0.4" />
        <line x1="40" y1="20" x2="40" y2="48" stroke="#588157" strokeWidth="1.5" opacity="0.4" />
        <circle cx="18" cy="26" r="2.5" fill="#3A5A40" />
        <circle cx="32" cy="36" r="2.5" fill="#DDA15E" />
        <circle cx="46" cy="44" r="2.5" fill="#588157" />
      </svg>
    ),
  },
  {
    title: "Transformation",
    description:
      "Tracez chaque étape : tronçonnage, séchage, triage. Les entrées et sorties sont enregistrées, le stock de matière première est mis à jour automatiquement.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16" aria-hidden="true">
        <path d="M16 20 L32 32 L48 20" stroke="#3A5A40" strokeWidth="2" fill="none" />
        <path d="M32 32 L32 48" stroke="#3A5A40" strokeWidth="2" />
        <circle cx="16" cy="20" r="5" fill="#588157" opacity="0.3" />
        <circle cx="48" cy="20" r="5" fill="#588157" opacity="0.3" />
        <circle cx="32" cy="48" r="5" fill="#DDA15E" opacity="0.4" />
        <path d="M28 44 L36 44" stroke="#3A5A40" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Recettes et lots",
    description:
      "Créez vos recettes (tisanes, aromates, sels, sucres, sirops), produisez vos lots, ajustez les proportions si besoin. Chaque lot est numéroté et traçable.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16" aria-hidden="true">
        <rect x="18" y="14" width="28" height="36" rx="3" fill="#588157" opacity="0.12" stroke="#3A5A40" strokeWidth="1.5" />
        <line x1="24" y1="22" x2="40" y2="22" stroke="#3A5A40" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="24" y1="28" x2="36" y2="28" stroke="#588157" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        <line x1="24" y1="34" x2="38" y2="34" stroke="#588157" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        <line x1="24" y1="40" x2="34" y2="40" stroke="#DDA15E" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      </svg>
    ),
  },
  {
    title: "Stock plantes",
    description:
      "Le stock est calculé en temps réel à partir de toutes vos opérations. Six états possibles, de la plante fraîche à la plante triée. Alertes de stock bas configurables.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16" aria-hidden="true">
        <rect x="14" y="30" width="10" height="18" rx="2" fill="#3A5A40" opacity="0.7" />
        <rect x="27" y="22" width="10" height="26" rx="2" fill="#588157" opacity="0.6" />
        <rect x="40" y="26" width="10" height="22" rx="2" fill="#DDA15E" opacity="0.6" />
        <line x1="10" y1="48" x2="54" y2="48" stroke="#3A5A40" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Stock produits finis",
    description:
      "Suivez le nombre de sachets, pots et bouteilles disponibles par produit. Entrées et sorties automatiques à chaque production.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16" aria-hidden="true">
        <rect x="12" y="24" width="16" height="22" rx="3" fill="#588157" opacity="0.2" stroke="#3A5A40" strokeWidth="1.5" />
        <rect x="36" y="20" width="16" height="26" rx="3" fill="#DDA15E" opacity="0.2" stroke="#BC6C25" strokeWidth="1.5" />
        <rect x="16" y="28" width="8" height="4" rx="1" fill="#3A5A40" opacity="0.4" />
        <rect x="40" y="24" width="8" height="4" rx="1" fill="#BC6C25" opacity="0.4" />
      </svg>
    ),
  },
  {
    title: "Pilotage",
    description:
      "Tableau de bord avec vue sur vos parcelles, vos stocks, votre avancement par rapport au prévisionnel. Temps de travail cumulés par variété et par étape.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16" aria-hidden="true">
        <rect x="10" y="14" width="44" height="36" rx="4" fill="#588157" opacity="0.1" stroke="#3A5A40" strokeWidth="1.5" />
        <polyline points="16,40 24,30 32,34 40,22 48,26" stroke="#3A5A40" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="40" cy="22" r="3" fill="#DDA15E" />
      </svg>
    ),
  },
  {
    title: "Mobile terrain",
    description:
      "Une interface dédiée, ultra-simple, conçue pour saisir rapidement sur le terrain. Fonctionne hors connexion et synchronise automatiquement au retour en Wi-Fi. Aucune donnée n'est perdue.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16" aria-hidden="true">
        <rect x="18" y="8" width="28" height="48" rx="6" fill="#588157" opacity="0.12" stroke="#3A5A40" strokeWidth="2" />
        <circle cx="32" cy="50" r="2.5" fill="#3A5A40" opacity="0.5" />
        <rect x="24" y="16" width="16" height="4" rx="1.5" fill="#3A5A40" opacity="0.3" />
        <rect x="24" y="24" width="16" height="4" rx="1.5" fill="#588157" opacity="0.3" />
        <rect x="24" y="32" width="16" height="4" rx="1.5" fill="#DDA15E" opacity="0.4" />
        <rect x="24" y="40" width="16" height="4" rx="1.5" fill="#3A5A40" opacity="0.5" />
      </svg>
    ),
  },
  {
    title: "Export et traçabilité",
    description:
      "Exportez vos tableaux en CSV ou Excel. Remontez la traçabilité d'un lot jusqu'au sachet de graines d'origine. Toutes les données restent accessibles.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16" aria-hidden="true">
        <path d="M20 14 L38 14 L44 20 L44 50 L20 50 Z" fill="#588157" opacity="0.12" stroke="#3A5A40" strokeWidth="1.5" />
        <path d="M38 14 L38 20 L44 20" stroke="#3A5A40" strokeWidth="1.5" fill="none" />
        <line x1="26" y1="28" x2="38" y2="28" stroke="#3A5A40" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="26" y1="34" x2="36" y2="34" stroke="#588157" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        <line x1="26" y1="40" x2="34" y2="40" stroke="#DDA15E" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
        <path d="M32 44 L32 52 M28 48 L32 52 L36 48" stroke="#3A5A40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function FonctionnalitesPage() {
  return (
    <main className="pt-40 pb-20">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <ScrollReveal>
          <SectionTitle
            subtitle="Carnet Culture couvre l'ensemble du cycle de production d'une ferme PAM. Chaque module a été conçu pour être simple à utiliser au quotidien et fiable dans la durée."
          >
            Fonctionnalités
          </SectionTitle>
        </ScrollReveal>

        {/* Use case quick links */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {useCaseLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-block text-sm font-medium text-sage-500 bg-sage-100/60 border border-sage-200/60 rounded-full px-4 py-2 hover:bg-sage-200/60 hover:border-sage-300/60 transition-colors duration-300"
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </ScrollReveal>

        <div className="divide-y divide-sage-100/40">
          {features.map((feature, i) => (
            <FeatureSection
              key={i}
              title={feature.title}
              description={feature.description}
              index={i}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>

      <AppDemo />
    </main>
  );
}
