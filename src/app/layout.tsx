import Navbar from "@components/Navbar";
import type { Metadata } from "next";
import { Lato, Montserrat } from "next/font/google";
import "./globals.css";

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
export const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Clément Storne - Développeur Web Front-end",
  description:
    "Je suis Clément Storne, un développeur web front-end passionné. Découvrez mon portfolio où je présente mes compétences, mes projets et mon parcours professionnel.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="fr">
      <body className={lato.className}>
        <Navbar />

        {children}
      </body>
    </html>
  );
};

export default RootLayout;