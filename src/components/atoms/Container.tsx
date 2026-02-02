import { FC, ReactNode, HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  fluid?: boolean;
}

export const Container: FC<ContainerProps> = ({
  children,
  className = '',
  fluid = false,
  ...props
}) => {
  return (
    <div
      className={`${fluid ? 'w-full' : 'max-w-7xl mx-auto'} px-4 sm:px-6 lg:px-8 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
