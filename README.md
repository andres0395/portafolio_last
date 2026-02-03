# Portafolio Profesional - Andrés Muñoz

Este repositorio contiene el código fuente de mi portafolio profesional personal, diseñado para demostrar mis habilidades como Desarrollador Full Stack. La aplicación está construida con tecnologías modernas, enfocándose en el rendimiento, la accesibilidad y una arquitectura escalable.

## 🚀 Tecnologías Principales

El proyecto utiliza un stack tecnológico robusto y moderno:

-   **Framework Principal**: [Next.js 15](https://nextjs.org/) (App Router)
-   **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
-   **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
-   **Arquitectura**: [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) (Organización de componentes en Atoms, Molecules, Organisms, Templates)

## ✨ Características Destacadas

### 1. Arquitectura de Diseño Atómico
El proyecto sigue estrictamente la metodología Atomic Design para garantizar la reutilización y consistencia de los componentes UI.
-   `src/components/atoms`: Componentes indivisibles (Botones, Inputs, Tipografía).
-   `src/components/molecules`: Combinaciones de átomos (FormGroups, Tarjetas de Info).
-   `src/components/organisms`: Secciones complejas (Header, Hero, Projects, ContactForm).

### 2. Generación de PDF Dinámica
Implementación de funcionalidad para descargar el CV en formato PDF generado al vuelo.
-   Utiliza `@react-pdf/renderer` para renderizar el documento en el cliente.
-   Los datos se alimentan directamente de los archivos de utilidades (`src/utils/*.ts`), asegurando que el PDF siempre esté sincronizado con la información mostrada en la web.

### 3. Sistema de Contacto Seguro
Formulario de contacto funcional con múltiples capas de seguridad y feedback de usuario.
-   **Backend**: API Route (`api/contact`) segura.
-   **Envío de Correos**: Integración con `nodemailer` para envío SMTP.
-   **Seguridad**:
    -   **Cloudflare Turnstile**: Protección contra bots sin fricción (sin CAPTCHA visible).
    -   **Honeypot**: Campo oculto para atrapar bots simples.
    -   **Rate Limiting**: Limitación de tasa basada en IP (Token Bucket en memoria).
    -   **Verificación de Origen**: Protección CSRF.
    -   **Sanitisación**: Uso de `xss` para limpiar todas las entradas y prevenir inyecciones.
-   **Validación**: Validación estricta con `zod` tanto en cliente como en servidor.
-   **Feedback**: Notificaciones toast con `react-hot-toast`.

## 🛠️ Instalación y Configuración

1.  **Clonar el repositorio**
    ```bash
    git clone https://github.com/andres0395/portafolio_last.git
    cd portafolio_last
    ```

2.  **Instalar dependencias**
    ```bash
    npm install
    ```

3.  **Configurar Variables de Entorno**
    Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

    # Configuración de la Aplicación
    NEXT_PUBLIC_EMAIL="tu-email@gmail.com"
    NEXT_PUBLIC_PHONE="tu-telefono"
    NEXT_PUBLIC_LOCATION="tu-ubicacion"
    NEXT_PUBLIC_APP_NAME="Portafolio Andrés Muñoz"
    NEXT_PUBLIC_APP_URL="http://localhost:3000" # Cambiar en producción

    # Configuración de Correo (Gmail SMTP ejemplo)
    EMAIL_HOST="smtp.gmail.com"
    EMAIL_PORT=465
    EMAIL_SECURE=true
    EMAIL_USER="tu-email@gmail.com"
    EMAIL_PASS="tu-contraseña-de-aplicación"
    EMAIL_FROM="tu-email@gmail.com"

    # Seguridad - Cloudflare Turnstile
    NEXT_PUBLIC_TURNSTILE_SITE_KEY="tu-site-key"
    TURNSTILE_SECRET_KEY="tu-secret-key"
    ```

4.  **Ejecutar el servidor de desarrollo**
    ```bash
    npm run dev
    ```
    Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del Proyecto

```
src/
├── app/                    # Rutas de Next.js (App Router)
│   ├── api/                # API Routes (Backend)
│   └── (pages)/            # Páginas de la aplicación
├── components/             # Componentes UI (Atomic Design)
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   └── pdf/                # Componentes específicos para el PDF
├── hooks/                  # Custom Hooks (Lógica encapsulada)
├── lib/                    # Librerías y utilidades de backend/shared
│   ├── services/           # Servicios (EmailService)
│   └── validations/        # Schemas de Zod
└── utils/                  # Datos constantes (Info del portafolio)
```

## 📄 Licencia

Este proyecto es de uso personal para demostración de portafolio.
