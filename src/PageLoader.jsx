import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { isAuthenticated } from "./utils.js";

export default function PageLoader({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated() && location.pathname !== "/") {
      navigate("/");
    }
    if (isAuthenticated() && location.pathname === "/") {
      navigate(-1);
    }
    setTimeout(() => setIsLoading(false), 500);
  }, [location.pathname]);

  return <main>{isLoading ? "Loading..." : children}</main>;
}
