import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, description, action, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">{eyebrow}</p> : null}
          <h2 className={eyebrow ? "mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl" : "text-3xl font-semibold tracking-tight text-white sm:text-4xl"}>{title}</h2>
          {description ? <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p> : null}
        </div>
        {action ? <div>{action}</div> : null}
      </div>
      {children}
    </section>
  );
}
