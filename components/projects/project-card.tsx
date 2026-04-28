"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useLanguage } from "@/components/i18n/language-provider";
import { siteContent } from "@/lib/i18n/content";
import { resolveLocalizedText } from "@/lib/i18n/resolve";
import type { Project } from "@/lib/types";

type ProjectCardProps = {
  project: Project;
};

const statusLabels = {
  concept: {
    en: "Concept",
    zh: "概念",
  },
  prototype: {
    en: "Prototype",
    zh: "原型",
  },
  "in-progress": {
    en: "In progress",
    zh: "进行中",
  },
  shipped: {
    en: "Shipped",
    zh: "已发布",
  },
  archived: {
    en: "Archived",
    zh: "已归档",
  },
} as const;

export function ProjectCard({ project }: ProjectCardProps) {
  const { language, t } = useLanguage();
  const title = resolveLocalizedText(project.title, language);
  const description = resolveLocalizedText(project.description, language);

  return (
    <Link href={`/projects/${project.slug}`} className="block h-full">
      <motion.article
        id={project.slug}
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="glass-panel group flex h-full min-h-64 flex-col rounded-lg p-5 transition duration-300 hover:-translate-y-1 hover:border-sky-200/40 hover:shadow-glow"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">
              {statusLabels[project.status][language]}
            </p>
            <h3 className="mt-3 text-xl font-semibold text-white">{title}</h3>
          </div>
          <ArrowUpRight className="h-5 w-5 text-slate-500 transition group-hover:text-sky-200" />
        </div>
        <p className="mt-4 text-sm leading-6 text-slate-300">{description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6">
          <span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/10 px-3 py-2 text-xs font-semibold text-white transition group-hover:-translate-y-0.5 group-hover:border-sky-200/50 group-hover:bg-white/15">
            {t(siteContent.projectsPage.cardAction)}
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </motion.article>
    </Link>
  );
}
