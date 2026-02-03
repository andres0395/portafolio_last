import { Section } from '../atoms/Section';
import { Container } from '../atoms/Container';
import { SectionHeader } from '../molecules/SectionHeader';
import { Card } from '../atoms/Card';
import { Typography } from '../atoms/Typography';
import { Tag } from '../atoms/Tag';
import { Button } from '../atoms/Button';
import { projects } from '@/utils/projects';
import Link from 'next/link';

export default function Projects() {

  return (
    <Section id="projects" bgColor="gray">
      <Container>
        <SectionHeader
          title="Proyectos Destacados"
          subtitle="Una selección de mis trabajos más recientes y significativos"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} hover padding="none" className="group">
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-400 to-purple-500 overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                <div className="absolute top-4 right-4">
                  <Tag
                    size="sm"
                    variant={project.status === 'Completado' ? 'success' : 'warning'}
                  >
                    {project.status}
                  </Tag>
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
                <Typography variant="h4" component="h3" className="mb-2">
                  {project.title}
                </Typography>
                <Typography variant="body" className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </Typography>

                {/* Features */}
                <div className="mb-4">
                  <Typography variant="h4" component="h4" className="text-sm font-semibold mb-2">
                    Características principales:
                  </Typography>
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
                  <Link
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1">
                    <Button variant="primary" size="sm" fullWidth>
                      Ver
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Typography variant="body" className="text-gray-600 mb-6">
            ¿Interesado en ver más proyectos?
          </Typography>
          <a href="/contact">
            <Button variant="primary" size="lg">
              Hablemos sobre tu proyecto
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </a>
        </div>
      </Container>
    </Section>
  );
}