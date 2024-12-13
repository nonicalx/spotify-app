import React from "react";
import { authorize } from "./utils";

export default function Auth() {
  const handleAuthorization = (e) => {
    e.preventDefault();
    authorize();
  };
  return <div>Auth</div>;
}
