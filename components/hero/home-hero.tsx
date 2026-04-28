"use client";

import { ArrowRight, Github, Mail } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { EmailLink } from "@/components/contact/email-link";
import { useLanguage } from "@/components/i18n/language-provider";
import { siteContent } from "@/lib/i18n/content";

const heroLinks = [
  { labelKey: "github", href: "https://github.com/HermaeusMorea", icon: Github },
] as const;

export function HomeHero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[92vh] overflow-hidden pt-24">
      <div className="relative z-10 mx-auto flex min-h-[calc(92vh-6rem)] max-w-6xl items-center px-4 pb-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-sky-100 backdrop-blur"
          >
            {t(siteContent.hero.eyebrow)}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
            className="flex flex-wrap gap-3"
          >
            {heroLinks.map((item, index) => {
              const Icon = item.icon;
              const isPrimary = index === 0;
              return (
                <Link
                  key={item.labelKey}
                  href={item.href}
                  className={
                    isPrimary
                      ? "inline-flex items-center gap-2 rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-ink-950 transition hover:-translate-y-0.5 hover:bg-sky-100"
                      : "inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-sky-200/50 hover:bg-white/15"
                  }
                >
                  <Icon className="h-4 w-4" />
                  {t(siteContent.hero.links[item.labelKey])}
                  {isPrimary ? <ArrowRight className="h-4 w-4" /> : null}
                </Link>
              );
            })}
            <EmailLink className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-sky-200/50 hover:bg-white/15">
              <Mail className="h-4 w-4" />
              {t(siteContent.hero.links.contact)}
            </EmailLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
