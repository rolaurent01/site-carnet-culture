interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionTitle({
  children,
  subtitle,
  centered = true,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`${centered ? "text-center" : ""} mb-12 md:mb-16 ${className}`}>
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-ink leading-tight tracking-tight">
        {children}
      </h2>
      <div
        className={`mt-5 h-1 w-16 rounded-full bg-amber-400 ${centered ? "mx-auto" : ""}`}
        aria-hidden="true"
      />
      {subtitle && (
        <p className="mt-6 text-lg md:text-xl text-ink-muted max-w-2xl leading-relaxed ${centered ? 'mx-auto' : ''}">
          {subtitle}
        </p>
      )}
    </div>
  );
}
