'use client';

import { AxiosError } from 'axios';

import { Button } from '@/components/shadcn-ui/ui/button';
import { useGetPostByUid } from '@/api/generated/endpoints/post/post';
import { PostDetailResponse } from '@/api/generated/model/postDetailResponse';

interface PollCategoriesProps {
  id: string;
  selectedPollCategory: string | undefined;
  onSelectedPollCategory: (category: string | undefined) => void;
}

const PollCategories = ({
  id,
  selectedPollCategory,
  onSelectedPollCategory,
}: PollCategoriesProps) => {
  const { data, isLoading, error } = useGetPostByUid<PostDetailResponse, AxiosError | Error>(id);
  const categories = data?.polls?.map((poll) => poll.pollCategory);

  const getPollCategoryVariant = (
    selectedPollCategory: string | undefined,
    category: string | undefined,
  ) => (selectedPollCategory === category ? 'chip-secondary' : 'chip-primary');

  const getPollCategoryFont = (
    selectedPollCategory: string | undefined,
    category: string | undefined,
  ) => (selectedPollCategory === category ? 'caption-1' : 'body-2');

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className="mb-6 flex flex-wrap gap-2">
      {categories?.map((category) => (
        <Button
          key={category}
          variant={getPollCategoryVariant(selectedPollCategory, category)}
          font={getPollCategoryFont(selectedPollCategory, category)}
          onClick={() => onSelectedPollCategory(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default PollCategories;
