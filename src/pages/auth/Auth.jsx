import React, { useEffect } from "react";
import { authorize, getAccessToken } from "./utils";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Auth() {
  let [searchParams] = useSearchParams();
  let navigate = useNavigate();

  useEffect(() => {
    if (searchParams.get("code")) {
      getAccessToken(searchParams.get("code")).then((accessTokenGotten) => {
        if (accessTokenGotten) {
          navigate("/top-songs");
        } else {
          alert("Failed to retrieve access token.");
        }
      });
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
