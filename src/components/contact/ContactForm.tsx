"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { APP_URL } from "@/lib/constants";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-cream-50 rounded-2xl border border-sage-100 p-8 md:p-12 text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-sage-100 flex items-center justify-center">
          <svg viewBox="0 0 32 32" className="w-8 h-8" aria-hidden="true">
            <path d="M10 16l4 4 8-8" stroke="#3A5A40" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        </div>
        <h3 className="font-display text-2xl font-semibold text-ink mb-3">
          Message envoyé !
        </h3>
        <p className="text-ink-muted leading-relaxed">
          Merci pour votre message. Nous vous répondrons personnellement sous 48h.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="lg:col-span-2 bg-cream-50 rounded-2xl border border-sage-100 p-6 md:p-10 space-y-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">
              Nom <span className="text-amber-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full px-4 py-3 rounded-xl border border-sage-100 bg-cream-200 text-ink placeholder:text-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent transition-all duration-300"
              placeholder="Votre nom"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
              Email <span className="text-amber-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-4 py-3 rounded-xl border border-sage-100 bg-cream-200 text-ink placeholder:text-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent transition-all duration-300"
              placeholder="votre@email.fr"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-ink mb-2">
              Téléphone <span className="text-ink-muted text-xs">(optionnel)</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="w-full px-4 py-3 rounded-xl border border-sage-100 bg-cream-200 text-ink placeholder:text-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent transition-all duration-300"
              placeholder="06 12 34 56 78"
            />
          </div>
          <div>
            <label htmlFor="structure" className="block text-sm font-medium text-ink mb-2">
              Structure / Nom de la ferme
            </label>
            <input
              id="structure"
              name="structure"
              type="text"
              className="w-full px-4 py-3 rounded-xl border border-sage-100 bg-cream-200 text-ink placeholder:text-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent transition-all duration-300"
              placeholder="Les Jardins de..."
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">
            Message <span className="text-amber-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full px-4 py-3 rounded-xl border border-sage-100 bg-cream-200 text-ink placeholder:text-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent transition-all duration-300 resize-y"
            placeholder="Décrivez votre activité et vos besoins..."
          />
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Button type="submit" variant="primary" size="lg">
            Envoyer
          </Button>
          <p className="text-xs text-ink-muted">
            Pas de spam, pas d&apos;engagement. Nous vous répondrons personnellement sous 48h.
          </p>
        </div>
      </form>

      {/* Sidebar */}
      <div className="space-y-6">
        <div className="bg-cream-50 rounded-2xl border border-sage-100 p-6 md:p-8">
          <h3 className="font-display text-lg font-semibold text-ink mb-3">
            Vous avez déjà un compte ?
          </h3>
          <p className="text-ink-muted text-sm leading-relaxed mb-5">
            Connectez-vous directement à l&apos;application pour retrouver vos données.
          </p>
          <Button href={APP_URL} external variant="secondary" size="md" className="w-full">
            Accéder à l&apos;application
          </Button>
        </div>
      </div>
    </div>
  );
}
