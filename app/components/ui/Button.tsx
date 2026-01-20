import { ButtonHTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={twMerge(
                    clsx(
                        'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
                        {
                            'bg-primary text-white hover:bg-primary-dark': variant === 'primary',
                            'bg-secondary text-white hover:bg-gray-800': variant === 'secondary',
                            'border border-gray-200 bg-transparent hover:bg-gray-100 text-gray-900': variant === 'outline',
                            'bg-transparent hover:bg-gray-100 text-gray-900': variant === 'ghost',
                            'h-9 px-4 text-sm': size === 'sm',
                            'h-11 px-6 text-base': size === 'md',
                            'h-14 px-8 text-lg': size === 'lg',
                        }
                    ),
                    className
                )}
                {...props}
            />
        );
    }
);

Button.displayName = 'Button';

export { Button };
