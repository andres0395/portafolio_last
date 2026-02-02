import { FC, createElement, HTMLAttributes, ReactNode, ElementType } from 'react';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'small' | 'lead';

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: Variant;
  component?: ElementType;
  children: ReactNode;
  color?: string;
}

export const Typography: FC<TypographyProps> = ({
  variant = 'body',
  component,
  children,
  className = '',
  color,
  ...props
}) => {
  const variantStyles = {
    h1: 'text-4xl sm:text-5xl lg:text-6xl font-bold',
    h2: 'text-3xl sm:text-4xl font-bold',
    h3: 'text-2xl font-bold',
    h4: 'text-xl font-bold',
    lead: 'text-xl',
    body: 'text-base',
    small: 'text-sm',
  };

  const defaultElement: Record<Variant, ElementType> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    lead: 'p',
    body: 'p',
    small: 'span',
  };

  const Tag = component || defaultElement[variant];
  const textColor = color || (['h1', 'h2', 'h3', 'h4'].includes(variant) ? 'text-gray-900' : 'text-gray-600');

  return createElement(
    Tag,
    {
      className: `${variantStyles[variant]} ${textColor} ${className}`,
      ...props,
    },
    children
  );
};
