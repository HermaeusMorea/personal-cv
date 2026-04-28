"use client";

import { ArrowLeft, CheckCircle2, ExternalLink, ImageIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/i18n/language-provider";
import { Section } from "@/components/layout/section";
import { siteContent } from "@/lib/i18n/content";
import { resolveLocalizedText } from "@/lib/i18n/resolve";
import type { Project, ProjectOutcomeBullet } from "@/lib/types";

type ProjectDetailContentProps = {
  project: Project;
};

function isLinkedOutcomeBullet(
  bullet: ProjectOutcomeBullet,
): bullet is Extract<ProjectOutcomeBullet, { href: string }> {
  return typeof bullet === "object" && bullet !== null && "href" in bullet;
}

export function ProjectDetailContent({ project }: ProjectDetailContentProps) {
  const { language, t } = useLanguage();
  const title = resolveLocalizedText(project.title, language);
  const description = resolveLocalizedText(project.description, language);

  return (
    <main className="pt-24">
      <Section
        title={title}
        description={description}
        action={
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-sky-200 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            {t(siteContent.projectsPage.detailBack)}
          </Link>
        }
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_0.42fr]">
          <article className="space-y-5">
            <div className="glass-panel rounded-lg p-5 sm:p-6">
              <ul className="space-y-4">
                {project.highlights.map((highlight) => (
                  <li
                    key={resolveLocalizedText(highlight.text, language)}
                    className="flex gap-3 text-sm leading-6 text-slate-300"
                  >
                    <CheckCircle2
                      className={
                        highlight.tone === "note"
                          ? "mt-0.5 h-4 w-4 shrink-0 text-white/80"
                          : "mt-0.5 h-4 w-4 shrink-0 text-emerald-200"
                      }
                    />
                    <span>{resolveLocalizedText(highlight.text, language)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {project.sections?.map((section) => (
              <section key={resolveLocalizedText(section.title, language)} className="glass-panel rounded-lg p-5 sm:p-6">
                <h2 className="text-xl font-semibold text-white">
                  {resolveLocalizedText(section.title, language)}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {resolveLocalizedText(section.body, language)}
                </p>
                {section.bullets && section.bullets.length > 0 ? (
                  <ul className="mt-5 space-y-3">
                    {section.bullets.map((bullet) => (
                      <li key={resolveLocalizedText(bullet, language)} className="flex gap-3 text-sm leading-6 text-slate-300">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-200" />
                        <span>{resolveLocalizedText(bullet, language)}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            {project.media && project.media.length > 0 ? (
              <section className="glass-panel rounded-lg p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <span className="rounded-md border border-white/10 bg-white/5 p-2 text-sky-200">
                    <ImageIcon className="h-4 w-4" />
                  </span>
                  <h2 className="text-xl font-semibold text-white">
                    {t(siteContent.projectsPage.detailMedia)}
                  </h2>
                </div>
                <div className="mt-5 space-y-5">
                  {project.media.map((item) => (
                    <figure key={item.src} className="overflow-hidden rounded-md border border-white/10 bg-white/[0.03]">
                      <Image
                        src={item.src}
                        alt={resolveLocalizedText(item.alt, language)}
                        width={item.width}
                        height={item.height}
                        className="h-auto w-full"
                      />
                      <figcaption className="border-t border-white/10 p-4">
                        <h3 className="text-sm font-semibold text-white">
                          {resolveLocalizedText(item.title, language)}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-slate-300">
                          {resolveLocalizedText(item.description, language)}
                        </p>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </section>
            ) : project.mediaNote ? (
              <section className="glass-panel rounded-lg p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <span className="rounded-md border border-white/10 bg-white/5 p-2 text-sky-200">
                    <ImageIcon className="h-4 w-4" />
                  </span>
                  <h2 className="text-xl font-semibold text-white">
                    {t(siteContent.projectsPage.detailMedia)}
                  </h2>
                </div>
                <div className="mt-5 rounded-md border border-dashed border-white/15 bg-white/[0.03] p-5 text-sm leading-7 text-slate-300">
                  {resolveLocalizedText(project.mediaNote, language)}
                </div>
              </section>
            ) : null}

            {project.outcomes?.map((outcome) => (
              <section key={resolveLocalizedText(outcome.title, language)} className="glass-panel rounded-lg p-5 sm:p-6">
                <h2 className="text-xl font-semibold text-white">
                  {resolveLocalizedText(outcome.title, language)}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {resolveLocalizedText(outcome.body, language)}
                </p>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {outcome.bullets.map((bullet) => (
                    <li
                      key={isLinkedOutcomeBullet(bullet) ? `${bullet.href}-${resolveLocalizedText(bullet.text, language)}` : resolveLocalizedText(bullet, language)}
                      className="rounded-md border border-white/10 bg-white/[0.03] p-3 text-sm leading-6 text-slate-300"
                    >
                      {isLinkedOutcomeBullet(bullet) ? (
                        <>
                          <Link href={bullet.href} className="font-medium text-sky-200 transition hover:text-white">
                            {resolveLocalizedText(bullet.linkLabel, language)}
                          </Link>
                          {resolveLocalizedText(bullet.text, language)}
                        </>
                      ) : (
                        resolveLocalizedText(bullet, language)
                      )}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 rounded-md border border-emerald-200/20 bg-emerald-200/10 p-4 text-sm leading-7 text-emerald-50">
                  {resolveLocalizedText(outcome.conclusion, language)}
                </p>
              </section>
            ))}
          </article>

          <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            <div className="glass-panel rounded-lg p-5">
              <h2 className="text-sm font-semibold text-white">{t(siteContent.projectsPage.detailAtAGlance)}</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {project.links.length > 0 ? (
              <div className="glass-panel rounded-lg p-5">
                <h2 className="text-sm font-semibold text-white">{t(siteContent.projectsPage.detailLinks)}</h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/10 px-3 py-2 text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:border-sky-200/50 hover:bg-white/15"
                    >
                      {resolveLocalizedText(link.label, language)}
                      <ExternalLink className="h-3.5 w-3.5" />
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </aside>
        </div>
      </Section>
    </main>
  );
}
