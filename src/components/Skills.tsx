export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "Angular", level: 95, color: "from-red-500 to-red-600" },
        { name: "React", level: 90, color: "from-blue-500 to-blue-600" },
        { name: "TypeScript", level: 88, color: "from-blue-500 to-blue-600" },
        { name: "JavaScript", level: 95, color: "from-yellow-500 to-yellow-600" },
        { name: "HTML5", level: 92, color: "from-red-500 to-red-600" },
        { name: "CSS", level: 90, color: "from-blue-500 to-blue-600" },
        { name: "Tailwind", level: 85, color: "from-cyan-500 to-cyan-600" },
        { name: "Next.js", level: 80, color: "from-black to-black" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90, color: "from-green-500 to-green-600" },
        { name: "Express", level: 88, color: "from-green-500 to-green-600" },
        { name: "FastAPI", level: 85, color: "from-green-500 to-green-600" },
        { name: "PHP", level: 80, color: "from-purple-500 to-purple-600" },
        { name: "Python", level: 75, color: "from-blue-500 to-green-600" },
        { name: "Laravel", level: 78, color: "from-purple-500 to-purple-600" }
      ]
    },
    {
      title: "Bases de Datos",
      skills: [
        { name: "PostgreSQL", level: 88, color: "from-blue-500 to-blue-600" },
        { name: "MySQL", level: 85, color: "from-blue-500 to-blue-600" },
        { name: "MongoDB", level: 80, color: "from-green-500 to-green-600" },
        { name: "SQLAlchemy", level: 75, color: "from-green-500 to-green-600" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Habilidades Técnicas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tecnologías y herramientas que domino para crear soluciones completas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`
                          bg-gradient-to-r ${skill.color} h-2 
                          rounded-full transition-all duration-1000 ease-out ${skill.level}
                          `}
                        style={{ width: `100%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Technologies */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Herramientas y Tecnologías Adicionales</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Git", "AWS Lambda", "WebSocket", "Tailwind CSS", "Pydantic", "Microfrontends", "Patrón Atómico", "ERP"
            ].map((tech, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}