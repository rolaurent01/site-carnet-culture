import { createMetadata } from "@/lib/metadata";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";

export const metadata = createMetadata({
  title: "Mentions légales",
  description: "Mentions légales du site Carnet Culture.",
  path: "/mentions-legales",
});

export default function MentionsLegalesPage() {
  return (
    <main className="pt-40 pb-20">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <ScrollReveal>
          <SectionTitle>Mentions légales</SectionTitle>
        </ScrollReveal>

        <ScrollReveal>
          <div className="prose prose-sage max-w-none space-y-8 text-ink-light leading-relaxed">
            <section>
              <h3 className="font-display text-xl font-semibold text-ink mb-3">
                Éditeur du site
              </h3>
              <p>
                <strong>Nom :</strong> [Nom à compléter]<br />
                <strong>Adresse :</strong> [Adresse à compléter]<br />
                <strong>SIRET :</strong> [SIRET à compléter]<br />
                <strong>Email :</strong> [email à compléter]
              </p>
            </section>

            <section>
              <h3 className="font-display text-xl font-semibold text-ink mb-3">
                Directeur de la publication
              </h3>
              <p>[Nom à compléter]</p>
            </section>

            <section>
              <h3 className="font-display text-xl font-semibold text-ink mb-3">
                Hébergeur
              </h3>
              <p>
                Vercel Inc.<br />
                440 N Barranca Ave #4133<br />
                Covina, CA 91723, USA<br />
                <a
                  href="https://vercel.com"
                  className="text-sage-500 hover:text-sage-600 underline decoration-sage-200 underline-offset-2 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  vercel.com
                </a>
              </p>
            </section>

            <section>
              <h3 className="font-display text-xl font-semibold text-ink mb-3">
                Propriété intellectuelle
              </h3>
              <p>
                L&apos;ensemble du contenu de ce site (textes, images, graphismes, logo, icônes)
                est la propriété exclusive de l&apos;éditeur, sauf mention contraire. Toute
                reproduction, représentation, modification, publication ou adaptation de tout ou
                partie des éléments du site est interdite sans autorisation écrite préalable.
              </p>
            </section>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
