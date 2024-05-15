import { ProjectData } from "@/types";

const PROJECTS: ProjectData[] = [
  {
    title: "Domaine de Lipica",
    image: "/domaine-de-lipica.png",
    technologies: ["typescript", "next", "tailwind", "prisma", "mysql"],
    introduction:
      "Situé à Ozoir-la-Ferrière (77), le Domaine de Lipica offre une gamme complète d'activités équestres, de l'initiation à la compétition, enseignées par des moniteurs expérimentés.",
    mission:
      "Le domaine de Lipica m'a confié la mission de procéder à une refonte  complète de leur site internet existant, dans le but de moderniser  l'expérience utilisateur. J'ai donc créé une interface intuitive et esthétique, mettant en  valeur les attractions et les services du domaine. De plus, j'ai  développé un espace d'administration sur mesure permettant une gestion  autonome des contenus du site, offrant ainsi à l'équipe de Lipica un  contrôle total sur leur plateforme en ligne.",
    url: "https://domaine-de-lipica.vercel.app/",
    code: "https://github.com/clementstorne/domaine-de-lipica",
  },
  {
    title: "intraconnect",
    image: "/intraconnect.png",
    technologies: ["typescript", "next", "tailwind", "prisma", "mysql"],
    introduction:
      "intraconnect est un réseau social interne d'entreprise, favorisant la collaboration et la communication efficace entre les employés.",
    mission:
      "Lors de ma formation de Développeur Web chez OpenClassrooms, le dernier  projet consistait à créer un réseau social d'entreprise. Après un petit  rebranding, j'ai repris ce projet avec mes connaissances actuelles. On y  retrouve les fonctionnalités demandées telles que la page de connexion  permettant à l’utilisateur de se connecter ou de créer un compte, la  page d’accueil listant les posts créés par les différents utilisateurs,  la possibilité de création de posts contenant du texte et une image,  ainsi que le système de réactions pour chaque post.",
    url: "https://intraconnect.vercel.app/",
    code: "https://github.com/clementstorne/intraconnect",
  },
  {
    title: "Morpion",
    image: "/morpion.png",
    technologies: ["javascript", "react", "redux", "tailwind"],
    introduction:
      "Frontend Mentor offre des défis professionnels conçus pour améliorer les compétences en codage, permettant ainsi  de développer des projets réalistes et de progresser rapidement.",
    mission:
      "Mon défi était de développer ce jeu de Morpion en respectant le design fourni tout en garantissant une expérience utilisateur optimale sur tous les appareils. J'ai implémenté la possibilité de jouer en multijoueur contre une autre personne ou en solo contre l'ordinateur. Pour rendre les parties contre l'ordinateur plus intéressantes, j'ai utilisé l'algorithme de minimax pour optimiser ses mouvements, assurant ainsi un défi stimulant et compétitif pour les joueurs.",
    url: "https://clementstorne-tic-tac-toe-game.netlify.app/",
    code: "https://github.com/clementstorne/FrontendMentor-tic-tac-toe-game",
  },
];

export default PROJECTS;
