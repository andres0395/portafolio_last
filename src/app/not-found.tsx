import Link from 'next/link';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';
import { Container } from '@/components/atoms/Container';
import { Typography } from '@/components/atoms/Typography';
import { Button } from '@/components/atoms/Button';

export const metadata = {
  title: 'Página no encontrada',
  description: 'La página que buscas no existe o fue movida.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />

      <main className="flex-1 flex items-center justify-center py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Typography
              variant="h1"
              className="mb-6 text-7xl sm:text-8xl lg:text-9xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              404
            </Typography>

            <Typography variant="h2" className="mb-4">
              Ups, esta página se nos perdió
            </Typography>

            <Typography
              variant="lead"
              className="mb-10 max-w-2xl mx-auto text-gray-600"
            >
              No encontramos lo que estabas buscando. Puede que el enlace esté
              roto, que la página haya cambiado de lugar o que nunca haya
              existido. Vuelve al inicio y sigue explorando mi trabajo.
            </Typography>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Volver al inicio
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Contáctame
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
