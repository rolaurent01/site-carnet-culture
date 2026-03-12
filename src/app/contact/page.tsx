import { createMetadata } from "@/lib/metadata";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contactez l'équipe Carnet Culture pour organiser une démonstration de l'application de gestion PAM.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="pt-28 pb-20">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <ScrollReveal>
          <SectionTitle subtitle="Laissez-nous vos coordonnées, nous vous recontacterons pour organiser une présentation de l'application.">
            Envie d&apos;en savoir plus ?
          </SectionTitle>
        </ScrollReveal>

        <ScrollReveal>
          <ContactForm />
        </ScrollReveal>
      </div>
    </main>
  );
}
