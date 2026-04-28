import type { Skill } from "@/lib/types";

export type Language = "en" | "zh";

export const languageLabels: Record<Language, string> = {
  en: "EN",
  zh: "中文",
};

export const siteContent = {
  nav: {
    brand: {
      en: "AI PORTFOLIO",
      zh: "AI 作品集",
    },
    items: [
      { label: { en: "Home", zh: "首页" }, href: "/" },
      { label: { en: "Projects", zh: "项目" }, href: "/projects" },
    ],
    projectsMenu: {
      overview: {
        en: "Project overview",
        zh: "项目总览",
      },
      overviewDescription: {
        en: "Browse the project list.",
        zh: "查看项目列表。",
      },
      emptyTitle: {
        en: "Project entries coming soon",
        zh: "项目条目稍后补充",
      },
      emptyDescription: {
        en: "Add projects to the data file to populate this menu.",
        zh: "把项目加入数据文件后，这里会自动显示。",
      },
    },
    languageToggleLabel: {
      en: "Switch language",
      zh: "切换语言",
    },
  },
  hero: {
    eyebrow: {
      en: "AI / Agent / Software Engineering",
      zh: "AI / 智能体 / 软件工程",
    },
    description: {
      en: "A focused portfolio showing practical engineering work across LLM tooling, product prototypes, front-end interfaces, and deployable systems.",
      zh: "一个面向求职的作品集，展示我在 LLM 工具、产品原型、前端体验和可部署系统上的工程能力。",
    },
    links: {
      github: { en: "GitHub", zh: "GitHub" },
      contact: { en: "Contact", zh: "联系我" },
    },
  },
  home: {
    projects: {
      eyebrow: { en: "Selected work", zh: "精选项目" },
      title: { en: "Projects", zh: "项目" },
      action: { en: "View all projects", zh: "查看全部项目" },
    },
    skills: {
      eyebrow: { en: "Core stack", zh: "核心能力" },
      title: { en: "Skills", zh: "技能" },
    },
  },
  projectsPage: {
    eyebrow: { en: "Portfolio", zh: "作品集" },
    title: { en: "Projects", zh: "项目" },
    description: {
      en: "A structured space for future case studies, prototypes, and shipped software.",
      zh: "这里用于展示项目案例、原型实践和已经完成的软件作品。",
    },
    emptyTitle: {
      en: "Projects are being updated.",
      zh: "项目内容正在整理中。",
    },
    emptyDescription: {
      en: "New case studies coming soon.",
      zh: "新的项目案例即将补充。",
    },
    cardAction: {
      en: "View details",
      zh: "查看详情",
    },
    detailBack: {
      en: "Back to project overview",
      zh: "返回项目总览",
    },
    detailLinks: {
      en: "Links",
      zh: "相关链接",
    },
    detailMedia: {
      en: "Demo",
      zh: "演示",
    },
    detailAtAGlance: {
      en: "At a glance",
      zh: "快速信息",
    },
  },
} as const;

export const localizedSkills: Record<Language, Skill[]> = {
  en: [
    {
      title: "Agentic Product Prototyping",
      category: "AI",
      description:
        "Planning workflow shape, tool boundaries, evaluation checkpoints, and user-facing interaction patterns.",
    },
    {
      title: "Full-Stack Web Foundations",
      category: "Software",
      description:
        "Building typed Next.js applications with clean UI structure, deployable routes, and maintainable data modules.",
    },
    {
      title: "Interface Craft",
      category: "Frontend",
      description:
        "Designing responsive, polished, dark-mode interfaces with motion, glass surfaces, and clear interaction states.",
    },
    {
      title: "Systems Thinking",
      category: "Architecture",
      description:
        "Breaking ambiguous ideas into small, testable pieces that can evolve into robust product infrastructure.",
    },
    {
      title: "Developer Tooling",
      category: "Engineering",
      description:
        "Working with TypeScript, linting, component boundaries, and deployment workflows to keep projects reliable.",
    },
    {
      title: "Technical Storytelling",
      category: "Portfolio",
      description:
        "Framing problem, approach, tradeoffs, and outcomes so engineering work is easy to evaluate during hiring.",
    },
  ],
  zh: [
    {
      title: "智能体产品原型",
      category: "AI",
      description: "规划工作流形态、工具边界、评估节点和面向用户的交互方式。",
    },
    {
      title: "全栈 Web 基础",
      category: "软件",
      description: "构建类型安全的 Next.js 应用，保持清晰 UI 结构、路由和数据模块。",
    },
    {
      title: "界面打磨",
      category: "前端",
      description: "设计响应式、精致的深色界面，兼顾动效、玻璃质感和明确交互状态。",
    },
    {
      title: "系统思维",
      category: "架构",
      description: "把模糊需求拆成小而可测的模块，并逐步演进为稳定的产品基础设施。",
    },
    {
      title: "开发者工具链",
      category: "工程",
      description: "使用 TypeScript、Lint、组件边界和部署流程保持项目可靠可维护。",
    },
    {
      title: "技术表达",
      category: "作品集",
      description: "清晰呈现问题、方案、取舍和结果，让工程价值更容易被招聘方评估。",
    },
  ],
};
