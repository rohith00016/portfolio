import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <h1 className="text-6xl font-extrabold text-foreground mb-4">404</h1>
      <p className="text-xl text-muted-foreground mb-6 text-center">
        Oops! The page <span className="font-semibold">{location.pathname}</span> doesn’t exist.
      </p>
      <Link
        to="/"
        className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors duration-300"
      >
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound;
