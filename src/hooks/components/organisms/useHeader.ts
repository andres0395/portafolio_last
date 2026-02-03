import { usePathname } from "next/navigation";
import { useState } from "react";


export const useHeader = () => {

  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Sobre mí', path: '#about' },
    { label: 'Habilidades', path: '#skills' },
    { label: 'Experiencia', path: '#experience' },
    { label: 'Educación', path: '#education' },
    { label: 'Proyectos', path: '#projects' },
  ];

  return {
    isMenuOpen,
    setIsMenuOpen,
    navItems,
    pathname
  }
}