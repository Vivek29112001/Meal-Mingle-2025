import { useRouteError } from "react-router-dom";
import "./CSS/Error.css";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="error-container">
      <h1 className="error-title">Oops!</h1>
      <h2 className="error-subtitle">Something went wrong</h2>
      <h3 className="error-details">
        {error.status}: {error.statusText}
      </h3>
    </div>
  );
};

export default Error;