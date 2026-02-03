import { dateVersion } from '@/utils/dateVersion';
import { email, phone, location } from '@/utils/consts/infoContact';
import { TemplateInfo } from '@/components/molecules/TemplateInfo';
import Link from 'next/link';

export const metadata = {
  title: 'Términos de Uso - Andrés Muñoz',
  description: 'Términos y condiciones de uso de servicios de desarrollo web',
};

export default function TermsOfService() {
  return (
    <TemplateInfo
      title="Términos de Uso"
      subtitle={`Última actualización: ${dateVersion()}`}
    >
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Aceptación de los Términos</h2>
        <div className="space-y-4 text-gray-600">
          <p>
            Al acceder y utilizar este sitio web y contratar mis servicios de desarrollo web,
            usted acepta estar sujeto a estos Términos de Uso y todas las leyes y regulaciones
            aplicables. Si no está de acuerdo con alguno de estos términos, no debe utilizar
            este sitio web ni contratar mis servicios.
          </p>
          <p>
            Estos términos se aplican a todos los visitantes, usuarios y otras personas que
            accedan o utilicen el servicio.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Descripción de Servicios</h2>
        <div className="space-y-4 text-gray-600">
          <p>
            Ofrezco servicios profesionales de desarrollo web que incluyen, pero no se limitan a:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Desarrollo de sitios web y aplicaciones web</li>
            <li>Desarrollo frontend con React, Next.js y tecnologías modernas</li>
            <li>Desarrollo backend con Node.js, APIs REST y bases de datos</li>
            <li>Consultoría técnica y arquitectura de software</li>
            <li>Optimización de rendimiento y SEO</li>
            <li>Mantenimiento y soporte técnico</li>
            <li>Integración de servicios de terceros</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Proceso de Contratación</h2>
        <div className="space-y-4 text-gray-600">
          <h3 className="text-lg font-semibold text-gray-800">3.1 Consulta Inicial</h3>
          <p>
            Toda colaboración comienza con una consulta inicial gratuita para entender
            sus necesidades y objetivos del proyecto.
          </p>

          <h3 className="text-lg font-semibold text-gray-800">3.2 Propuesta y Cotización</h3>
          <p>
            Después de la consulta, proporcionaré una propuesta detallada que incluye:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Alcance del proyecto y entregables</li>
            <li>Cronograma estimado</li>
            <li>Costo total y estructura de pagos</li>
            <li>Términos específicos del proyecto</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-800">3.3 Contrato de Servicios</h3>
          <p>
            Una vez aceptada la propuesta, se firmará un contrato específico que detalla
            todos los aspectos del proyecto, incluyendo entregables, plazos y condiciones de pago.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Términos de Pago</h2>
        <div className="space-y-4 text-gray-600">
          <h3 className="text-lg font-semibold text-gray-800">4.1 Estructura de Pagos</h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Proyectos pequeños (menos de $1,000 USD):</strong> 50% al inicio, 50% al completar</li>
            <li><strong>Proyectos medianos ($1,000 - $5,000 USD):</strong> 30% al inicio, 40% a mitad del proyecto, 30% al completar</li>
            <li><strong>Proyectos grandes (más de $5,000 USD):</strong> Pagos mensuales o por hitos según se acuerde</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-800">4.2 Métodos de Pago</h3>
          <p>Acepto los siguientes métodos de pago:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Transferencia bancaria</li>
            <li>PayPal</li>
            <li>Stripe (tarjetas de crédito/débito)</li>
            <li>Criptomonedas (para proyectos internacionales)</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-800">4.3 Términos de Pago</h3>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Los pagos vencen dentro de 15 días de la fecha de factura</li>
            <li>Los pagos atrasados pueden incurrir en cargos por mora del 1.5% mensual</li>
            <li>El trabajo puede suspenderse si los pagos se retrasan más de 30 días</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Derechos de Propiedad Intelectual</h2>
        <div className="space-y-4 text-gray-600">
          <h3 className="text-lg font-semibold text-gray-800">5.1 Código Personalizado</h3>
          <p>
            Todo el código personalizado desarrollado específicamente para su proyecto
            se transfiere al cliente una vez completado el pago final.
          </p>

          <h3 className="text-lg font-semibold text-gray-800">5.2 Componentes Reutilizables</h3>
          <p>
            Me reservo el derecho de reutilizar componentes, técnicas y conocimientos
            generales adquiridos durante el desarrollo de su proyecto en futuros trabajos.
          </p>

          <h3 className="text-lg font-semibold text-gray-800">5.3 Bibliotecas de Terceros</h3>
          <p>
            Las bibliotecas y frameworks de terceros utilizados mantienen sus licencias originales.
          </p>

          <h3 className="text-lg font-semibold text-gray-800">5.4 Portafolio y Referencias</h3>
          <p>
            Tengo derecho a incluir el proyecto en mi portafolio y usar como referencia,
            a menos que se acuerde específicamente lo contrario por escrito.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Responsabilidades del Cliente</h2>
        <div className="space-y-4 text-gray-600">
          <p>El cliente se compromete a:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Proporcionar información precisa y completa sobre los requisitos del proyecto</li>
            <li>Suministrar contenido, imágenes y materiales necesarios en tiempo oportuno</li>
            <li>Proporcionar acceso a sistemas, cuentas y servicios necesarios</li>
            <li>Revisar y aprobar entregables dentro de los plazos acordados</li>
            <li>Realizar pagos según el cronograma establecido</li>
            <li>Comunicar cambios o problemas de manera oportuna</li>
            <li>Respetar los derechos de propiedad intelectual de terceros</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Garantías y Limitaciones</h2>
        <div className="space-y-4 text-gray-600">
          <h3 className="text-lg font-semibold text-gray-800">7.1 Garantía de Calidad</h3>
          <p>
            Garantizo que todo el trabajo se realizará con estándares profesionales
            y mejores prácticas de la industria.
          </p>

          <h3 className="text-lg font-semibold text-gray-800">7.2 Período de Garantía</h3>
          <p>
            Ofrezco un período de garantía de 90 días después de la entrega final
            para corregir errores o bugs sin costo adicional.
          </p>

          <h3 className="text-lg font-semibold text-gray-800">7.3 Limitaciones</h3>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>No garantizo resultados específicos de negocio o tráfico web</li>
            <li>No soy responsable por contenido proporcionado por el cliente</li>
            <li>No garantizo compatibilidad con versiones futuras de navegadores o tecnologías</li>
            <li>La responsabilidad total está limitada al monto pagado por el proyecto</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Modificaciones y Cancelaciones</h2>
        <div className="space-y-4 text-gray-600">
          <h3 className="text-lg font-semibold text-gray-800">8.1 Cambios en el Alcance</h3>
          <p>
            Los cambios significativos en el alcance del proyecto pueden requerir
            ajustes en el cronograma y costo, que se documentarán por escrito.
          </p>

          <h3 className="text-lg font-semibold text-gray-800">8.2 Cancelación por el Cliente</h3>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>El cliente puede cancelar el proyecto con 7 días de aviso por escrito</li>
            <li>Se facturará todo el trabajo completado hasta la fecha de cancelación</li>
            <li>Los pagos iniciales no son reembolsables</li>
            <li>Se entregará todo el trabajo completado hasta la fecha</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-800">8.3 Cancelación por el Desarrollador</h3>
          <p>
            Me reservo el derecho de cancelar el proyecto en caso de:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Falta de pago persistente</li>
            <li>Falta de cooperación del cliente</li>
            <li>Solicitudes que violen leyes o regulaciones</li>
            <li>Comportamiento abusivo o irrespetuoso</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Confidencialidad</h2>
        <div className="space-y-4 text-gray-600">
          <p>
            Me comprometo a mantener la confidencialidad de toda la información
            sensible del cliente, incluyendo:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Información comercial y estratégica</li>
            <li>Datos de usuarios y clientes</li>
            <li>Código fuente y arquitectura técnica</li>
            <li>Información financiera</li>
            <li>Cualquier información marcada como confidencial</li>
          </ul>
          <p>
            Esta obligación de confidencialidad permanece vigente incluso después
            de la finalización del proyecto.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Resolución de Disputas</h2>
        <div className="space-y-4 text-gray-600">
          <h3 className="text-lg font-semibold text-gray-800">10.1 Comunicación Directa</h3>
          <p>
            Cualquier disputa debe intentar resolverse primero a través de
            comunicación directa y de buena fe.
          </p>

          <h3 className="text-lg font-semibold text-gray-800">10.2 Mediación</h3>
          <p>
            Si la comunicación directa no resuelve la disputa, las partes
            pueden optar por mediación antes de proceder a acciones legales.
          </p>

          <h3 className="text-lg font-semibold text-gray-800">10.3 Jurisdicción</h3>
          <p>
            Estos términos se rigen por las leyes de Colombia, y cualquier
            disputa legal se resolverá en los tribunales de Medellín, Colombia.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Modificaciones de los Términos</h2>
        <div className="space-y-4 text-gray-600">
          <p>
            Me reservo el derecho de modificar estos términos en cualquier momento.
            Los cambios significativos se notificarán a los clientes activos con
            al menos 30 días de anticipación.
          </p>
          <p>
            El uso continuado de los servicios después de las modificaciones
            constituye la aceptación de los nuevos términos.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contacto</h2>
        <div className="space-y-4 text-gray-600">
          <p>
            Para preguntas sobre estos Términos de Uso o para discutir un proyecto,
            puede contactarme:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p><strong>Andrés Muñoz</strong></p>
            <p>Desarrollador Full Stack</p>
            <p>Email:
              <Link
                href={`mailto:${email}`}
                className="text-blue-600 hover:text-blue-700">
                {email}
              </Link>
            </p>
            <p>Teléfono: {phone}</p>
            <p>Ubicación: {location}</p>
          </div>
        </div>
      </section>
    </TemplateInfo>
  );
}