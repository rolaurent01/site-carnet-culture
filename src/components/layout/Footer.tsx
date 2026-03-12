import Link from "next/link";
import Image from "next/image";
import { SITE_NAME, SITE_TAGLINE, NAV_LINKS, FOOTER_LEGAL_LINKS } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-sage-500 text-sage-100" role="contentinfo">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Logo + baseline */}
          <div>
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt={`${SITE_NAME} — logo`}
                width={120}
                height={34}
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sage-200 text-sm leading-relaxed max-w-xs">
              {SITE_TAGLINE}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display text-sm font-semibold text-cream-50 uppercase tracking-wider mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sage-200 text-sm hover:text-cream-50 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-display text-sm font-semibold text-cream-50 uppercase tracking-wider mb-5">
              Informations
            </h3>
            <ul className="space-y-3">
              {FOOTER_LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sage-200 text-sm hover:text-cream-50 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-sage-400/30 text-center">
          <p className="text-sage-300 text-xs">
            © {year} {SITE_NAME}. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
