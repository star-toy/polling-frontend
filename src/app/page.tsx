import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { findAllPostsList } from '@/api/generated/endpoints/post/post';
import MainPageClient from '@/components/pages/main-page/main-page-client';

export default async function Page() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['posts'],
    queryFn: () => findAllPostsList(),
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <MainPageClient />
    </HydrationBoundary>
  );
}
