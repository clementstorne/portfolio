"use client";

import { cn } from "@/lib/utils";
import { Button } from "@components/ui/button";
import Logo from "@public/logo.svg";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type BurgerButtonProps = {
  className?: string;
  isOpen: boolean;
  onClick: () => void;
};

const BurgerButton = ({ className, isOpen, onClick }: BurgerButtonProps) => {
  return (
    <Button
      variant={"ghost"}
      className={className}
      aria-label="Open Menu"
      onClick={onClick}
    >
      {isOpen ? <X /> : <Menu />}
    </Button>
  );
};

type Link = {
  href: string;
  label: string;
};

const links: Link[] = [
  {
    href: "/",
    label: "Accueil",
  },
  {
    href: "/",
    label: "Qui suis-je ?",
  },
  {
    href: "/",
    label: "Mes compétences",
  },
  {
    href: "/",
    label: "Mes projets",
  },
  {
    href: "/",
    label: "Me contacter",
  },
];

type NavbarLinkProps = {
  href: string;
  label: string;
  className?: string;
};

const NavbarLink = ({ href, label, className }: NavbarLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "font-bold text-lg border-transparent border-b-2 transition-colors",
        "hover:border-alabaster-50",
        className
      )}
    >
      {label}
    </Link>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDrawer = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleEscKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.setProperty("overflow", "hidden");
    } else {
      document.body.style.removeProperty("overflow");
    }

    document.addEventListener("keydown", handleEscKeyPress);

    return () => {
      document.removeEventListener("keydown", handleEscKeyPress);
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 w-full h-16 py-2 px-5 z-10",
        "md:h-20 md:py-4 md:px-14",
        "flex items-center justify-between"
      )}
    >
      <div className="w-full h-full flex justify-between items-center">
        <Link href="/" className="h-full">
          <Image
            src={Logo}
            alt="Clément Storne"
            priority={true}
            className="w-auto h-full animate-slide-bottom"
          />
        </Link>

        <BurgerButton
          className="mr-2 md:hidden text-orange-1"
          isOpen={isOpen}
          onClick={handleDrawer}
        />

        <div className="hidden md:block">
          <nav className="flex items-center space-x-14 ">
            {links.map((link, index) => (
              <NavbarLink
                key={index}
                href={link.href}
                label={link.label}
                className={`animate-slide-bottom delay-${1400 + index * 200}`}
              />
            ))}
          </nav>
        </div>
      </div>

      <nav
        className={cn(
          "fixed top-16 left-0 w-full h-full bg-blue-950/95 overflow-auto",
          "flex flex-col justify-start items-center space-y-8 py-8",
          "transform ease-in-out transition-all duration-300",
          isOpen && "translate-y-0",
          !isOpen && "translate-y-full"
        )}
      >
        {links.map((link, index) => (
          <NavbarLink key={index} href={link.href} label={link.label} />
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
