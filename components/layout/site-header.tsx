"use client";

import { ChevronDown, FolderKanban, ListTree } from "lucide-react";
import Link from "next/link";
import { LanguageToggle } from "@/components/i18n/language-toggle";
import { useLanguage } from "@/components/i18n/language-provider";
import { projects } from "@/lib/data/projects";
import { siteContent } from "@/lib/i18n/content";
import { resolveLocalizedText } from "@/lib/i18n/resolve";

const navLinkClass =
  "whitespace-nowrap rounded-full px-2.5 py-1.5 text-xs font-medium text-slate-300 transition hover:bg-white/10 hover:text-white sm:px-3 sm:text-sm";

const projectHref = "/projects";

export function SiteHeader() {
  const { language, t } = useLanguage();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0 text-xs font-semibold tracking-[0.18em] text-white sm:text-sm">
          {t(siteContent.nav.brand)}
        </Link>
        <div className="flex min-w-0 items-center gap-2">
          <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
            {siteContent.nav.items.map((item) =>
              item.href === projectHref ? (
                <div key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    className="inline-flex whitespace-nowrap rounded-full px-2.5 py-1.5 text-xs font-medium text-slate-300 transition hover:bg-white/10 hover:text-white sm:px-3 sm:text-sm"
                  >
                    <span className="inline-flex items-center gap-1">
                      {t(item.label)}
                      <ChevronDown className="h-3.5 w-3.5 transition group-hover:rotate-180 group-focus-within:rotate-180" />
                    </span>
                  </Link>

                  <div className="invisible absolute right-0 top-full z-50 w-72 translate-y-2 pt-3 opacity-0 transition duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    <div className="glass-panel overflow-hidden rounded-lg p-2 shadow-glow">
                      <Link
                        href="/projects"
                        className="flex gap-3 rounded-md p-3 transition hover:bg-white/10 focus:bg-white/10 focus:outline-none"
                      >
                        <span className="mt-0.5 rounded-md border border-white/10 bg-white/5 p-2 text-sky-200">
                          <ListTree className="h-4 w-4" />
                        </span>
                        <span>
                          <span className="block text-sm font-semibold text-white">
                            {t(siteContent.nav.projectsMenu.overview)}
                          </span>
                          <span className="mt-1 block text-xs leading-5 text-slate-300">
                            {t(siteContent.nav.projectsMenu.overviewDescription)}
                          </span>
                        </span>
                      </Link>

                      <div className="my-2 h-px bg-white/10" />

                      {projects.length > 0 ? (
                        <div className="max-h-72 overflow-y-auto">
                          {projects.map((project) => (
                            <Link
                              key={project.slug}
                              href={`/projects/${project.slug}`}
                              className="block rounded-md px-3 py-2 transition hover:bg-white/10 focus:bg-white/10 focus:outline-none"
                            >
                              <span className="block text-sm font-medium text-white">
                                {resolveLocalizedText(project.title, language)}
                              </span>
                              <span className="mt-1 block truncate text-xs text-slate-400">
                                {resolveLocalizedText(project.description, language)}
                              </span>
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <div className="flex gap-3 rounded-md px-3 py-3">
                          <span className="mt-0.5 rounded-md border border-white/10 bg-white/5 p-2 text-slate-400">
                            <FolderKanban className="h-4 w-4" />
                          </span>
                          <span>
                            <span className="block text-sm font-semibold text-white">
                              {t(siteContent.nav.projectsMenu.emptyTitle)}
                            </span>
                            <span className="mt-1 block text-xs leading-5 text-slate-400">
                              {t(siteContent.nav.projectsMenu.emptyDescription)}
                            </span>
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={item.href} href={item.href} className={navLinkClass}>
                  {t(item.label)}
                </Link>
              ),
            )}
          </div>
          <LanguageToggle />
        </div>
      </nav>
    </header>
  );
}
