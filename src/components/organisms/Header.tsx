'use client';

import { Container } from '../atoms/Container';
import { Button } from '../atoms/Button';
import { Typography } from '../atoms/Typography';
import { useHeader } from '@/hooks/components/organisms/useHeader';
import Link from 'next/link';

export default function Header() {
  const {
    isMenuOpen,
    setIsMenuOpen,
    navItems,
    pathname
  } = useHeader();
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <Container>
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Typography variant="h3" className="text-2xl font-bold text-gray-900">
              Andrés Felipe Muñoz
            </Typography>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {
              pathname === '/' ? (
                <>
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className="text-gray-700 hover:text-blue-600 transition-colors">
                      {item.label}
                    </Link>
                  ))}
                </>
              ) : (
                <>
                  <Link href="/">
                    <Button variant="primary" size="sm">
                      Inicio
                    </Button>
                  </Link>
                </>
              )
            }
            {pathname !== '/contact' ? (
              <Link href="/contact">
                <Button variant="primary" size="sm">
                  Contacto
                </Button>
              </Link>
            ) : null}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {pathname === '/' ? (
                <>
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                      {item.label}
                    </Link>
                  ))}
                </>
              ) : (
                <>
                  <Link href="/">
                    <Button variant="primary" size="sm">
                      Inicio
                    </Button>
                  </Link>
                </>
              )}
              {pathname !== '/contact' ? (
                <Link href="/contact">
                  <Button variant="primary" fullWidth size="sm">Contacto</Button>
                </Link>
              ) : null}
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}