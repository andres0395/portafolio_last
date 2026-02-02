import { Section } from '../atoms/Section';
import { Container } from '../atoms/Container';
import { SectionHeader } from '../molecules/SectionHeader';
import { Card } from '../atoms/Card';
import { Typography } from '../atoms/Typography';
import { Tag } from '../atoms/Tag';
import { experiences } from '@/utils/experiences';

export default function Experience() {

  return (
    <Section id="experience">
      <Container>
        <SectionHeader
          title="Experiencia Profesional"
          subtitle="Mi trayectoria profesional en el desarrollo de software"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-blue-200"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 md:mb-16">
              <div className={`flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                  <Card hover>
                    <div className="mb-4">
                      <Typography variant="h4" component="h3" className="mb-1">
                        {exp.title}
                      </Typography>
                      <Typography variant="body" className="text-blue-600 font-semibold">
                        {exp.company}
                      </Typography>
                      <Typography variant="small" className="text-gray-500">
                        {exp.period}
                      </Typography>
                    </div>

                    <Typography variant="body" className="mb-4 text-gray-600">
                      {exp.description}
                    </Typography>

                    <div className="mb-4">
                      <Typography variant="h4" component="h4" className="text-base font-semibold mb-2">
                        Logros principales:
                      </Typography>
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
                        <Tag key={techIndex} variant="primary" size="sm">
                          {tech}
                        </Tag>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}