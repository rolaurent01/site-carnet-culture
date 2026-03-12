import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";

const steps = [
  {
    number: "1",
    title: "Sur le terrain",
    text: "Saisissez vos opérations depuis votre téléphone, même sans connexion.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" aria-hidden="true">
        <rect x="14" y="4" width="20" height="40" rx="4" fill="#588157" opacity="0.15" />
        <rect x="14" y="4" width="20" height="40" rx="4" stroke="#3A5A40" strokeWidth="2" fill="none" />
        <circle cx="24" cy="38" r="2" fill="#3A5A40" />
        <rect x="18" y="12" width="12" height="3" rx="1" fill="#588157" opacity="0.5" />
        <rect x="18" y="18" width="8" height="3" rx="1" fill="#DDA15E" opacity="0.7" />
        <rect x="18" y="24" width="10" height="3" rx="1" fill="#588157" opacity="0.3" />
      </svg>
    ),
  },
  {
    number: "2",
    title: "Synchronisation",
    text: "Vos données se synchronisent automatiquement dès que vous êtes en Wi-Fi.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" aria-hidden="true">
        <path d="M24 8 L24 40" stroke="#3A5A40" strokeWidth="2" strokeDasharray="4 3" />
        <circle cx="24" cy="24" r="6" fill="#588157" opacity="0.2" />
        <circle cx="24" cy="24" r="3" fill="#3A5A40" />
        <path d="M12 18 C12 12, 24 8, 24 8 C24 8, 36 12, 36 18" stroke="#588157" strokeWidth="2" fill="none" opacity="0.4" />
        <path d="M16 22 C16 18, 24 14, 24 14 C24 14, 32 18, 32 22" stroke="#588157" strokeWidth="2" fill="none" opacity="0.6" />
        <path d="M20 26 C20 23, 24 20, 24 20 C24 20, 28 23, 28 26" stroke="#3A5A40" strokeWidth="2" fill="none" />
      </svg>
    ),
  },
  {
    number: "3",
    title: "Au bureau",
    text: "Consultez, analysez et pilotez votre activité sur votre ordinateur.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" aria-hidden="true">
        <rect x="4" y="8" width="40" height="28" rx="3" fill="#588157" opacity="0.15" />
        <rect x="4" y="8" width="40" height="28" rx="3" stroke="#3A5A40" strokeWidth="2" fill="none" />
        <rect x="18" y="36" width="12" height="4" rx="1" fill="#3A5A40" opacity="0.3" />
        <rect x="8" y="14" width="14" height="8" rx="2" fill="#DDA15E" opacity="0.3" />
        <rect x="8" y="24" width="32" height="2" rx="1" fill="#588157" opacity="0.2" />
        <rect x="8" y="28" width="24" height="2" rx="1" fill="#588157" opacity="0.15" />
        <rect x="26" y="14" width="12" height="8" rx="2" fill="#588157" opacity="0.2" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-cream-100">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <ScrollReveal>
          <SectionTitle subtitle="Un flux de travail pensé pour le quotidien d'une ferme PAM.">
            Simple comme : terrain, sync, bureau.
          </SectionTitle>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <ScrollReveal key={i} stagger={i + 1}>
              <div className="text-center">
                <div className="mx-auto mb-5 w-20 h-20 rounded-full bg-cream-50 border border-sage-100 flex items-center justify-center shadow-sm">
                  {step.icon}
                </div>
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-full bg-sage-500 text-cream-50 text-xs font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {step.title}
                  </h3>
                </div>
                <p className="text-ink-muted text-sm leading-relaxed max-w-xs mx-auto">
                  {step.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
