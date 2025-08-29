import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center glass-panel">
      <div className="text-center space-y-6 animate-slide-up">
        <div className="text-8xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          404
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-4">Page Not Found</h1>
        <p className="text-xl text-muted-foreground mb-8">
          The page you're looking for seems to have stepped out of style
        </p>
        <a 
          href="/" 
          className="inline-flex items-center glass-button px-8 py-4 text-lg font-semibold text-accent hover:text-accent-foreground glow-accent transition-all duration-300"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
