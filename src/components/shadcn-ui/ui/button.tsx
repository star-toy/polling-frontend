import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/components/shadcn-ui/libs';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: '',
        'chip-primary': 'rounded-2xl px-4 py-[4.5px] border border-gray-300 bg-gray-50',
        'chip-secondary': 'rounded-2xl px-4 py-[4.5px] border border-black bg-black text-white',
      },
      font: {
        'sub-title-1': 'text-[28px] leading-[150%] font-semibold',
        'sub-title-2': 'text-[24px] leading-[150%] font-semibold',
        'sub-title-3': 'text-[20px] leading-[150%] font-semibold',
        'sub-title-4': 'text-[16px] leading-[150%] font-semibold',
        'body-1': 'text-[16px] leading-[150%] font-medium',
        'body-2': 'text-[14px] leading-[150%] font-normal',
        'body-3': 'text-[14px] leading-[150%] font-medium',
        'caption-1': 'text-[14px] leading-[150%] font-semibold',
        'caption-2': 'text-[13px] leading-[120%] font-semibold',
        'caption-3': 'text-[13px] leading-[120%] font-medium',
      },
    },
    defaultVariants: {
      variant: 'default',
      font: 'sub-title-4',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, font, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ variant, font, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
