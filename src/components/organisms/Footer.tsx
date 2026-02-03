'use client';
import Link from 'next/link';
import { Container } from '../atoms/Container';
import { Typography } from '../atoms/Typography';
import { SocialMedia } from '../molecules/SocialMedia';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const path = usePathname();
  return (
    <footer className="bg-gray-900 text-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Typography variant="h3" className="text-white mb-4">Andrés Muñoz</Typography>
            <Typography variant="body" className="text-gray-400 mb-6 max-w-sm">
              Desarrollador Full Stack apasionado por crear soluciones web innovadoras y escalables.
            </Typography>
            {path !== '/contact' && (
              <SocialMedia type="footer" />
            )}
          </div>

          <div>
            <Typography variant="h4" component="h4" className="text-lg font-semibold mb-4 text-white">Enlaces Rápidos</Typography>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">Sobre mí</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Proyectos</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors">Habilidades</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <Typography variant="h4" component="h4" className="text-lg font-semibold mb-4 text-white">Servicios</Typography>
            <ul className="space-y-2">
              <li className="text-gray-400">Desarrollo Web Full Stack</li>
              <li className="text-gray-400">Aplicaciones Móviles</li>
              <li className="text-gray-400">Consultoría Técnica</li>
              <li className="text-gray-400">Optimización y SEO</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <Typography variant="small">
            © {currentYear} Andrés Felipe Muñoz. Todos los derechos reservados.
          </Typography>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {path !== '/privacy' && (
              <Link href="/privacy" className="hover:text-white transition-colors">
                Política de Privacidad
              </Link>
            )}
            {path !== '/terms' && (
              <Link href="/terms" className="hover:text-white transition-colors">
                Términos de Uso
              </Link>
            )}
          </div>
        </div>
      </Container>
    </footer>
  );
}