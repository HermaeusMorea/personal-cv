"use client";

import type { MouseEvent, ReactNode } from "react";
import { useState } from "react";
import { useLanguage } from "@/components/i18n/language-provider";

export const contactEmail = "mingyu.xia@outlook.com";

type EmailLinkProps = {
  className?: string;
  children: ReactNode;
};

export function EmailLink({ className, children }: EmailLinkProps) {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);

  async function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();

    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = `mailto:${contactEmail}`;
    }
  }

  return (
    <a href={`mailto:${contactEmail}`} onClick={handleClick} className={className}>
      {copied ? (language === "zh" ? "已复制" : "Copied") : children}
    </a>
  );
}
