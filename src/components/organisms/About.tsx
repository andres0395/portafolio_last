import { Section } from '../atoms/Section';
import { Container } from '../atoms/Container';
import { SectionHeader } from '../molecules/SectionHeader';
import { Typography } from '../atoms/Typography';
import { about } from '@/utils/about';

export default function About() {
  return (
    <Section id="about">
      <Container>
        <SectionHeader
          title={about.title}
          subtitle={about.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6">
              <Typography variant="h3">Mi Historia</Typography>
              <Typography variant="body" className="leading-relaxed">
                {about.description}
              </Typography>
              <Typography variant="body" className="leading-relaxed">
                {about.experience}
              </Typography>
              <Typography variant="body" className="leading-relaxed">
                {about.currentProject}
              </Typography>
              <Typography variant="body" className="leading-relaxed">
                {about.pastProjects}
              </Typography>
              <Typography variant="body" className="leading-relaxed">
                {about.skills}
              </Typography>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {about.yearsOfExperience}
              </div>
              <div className="text-gray-700">Años de Experiencia</div>
            </div>
            <div className="bg-green-50 p-6 rounded-xl">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {about.completedProjects}
              </div>
              <div className="text-gray-700">Proyectos Completados</div>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {about.technologies}
              </div>
              <div className="text-gray-700">Tecnologías Dominadas</div>
            </div>
            <div className="bg-orange-50 p-6 rounded-xl">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                {about.companies}
              </div>
              <div className="text-gray-700">Empresas Trabajadas</div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}