export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Plataforma de comercio electrónico completa con panel de administración, gestión de inventario, procesamiento de pagos y análisis en tiempo real.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      features: [
        "Carrito de compras en tiempo real",
        "Panel de administración completo",
        "Integración con pasarelas de pago",
        "Sistema de inventario automatizado"
      ],
      github: "#",
      demo: "#",
      status: "Completado"
    },
    {
      title: "Task Management App",
      description: "Aplicación de gestión de tareas colaborativa con funcionalidades de tiempo real, asignación de equipos y seguimiento de progreso.",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io", "Tailwind"],
      features: [
        "Colaboración en tiempo real",
        "Gestión de equipos",
        "Notificaciones push",
        "Dashboard analítico"
      ],
      github: "#",
      demo: "#",
      status: "En desarrollo"
    },
    {
      title: "Weather Dashboard",
      description: "Dashboard meteorológico interactivo con pronósticos detallados, mapas interactivos y alertas personalizadas basadas en ubicación.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "D3.js", "OpenWeather API", "Mapbox", "Chart.js"],
      features: [
        "Pronósticos de 7 días",
        "Mapas interactivos",
        "Alertas personalizadas",
        "Visualización de datos avanzada"
      ],
      github: "#",
      demo: "#",
      status: "Completado"
    },
    {
      title: "Social Media Analytics",
      description: "Herramienta de análisis de redes sociales que proporciona insights detallados sobre engagement, alcance y tendencias de contenido.",
      image: "/api/placeholder/400/250",
      technologies: ["Vue.js", "Python", "FastAPI", "MongoDB", "Redis"],
      features: [
        "Análisis de múltiples plataformas",
        "Reportes automatizados",
        "Predicción de tendencias",
        "API REST completa"
      ],
      github: "#",
      demo: "#",
      status: "Completado"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Una selección de mis trabajos más recientes y significativos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-400 to-purple-500 overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Completado' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-6xl opacity-20">
                    <svg fill="currentColor" viewBox="0 0 20 20" className="w-16 h-16">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Características principales:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-600 text-xs flex items-start">
                        <span className="text-blue-500 mr-2 mt-0.5">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.demo}
                    className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    Ver Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex-1 border border-gray-300 text-gray-700 text-center py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
                  >
                    Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">¿Interesado en ver más proyectos?</p>
          <a
            href="#contact"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Hablemos sobre tu proyecto
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}