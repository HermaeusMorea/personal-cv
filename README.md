# AI Agent Portfolio

A static personal portfolio MVP for AI, agent, and software engineering roles. It uses Next.js App Router, TypeScript, Tailwind CSS, Motion, React Three Fiber, Drei, and lucide-react.

## Install

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

## Deploy To Vercel

1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Keep the default Next.js settings.
4. Deploy.

## Add Projects

Project data lives in `lib/data/projects.ts`.

The current data source is intentionally empty:

```ts
export const projects: Project[] = [];
```

Add entries using the `Project` type from `lib/types/project.ts`:

```ts
export const projects = [
  {
    title: "Project title",
    slug: "project-slug",
    description: "Short case study summary.",
    tags: ["Next.js", "AI", "TypeScript"],
    status: "in-progress",
    links: [{ label: "Demo", href: "https://example.com" }],
    highlights: ["Important result or technical decision."],
  },
] satisfies Project[];
```

The home page and `/projects` page both read from this file. When the array is empty, the UI shows an empty state.

## Update Skills

Skill data lives in `lib/data/skills.ts`. Edit this file to adjust the skill cards shown on the home page.

## Future Portfolio Agent

This repo reserves these paths for a future AI portfolio agent:

- `components/agent`
- `lib/agent`

A future implementation can add a UI entry point under `components/agent` and keep agent routing, tool definitions, retrieval, or resume/project context helpers in `lib/agent`. The current MVP does not call any AI APIs and is safe to deploy as a static portfolio shell.
