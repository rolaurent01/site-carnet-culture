interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export default function Card({ children, className = "", hoverable = true }: CardProps) {
  return (
    <div
      className={`
        bg-cream-50 rounded-2xl p-6 md:p-8
        border border-sage-100/60
        shadow-sm
        ${hoverable ? "transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:border-sage-200" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
