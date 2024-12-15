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
    headers: {
      Authorization: `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  const response = await fetch(request);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const access_data = await response.json();
  sessionStorage.setItem("access_token", access_data?.access_token);
  sessionStorage.setItem("access_data", JSON.stringify(access_data));

  return true;
};
