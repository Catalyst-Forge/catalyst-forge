"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type ShellNavLinkProps = {
  href: string;
  className: string;
  activeClassName: string;
  inactiveClassName: string;
  children: ReactNode;
};

/** Sidebar link that marks the page you are on. */
export function ShellNavLink({
  href,
  className,
  activeClassName,
  inactiveClassName,
  children,
}: ShellNavLinkProps) {
  const active = usePathname() === href;

  return (
    <Link
      aria-current={active ? "page" : undefined}
      className={`${className} ${active ? activeClassName : inactiveClassName}`}
      href={href}
    >
      {children}
    </Link>
  );
}
