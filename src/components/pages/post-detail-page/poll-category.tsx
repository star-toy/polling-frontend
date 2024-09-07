import { useState } from 'react';
import { Button } from '@/components/shadcn-ui/ui/button';

const POLL_CATEGORIES = ['아티스트', '노래', '음악방송'];

const PollCategory = () => {
  const [selectedPollCategory, setSelectedPollCategory] = useState('아티스트');

  const handlePollCategoryClick = (category: string) => {
    setSelectedPollCategory(category);
  };

  return (
    <div className="mb-6 flex gap-2">
      {POLL_CATEGORIES.map((category) => (
        <Button
          key={category}
          variant={selectedPollCategory === category ? 'pollCategorySelected' : 'pollCategory'}
          font="text-body2"
          onClick={() => handlePollCategoryClick(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default PollCategory;
