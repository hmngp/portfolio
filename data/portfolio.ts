export type PortfolioRow = {
  year: string;
  title: string;
  href?: string;
};

export const internships: PortfolioRow[] = [
  { year: "2023", title: "Design Intern / SandeshBox" },
  { year: "2022", title: "Design Intern / ThinkPlus Education" },
];

export const sideProjects: PortfolioRow[] = [
  { year: "2026", title: "my IMDB movie ratings visualized in an interactive dashboard", href: "https://imdb-dashboard-pi.vercel.app/" },
  {
    year: "2026",
    title: "itihaas: interactive historical map dashboard (in progress)", href: "https://india-through-time.vercel.app/",
  },
  { year: "2025", title: "gausasian.club: a face guessing game", href: "https://www.gausasian.club" },
];

/**
 * Dump gallery: add images under public/dump/ then list paths here, e.g. "/dump/photo-1.jpg"
 * They render in a random order on each page load.
 */
export const dumpImagePaths: string[] = [
  "/dump/1.png",
  "/dump/2.png",
  "/dump/A32.png",
  "/dump/AZADI1.png",
  "/dump/Artbd 1.png",
  "/dump/Bento.png",
  "/dump/Countries-Leading-in-Real-Time-Payments.png",
  "/dump/F2s8_7kbUAA__FN.jpeg",
  "/dump/GBxWH9PasAAOp37.jpeg",
  "/dump/GBxWH9Sa4AAmRPw.jpeg",
  "/dump/GCCwgGvaAAAFerg.jpeg",
  "/dump/GCCwpXjaQAAwYpG.jpeg",
  "/dump/I1.png",
  "/dump/P1.png",
  "/dump/P111.png",
  "/dump/P14.png",
  "/dump/P15.png",
  "/dump/P16.png",
  "/dump/P3.png",
  "/dump/P4.png",
  "/dump/P5.png",
  "/dump/P91.png",
  "/dump/Panihari.png",
  "/dump/Poster-mockup.png",
  "/dump/Prison Population Rate.jpg",
  "/dump/Slide 16_9 - 10y.png",
  "/dump/Slide 16_9 - 12y.png",
  "/dump/Slide 16_9 - 1y.png",
  "/dump/Slide 16_9 - 2y.png",
  "/dump/Slide 16_9 - 3y.png",
  "/dump/Slide 16_9 - 6y.png",
  "/dump/Slide 16_9 - 7y.png",
  "/dump/Slide 16_9 - 8y.png",
  "/dump/Slide 16_9 - 9y.png",
  "/dump/Artboard 1ed.png",
  "/dump/Artboard 2.png",
  "/dump/Final.png",
];
