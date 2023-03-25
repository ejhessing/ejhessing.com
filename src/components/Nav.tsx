import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";
import { ReactNode } from "react";

interface NavItemProps {
  href: string;
  children: ReactNode;
}

function NavItem({ href, children }: NavItemProps) {
  let isActive = useRouter().pathname === href;

  const mailtoCheck = href.startsWith("mailto:");

  return (
    <li>
      {mailtoCheck ? (
        <a
          href={href}
          className={cn(
            "relative block px-3 py-2 transition",
            isActive
              ? "text-white dark:text-white"
              : "hover:text-white dark:hover:text-white"
          )}
        >
          {children}
          {isActive && (
            <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-white/0 via-white/40 to-white/0 dark:from-white/0 dark:via-white/40 dark:to-white/0" />
          )}
        </a>
      ) : (
        <Link href={href}>
          <a
            className={cn(
              "relative block px-3 py-2 transition",
              isActive
                ? "text-white dark:text-white"
                : "hover:text-white dark:hover:text-white"
            )}
          >
            {children}
            {isActive && (
              <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-white/0 via-white/40 to-white/0 dark:from-white/0 dark:via-white/40 dark:to-white/0" />
            )}
          </a>
        </Link>
      )}
    </li>
  );
}

export function DesktopNavigation(props: JSX.IntrinsicElements["nav"]) {
  return (
    <nav {...props}>
      <ul className="flex rounded-full bg-gray-800/90 px-3 text-sm font-medium text-white shadow-lg shadow-gray-800/5 ring-1 ring-gray-800/10 backdrop-blur dark:bg-gray-800/90 dark:text-white dark:ring-white/10">
        <NavItem href="/about">About</NavItem>
        <NavItem href="/projects">Projects</NavItem>
        <NavItem href="mailto:ejhessing@gmail.com">Contact me</NavItem>
      </ul>
    </nav>
  );
}
