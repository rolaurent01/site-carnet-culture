import ScrollReveal from "@/components/shared/ScrollReveal";

interface FeatureSectionProps {
  title: string;
  description: string;
  index: number;
  icon: React.ReactNode;
}

export default function FeatureSection({ title, description, index, icon }: FeatureSectionProps) {
  const reversed = index % 2 === 1;

  return (
    <ScrollReveal>
      <div
        className={`flex flex-col ${
          reversed ? "md:flex-row-reverse" : "md:flex-row"
        } items-center gap-8 md:gap-14 py-12 md:py-16`}
      >
        {/* Icon / visual */}
        <div className="flex-shrink-0 w-28 h-28 md:w-36 md:h-36 rounded-3xl bg-cream-50 border border-sage-100/60 shadow-sm flex items-center justify-center">
          {icon}
        </div>

        {/* Content */}
        <div className={`flex-1 ${reversed ? "md:text-right" : ""}`}>
          <div className={`flex items-center gap-3 mb-3 ${reversed ? "md:justify-end" : ""}`}>
            <span className="w-7 h-7 rounded-full bg-sage-500 text-cream-50 text-xs font-bold flex items-center justify-center flex-shrink-0">
              {index + 1}
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink">
              {title}
            </h3>
          </div>
          <p className="text-ink-muted leading-relaxed text-base md:text-lg max-w-xl">
            {description}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}
