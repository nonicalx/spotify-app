import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { isAuthenticated } from "./utils.js";

export default function PageLoader({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/auth");
    }
    if (isAuthenticated() && location.pathname === "/auth") {
      navigate(-1);
    }
    setTimeout(() => setIsLoading(false), 500);
  }, [location.pathname]);

  return <div>{isLoading ? "Loading..." : children}</div>;
}
