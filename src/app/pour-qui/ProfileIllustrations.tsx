const illustrations = [
  // 0 — Bouquet de plantes (lavande, mélisse, thym)
  function Varieties() {
    return (
      <svg viewBox="0 0 80 80" fill="none" aria-hidden="true" className="w-full h-full">
        {/* Lavande — tige centrale */}
        <path d="M40 70 C40 55, 40 40, 40 28" stroke="#3A5A40" strokeWidth="1.8" strokeLinecap="round" />
        <ellipse cx="40" cy="26" rx="2.5" ry="4" fill="#588157" opacity="0.8" />
        <ellipse cx="40" cy="20" rx="2" ry="3.5" fill="#588157" opacity="0.7" />
        <ellipse cx="40" cy="15" rx="1.5" ry="3" fill="#7DA27D" opacity="0.6" />
        {/* Mélisse — tige gauche */}
        <path d="M40 70 C38 58, 30 45, 24 32" stroke="#3A5A40" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M28 42 C22 38, 18 36, 16 32 C20 34, 24 38, 28 42" fill="#588157" opacity="0.7" />
        <path d="M24 34 C18 30, 15 27, 14 23 C17 26, 21 30, 24 34" fill="#7DA27D" opacity="0.6" />
        <path d="M30 50 C24 46, 20 44, 18 40 C22 42, 26 46, 30 50" fill="#588157" opacity="0.6" />
        {/* Thym — tige droite */}
        <path d="M40 70 C42 58, 50 45, 56 32" stroke="#3A5A40" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="54" cy="36" r="2" fill="#7DA27D" opacity="0.6" />
        <circle cx="58" cy="30" r="1.8" fill="#588157" opacity="0.5" />
        <circle cx="52" cy="28" r="1.5" fill="#7DA27D" opacity="0.5" />
        <circle cx="56" cy="23" r="1.8" fill="#588157" opacity="0.6" />
        <circle cx="50" cy="44" r="2.2" fill="#7DA27D" opacity="0.5" />
        {/* Sol / racines */}
        <ellipse cx="40" cy="72" rx="14" ry="3" fill="#8B6914" opacity="0.15" />
      </svg>
    );
  },

  // 1 — Claies de séchage avec herbes suspendues
  function Drying() {
    return (
      <svg viewBox="0 0 80 80" fill="none" aria-hidden="true" className="w-full h-full">
        {/* Barre supérieure */}
        <line x1="12" y1="16" x2="68" y2="16" stroke="#3A5A40" strokeWidth="2" strokeLinecap="round" />
        {/* Ficelles */}
        <line x1="24" y1="16" x2="24" y2="28" stroke="#8B6914" strokeWidth="1" opacity="0.5" />
        <line x1="40" y1="16" x2="40" y2="30" stroke="#8B6914" strokeWidth="1" opacity="0.5" />
        <line x1="56" y1="16" x2="56" y2="26" stroke="#8B6914" strokeWidth="1" opacity="0.5" />
        {/* Bouquets suspendus — gauche */}
        <path d="M24 28 C22 34, 20 42, 19 50" stroke="#588157" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M24 28 C24 36, 24 44, 24 52" stroke="#3A5A40" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M24 28 C26 34, 28 42, 29 50" stroke="#7DA27D" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M22 36 C19 34, 17 33, 16 30" stroke="#588157" strokeWidth="0.8" opacity="0.5" />
        {/* Bouquets suspendus — centre */}
        <path d="M40 30 C38 38, 36 46, 35 56" stroke="#588157" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M40 30 C40 40, 40 50, 40 58" stroke="#3A5A40" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M40 30 C42 38, 44 46, 45 56" stroke="#7DA27D" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M42 40 C45 38, 47 37, 49 34" stroke="#588157" strokeWidth="0.8" opacity="0.5" />
        {/* Bouquets suspendus — droite */}
        <path d="M56 26 C54 32, 53 38, 52 46" stroke="#7DA27D" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M56 26 C56 34, 56 42, 56 48" stroke="#3A5A40" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M56 26 C58 32, 59 38, 60 46" stroke="#588157" strokeWidth="1.2" strokeLinecap="round" />
        {/* Petites feuilles éparses — mouvement de séchage */}
        <path d="M30 60 C28 58, 27 56, 28 54" stroke="#7DA27D" strokeWidth="0.8" opacity="0.3" fill="none" />
        <path d="M50 55 C52 53, 53 51, 52 49" stroke="#588157" strokeWidth="0.8" opacity="0.3" fill="none" />
        {/* Vapeur subtile */}
        <path d="M38 62 C37 58, 39 56, 38 52" stroke="#A8C1A8" strokeWidth="0.8" opacity="0.25" strokeLinecap="round" fill="none" />
        <path d="M42 64 C43 60, 41 58, 42 54" stroke="#A8C1A8" strokeWidth="0.8" opacity="0.2" strokeLinecap="round" fill="none" />
      </svg>
    );
  },

  // 2 — Équipe terrain (deux silhouettes reliées par une feuille)
  function Team() {
    return (
      <svg viewBox="0 0 80 80" fill="none" aria-hidden="true" className="w-full h-full">
        {/* Personne gauche */}
        <circle cx="22" cy="24" r="6" fill="#3A5A40" opacity="0.2" />
        <path d="M22 30 C22 38, 16 42, 16 52" stroke="#3A5A40" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M22 30 C22 38, 28 42, 28 52" stroke="#3A5A40" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M22 36 L14 44" stroke="#3A5A40" strokeWidth="1.5" strokeLinecap="round" />
        {/* Téléphone dans la main gauche */}
        <rect x="10" y="44" width="6" height="10" rx="1.5" stroke="#DDA15E" strokeWidth="1.2" fill="#DDA15E" opacity="0.3" />
        <line x1="12" y1="47" x2="15" y2="47" stroke="#DDA15E" strokeWidth="0.8" opacity="0.6" />
        <line x1="12" y1="49" x2="14" y2="49" stroke="#DDA15E" strokeWidth="0.8" opacity="0.6" />
        {/* Personne droite */}
        <circle cx="58" cy="24" r="6" fill="#3A5A40" opacity="0.2" />
        <path d="M58 30 C58 38, 52 42, 52 52" stroke="#3A5A40" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M58 30 C58 38, 64 42, 64 52" stroke="#3A5A40" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M58 36 L66 44" stroke="#3A5A40" strokeWidth="1.5" strokeLinecap="round" />
        {/* Téléphone dans la main droite */}
        <rect x="64" y="44" width="6" height="10" rx="1.5" stroke="#DDA15E" strokeWidth="1.2" fill="#DDA15E" opacity="0.3" />
        <line x1="65" y1="47" x2="68" y2="47" stroke="#DDA15E" strokeWidth="0.8" opacity="0.6" />
        <line x1="65" y1="49" x2="67" y2="49" stroke="#DDA15E" strokeWidth="0.8" opacity="0.6" />
        {/* Lien feuille/tige entre les deux */}
        <path d="M28 38 C35 32, 45 32, 52 38" stroke="#588157" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M40 33 C37 28, 35 25, 36 20 C38 24, 39 28, 40 33" fill="#588157" opacity="0.6" />
        <path d="M40 33 C43 28, 45 25, 44 20 C42 24, 41 28, 40 33" fill="#7DA27D" opacity="0.5" />
        {/* Petits points de données qui circulent */}
        <circle cx="33" cy="35" r="1.5" fill="#DDA15E" opacity="0.5" />
        <circle cx="40" cy="33" r="1.5" fill="#DDA15E" opacity="0.6" />
        <circle cx="47" cy="35" r="1.5" fill="#DDA15E" opacity="0.5" />
      </svg>
    );
  },

  // 3 — Grille Excel brisée avec feuille qui pousse à travers
  function ExcelBreak() {
    return (
      <svg viewBox="0 0 80 80" fill="none" aria-hidden="true" className="w-full h-full">
        {/* Grille Excel déformée */}
        <rect x="14" y="14" width="52" height="52" rx="3" stroke="#A8C1A8" strokeWidth="1" opacity="0.3" />
        {/* Lignes horizontales — certaines brisées */}
        <line x1="14" y1="27" x2="36" y2="27" stroke="#A8C1A8" strokeWidth="0.8" opacity="0.3" />
        <line x1="44" y1="28" x2="66" y2="27" stroke="#A8C1A8" strokeWidth="0.8" opacity="0.2" />
        <line x1="14" y1="40" x2="34" y2="40" stroke="#A8C1A8" strokeWidth="0.8" opacity="0.3" />
        <line x1="46" y1="41" x2="66" y2="40" stroke="#A8C1A8" strokeWidth="0.8" opacity="0.15" />
        <line x1="14" y1="53" x2="32" y2="53" stroke="#A8C1A8" strokeWidth="0.8" opacity="0.2" />
        <line x1="48" y1="54" x2="66" y2="53" stroke="#A8C1A8" strokeWidth="0.8" opacity="0.15" />
        {/* Lignes verticales brisées */}
        <line x1="31" y1="14" x2="31" y2="36" stroke="#A8C1A8" strokeWidth="0.8" opacity="0.3" />
        <line x1="49" y1="14" x2="49" y2="34" stroke="#A8C1A8" strokeWidth="0.8" opacity="0.25" />
        {/* Fissure centrale */}
        <path d="M36 14 L38 28 L42 36 L38 48 L40 66" stroke="#8B6914" strokeWidth="1" opacity="0.3" strokeLinecap="round" fill="none" />
        {/* Plante qui pousse à travers la fissure */}
        <path d="M40 66 C40 56, 40 48, 40 36" stroke="#3A5A40" strokeWidth="2" strokeLinecap="round" />
        <path d="M40 48 C35 42, 32 40, 30 36 C34 39, 37 43, 40 48" fill="#588157" />
        <path d="M40 42 C45 36, 48 34, 50 30 C47 33, 43 37, 40 42" fill="#588157" />
        <path d="M40 36 C37 30, 35 27, 34 22 C36 26, 38 30, 40 36" fill="#7DA27D" opacity="0.8" />
        <path d="M40 36 C43 30, 45 27, 47 23 C44 27, 42 31, 40 36" fill="#7DA27D" opacity="0.7" />
        {/* Petite fleur au sommet */}
        <circle cx="40" cy="20" r="3" fill="#DDA15E" opacity="0.4" />
        <circle cx="40" cy="20" r="1.5" fill="#DDA15E" opacity="0.6" />
      </svg>
    );
  },

  // 4 — Traçabilité : graine → plante → sachet
  function Traceability() {
    return (
      <svg viewBox="0 0 80 80" fill="none" aria-hidden="true" className="w-full h-full">
        {/* Graine */}
        <ellipse cx="12" cy="40" rx="4" ry="5.5" fill="#8B6914" opacity="0.4" transform="rotate(-15 12 40)" />
        <path d="M12 37 C13 36, 13 35, 12 34" stroke="#8B6914" strokeWidth="0.8" opacity="0.5" />
        {/* Flèche pointillée 1 */}
        <line x1="19" y1="40" x2="28" y2="40" stroke="#A8C1A8" strokeWidth="1.2" strokeDasharray="2 2" />
        <path d="M27 37 L30 40 L27 43" stroke="#A8C1A8" strokeWidth="1" strokeLinecap="round" fill="none" />
        {/* Plante */}
        <path d="M40 52 C40 44, 40 38, 40 30" stroke="#3A5A40" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M40 42 C36 38, 34 36, 33 32 C35 35, 38 38, 40 42" fill="#588157" />
        <path d="M40 36 C44 32, 46 30, 47 26 C45 29, 42 33, 40 36" fill="#588157" />
        <path d="M40 30 C38 26, 37 24, 38 20 C38 23, 39 26, 40 30" fill="#7DA27D" opacity="0.7" />
        <ellipse cx="40" cy="54" rx="6" ry="2" fill="#8B6914" opacity="0.15" />
        {/* Flèche pointillée 2 */}
        <line x1="50" y1="40" x2="59" y2="40" stroke="#A8C1A8" strokeWidth="1.2" strokeDasharray="2 2" />
        <path d="M58 37 L61 40 L58 43" stroke="#A8C1A8" strokeWidth="1" strokeLinecap="round" fill="none" />
        {/* Sachet / produit fini */}
        <path d="M64 30 L64 52 C64 54, 66 55, 68 55 L72 55 C74 55, 76 54, 76 52 L76 30 Z" fill="#FAF5E9" stroke="#3A5A40" strokeWidth="1.2" />
        <path d="M63 30 L70 26 L77 30" stroke="#3A5A40" strokeWidth="1.2" fill="#DDA15E" opacity="0.3" />
        <line x1="67" y1="36" x2="73" y2="36" stroke="#A8C1A8" strokeWidth="0.8" />
        <line x1="67" y1="40" x2="72" y2="40" stroke="#A8C1A8" strokeWidth="0.8" />
        <line x1="67" y1="44" x2="71" y2="44" stroke="#A8C1A8" strokeWidth="0.8" />
        {/* Petit check de validation */}
        <circle cx="70" cy="50" r="3" fill="#588157" opacity="0.2" />
        <path d="M68 50 L69.5 51.5 L72 48.5" stroke="#3A5A40" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    );
  },
];

export default function ProfileIllustration({ index }: { index: number }) {
  const Illustration = illustrations[index];
  if (!Illustration) return null;
  return (
    <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 opacity-60">
      <Illustration />
    </div>
  );
}
