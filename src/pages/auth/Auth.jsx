import React, { useEffect, useState } from "react";
import { authorize, getAccessToken } from "./utils";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./auth.css";
import Loader from "../../globalComponents/loader/Loader";

export default function Auth() {
  let [searchParams] = useSearchParams();
  let navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (searchParams.get("code")) {
      setLoading(true);
      getAccessToken(searchParams.get("code")).then((accessTokenGotten) => {
        if (accessTokenGotten) {
          navigate("/top-songs");
        } else {
          alert("Failed to retrieve access token.");
        }
      });
    }
    setTimeout(() => setLoading(false), 1500);
  });

  const handleAuthorization = (e) => {
    e.preventDefault();
    authorize();
  };

  return (
    <div className="container">
      {loading ? (
        <Loader />
      ) : (
        <>
          <h1>Welcome to Spotify Charts</h1>
          <button className="primary-btn" onClick={handleAuthorization}>
            Authorize Spotify Account
          </button>
        </>
      )}
    </div>
  );
}
