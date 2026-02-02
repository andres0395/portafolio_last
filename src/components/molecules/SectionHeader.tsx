import { FC } from 'react';
import { Typography } from '../atoms/Typography';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader: FC<SectionHeaderProps> = ({
  title,
  subtitle,
  centered = true,
  className = ''
}) => {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-16 ${className}`}>
      <Typography variant="h2" className="mb-4">
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="lead" className="max-w-3xl mx-auto text-gray-600">
          {subtitle}
        </Typography>
      )}
    </div>
  );
};
