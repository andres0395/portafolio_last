import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  className = '',
  error = false,
  ...props
}, ref) => {
  return (
    <input
      ref={ref}
      className={`text-black w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-opacity-50 transition-colors outline-none
        ${error
          ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
          : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200'
        } ${className}`}
      {...props}
    />
  );
});

Input.displayName = 'Input';

export const TextArea = forwardRef<HTMLTextAreaElement, InputHTMLAttributes<HTMLTextAreaElement> & { error?: boolean, rows?: number }>(({
  className = '',
  error = false,
  ...props
}, ref) => {
  return (
    <textarea
      ref={ref}
      className={`text-black w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-opacity-50 transition-colors outline-none resize-none
        ${error
          ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
          : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200'
        } ${className}`}
      {...props}
    />
  );
});

TextArea.displayName = 'TextArea';
