"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { HomeHero } from "@/components/hero/home-hero";
import { useLanguage } from "@/components/i18n/language-provider";
import { Section } from "@/components/layout/section";
import { ProjectGrid } from "@/components/projects/project-grid";
import { projects } from "@/lib/data/projects";
import { localizedSkills, siteContent } from "@/lib/i18n/content";

export function HomeContent() {
  const { language, t } = useLanguage();
  const skills = localizedSkills[language];

  return (
    <main>
      <HomeHero />

      <Section
        eyebrow={t(siteContent.home.projects.eyebrow)}
        title={t(siteContent.home.projects.title)}
        action={
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-sky-200 transition hover:text-white"
          >
            {t(siteContent.home.projects.action)}
            <ArrowRight className="h-4 w-4" />
          </Link>
        }
      >
        <ProjectGrid projects={projects} compact />
      </Section>

      <Section
        eyebrow={t(siteContent.home.skills.eyebrow)}
        title={t(siteContent.home.skills.title)}
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="glass-panel rounded-lg p-5 transition duration-300 hover:-translate-y-1 hover:border-sky-200/40 hover:shadow-glow"
            >
              <div className="mb-3 inline-flex rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium uppercase tracking-[0.18em] text-sky-200">
                {skill.category}
              </div>
              <h3 className="text-lg font-semibold text-white">{skill.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{skill.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
