import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/shadcn-ui/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

interface NumberDropdownProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  max: number;
}

const NumberDropdown = ({ label, value, onChange, max }: NumberDropdownProps) => (
  <>
    <DropdownMenu>
      <DropdownMenuTrigger className="relative flex w-[142px] items-center rounded border text-left">
        <label className="absolute left-0 top-0 px-2 pt-2 text-sm leading-none text-gray-500">
          {label}
        </label>
        <span className="mt-4 px-2 pb-2 pt-3">{value}</span>
        <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2" color="#9ca3af" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-h-[200px] w-[142px] overflow-y-auto rounded">
        {Array.from({ length: max + 1 }, (_, i) => (
          <DropdownMenuItem key={i} onSelect={() => onChange(i)}>
            {i}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  </>
);

export default NumberDropdown;
