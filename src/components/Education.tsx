export default function Education() {
  const education = [
    {
      degree: "Tecnólogo en Desarrollo de Software",
      institution: "SENA",
      period: "Octubre 2024 - En curso",
      status: "En curso",
      description: "Formación avanzada en desarrollo de software con enfoque en metodologías ágiles, arquitectura de software y tecnologías emergentes."
    },
    {
      degree: "Técnico en Desarrollo Web",
      institution: "SENA",
      period: "Noviembre 2021 - Febrero 2023",
      status: "Completado",
      description: "Formación técnica especializada en desarrollo web, incluyendo frontend, backend, bases de datos y metodologías de desarrollo."
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Educación
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mi formación académica en desarrollo de software y tecnologías web
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                  <p className="text-xl text-blue-600 font-semibold mb-2">{edu.institution}</p>
                  <p className="text-gray-500 mb-4">{edu.period}</p>
                </div>
                <div className="flex-shrink-0">
                  <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                    edu.status === 'En curso' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {edu.status}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed">{edu.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Competencias Desarrolladas</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Desarrollo Full Stack</h4>
              <p className="text-gray-600">Capacidad para trabajar en todas las etapas del ciclo de vida del desarrollo de software</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Trabajo en Equipo</h4>
              <p className="text-gray-600">Habilidad para colaborar efectivamente y adaptarse a nuevos entornos tecnológicos</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Soluciones Innovadoras</h4>
              <p className="text-gray-600">Enfoque en crear soluciones eficientes, escalables y tecnológicamente avanzadas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}