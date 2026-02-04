
import { dateVersion } from '@/utils/dateVersion';
import { email } from '@/utils/consts/infoContact';
import { TemplateInfo } from '@/components/molecules/TemplateInfo';
import Link from 'next/link';

export const metadata = {
  title: 'Desarrollo Web Full Stack - Andrés Muñoz',
  description: 'Servicios de desarrollo web Full Stack con tecnologías modernas como React, Next.js, Node.js y más. Creación de aplicaciones escalables y robustas.',
  openGraph: {
    title: 'Desarrollo Web Full Stack - Andrés Muñoz',
    description: 'Servicios de desarrollo web Full Stack con tecnologías modernas como React, Next.js, Node.js y más.',
    url: 'https://portafolio-last.vercel.app/services/full-stack-development',
  },
};

export default function FullStackService() {
  return (
    <TemplateInfo
      title="Desarrollo Web Full Stack"
      subtitle={`Última actualización: ${dateVersion()}`}
    >
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Soluciones Web Integrales</h2>
        <div className="space-y-4 text-gray-600">
          <p>
            Ofrezco servicios de desarrollo web end-to-end, creando aplicaciones robustas, escalables y de alto rendimiento.
            Mi enfoque abarca desde la arquitectura del servidor hasta la interfaz de usuario, asegurando una experiencia fluida y coherente.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Frontend Moderno</h3>
              <p className="mb-3">
                Interfaces dinámicas y responsivas construidas con las últimas tecnologías.
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>React & Next.js para renderizado óptimo</li>
                <li>Tailwind CSS para diseños personalizados</li>
                <li>TypeScript para código seguro y mantenible</li>
                <li>Micro-frontends para aplicaciones complejas</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Backend Robusto</h3>
              <p className="mb-3">
                APIs y servicios diseñados para escalar y manejar lógica de negocio compleja.
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Node.js & Express/NestJS</li>
                <li>Bases de datos SQL (PostgreSQL) y NoSQL (MongoDB)</li>
                <li>Integración de servicios Serverless (AWS Lambda)</li>
                <li>Autenticación y seguridad avanzada</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Por qué elegir mi servicio Full Stack?</h2>
        <div className="space-y-4 text-gray-600">
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-green-500 mr-2 font-bold">✓</span>
              <span><strong>Arquitectura Escalable:</strong> Diseños pensados para crecer con tu negocio.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 font-bold">✓</span>
              <span><strong>Rendimiento Optimizado:</strong> Tiempos de carga rápidos y mejores Core Web Vitals.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 font-bold">✓</span>
              <span><strong>Código Limpio:</strong> Mantenibilidad a largo plazo garantizada.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 font-bold">✓</span>
              <span><strong>Enfoque en el Usuario:</strong> UX/UI intuitiva y accesible.</span>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Hablemos de tu Proyecto</h2>
        <div className="text-gray-600">
          <p className="mb-4">
            ¿Tienes una idea en mente o necesitas modernizar tu plataforma actual? Estoy listo para ayudarte a llevar tu proyecto al siguiente nivel.
          </p>
          <Link href={`mailto:${email}`} className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Contactar ahora
          </Link>
        </div>
      </section>
    </TemplateInfo>
  );
}
