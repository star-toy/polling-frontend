import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/components/shadcn-ui/libs';

const buttonVariants = cva(
  'inline-flex items-center justify-center ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        default: '',
        'chip-primary':
          'rounded-2xl px-4 py-[4.5px] border border-gray-300 bg-gray-50 text-gray-700',
        'chip-secondary': 'rounded-2xl px-4 py-[4.5px] border border-black bg-black text-white',
        'modal-cancel':
          'bg-gray-100 text-gray-700 flex justify-center items-center px-2 py-4 rounded-md',
        'modal-action':
          'bg-gray-900 text-white flex justify-center items-center px-2 py-4 rounded-md',
        'action': 'bg-gray-900 py-2 px-4 rounded-md text-white disabled:bg-gray-400',
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
        'default': 'text-[16px] leading-[150%]',
      },
    },
    defaultVariants: {
      variant: 'default',
      font: 'default',
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
