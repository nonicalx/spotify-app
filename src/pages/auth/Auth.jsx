import React, { useEffect } from "react";
import { authorize, getAccessToken } from "./utils";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./auth.css";

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
    <div className="container">
      <h1>Welcome to Spotify Charts</h1>
      <button className="primary-btn" onClick={handleAuthorization}>
        Authorize Spotify Account
      </button>
    </div>
  );
}
