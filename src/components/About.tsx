export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Sobre Mí
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desarrollador apasionado por crear soluciones tecnológicas innovadoras
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Mi Historia</h3>
              <p className="text-gray-600 leading-relaxed">
                Soy un Técnico en Desarrollo y Mantenimiento de Software con experiencia sólida
                en el desarrollo de sistemas de gestión empresarial. Mi pasión por la tecnología
                me ha llevado a especializarme en el desarrollo Full Stack, trabajando en todas
                las etapas del ciclo de vida del desarrollo de software.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Trabaje en Quind como desarrollador Full Stack, donde desarrollo un
                ERP interno utilizando FastAPI y React, implementando el patrón de diseño atómico
                para maximizar la reutilización de componentes. También trabajo con Angular e Ionic
                en el desarrollo de aplicaciones móviles con arquitectura de microfrontends.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Actualmente, participo en el desarrollo de un e-commerce para una startup de Estados Unidos,
                utilizando Next.js y Nest.js. Implemento principios SOLID, patrón de diseño atómico,
                sistemas de autenticación seguros y gestión de bases de datos con PostgreSQL.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Mi experiencia incluye el desarrollo de sistemas completos como gestión de empleados
                en tiempo real con WebSocket, sistemas de contratación de docentes con Laravel y
                PostgreSQL, y aplicaciones de gestión de inventario para empresas con más de mil empleados.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Me caracterizo por mi habilidad para trabajar en equipo y adaptarme a nuevos entornos
                tecnológicos. Siempre busco implementar las mejores prácticas, escribir código limpio
                y crear soluciones eficientes y escalables que cumplan con los objetivos del cliente.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
              <div className="text-gray-700">Años de Experiencia</div>
            </div>
            <div className="bg-green-50 p-6 rounded-xl">
              <div className="text-3xl font-bold text-green-600 mb-2">10+</div>
              <div className="text-gray-700">Proyectos Completados</div>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
              <div className="text-gray-700">Tecnologías Dominadas</div>
            </div>
            <div className="bg-orange-50 p-6 rounded-xl">
              <div className="text-3xl font-bold text-orange-600 mb-2">4</div>
              <div className="text-gray-700">Empresas Trabajadas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}