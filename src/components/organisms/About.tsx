import { Section } from '../atoms/Section';
import { Container } from '../atoms/Container';
import { SectionHeader } from '../molecules/SectionHeader';
import { Typography } from '../atoms/Typography';

export default function About() {
  return (
    <Section id="about">
      <Container>
        <SectionHeader
          title="Sobre Mí"
          subtitle="Desarrollador apasionado por crear soluciones tecnológicas innovadoras"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6">
              <Typography variant="h3">Mi Historia</Typography>
              <Typography variant="body" className="leading-relaxed">
                Soy un Técnico en Desarrollo y Mantenimiento de Software con experiencia sólida
                en el desarrollo de sistemas de gestión empresarial. Mi pasión por la tecnología
                me ha llevado a especializarme en el desarrollo Full Stack, trabajando en todas
                las etapas del ciclo de vida del desarrollo de software.
              </Typography>
              <Typography variant="body" className="leading-relaxed">
                Trabaje en Quind como desarrollador Full Stack, donde desarrollo un
                ERP interno utilizando FastAPI y React, implementando el patrón de diseño atómico
                para maximizar la reutilización de componentes. También trabajo con Angular e Ionic
                en el desarrollo de aplicaciones móviles con arquitectura de microfrontends.
              </Typography>
              <Typography variant="body" className="leading-relaxed">
                Actualmente, participo en el desarrollo de un e-commerce para una startup de Estados Unidos,
                utilizando Next.js y Nest.js. Implemento principios SOLID, patrón de diseño atómico,
                sistemas de autenticación seguros y gestión de bases de datos con PostgreSQL.
              </Typography>
              <Typography variant="body" className="leading-relaxed">
                Mi experiencia incluye el desarrollo de sistemas completos como gestión de empleados
                en tiempo real con WebSocket, sistemas de contratación de docentes con Laravel y
                PostgreSQL, y aplicaciones de gestión de inventario para empresas con más de mil empleados.
              </Typography>
              <Typography variant="body" className="leading-relaxed">
                Me caracterizo por mi habilidad para trabajar en equipo y adaptarme a nuevos entornos
                tecnológicos. Siempre busco implementar las mejores prácticas, escribir código limpio
                y crear soluciones eficientes y escalables que cumplan con los objetivos del cliente.
              </Typography>
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
      </Container>
    </Section>
  );
}