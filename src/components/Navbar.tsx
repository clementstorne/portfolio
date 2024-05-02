"use client";

import { cn } from "@/lib/utils";
import { Button } from "@components/ui/button";
import Logo from "@public/logo.svg";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

type BurgerButtonProps = {
  className?: string;
  isOpen: boolean;
  onClick: () => void;
};

const BurgerButton = ({ className, isOpen, onClick }: BurgerButtonProps) => {
  return (
    <Button
      variant={"ghost"}
      className={cn("p-2", className)}
      aria-label="Open Menu"
      onClick={onClick}
    >
      {isOpen ? <X size={32} /> : <Menu size={32} />}
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
    href: "/qui-suis-je",
    label: "Qui suis-je ?",
  },
  {
    href: "/mes-competences",
    label: "Mes compétences",
  },
  {
    href: "/mes-projets",
    label: "Mes projets",
  },
  {
    href: "/me-contacter",
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
  const currentPath = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

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

  const TOP_OFFSET = 1;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getDelay = (index: number) => {
    switch (index) {
      case 0:
        return "delay-1400";
      case 1:
        return "delay-1600";
      case 2:
        return "delay-1800";
      case 3:
        return "delay-2000";
      case 4:
        return "delay-2200";
      default:
        return "delay-1400";
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full h-16 py-2 px-5 z-10",
        "md:h-20 md:py-4 md:px-14",
        "flex items-center justify-between",
        isOpen && "bg-blue-950/95",
        showBackground && "bg-blue-950/95"
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
          className="md:hidden -mr-2 animate-slide-bottom"
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
                className={cn(
                  `animate-slide-bottom ${getDelay(index)}`,
                  currentPath === link.href && "border-green-500"
                )}
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
        <div className="flex items-center space-x-6">
          <Link
            href="https://www.linkedin.com/in/clementstorne/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLinkedin size={32} />
          </Link>

          <Link
            href="https://github.com/clementstorne"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub size={32} />
          </Link>

          <Link
            href="https://twitter.com/clementstorne"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiX size={32} />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
