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
            Prêt à structurer votre activité ?
          </h2>
          <p className="text-ink-muted text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Découvrez comment Carnet Culture peut simplifier la gestion quotidienne de votre
            ferme PAM.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={APP_URL} external size="lg" variant="primary">
              Accéder à l&apos;application
            </Button>
            <Button href="/contact" size="lg" variant="outline">
              Nous contacter
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
