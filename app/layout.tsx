import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/i18n/language-provider";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AgentGraphBackground } from "@/components/three/agent-graph-background";

export const metadata: Metadata = {
  title: "AI Agent Portfolio | AI 智能体作品集",
  description:
    "A bilingual personal portfolio for AI, agent, and software engineering work. 面向 AI、智能体和软件工程岗位的中英双语作品集。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <AgentGraphBackground className="fixed inset-0 z-0" />
          <div className="relative z-10">
            <SiteHeader />
            {children}
            <SiteFooter />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
