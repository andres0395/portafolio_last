import Link from 'next/link';
import { Container } from '../atoms/Container';
import { Typography } from '../atoms/Typography';
import { Button } from '../atoms/Button';

export default function Hero() {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <Typography variant="h1" className="mb-6">
              Hola, soy{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Andrés Felipe Muñoz
              </span>
            </Typography>
            <Typography variant="h4" className="text-gray-600 mb-8" component="h2">
              Técnico en Desarrollo y Mantenimiento de Software
            </Typography>
            <Typography variant="body" className="text-lg text-gray-600 mb-8 max-w-2xl">
              Desarrollador Web Full Stack con sólida experiencia en Next.js y Nest.js implementando patrones de
              diseño atómico. Apasionado por la creación de soluciones innovadoras y sistemas de gestión
              empresarial, con dominio de Angular, React y Node.js.
            </Typography>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="#projects">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Ver Proyectos
                </Button>
              </Link>
              <a
                href="/pdfs/HVElempleo1036663334.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button variant="outline" size="lg" fullWidth>
                  Descargar CV
                </Button>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                  <div className="typing-animation">
                    <span className="text-blue-400">const</span> developer = {'{'}
                    <br />
                    &nbsp;&nbsp;name: <span className="text-yellow-300">&apos;Andrés Muñoz&apos;</span>,
                    <br />
                    &nbsp;&nbsp;skills: [
                    <span className="text-yellow-300">&apos;Next.js&apos;</span>,
                    <span className="text-yellow-300">&apos;Nest.js&apos;</span>,
                    <span className="text-yellow-300">&apos;Atomic Design&apos;</span>,
                    <span className="text-yellow-300">&apos;TypeScript&apos;</span>
                    ],
                    <br />
                    &nbsp;&nbsp;passion: <span className="text-yellow-300">&apos;Creating amazing web experiences&apos;</span>
                    <br />
                    {'}'};
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </Container>
    </section>
  );
}