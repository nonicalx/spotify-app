export const isAuthenticated = () => {
  let isAuth = false;
  if (sessionStorage.getItem("access_data")) {
    const { expires_in, accessed_time } = JSON.parse(
      sessionStorage.getItem("access_data")
    );
    const current_time = new Date().getTime();
    if (current_time - accessed_time < expires_in * 1000) {
      isAuth = true;
    } else {
      sessionStorage.removeItem("access_data");
    }
  }
  return isAuth;
};
