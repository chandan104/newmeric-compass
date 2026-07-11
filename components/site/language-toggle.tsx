"use client";

import { Languages } from "lucide-react";
import { useLanguage } from "@/components/site/language-provider";
import { cn } from "@/lib/utils";

export function LanguageToggle({ className }: { className?: string }) {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-current/20 px-3 py-1.5 text-xs font-medium transition-colors duration-200 hover:bg-accent hover:text-accent-foreground",
        className,
      )}
      aria-label="Toggle language between Hindi and English"
    >
      <Languages className="h-3.5 w-3.5" />
      <span className={cn(language === "hi" && "font-hindi")}>
        {language === "hi" ? "हिंदी" : "English"}
      </span>
    </button>
  );
}
