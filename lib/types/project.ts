export type LocalizedText = string | {
  en: string;
  zh: string;
};

export type ProjectStatus =
  | "concept"
  | "prototype"
  | "in-progress"
  | "shipped"
  | "archived";

export type ProjectLink = {
  label: LocalizedText;
  href: string;
};

export type ProjectHighlight = {
  text: LocalizedText;
  tone?: "success" | "note";
};

export type ProjectSection = {
  title: LocalizedText;
  body: LocalizedText;
  bullets?: LocalizedText[];
};

export type ProjectMedia = {
  title: LocalizedText;
  description: LocalizedText;
  src: string;
  alt: LocalizedText;
  width: number;
  height: number;
};

export type ProjectOutcomeBullet =
  | LocalizedText
  | {
      linkLabel: LocalizedText;
      href: string;
      text: LocalizedText;
    };

export type ProjectOutcome = {
  title: LocalizedText;
  body: LocalizedText;
  bullets: ProjectOutcomeBullet[];
  conclusion: LocalizedText;
};

export type Project = {
  title: LocalizedText;
  slug: string;
  description: LocalizedText;
  tags: string[];
  status: ProjectStatus;
  featured?: boolean;
  links: ProjectLink[];
  highlights: ProjectHighlight[];
  sections?: ProjectSection[];
  mediaNote?: LocalizedText;
  media?: ProjectMedia[];
  outcomes?: ProjectOutcome[];
};
