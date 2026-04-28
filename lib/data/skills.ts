import type { Skill } from "@/lib/types";

export const skills: Skill[] = [
  {
    title: "System Decomposition",
    category: "Architecture",
    description:
      "Breaking open-ended product ideas into clear layers, ownership boundaries, and testable execution paths.",
  },
  {
    title: "Structured AI Output",
    category: "AI",
    description:
      "Turning model responses into constrained, validated artifacts that downstream software can consume safely.",
  },
  {
    title: "Runtime Boundary Design",
    category: "Systems",
    description:
      "Keeping unpredictable generation outside critical runtime paths while preserving responsive user-facing behavior.",
  },
  {
    title: "Cost-Aware Engineering",
    category: "Engineering",
    description:
      "Designing around latency, repeated context, caching, local execution, and measurable operating cost.",
  },
  {
    title: "Tooling and Automation",
    category: "Pipeline",
    description:
      "Building small external tools that turn manual creative or engineering steps into repeatable workflows.",
  },
  {
    title: "Technical Communication",
    category: "Product",
    description:
      "Explaining system goals, tradeoffs, results, and limitations in a way that makes engineering work easy to evaluate.",
  },
];
