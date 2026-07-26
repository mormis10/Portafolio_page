export interface ProjectEntry {
  id: string;
  name: string;
  category: string;
  description: string;
  stack: string[];
  challenges: string[];
  solutions: string[];
  lessons: string[];
  architecture: string[];
  image?: string;
  link?: string;
}

export const projects: ProjectEntry[] = [
  {
    id: "accounting-system",
    name: "Enterprise Accounting System",
    category: "Enterprise Software · Fintech",
    description:
      "A complete accounting backbone for commercial property management, covering payables, receivables, bank reconciliation, journal entries, electronic invoicing, and multi-currency operations — integrated with Odoo ERP so financial data stays consistent across every system that touches it.",
    stack: ["C#", ".NET", "ASP.NET Core", "PostgreSQL", "Odoo ERP", "REST APIs"],
    challenges: [
      "Financial data had to be exact — rounding errors or race conditions in reconciliation are not acceptable in an accounting system",
      "Electronic invoices arrive as XML from external authorities and must be validated and parsed reliably",
      "Multiple properties operate in different currencies, which touches nearly every table in the schema",
      "The system had to stay in sync with Odoo without becoming a second, conflicting source of truth",
    ],
    solutions: [
      "Modeled the ledger around double-entry principles with explicit journal entries, so every balance is derivable and auditable",
      "Built a dedicated XML ingestion pipeline with schema validation before any invoice reaches the ledger",
      "Normalized multi-currency support at the schema level instead of bolting it on per feature",
      "Designed a one-directional sync contract with Odoo for each domain to avoid write conflicts",
    ],
    lessons: [
      "In financial systems, the schema is the product — get the data model right and the features follow",
      "Reconciliation logic is where most of the real complexity of accounting software lives",
      "Integration boundaries need to be explicit about which system owns which data",
    ],
    architecture: [
      "ASP.NET Core Web API",
      "PostgreSQL (ledger, journal entries, invoices)",
      "XML validation pipeline",
      "Odoo Accounting sync service",
    ],
    image: "/projects/accounting.png",
  },
  {
    id: "erp-integrations",
    name: "ERP Integrations",
    category: "Systems Integration · Odoo",
    description:
      "A set of API-driven integrations connecting internal web applications with Odoo's Accounting, Purchase, Inventory, Sales, Rental, CRM, and Studio modules — keeping business data synchronized without duplicating Odoo as a source of truth.",
    stack: ["Odoo ERP", "REST APIs", ".NET", "PostgreSQL"],
    challenges: [
      "Odoo's data model doesn't map one-to-one onto the internal applications it needed to talk to",
      "Sync jobs needed to survive partial failures and network retries without corrupting data",
      "Seven different modules meant seven different sets of business rules to respect",
    ],
    solutions: [
      "Built mapping layers per module that translate between Odoo's schema and internal representations",
      "Made sync operations idempotent so retries are always safe",
      "Treated Odoo as the system of record for operational data and kept internal apps as consumers, not competing writers",
    ],
    lessons: [
      "Integration work rewards reading the existing system deeply before writing a single line of sync code",
      "Idempotency is not optional once a process runs on a schedule against production data",
    ],
    architecture: [
      "Odoo XML-RPC / REST API layer",
      "Sync workers per module",
      "Mapping & transformation layer",
      "Internal application databases",
    ],
  },
  {
    id: "ecommerce-platform",
    name: "Ecommerce Platform",
    category: "Full Stack · Retail",
    description:
      "A full-stack ecommerce platform — storefront, authentication, product management, and checkout — with inventory and catalog data synchronized against Odoo so what customers see always reflects real stock.",
    stack: ["React", "Next.js", "TypeScript", "Express.js", "PostgreSQL", "Odoo ERP"],
    challenges: [
      "Product and inventory data needed to originate from Odoo without making the storefront slow or fragile",
      "Authentication and product management needed to be built from scratch, not bolted onto a template",
    ],
    solutions: [
      "Built a synchronization service that keeps a local catalog cache updated from Odoo on a schedule, so the storefront reads fast local data instead of calling Odoo on every request",
      "Designed the database schema for products, orders, and users around the actual checkout flow, not a generic ecommerce template",
    ],
    lessons: [
      "Caching and synchronization strategy matters as much as the storefront UI for a data-backed ecommerce app",
      "Owning both ends of the stack makes it easier to keep the data contract between frontend and backend honest",
    ],
    architecture: [
      "Next.js storefront (React, TypeScript)",
      "Express.js API",
      "PostgreSQL (products, orders, users)",
      "Odoo inventory sync service",
    ],
    image: "/projects/ecommerce.png",
    link: "https://stilecr.com",
  },
];
