import { createMetadata } from "@/lib/metadata";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";

export const metadata = createMetadata({
  title: "Politique de confidentialité",
  description: "Politique de confidentialité du site Carnet Culture.",
  path: "/politique-confidentialite",
});

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="pt-header pb-20">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <ScrollReveal>
          <SectionTitle>Politique de confidentialité</SectionTitle>
        </ScrollReveal>

        <ScrollReveal>
          <div className="prose prose-sage max-w-none space-y-8 text-ink-light leading-relaxed">
            <section>
              <h3 className="font-display text-xl font-semibold text-ink mb-3">
                Responsable du traitement
              </h3>
              <p>[Nom et coordonnées à compléter]</p>
            </section>

            <section>
              <h3 className="font-display text-xl font-semibold text-ink mb-3">
                Données collectées
              </h3>
              <p>
                Les données personnelles collectées via le formulaire de contact sont :
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2 text-ink-muted">
                <li>Nom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone (optionnel)</li>
                <li>Nom de la structure / ferme</li>
                <li>Contenu du message</li>
              </ul>
            </section>

            <section>
              <h3 className="font-display text-xl font-semibold text-ink mb-3">
                Finalité du traitement
              </h3>
              <p>
                Les données collectées sont utilisées uniquement pour répondre aux demandes
                d&apos;information et organiser des démonstrations de l&apos;application Carnet
                Culture.
              </p>
            </section>

            <section>
              <h3 className="font-display text-xl font-semibold text-ink mb-3">
                Base légale
              </h3>
              <p>
                Le traitement des données repose sur le consentement de la personne concernée
                (article 6.1.a du RGPD).
              </p>
            </section>

            <section>
              <h3 className="font-display text-xl font-semibold text-ink mb-3">
                Durée de conservation
              </h3>
              <p>[Durée à compléter — ex. : 3 ans à compter du dernier contact]</p>
            </section>

            <section>
              <h3 className="font-display text-xl font-semibold text-ink mb-3">
                Vos droits
              </h3>
              <p>
                Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles :
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2 text-ink-muted">
                <li>Droit d&apos;accès</li>
                <li>Droit de rectification</li>
                <li>Droit de suppression</li>
                <li>Droit à la portabilité</li>
                <li>Droit d&apos;opposition</li>
              </ul>
              <p className="mt-3">
                Pour exercer ces droits, contactez-nous à : [email DPO à compléter]
              </p>
            </section>

            <section>
              <h3 className="font-display text-xl font-semibold text-ink mb-3">
                Cookies
              </h3>
              <p>
                Ce site n&apos;utilise aucun cookie de tracking ou de mesure d&apos;audience.
                Seuls des cookies techniques strictement nécessaires au fonctionnement du site
                peuvent être utilisés.
              </p>
            </section>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
