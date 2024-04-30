import Logo from "@public/logo.svg";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="fixed top-0 flex items-center justify-between w-full h-20 py-4 px-14">
      <Link href="/" className="h-full">
        <Image
          src={Logo}
          alt="Clément Storne"
          priority={true}
          className="w-auto h-full animate-slide-bottom"
        />
      </Link>
      <nav className="flex items-center space-x-14">
        <Link href="/" className="delay-1400 animate-slide-bottom">
          Accueil
        </Link>
        <Link href="/" className="delay-1600 animate-slide-bottom">
          Qui suis-je ?
        </Link>
        <Link href="/" className="delay-1800 animate-slide-bottom">
          Mes compétences
        </Link>
        <Link href="/" className="delay-2000 animate-slide-bottom">
          Mes projets
        </Link>
        <Link href="/" className="delay-2200 animate-slide-bottom">
          Me contacter
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
