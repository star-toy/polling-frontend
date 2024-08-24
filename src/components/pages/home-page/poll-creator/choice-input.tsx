import { Input } from '@/components/shadcn-ui/ui/input';
import { Plus } from 'lucide-react';
import { Button } from '@/components/shadcn-ui/ui/button';

interface ChoiceInputProps {
  choices: string[];
  updateChoice: (index: number, value: string) => void;
  addChoice: () => void;
}

const ChoiceInput = ({ choices, updateChoice, addChoice }: ChoiceInputProps) => (
  <>
    {choices.map((choice, index) => (
      <div key={index} className="relative px-3">
        <div className="mb-3 h-14 w-[446px]">
          <Input
            type="text"
            value={choice}
            placeholder={`Choice ${index + 1}`}
            onChange={(e) => updateChoice(index, e.target.value)}
            className="h-full w-full rounded border border-gray-300 pl-3"
          />
        </div>
        {index === choices.length - 1 && (
          <Button
            onClick={addChoice}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-0 text-blue-500"
          >
            <Plus size={20} />
          </Button>
        )}
      </div>
    ))}
  </>
);

export default ChoiceInput;
