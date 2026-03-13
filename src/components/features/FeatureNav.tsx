"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Suivi des cultures", href: "/fonctionnalites/suivi-cultures" },
  { label: "Traçabilité des lots", href: "/fonctionnalites/tracabilite-lots" },
  { label: "Gestion des récoltes", href: "/fonctionnalites/gestion-recoltes" },
  { label: "Gestion des stocks", href: "/fonctionnalites/gestion-stock-ferme" },
  { label: "Transformation PAM", href: "/fonctionnalites/transformation-pam" },
];

export default function FeatureNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Fonctionnalités" className="mb-10">
      <Link
        href="/fonctionnalites"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-sage-400 hover:text-sage-500 transition-colors mb-4"
      >
        <span aria-hidden="true">&larr;</span> Toutes les fonctionnalités
      </Link>
      <div className="flex flex-wrap gap-2">
        {links.map((link) => {
          const isCurrent = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium rounded-full px-3.5 py-1.5 border transition-colors duration-200 ${
                isCurrent
                  ? "bg-sage-500 text-cream-50 border-sage-500"
                  : "bg-cream-50 text-ink-muted border-sage-100 hover:border-sage-300 hover:text-sage-500"
              }`}
              aria-current={isCurrent ? "page" : undefined}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
