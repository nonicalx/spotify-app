import React from "react";
import { authorize } from "./utils";

export default function Auth() {
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
