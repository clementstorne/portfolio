import Navbar from "@components/Navbar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clément Storne - Développeur Web Front-end",
  description:
    "Je suis Clément Storne, un développeur web front-end passionné. Découvrez mon portfolio où je présente mes compétences, mes projets et mon parcours professionnel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Navbar />

        {children}
      </body>
    </html>
  );
}
