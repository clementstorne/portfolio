import SocialLinks from "@/components/SocialLinks";
import Navbar from "@components/Navbar";
import type { Metadata } from "next";
import { Montserrat, Rubik } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clément Storne - Développeur Web Front-end",
  description:
    "Je suis Clément Storne, un développeur web front-end passionné. Découvrez mon portfolio où je présente mes compétences, mes projets et mon parcours professionnel.",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const rubik = Rubik({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-rubik",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${rubik.variable} ${montserrat.variable}`}>
        <Navbar />

        {children}

        <SocialLinks />
      </body>
    </html>
  );
}
