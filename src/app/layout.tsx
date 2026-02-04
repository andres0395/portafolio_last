import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://portafolio-last.vercel.app'),
  title: {
    default: "Andrés Felipe Muñoz Acevedo - Desarrollador Full Stack",
    template: "%s | Andrés Muñoz"
  },
  description: "Desarrollador Web Full Stack especializado en Angular, React, FastAPI, Node.js y tecnologías modernas. Servicios de desarrollo web, móvil y consultoría técnica.",
  keywords: ["Desarrollador Web", "Full Stack", "Andrés Muñoz", "React", "Next.js", "Angular", "FastAPI", "Colombia", "Freelance", "Desarrollo de Software"],
  authors: [{ name: 'Andrés Felipe Muñoz Acevedo', url: 'https://portafolio-last.vercel.app' }],
  creator: 'Andrés Felipe Muñoz Acevedo',
  openGraph: {
    title: 'Andrés Felipe Muñoz Acevedo - Desarrollador Full Stack',
    description: 'Portafolio profesional y servicios de desarrollo web Full Stack. Especialista en crear soluciones digitales escalables y modernas.',
    url: 'https://portafolio-last.vercel.app',
    siteName: 'Portafolio Andrés Muñoz',
    locale: 'es_CO',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg', // Assuming a default or will create one, or standard next.js convention
        width: 1200,
        height: 630,
        alt: 'Andrés Muñoz - Desarrollador Full Stack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Andrés Felipe Muñoz Acevedo - Desarrollador Full Stack',
    description: 'Desarrollador Web Full Stack especializado en Angular, React, FastAPI y tecnologías modernas.',
    creator: '@andresmunoz', // Placeholder if not known
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster position="top-right" />
        {children}
      </body>
    </html>
  );
}
