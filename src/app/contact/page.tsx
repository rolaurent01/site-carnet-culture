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

const reassurance = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-sage-400" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </svg>
    ),
    text: "Présentation gratuite de 20 minutes",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-sage-400" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
    text: "On vous montre l'outil avec vos plantes",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-sage-400" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    text: "Sans engagement, sans spam",
  },
];

export default function ContactPage() {
  return (
    <main className="pt-40 pb-20">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <ScrollReveal>
          <SectionTitle subtitle="Laissez-nous vos coordonnées, nous vous recontacterons pour organiser une présentation de l'application.">
            Envie d&apos;en savoir plus ?
          </SectionTitle>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            {reassurance.map((item, i) => (
              <div key={i} className="flex items-center gap-2.5">
                {item.icon}
                <span className="text-sm text-ink-muted font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <ContactForm />
        </ScrollReveal>
      </div>
    </main>
  );
}
