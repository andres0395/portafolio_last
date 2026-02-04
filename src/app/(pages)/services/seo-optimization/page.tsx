
import { dateVersion } from '@/utils/dateVersion';
import { email } from '@/utils/consts/infoContact';
import { TemplateInfo } from '@/components/molecules/TemplateInfo';
import Link from 'next/link';

export const metadata = {
  title: 'Optimización y SEO - Andrés Muñoz',
  description: 'Servicios de optimización de rendimiento web y posicionamiento en buscadores (SEO).',
};

export default function SEOService() {
  return (
    <TemplateInfo
      title="Optimización y SEO"
      subtitle={`Última actualización: ${dateVersion()}`}
    >
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Visibilidad y Rendimiento</h2>
        <div className="space-y-4 text-gray-600">
          <p>
            Un sitio web rápido y bien posicionado es esencial para el éxito digital.
            Me especializo en optimizar cada aspecto técnico de tu aplicación para asegurar que sea rápida, accesible y fácil de encontrar para los motores de búsqueda.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">SEO Técnico</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Estructura semántica HTML5</li>
                <li>Optimización de metadatos y Open Graph</li>
                <li>Sitemaps y configuración de robots.txt</li>
                <li>Server-Side Rendering (SSR) con Next.js</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Performance Web</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Mejora de Core Web Vitals</li>
                <li>Optimización de imágenes (Next.js Image)</li>
                <li>Lazy loading y code splitting</li>
                <li>Accesibilidad (WCAG)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Resultados Medibles</h2>
        <div className="space-y-4 text-gray-600">
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-green-500 mr-2 font-bold">✓</span>
              <span><strong>Velocidad:</strong> Cargas instantáneas que reducen la tasa de rebote.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 font-bold">✓</span>
              <span><strong>Ranking:</strong> Mejor posición en los resultados de búsqueda de Google.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 font-bold">✓</span>
              <span><strong>Inclusión:</strong> Sitios accesibles para todos los usuarios.</span>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Optimiza tu Presencia Digital</h2>
        <div className="text-gray-600">
          <p className="mb-4">
            No dejes que un sitio lento o mal estructurado te haga perder clientes. Analicemos y mejoremos tu web hoy mismo.
          </p>
          <Link href={`mailto:${email}`} className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Solicitar auditoría
          </Link>
        </div>
      </section>
    </TemplateInfo>
  );
}
