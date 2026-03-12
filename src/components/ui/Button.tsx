import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-sage-500 text-cream-50 hover:bg-sage-600 active:bg-sage-700 shadow-md hover:shadow-lg",
  secondary:
    "bg-amber-400 text-sage-900 hover:bg-amber-500 active:bg-amber-600 shadow-md hover:shadow-lg",
  outline:
    "bg-transparent border-2 border-sage-500 text-sage-500 hover:bg-sage-500 hover:text-cream-50",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-5 py-2 text-sm rounded-xl",
  md: "px-7 py-3 text-base rounded-2xl",
  lg: "px-9 py-4 text-lg rounded-2xl",
};

export default function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
  external = false,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all duration-300 ease-out hover:scale-[1.03] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-sage-400";
  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
