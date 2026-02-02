import { dateVersion } from '@/utils/dateVersion';
import Link from 'next/link';

export const metadata = {
  title: 'Política de Privacidad - Andrés Muñoz',
  description: 'Política de privacidad y protección de datos personales',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al inicio
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Política de Privacidad
          </h1>
          <p className="text-xl text-gray-600">
            Última actualización: {dateVersion()}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Información que Recopilamos</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Como desarrollador freelance, recopilo únicamente la información necesaria para
                proporcionar mis servicios profesionales de desarrollo web.
              </p>
              <h3 className="text-lg font-semibold text-gray-800">Información Personal:</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Nombre completo</li>
                <li>Dirección de correo electrónico</li>
                <li>Número de teléfono (opcional)</li>
                <li>Información del proyecto o consulta</li>
                <li>Empresa u organización (si aplica)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Cómo Utilizamos su Información</h2>
            <div className="space-y-4 text-gray-600">
              <p>La información recopilada se utiliza exclusivamente para:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Responder a sus consultas y solicitudes de servicios</li>
                <li>Proporcionar cotizaciones y propuestas de proyectos</li>
                <li>Comunicarnos durante el desarrollo de proyectos</li>
                <li>Enviar actualizaciones sobre el progreso del trabajo</li>
                <li>Facturación y gestión de pagos</li>
                <li>Mejorar la calidad de nuestros servicios</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Protección de Datos</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Implemento medidas de seguridad técnicas y organizativas apropiadas para
                proteger su información personal contra acceso no autorizado, alteración,
                divulgación o destrucción.
              </p>
              <h3 className="text-lg font-semibold text-gray-800">Medidas de Seguridad:</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Cifrado de datos en tránsito y en reposo</li>
                <li>Acceso restringido a información personal</li>
                <li>Copias de seguridad regulares y seguras</li>
                <li>Actualizaciones de seguridad constantes</li>
                <li>Uso de servicios de hosting seguros y confiables</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Compartir Información</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                <strong>No vendo, alquilo o comparto</strong> su información personal con terceros,
                excepto en las siguientes circunstancias limitadas:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Con su consentimiento explícito</li>
                <li>Para cumplir con obligaciones legales</li>
                <li>Con proveedores de servicios esenciales (hosting, email) bajo estrictos acuerdos de confidencialidad</li>
                <li>En caso de transferencia de negocio (con notificación previa)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies y Tecnologías Similares</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Este sitio web utiliza cookies y tecnologías similares para mejorar la experiencia del usuario:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Cookies esenciales:</strong> Necesarias para el funcionamiento básico del sitio</li>
                <li><strong>Cookies de rendimiento:</strong> Para analizar el uso del sitio y mejorar la experiencia</li>
                <li><strong>Cookies de funcionalidad:</strong> Para recordar preferencias del usuario</li>
              </ul>
              <p className="mt-4">
                Puede controlar las cookies a través de la configuración de su navegador.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Sus Derechos</h2>
            <div className="space-y-4 text-gray-600">
              <p>Usted tiene derecho a:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Acceso:</strong> Solicitar una copia de su información personal</li>
                <li><strong>Rectificación:</strong> Corregir información inexacta o incompleta</li>
                <li><strong>Eliminación:</strong> Solicitar la eliminación de su información personal</li>
                <li><strong>Portabilidad:</strong> Recibir sus datos en un formato estructurado</li>
                <li><strong>Oposición:</strong> Oponerse al procesamiento de sus datos</li>
                <li><strong>Limitación:</strong> Solicitar la limitación del procesamiento</li>
              </ul>
              <p className="mt-4">
                Para ejercer estos derechos, contácteme en:
                <a href="mailto:andres.Muñoz@email.com" className="text-blue-600 hover:text-blue-700 ml-1">
                  andres.Muñoz@email.com
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Retención de Datos</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Conservo su información personal solo durante el tiempo necesario para:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Cumplir con los propósitos para los que fue recopilada</li>
                <li>Satisfacer requisitos legales, contables o de informes</li>
                <li>Resolver disputas y hacer cumplir acuerdos</li>
              </ul>
              <p className="mt-4">
                Generalmente, los datos se conservan durante 7 años después de la finalización
                del proyecto, salvo que la ley requiera un período diferente.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cambios en esta Política</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Puedo actualizar esta Política de Privacidad ocasionalmente. Los cambios
                significativos serán notificados a través de:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Aviso prominente en este sitio web</li>
                <li>Notificación por correo electrónico (si tengo su dirección)</li>
                <li>Actualización de la fecha de &apos;última actualización&apos;</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contacto</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Si tiene preguntas sobre esta Política de Privacidad o sobre cómo manejo
                su información personal, puede contactarme:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Andrés Muñoz</strong></p>
                <p>Desarrollador Full Stack</p>
                <p>Email: <a href="mailto:andres.Muñoz@email.com" className="text-blue-600 hover:text-blue-700">andres.Muñoz@email.com</a></p>
                <p>Teléfono: +57 300 123 4567</p>
                <p>Ubicación: Bogotá, Colombia</p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="mt-12 text-center">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              Inicio
            </Link>
            <Link
              href="/terms"
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              Términos de Uso
            </Link>
            <Link
              href="#contact"
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}