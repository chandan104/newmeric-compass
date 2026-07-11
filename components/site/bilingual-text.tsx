"use client";

import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/site/language-provider";
import type { BilingualText } from "@/lib/data/mission";
import type { ElementType } from "react";

interface BilingualProps {
  value: BilingualText;
  as?: ElementType;
  className?: string;
}

export function Bilingual({ value, as: Tag = "p", className }: BilingualProps) {
  const { language } = useLanguage();

  return (
    <Tag className={cn(language === "hi" && "font-hindi", className)}>
      {value[language]}
    </Tag>
  );
}
