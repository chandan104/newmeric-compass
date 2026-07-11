import Link from "next/link";
import type { ComponentProps } from "react";
import { Button } from "@/components/ui/button";

interface ButtonLinkProps extends ComponentProps<typeof Button> {
  href: string;
  external?: boolean;
}

/**
 * This project's shadcn Button is Base UI-backed, which renders polymorphically
 * via a `render` prop (a ReactElement) rather than Radix's `asChild`. This
 * wrapper hides that so call sites just pass `href`.
 */
export function ButtonLink({ href, external, children, ...buttonProps }: ButtonLinkProps) {
  if (external) {
    return (
      <Button
        {...buttonProps}
        nativeButton={false}
        render={<a href={href} target="_blank" rel="noopener noreferrer" />}
      >
        {children}
      </Button>
    );
  }

  return (
    <Button {...buttonProps} nativeButton={false} render={<Link href={href} />}>
      {children}
    </Button>
  );
}
