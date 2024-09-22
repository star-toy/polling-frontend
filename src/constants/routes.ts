export const ROUTES = {
  MAIN: '/',
  POST_DETAIL: '/posts/:id',
  NOT_FOUND: '*',
};

export const createRoute = {
  postDetail: (id: number | undefined) =>
    id === undefined ? ROUTES.NOT_FOUND : ROUTES.POST_DETAIL.replace(':id', id.toString()),
};
