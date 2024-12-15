import React, { useEffect } from "react";
import { authorize, getAccessToken } from "./utils";
import { useSearchParams } from "react-router-dom";

export default function Auth() {
  let [searchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get("code")) {
      getAccessToken(searchParams.get("code"));
    }
  });

  const handleAuthorization = (e) => {
    e.preventDefault();
    authorize();
  };

  return (
    <div>
      <p>Click button to Authorize Spotify</p>
      <button onClick={handleAuthorization}>Authorize</button>
    </div>
  );
}
