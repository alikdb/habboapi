import { Link } from "react-router-dom";
const NotFoundComponent = () => {
  return (
    <div className="mt-20 flex items-center gap-3 flex-col">
      <h1 className="text-4xl">404</h1>
      <p>Page Not Found</p>
      <Link className="text-blue-500" to="/">
        Go back to home
      </Link>
    </div>
  );
};

export default NotFoundComponent;
