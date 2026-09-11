import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Search, ArrowLeft, Compass } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-12">
      <div className="max-w-lg w-full text-center animate-fade-in-up">
        {/* Large 404 illustration */}
        <div className="relative inline-flex items-center justify-center mb-8">
          <div
            className="absolute inset-0 blur-3xl opacity-20 rounded-full"
            style={{ background: "var(--hero-gradient)" }}
          />
          <Compass className="relative w-20 h-20 text-primary animate-pulse" strokeWidth={1.2} />
        </div>

        <h1 className="text-8xl font-bold text-primary mb-2 tracking-tight">404</h1>
        <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
          Page Not Found
        </h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Sorry, we couldn't find the page you were looking for. It may have been
          moved, removed, or never existed. Let's get you back on track.
        </p>

        {/* Path feedback */}
        {location.pathname !== "/" && (
          <div className="mb-8 inline-block px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm font-mono">
            {location.pathname}
          </div>
        )}

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            onClick={() => navigate(-1)}
            variant="outline"
            size="lg"
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>
          <Button
            onClick={() => navigate("/")}
            size="lg"
            className="gap-2"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Button>
        </div>

        <div className="mt-8 text-sm text-muted-foreground">
          Looking for something specific?{" "}
          <button
            onClick={() => navigate("/dashboard")}
            className="inline-flex items-center gap-1 text-primary hover:underline font-medium"
          >
            <Search className="w-3.5 h-3.5" />
            Search from your dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
