"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, APP_URL } from "@/lib/constants";
import Button from "@/components/ui/Button";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 top-0 z-30 bg-cream-200/98 backdrop-blur-sm md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Menu de navigation"
    >
      <div className="flex flex-col items-center justify-center min-h-screen gap-8 px-8">
        {NAV_LINKS.map((link, i) => {
          const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`menu-item-enter font-display text-2xl font-semibold transition-colors duration-300 ${
                isActive
                  ? "text-sage-500 underline decoration-amber-400 decoration-2 underline-offset-8"
                  : "text-ink hover:text-sage-500"
              }`}
              style={{ animationDelay: `${i * 80}ms` }}
              aria-current={isActive ? "page" : undefined}
            >
              {link.label}
            </Link>
          );
        })}
        <div className="menu-item-enter mt-4" style={{ animationDelay: `${NAV_LINKS.length * 80}ms` }}>
          <Button href={APP_URL} external size="lg" variant="primary">
            Accéder à l&apos;application
          </Button>
        </div>
      </div>
    </div>
  );
}
