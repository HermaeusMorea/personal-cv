"use client";

import { FolderKanban } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "@/components/i18n/language-provider";
import { ProjectCard } from "@/components/projects/project-card";
import { siteContent } from "@/lib/i18n/content";
import type { Project } from "@/lib/types";

type ProjectGridProps = {
  projects: Project[];
  compact?: boolean;
};

export function ProjectGrid({ projects, compact = false }: ProjectGridProps) {
  const { t } = useLanguage();

  if (projects.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="glass-panel flex min-h-56 flex-col items-center justify-center rounded-lg px-6 py-12 text-center"
      >
        <div className="mb-5 rounded-full border border-white/10 bg-white/5 p-4">
          <FolderKanban className="h-7 w-7 text-sky-200" />
        </div>
        <h3 className="text-xl font-semibold text-white">{t(siteContent.projectsPage.emptyTitle)}</h3>
        <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">
          {t(siteContent.projectsPage.emptyDescription)}
        </p>
      </motion.div>
    );
  }

  return (
    <div className={compact ? "grid gap-4 md:grid-cols-2" : "grid gap-4 md:grid-cols-2 lg:grid-cols-3"}>
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
