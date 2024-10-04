import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { findAllPostsList } from '@/api/generated/endpoints/post/post';
import MainPageClient from '@/components/pages/main-page/main-page-client';

const RootPage = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['getFindAllPostsListQueryKey'],
    queryFn: () => findAllPostsList(),
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <MainPageClient />
    </HydrationBoundary>
  );
};

export default RootPage;
