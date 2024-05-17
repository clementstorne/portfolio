import { LinkProps } from "next/link";

export interface ProjectData {
  title: string;
  image: string;
  alt: string;
  technologies: string[];
  introduction: string;
  mission: string;
  url?: LinkProps["href"];
  code: LinkProps["href"];
}
