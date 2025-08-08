export default function Experience() {
  const experiences = [
    {
      title: "Desarrollador Web",
      company: "Quind",
      period: "Noviembre 2024 - Actualidad",
      description: "Desarrollo como Full Stack con FastAPI y React como frameworks principales en el desarrollo de un ERP interno. Implementación del patrón de diseño atómico para maximizar la reutilización. Desarrollo con Angular e Ionic para aplicaciones móviles utilizando microfrontends.",
      technologies: ["FastAPI", "React", "Angular", "Ionic", "Tailwind", "MySQL", "AWS Lambda", "SQLAlchemy", "Pydantic"],
      achievements: [
        "Implementé patrón de diseño atómico para máxima reutilización de componentes",
        "Desarrollé ERP interno con FastAPI y React",
        "Trabajé con arquitectura de microfrontends en aplicaciones móviles"
      ]
    },
    {
      title: "Desarrollador Web Freelance",
      company: "Independiente",
      period: "Agosto 2024 - Octubre 2024",
      description: "Creación de aplicaciones web dinámicas y personalizadas. Especialización en JavaScript, Angular, Node.js, HTML, CSS y bases de datos como MongoDB y PostgreSQL. Enfoque en soluciones eficientes y escalables.",
      technologies: ["JavaScript", "Angular", "Node.js", "HTML", "CSS", "MongoDB", "PostgreSQL"],
      achievements: [
        "Desarrollé aplicaciones web personalizadas para múltiples clientes",
        "Implementé soluciones escalables frontend y backend",
        "Enfoque en calidad, seguridad y usabilidad"
      ]
    },
    {
      title: "Tutoría en Angular",
      company: "Independiente",
      period: "Marzo 2024 - Junio 2024",
      description: "Impartí Angular a nivel avanzado a estudiantes universitarios. Desarrollé un sistema completo de contratación de docentes con alertas automáticas, validación de períodos de contratos y gestión avanzada de usuarios.",
      technologies: ["Angular", "Laravel", "PostgreSQL", "TypeScript"],
      achievements: [
        "Enseñé Angular avanzado con buenas prácticas y patrones modernos",
        "Desarrollé sistema completo de contratación de docentes",
        "Implementé alertas automáticas y validación de contratos"
      ]
    },
    {
      title: "Desarrollador Web",
      company: "Beauty Plus",
      period: "Junio 2023 - Febrero 2024",
      description: "Especialización en Angular, TypeScript y Node.js. Desarrollé un sistema completo de gestión de empleados en tiempo real implementando WebSocket para actualización instantánea de datos. Responsable del diseño y desarrollo completo del módulo de nómina.",
      technologies: ["Angular", "TypeScript", "Node.js", "WebSocket"],
      achievements: [
        "Desarrollé sistema de gestión de empleados en tiempo real",
        "Implementé WebSocket para actualización instantánea de datos",
        "Diseñé y desarrollé módulo completo de nómina"
      ]
    },
    {
      title: "Desarrollador Web Junior",
      company: "Cinco S.A.S",
      period: "Septiembre 2022 - Febrero 2023",
      description: "Durante mis prácticas, desarrollé desde cero una aplicación web de gestión de inventario para una empresa con más de mil empleados. Responsable del diseño de interfaz de usuario y desarrollo de algoritmos para consistencia de datos.",
      technologies: ["PHP", "JavaScript", "MySQL", "HTML", "CSS"],
      achievements: [
        "Desarrollé aplicación de gestión de inventario desde cero",
        "Diseñé interfaz para empresa con 1000+ empleados",
        "Implementé algoritmos para consistencia y precisión de datos"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Experiencia Profesional
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mi trayectoria profesional en el desarrollo de software
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-blue-200"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 md:mb-16">
              <div className={`flex flex-col md:flex-row items-start md:items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                      <p className="text-blue-600 font-semibold">{exp.company}</p>
                      <p className="text-gray-500 text-sm">{exp.period}</p>
                    </div>

                    <p className="text-gray-600 mb-4">{exp.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Logros principales:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-gray-600 text-sm flex items-start">
                            <span className="text-green-500 mr-2 mt-1">✓</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}