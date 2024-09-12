export const ROUTES = {
  MAIN: '/',
  POST_DETAIL: '/posts/:id',
  NOT_FOUND: '*',
};

export const createRoute = {
  postDetail: (id: number) => ROUTES.POST_DETAIL.replace(':id', id.toString()),
};
