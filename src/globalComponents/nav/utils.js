export const isAuthenticated = () => {
  return localStorage.getItem("isAuthorized") || false;
};
