export const siteConfig = {
  name: "Diego Ignacio Cerdas",
  title: "Software Engineer",
  role: "Software Developer at Kingstown Consulting",
  location: "San José, Costa Rica",
  tagline:
    "I design and build the backend systems, databases, and integrations that run real businesses — not demos.",
  description:
    "Software Engineer focused on enterprise software: accounting systems, ERP integrations, and backend architecture. Final-year Computer Science student at the University of Costa Rica, currently building production systems at Kingstown Consulting.",
  url: "https://diegocerdas.dev",
  email: "cerdasignacio5@gmail.com",
  links: {
    github: "https://github.com/mormis10/",
    linkedin: "https://linkedin.com/in/diegocerdas",
    resume: "/resume.pdf",
  },
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
] as const;
