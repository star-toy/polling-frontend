import { useState } from 'react';
import { Button } from '@/components/shadcn-ui/ui/button';
import ChoiceInput from './choice-input';
import { Textarea } from '@/components/shadcn-ui/ui/textarea';

import PollLengthSelector from './poll-length-selector';

export interface PollLength {
  days: number;
  hours: number;
  minutes: number;
}

const PollCreator = () => {
  const [choices, setChoices] = useState(['', '']);

  const updateChoice = (index: number, value: string) => {
    const newChoices = [...choices];
    newChoices[index] = value;
    setChoices(newChoices);
  };

  const addChoice = () => {
    setChoices([...choices, '']);
  };

  const handlePollLengthChange = (length: PollLength) => {
    // TODO: 투표 기간 추가 로직
    console.log(length);
  };

  return (
    <div className="w-[512px]">
      <div className="mb-4 h-[40px] w-full">
        <Textarea
          placeholder="Ask a question"
          className="h-full resize-none border-none px-0 text-xl leading-none"
        />
      </div>
      <div className="mb-4 w-full rounded-2xl border pt-3">
        <ChoiceInput choices={choices} updateChoice={updateChoice} addChoice={addChoice} />
        <div className="border-b" />
        <PollLengthSelector onChange={handlePollLengthChange} />
      </div>
      <div className="flex justify-end">
        <Button className="flex items-center rounded-full bg-blue-400 px-4 text-base font-semibold text-white hover:bg-blue-500">
          Post
        </Button>
      </div>
    </div>
  );
};

export default PollCreator;
