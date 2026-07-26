import type { LucideIcon } from "lucide-react";
import {
  Server,
  MonitorSmartphone,
  Database,
  Wrench,
  Building2,
} from "lucide-react";

export interface TechGroup {
  id: string;
  label: string;
  icon: LucideIcon;
  items: string[];
}

export const techStack: TechGroup[] = [
  {
    id: "backend",
    label: "Backend",
    icon: Server,
    items: ["C#", ".NET", "ASP.NET Core", "Express.js"],
  },
  {
    id: "frontend",
    label: "Frontend",
    icon: MonitorSmartphone,
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    id: "database",
    label: "Database",
    icon: Database,
    items: ["PostgreSQL", "SQL Server"],
  },
  {
    id: "tools",
    label: "Tools",
    icon: Wrench,
    items: ["Git", "Docker", "Linux"],
  },
  {
    id: "business",
    label: "Business Systems",
    icon: Building2,
    items: ["Odoo ERP"],
  },
];
