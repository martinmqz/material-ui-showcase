import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();

  useEffect(() => {
    console.error("404 - Page Not Found", location.pathname);
  }, [location.pathname]);

  return (
    <div>
      <div>
        <h1>404</h1>
        <p>Oops! Page not found</p>
        <a href="/">
          Return to Home
        </a>
      </div>
    </div>
  );
}
