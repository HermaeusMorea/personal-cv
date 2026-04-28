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
  ],
  zh: [
    {
      title: "系统拆解",
      category: "架构",
      description: "把开放性的产品想法拆成清晰层级、职责边界和可验证的执行路径。",
    },
    {
      title: "结构化 AI 输出",
      category: "AI",
      description: "把模型响应转成有约束、可校验、能被下游软件安全消费的 artifacts。",
    },
    {
      title: "运行时边界设计",
      category: "系统",
      description: "把不可预测的生成过程放在关键运行路径之外，同时保持用户可见流程的响应性。",
    },
    {
      title: "成本意识工程",
      category: "工程",
      description: "围绕延迟、重复上下文、缓存、本地执行和可度量运行成本来设计系统。",
    },
    {
      title: "工具链与自动化",
      category: "管线",
      description: "把手工创作或工程步骤封装成小型外部工具，形成可重复的工作流。",
    },
    {
      title: "技术表达",
      category: "产品",
      description: "清楚说明系统目标、技术取舍、结果和边界，让工程工作更容易被评估。",
    },
  ],
};
