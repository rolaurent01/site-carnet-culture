# Carnet Culture — Site vitrine

Site vitrine pour **Carnet Culture**, application de gestion pour les fermes de plantes aromatiques et médicinales (PAM).

## Stack technique

- **Next.js 16** avec App Router
- **TypeScript**
- **Tailwind CSS v4** (palette custom : sage, crème, ambre)
- **Polices** : Fraunces (display) + DM Sans (body) via `next/font/google`
- Aucune dépendance UI externe — animations en CSS pur + Intersection Observer

## Lancer en local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Structure du projet

```
src/
├── app/                          # Pages (App Router)
│   ├── page.tsx                  # Accueil
│   ├── fonctionnalites/          # Page fonctionnalités
│   ├── pour-qui/                 # Page pour qui
│   ├── contact/                  # Page contact / démo
│   ├── mentions-legales/         # Mentions légales
│   ├── politique-confidentialite/# Politique de confidentialité
│   ├── sitemap.ts                # Sitemap XML dynamique
│   └── robots.ts                 # Robots.txt
├── components/
│   ├── layout/                   # Header, Footer, MobileMenu
│   ├── ui/                       # Button, SectionTitle, Card
│   ├── home/                     # Sections de la page d'accueil
│   ├── features/                 # FeatureSection
│   ├── contact/                  # ContactForm
│   └── shared/                   # ScrollReveal, GrainOverlay
└── lib/
    ├── constants.ts              # URLs, config
    └── metadata.ts               # Helpers SEO
```

## Configuration

Les URLs sont centralisées dans `src/lib/constants.ts` :

- **Site** : `https://carnet-culture.fr`
- **Application** : `https://app.carnet-culture.fr`

## Déployer sur Vercel

1. Connecter le repo GitHub à [vercel.com](https://vercel.com)
2. Framework preset : Next.js (détecté automatiquement)
3. Déployer — aucune variable d'environnement requise

## Build

```bash
npm run build
```

Toutes les pages sont pré-rendues en statique pour des performances optimales.
