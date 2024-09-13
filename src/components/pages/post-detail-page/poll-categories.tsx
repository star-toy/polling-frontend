import { useState } from 'react';
import { Button } from '@/components/shadcn-ui/ui/button';

const POLL_CATEGORIES = ['아티스트', '노래', '음악방송'];

const PollCategories = () => {
  const [selectedPollCategory, setSelectedPollCategory] = useState('아티스트');

  const getPollCategoryVariant = (selectedPollCategory: string, category: string) =>
    selectedPollCategory === category ? 'secondary' : 'primary';

  const getPollCategoryFont = (selectedPollCategory: string, category: string) =>
    selectedPollCategory === category ? 'caption-1' : 'body-2';

  const handlePollCategoryClick = (category: string) => {
    setSelectedPollCategory(category);
  };

  return (
    <div className="mb-6 flex gap-2">
      {POLL_CATEGORIES.map((category) => (
        <Button
          key={category}
          variant="chip"
          chipVariant={getPollCategoryVariant(selectedPollCategory, category)}
          font={getPollCategoryFont(selectedPollCategory, category)}
          onClick={() => handlePollCategoryClick(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default PollCategories;
