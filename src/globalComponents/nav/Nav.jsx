import { Link } from "react-router-dom";
import "./Nav.css";
import { PATHS } from "./constants";

export default function Nav() {
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
