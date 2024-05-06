import { cn } from "@/lib/utils";
import Link from "next/link";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

const SocialLinks = () => {
  return (
    <div
      className={cn(
        "hidden",
        "fixed bottom-0 md:flex flex-col items-center space-y-6 delay-1000 right-14 animate-slide-top"
      )}
    >
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

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={2}
        height={56}
        fill="none"
        viewBox="0 0 2 56"
      >
        <path stroke={"currentColor"} strokeWidth={2} d="M1 0v56" />
      </svg>
    </div>
  );
};

export default SocialLinks;
