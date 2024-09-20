export const GetAccessTokenFromCookie = () => {
  return (
    document.cookie
      .split('; ')
      .find((row) => row.startsWith('accessToken='))
      ?.split('=')[1] || null
  );
};
