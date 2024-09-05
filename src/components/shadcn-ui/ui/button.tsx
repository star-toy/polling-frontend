import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/components/shadcn-ui/libs';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        pollCategory: 'rounded-2xl border border-gray-300 bg-gray-50',
        pollCategorySelected: 'rounded-2xl border border-black bg-black text-white',
        ghost: 'bg-transparent',
      },
      size: {
        pollCategory: 'px-4 py-[4.5px]',
        pollOption: 'min-h-[177px] w-[166px]',
        // TODO: icon size 추가
      },
      font: {
        'text-subTitle1': 'subTitle1',
        'text-subTitle2': 'subTitle2',
        'text-subTitle3': 'subTitle3',
        'text-subTitle4': 'subTitle4',
        'text-body1': 'body1',
        'text-body2': 'body2',
        'text-caption1': 'caption1',
        'text-caption2': 'caption2',
      },
    },
    defaultVariants: {
      variant: 'pollCategory',
      size: 'pollCategory',
      font: 'text-subTitle4',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, font, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, font, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
