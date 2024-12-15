import {
  AUTHORIZE_URL,
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URL,
  TOKEN_URL,
} from "./constants";

export const authorize = () => {
  const url = `${AUTHORIZE_URL}?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURI(
    REDIRECT_URL
  )}&show_dialog=true&scope=user-read-private user-read-email`;

  window.location.href = url;
};

export const getAccessToken = async (code) => {
  const body = `grant_type=authorization_code&code=${code}&redirect_uri=${encodeURI(
    REDIRECT_URL
  )}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;

  const request = new Request(TOKEN_URL, {
    method: "POST",
    body: body,
  });

  const response = await fetch(request);
};
