
import { dateVersion } from '@/utils/dateVersion';
import { email } from '@/utils/consts/infoContact';
import { TemplateInfo } from '@/components/molecules/TemplateInfo';
import Link from 'next/link';

export const metadata = {
  title: 'Consultoría Técnica - Andrés Muñoz',
  description: 'Consultoría en arquitectura de software, nube y mejores prácticas de desarrollo. DevOps, AWS y optimización de equipos técnicos.',
  openGraph: {
    title: 'Consultoría Técnica - Andrés Muñoz',
    description: 'Consultoría en arquitectura de software, nube y mejores prácticas de desarrollo. DevOps, AWS y optimización de equipos técnicos.',
    url: 'https://portafolio-last.vercel.app/services/technical-consulting',
  },
};

export default function ConsultingService() {
  return (
    <TemplateInfo
      title="Consultoría Técnica"
      subtitle={`Última actualización: ${dateVersion()}`}
    >
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Experiencia al Servicio de tu Equipo</h2>
        <div className="space-y-4 text-gray-600">
          <p>
            No solo escribo código, también ayudo a equipos y empresas a tomar las mejores decisiones tecnológicas.
            Desde la definición de arquitecturas escalables hasta la implementación de flujos de trabajo eficientes,
            mi objetivo es potenciar tu capacidad técnica.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Arquitectura y Diseño</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Diseño de sistemas distribuidos</li>
                <li>Implementación de Atomic Design</li>
                <li>Selección de stack tecnológico</li>
                <li>Auditoría de código y refactorización</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">DevOps y Nube</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Configuración de servicios AWS (Lambda, S3, etc.)</li>
                <li>Containerización con Docker</li>
                <li>Pipelines CI/CD</li>
                <li>Optimización de costos en la nube</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Cómo puedo ayudar?</h2>
        <div className="space-y-4 text-gray-600">
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-green-500 mr-2 font-bold">✓</span>
              <span><strong>Resolución de Problemas Complejos:</strong> Análisis y solución de cuellos de botella y deuda técnica.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 font-bold">✓</span>
              <span><strong>Mentoria Técnica:</strong> Guía para equipos de desarrollo en crecimiento.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 font-bold">✓</span>
              <span><strong>Estandarización:</strong> Implementación de buenas prácticas y convenciones.</span>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Mejora tu Infraestructura Tecnológica</h2>
        <div className="text-gray-600">
          <p className="mb-4">
            Hablemos sobre los desafíos técnicos de tu proyecto y cómo superarlos con una estrategia sólida.
          </p>
          <Link href={`mailto:${email}`} className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Agendar consultoría
          </Link>
        </div>
      </section>
    </TemplateInfo>
  );
}
