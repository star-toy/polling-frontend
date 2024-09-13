import { useState } from 'react';
import { Button } from '@/components/shadcn-ui/ui/button';

interface PollCategoriesProps {
  categories: string[];
}

const PollCategories = ({ categories }: PollCategoriesProps) => {
  const [selectedPollCategory, setSelectedPollCategory] = useState(categories[0]);

  const getPollCategoryVariant = (selectedPollCategory: string, category: string) =>
    selectedPollCategory === category ? 'secondary' : 'primary';

  const getPollCategoryFont = (selectedPollCategory: string, category: string) =>
    selectedPollCategory === category ? 'caption-1' : 'body-2';

  const handlePollCategoryClick = (category: string) => {
    setSelectedPollCategory(category);
  };

  return (
    <div className="mb-6 flex gap-2">
      {categories.map((category) => (
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
