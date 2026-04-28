import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailContent } from "@/app/projects/[slug]/project-detail-content";
import { projects } from "@/lib/data/projects";
import { resolveLocalizedText } from "@/lib/i18n/resolve";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Project not found | AI Agent Portfolio",
    };
  }

  return {
    title: `${resolveLocalizedText(project.title, "en")} | AI Agent Portfolio`,
    description: resolveLocalizedText(project.description, "en"),
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailContent project={project} />;
}
