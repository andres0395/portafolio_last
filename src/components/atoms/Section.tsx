import { FC, HTMLAttributes, ReactNode } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  bgColor?: 'white' | 'gray' | 'dark';
}

export const Section: FC<SectionProps> = ({
  children,
  className = '',
  bgColor = 'white',
  ...props
}) => {
  const bgColors = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-gray-900',
  };

  return (
    <section
      className={`py-20 ${bgColors[bgColor]} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};
