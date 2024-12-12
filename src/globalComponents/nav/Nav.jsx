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
  }, [location.pathname]);

  return (
    <nav>
      <ul>
        {PATHS.map(({ url, name }) => {
          return (
            <li>
              <Link to={url}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
