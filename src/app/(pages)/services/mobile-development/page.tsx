
import { dateVersion } from '@/utils/dateVersion';
import { email } from '@/utils/consts/infoContact';
import { TemplateInfo } from '@/components/molecules/TemplateInfo';
import Link from 'next/link';

export const metadata = {
  title: 'Aplicaciones Móviles - Andrés Muñoz',
  description: 'Desarrollo de aplicaciones móviles y experiencias web responsivas. PWA, diseño mobile-first y optimización para dispositivos móviles.',
  openGraph: {
    title: 'Aplicaciones Móviles - Andrés Muñoz',
    description: 'Desarrollo de aplicaciones móviles y experiencias web responsivas. PWA, diseño mobile-first y optimización para dispositivos móviles.',
    url: 'https://portafolio-last.vercel.app/services/mobile-development',
  },
};

export default function MobileService() {
  return (
    <TemplateInfo
      title="Aplicaciones Móviles"
      subtitle={`Última actualización: ${dateVersion()}`}
    >
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Experiencias Móviles de Primera Clase</h2>
        <div className="space-y-4 text-gray-600">
          <p>
            En el mundo actual, el móvil es primero. Desarrollo soluciones que garantizan una experiencia de usuario excepcional en cualquier dispositivo,
            desde aplicaciones web progresivas (PWA) hasta diseños totalmente responsivos que se sienten como nativos.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Diseño Responsive y Adaptativo</h3>
              <p className="mb-3">
                Tu sitio web o aplicación se verá y funcionará perfectamente en smartphones, tablets y desktops.
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Diseño Mobile-First</li>
                <li>Interfaces táctiles intuitivas</li>
                <li>Adaptación a diferentes tamaños de pantalla</li>
                <li>Optimización de recursos para redes móviles</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Tecnologías Móviles</h3>
              <p className="mb-3">
                Utilizo tecnologías modernas para llevar la experiencia web al móvil.
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Progressive Web Apps (PWA)</li>
                <li>Capacidades offline</li>
                <li>Notificaciones push (cuando es soportado)</li>
                <li>Rendimiento nativo en la web</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Beneficios de una Estrategia Móvil</h2>
        <div className="space-y-4 text-gray-600">
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-green-500 mr-2 font-bold">✓</span>
              <span><strong>Mayor Alcance:</strong> Llega a usuarios dondequiera que estén.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 font-bold">✓</span>
              <span><strong>Mejor Conversión:</strong> Una buena experiencia móvil aumenta las ventas y el engagement.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 font-bold">✓</span>
              <span><strong>SEO Mejorado:</strong> Google prioriza sitios optimizados para móviles.</span>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Inicia tu Proyecto Móvil</h2>
        <div className="text-gray-600">
          <p className="mb-4">
            Asegura que tu presencia digital esté lista para el mundo móvil. Contáctame para discutir tus necesidades.
          </p>
          <Link href={`mailto:${email}`} className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Solicitar cotización
          </Link>
        </div>
      </section>
    </TemplateInfo>
  );
}
