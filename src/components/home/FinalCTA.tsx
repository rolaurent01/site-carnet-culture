import ScrollReveal from "@/components/shared/ScrollReveal";
import Button from "@/components/ui/Button";
import { APP_URL } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-cream-200 via-sage-50 to-cream-200 opacity-60" />
      </div>

      <div className="relative mx-auto max-w-3xl px-5 md:px-8 text-center">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-ink leading-tight tracking-tight mb-6">
            Marre de galérer avec Excel ?
          </h2>
          <p className="text-ink-muted text-lg leading-relaxed mb-4 max-w-xl mx-auto">
            On vous montre l&apos;outil en 20 minutes, avec vos plantes et vos cas concrets.
            Gratuit, sans engagement.
          </p>
          <p className="text-ink-muted/60 text-sm mb-10">
            Pas de spam, pas de relance commerciale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg" variant="primary">
              Réserver ma démo gratuite
            </Button>
            <Button href={APP_URL} external size="lg" variant="outline">
              Accéder à l&apos;application
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
