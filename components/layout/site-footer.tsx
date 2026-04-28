import { EmailLink } from "@/components/contact/email-link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-4 py-8 text-sm text-slate-400 sm:px-6 lg:px-8">
        <span>© 2026 HermaeusMorea</span>
        <span aria-hidden="true">·</span>
        <a href="https://github.com/HermaeusMorea" className="transition hover:text-white">
          GitHub
        </a>
        <span aria-hidden="true">·</span>
        <EmailLink className="transition hover:text-white">
          Email
        </EmailLink>
      </div>
    </footer>
  );
}
