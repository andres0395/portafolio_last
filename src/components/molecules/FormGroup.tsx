import { FC, ReactNode } from 'react';
import { Label } from '../atoms/Label';

interface FormGroupProps {
  label: string;
  htmlFor?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
}

export const FormGroup: FC<FormGroupProps> = ({
  label,
  htmlFor,
  required = false,
  children,
  className = ''
}) => {
  return (
    <div className={className}>
      <Label htmlFor={htmlFor} required={required}>
        {label}
      </Label>
      {children}
    </div>
  );
};
