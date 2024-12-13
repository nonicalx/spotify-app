import { AUTHORIZE_URL, CLIENT_ID, REDIRECT_URL } from "./constants";

export const authorize = () => {
  const url = `${AUTHORIZE_URL}?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURI(
    REDIRECT_URL
  )}&show_dialog=true&scope=user-read-private user-read-email`;

  window.location.href = url;
};
