import { Section } from '../atoms/Section';
import { Container } from '../atoms/Container';
import { SectionHeader } from '../molecules/SectionHeader';
import { Card } from '../atoms/Card';
import { Typography } from '../atoms/Typography';
import { Tag } from '../atoms/Tag';
import { skillCategories } from '@/utils/skills';

export default function Skills() {

  return (
    <Section id="skills" bgColor="gray">
      <Container>
        <SectionHeader
          title="Habilidades Técnicas"
          subtitle="Tecnologías y herramientas que domino para crear soluciones completas"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} hover>
              <Typography variant="h4" className="text-center mb-6">
                {category.title}
              </Typography>
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
            </Card>
          ))}
        </div>

        {/* Additional Technologies */}
        <div className="mt-16 text-center">
          <Typography variant="h3" className="mb-8">Herramientas y Tecnologías Adicionales</Typography>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Git", "AWS Lambda", "WebSocket", "Tailwind CSS", "Pydantic", "Microfrontends", "Patrón Atómico", "ERP"
            ].map((tech, index) => (
              <Tag key={index} variant="neutral" size="md">
                {tech}
              </Tag>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}