"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/site/button-link";
import { Logo } from "@/components/site/logo";
import { LanguageToggle } from "@/components/site/language-toggle";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { navLinks, siteConfig } from "@/lib/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link href="/" className="flex items-center gap-2.5">
            <Logo className="text-accent" />
            <div className="flex flex-col">
              <span className="font-heading text-xl font-bold leading-tight text-primary md:text-2xl">
                Newmeric Compass
              </span>
              <span className="block text-xs font-medium italic tracking-wide text-accent">
                The &quot;GPS&quot; of Your Destiny
              </span>
            </div>
          </Link>

          <nav className="hidden items-center space-x-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  "rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200",
                  isActive(link.path)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-accent hover:text-accent-foreground",
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageToggle className="text-muted-foreground" />
            <ButtonLink
              href={buildWhatsAppLink()}
              external
              className="bg-whatsapp text-whatsapp-foreground transition-all duration-200 hover:bg-whatsapp/90 active:scale-[0.98] gap-2"
            >
              <MessageCircle className="h-4 w-4" />
              {siteConfig.phone}
            </ButtonLink>
          </div>

          <button
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="rounded-lg p-2 transition-all duration-200 hover:bg-accent lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-border py-4 lg:hidden">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200",
                    isActive(link.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-accent hover:text-accent-foreground",
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center justify-between px-4 pt-2">
                <LanguageToggle className="text-muted-foreground" />
              </div>
              <ButtonLink
                href={buildWhatsAppLink()}
                external
                className="w-full bg-whatsapp text-whatsapp-foreground transition-all duration-200 hover:bg-whatsapp/90 active:scale-[0.98] gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                {siteConfig.phone}
              </ButtonLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
