"use client";

import { useLanguage } from "@/components/i18n/language-provider";
import { Section } from "@/components/layout/section";
import { ProjectGrid } from "@/components/projects/project-grid";
import { projects } from "@/lib/data/projects";
import { siteContent } from "@/lib/i18n/content";

export function ProjectsContent() {
  const { t } = useLanguage();

  return (
    <main className="pt-24">
      <Section
        eyebrow={t(siteContent.projectsPage.eyebrow)}
        title={t(siteContent.projectsPage.title)}
        description={t(siteContent.projectsPage.description)}
      >
        <ProjectGrid projects={projects} />
      </Section>
    </main>
  );
}
