export const projects = [
  {
    title: "E-Commerce Startup Estados Unidos",
    description: "Plataforma de comercio electrónico completa con panel de administración, gestión de inventario, procesamiento de pagos y análisis en tiempo real.",
    image: "/img/ecommerce.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Tailwind",
      "NestJS",
      "Autenticación JWT",
      "Roles",
    ],
    features: [
      "Carrito de compras en tiempo real",
      "Panel de administración completo",
      "Integración con pasarelas de pago Square",
      "Sistema de inventario automatizado"
    ],
    github: "#",
    demo: "https://test-ecom.internationalfood360.com/",
    status: "En Desarrollo"
  },
  {
    title: "Landing Page de Transporte de Lujo",
    description: "Landing page para una empresa de transporte de lujo con sistema de reservas y gestión de flotas.",
    image: "/img/transport.png",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind"],
    features: [
      "Sistema de reservas",
      "Gestión de flotas",
      "Notificaciones por correo electrónico",
      "Generación de cotizaciones",
      "Generacion de Facturas PDF y envio por correo",
      "Dashboard analítico"
    ],
    github: "#",
    demo: "https://gjtwothousand.com/",
    status: "Completado"
  },
  {
    "title": "Compre360 – Soluciones Digitales y E-commerce",
    "description": "Plataforma de soluciones digitales con e-commerce premium, showroom digital, marca personal, autenticación, panel administrativo con RBAC, suscripciones, facturación electrónica DIAN y chat en tiempo real.",
    "image": "/imgs/compre360.png",
    "technologies": [
      "Next.js 16",
      "TypeScript",
      "React 19",
      "Prisma 7",
      "PostgreSQL",
      "Tailwind CSS 4",
      "Zustand",
      "SWR",
      "Zod",
      "React Hook Form",
      "Framer Motion",
      "JWT (jose/jsonwebtoken)",
      "bcrypt",
      "Nodemailer",
      "@react-pdf/renderer",
      "Google APIs (Drive)",
      "Cloudflare Turnstile",
      "Vitest"
    ],
    "features": [
      "E-commerce Premium con gestión de inventario y productos",
      "Showroom Digital de catálogos y galerías",
      "Página de Marca Personal con demo interactivo",
      "Sistema de autenticación con JWT, bcrypt y recuperación de contraseña",
      "Chat en tiempo real con streaming y calificación",
      "Panel administrativo con RBAC (admin, super_admin, viewer)",
      "Gestión de usuarios, servicios, proyectos, contratos y suscripciones",
      "Suscripciones recurrentes con panel para viewer y actualización por cron",
      "Facturación electrónica DIAN (XML firmado, CUFE, ZIP, SOAP)",
      "Pagos integrados con ePayco y Square (webhooks)",
      "Cola de emails transaccionales con reintentos y panel de jobs",
      "Generación de PDFs (contratos y facturas) con @react-pdf/renderer",
      "Notificaciones por correo (bienvenida, servicio agregado, suscripción vencida)",
      "Protección anti-bots con Cloudflare Turnstile",
      "Dashboard analítico con métricas y filtros por cliente",
      "Internacionalización (ES/EN) con selector de idioma",
      "SEO con sitemap, robots, JSON-LD y Open Graph",
      "Suite de tests con Vitest (unit e integración)"
    ],
    "services": [
      "E-commerce Premium",
      "Showroom Digital",
      "Marca Personal",
      "Páginas Institucionales",
      "Desarrollo a Medida"
    ],
    "integrations": [
      "PostgreSQL (Prisma ORM)",
      "ePayco (pagos online Colombia)",
      "Square (pagos internacionales)",
      "DIAN (facturación electrónica Colombia)",
      "Google Drive (almacenamiento)",
      "Nodemailer / SMTP (emails)",
      "Cloudflare Turnstile (CAPTCHA)"
    ],
    "github": "#",
    "demo": "https://compre360.com",
    "status": "Completado",
  }
];