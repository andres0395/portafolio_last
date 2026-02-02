import Link from 'next/link';
import { SocialMedia } from './molecules/SocialMedia';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Andrés Felipe Muñoz</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Técnico en desarrollo y mantenimiento de software. Desarrollador Full Stack
              apasionado por crear soluciones innovadoras y funcionales.
            </p>
            <SocialMedia type="footer" />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">Sobre Mí</a></li>
              <li><a href="#skills" className="text-gray-300 hover:text-white transition-colors">Habilidades</a></li>
              <li><a href="#experience" className="text-gray-300 hover:text-white transition-colors">Experiencia</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-white transition-colors">Proyectos</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Desarrollo Web</span></li>
              <li><span className="text-gray-400">Aplicaciones React</span></li>
              <li><span className="text-gray-400">APIs REST</span></li>
              <li><span className="text-gray-400">Consultoría Técnica</span></li>
              <li><span className="text-gray-400">Optimización</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Andrés Muñoz. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Términos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}