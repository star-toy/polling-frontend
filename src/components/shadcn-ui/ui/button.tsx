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
        'text-subTitle1': 'text-[28px] leading-[150%] font-semibold',
        'text-subTitle2': 'text-[24px] leading-[150%] font-semibold',
        'text-subTitle3': 'text-[20px] leading-[150%] font-semibold',
        'text-subTitle4': 'text-[16px] leading-[150%] font-semibold',
        'text-body1': 'text-[16px] leading-[150%] font-medium',
        'text-body2': 'text-[14px] leading-[150%] font-normal',
        'text-body3': 'text-[14px] leading-[150%] font-medium',
        'text-caption1': 'text-[14px] leading-[150%] font-semibold',
        'text-caption2': 'text-[13px] leading-[120%] font-semibold',
        'text-caption3': 'text-[13px] leading-[120%] font-medium',
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
  ({ className, variant, chipVariant, size, font, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, chipVariant, size, font, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
