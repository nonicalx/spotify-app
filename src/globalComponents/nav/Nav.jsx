import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Nav.css";
import { isAuthenticated } from "./utils";
import { PATHS } from "./constants";

export default function Nav() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/auth");
    }
    if (isAuthenticated() && location.pathname === "/auth") {
      navigate(-1);
    }
  }, [location.pathname]);

  return (
    <nav>
      <ul>
        {PATHS.map(({ url, name }, index) => {
          return (
            <li key={`${url}${index}`}>
              <Link to={url}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
