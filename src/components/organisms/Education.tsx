import { Section } from '../atoms/Section';
import { Container } from '../atoms/Container';
import { SectionHeader } from '../molecules/SectionHeader';
import { Card } from '../atoms/Card';
import { Typography } from '../atoms/Typography';
import { Tag } from '../atoms/Tag';
import { education } from '@/utils/education';

export default function Education() {

  return (
    <Section id="education" bgColor="gray">
      <Container>
        <SectionHeader
          title="Educación"
          subtitle="Mi formación académica en desarrollo de software y tecnologías web"
        />

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card key={index} hover padding="lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex-1">
                  <Typography variant="h3" className="mb-2">
                    {edu.degree}
                  </Typography>
                  <Typography variant="lead" className="text-blue-600 font-semibold mb-2">
                    {edu.institution}
                  </Typography>
                  <Typography variant="body" className="text-gray-500 mb-4">
                    {edu.period}
                  </Typography>
                </div>
                <div className="flex-shrink-0">
                  <Tag
                    size="md"
                    variant={edu.status === 'En curso' ? 'success' : 'primary'}
                  >
                    {edu.status}
                  </Tag>
                </div>
              </div>

              <Typography variant="body" className="text-gray-600 leading-relaxed">
                {edu.description}
              </Typography>
            </Card>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center">
          <SectionHeader title="Competencias Desarrolladas" className="mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <Typography variant="h4" className="text-lg font-semibold text-gray-900 mb-2">Desarrollo Full Stack</Typography>
              <Typography variant="body" className="text-gray-600">Capacidad para trabajar en todas las etapas del ciclo de vida del desarrollo de software</Typography>
            </Card>

            <Card>
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <Typography variant="h4" className="text-lg font-semibold text-gray-900 mb-2">Trabajo en Equipo</Typography>
              <Typography variant="body" className="text-gray-600">Habilidad para colaborar efectivamente y adaptarse a nuevos entornos tecnológicos</Typography>
            </Card>

            <Card>
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <Typography variant="h4" className="text-lg font-semibold text-gray-900 mb-2">Soluciones Innovadoras</Typography>
              <Typography variant="body" className="text-gray-600">Enfoque en crear soluciones eficientes, escalables y tecnológicamente avanzadas</Typography>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
}