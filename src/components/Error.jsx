import { useRouteError } from "react-router-dom";
// import "./CSS/Error.css";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-5xl font-bold text-red-700 mb-4">Oops!</h1>
      <h2 className="text-3xl font-semibold text-gray-900 mb-2">Something went wrong</h2>
      <h3 className="text-xl text-gray-700">
        {error.status}: {error.statusText}
      </h3>
    </div>
  );
};

export default Error;