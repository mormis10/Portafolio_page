export interface Achievement {
  id: string;
  title: string;
  problem: string;
  solution: string;
  technologies: string[];
  implemented: string[];
  learned: string[];
}

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  responsibilities: string[];
  achievements: Achievement[];
}

export const experience: ExperienceEntry[] = [
  {
    id: "kingstown",
    company: "Kingstown Consulting",
    role: "Software Developer",
    period: "April 2026 — Present",
    location: "Costa Rica",
    summary:
      "Kingstown Consulting builds software for the management of large commercial properties. I design and develop the backend services, databases, and business workflows that property managers, accountants, and operators rely on daily.",
    responsibilities: [
      "Designing and developing enterprise software for commercial property management",
      "Building backend services with .NET and ASP.NET Core",
      "Designing relational schemas in PostgreSQL",
      "Building and documenting REST APIs",
      "Developing frontend interfaces for internal business tools",
      "Implementing multi-step business workflows end to end",
      "Working directly with stakeholders to translate business requirements into working software",
    ],
    achievements: [
      {
        id: "accounting-system",
        title: "Enterprise Accounting System",
        problem:
          "Property managers needed a real accounting backbone — not a spreadsheet — to handle payables, receivables, bank reconciliation, and electronic invoices across multiple properties and currencies, while staying synchronized with the company's Odoo ERP.",
        solution:
          "I designed and built a complete accounting system covering the full financial lifecycle: accounts payable and receivable, bank reconciliation, journal entries, electronic invoice (XML) processing, payment processing, invoice reconciliation, and multi-currency support — integrated directly with Odoo so financial data stays consistent across systems.",
        technologies: [
          "C#",
          ".NET",
          "ASP.NET Core",
          "PostgreSQL",
          "Odoo ERP",
          "REST APIs",
        ],
        implemented: [
          "Relational schema for ledgers, journal entries, and multi-currency balances",
          "XML parsing and validation pipeline for electronic invoices",
          "Bank reconciliation engine matching transactions against statements",
          "Bidirectional sync layer between the accounting system and Odoo",
        ],
        learned: [
          "How real accounting systems enforce correctness — double-entry integrity, audit trails, and reconciliation matter more than UI polish",
          "Designing schemas that hold up under multi-currency and multi-entity operations",
          "Integrating cleanly with a third-party ERP without duplicating its source of truth",
        ],
      },
      {
        id: "erp-integrations",
        title: "ERP Integrations (Odoo)",
        problem:
          "Business processes lived partly in custom web applications and partly in Odoo. Without a reliable integration layer, data like inventory, sales, and CRM records would drift out of sync between systems.",
        solution:
          "I built and maintained integrations across Odoo's Accounting, Purchase, Inventory, Sales, Rental, CRM, and Studio modules, using Odoo's API to keep custom applications and the ERP synchronized in near real time.",
        technologies: ["Odoo ERP", "REST APIs", ".NET", "PostgreSQL"],
        implemented: [
          "API integrations across seven Odoo modules",
          "Synchronization jobs between external web applications and Odoo",
          "Data mapping layers to reconcile schema differences between systems",
        ],
        learned: [
          "How to work within the constraints of a large existing ERP rather than fighting them",
          "Designing idempotent sync processes that tolerate retries and partial failures",
          "Reading and extending someone else's system architecture responsibly",
        ],
      },
      {
        id: "ecommerce-platform",
        title: "Ecommerce Platform",
        problem:
          "The business needed a customer-facing sales channel that stayed in lockstep with real inventory and product data managed in Odoo, rather than a storefront that drifted out of sync with operations.",
        solution:
          "I built a full-stack ecommerce platform end to end — frontend, backend, authentication, and product management — with inventory and catalog data synchronized directly against Odoo.",
        technologies: [
          "React",
          "Next.js",
          "TypeScript",
          "Express.js",
          "PostgreSQL",
          "Odoo ERP",
        ],
        implemented: [
          "Customer-facing storefront with authentication and product catalog",
          "Database schema for products, orders, and users",
          "Inventory synchronization service against Odoo",
        ],
        learned: [
          "Owning a product across the full stack, from schema design to the checkout flow",
          "Keeping a public-facing app consistent with an internal system of record",
        ],
      },
    ],
  },
];
