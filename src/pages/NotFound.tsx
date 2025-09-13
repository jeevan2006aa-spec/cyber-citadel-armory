import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { AlertTriangle, Home } from "lucide-react";
import { TerminalButton } from "@/components/ui/terminal-button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center max-w-2xl px-4">
        {/* Terminal Error Display */}
        <div className="terminal-border p-12 bg-destructive/10 border-destructive/50">
          <div className="flex justify-center mb-6">
            <AlertTriangle className="w-16 h-16 text-destructive animate-pulse" />
          </div>
          
          <h1 className="text-6xl font-orbitron font-bold text-destructive mb-4 tracking-wider">
            404
          </h1>
          
          <h2 className="text-2xl font-rajdhani font-bold text-secondary mb-4 tracking-wide">
            [ACCESS DENIED]
          </h2>
          
          <div className="font-mono text-sm text-muted-foreground space-y-2 mb-8">
            <div>&gt; ERROR: INVALID TERMINAL PATH</div>
            <div>&gt; REQUESTED: {location.pathname}</div>
            <div>&gt; STATUS: ROUTE NOT FOUND</div>
            <div>&gt; SECURITY PROTOCOL: REDIRECT AUTHORIZED</div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <TerminalButton variant="acquire" size="lg" className="flex items-center space-x-3">
                <Home className="w-5 h-5" />
                <span>RETURN TO BASE</span>
              </TerminalButton>
            </Link>
            <Link to="/armory">
              <TerminalButton variant="outline" size="lg">
                ACCESS ARMORY
              </TerminalButton>
            </Link>
          </div>
        </div>
        
        {/* Additional Info */}
        <div className="mt-8 font-mono text-xs text-accent">
          &gt; TERMINAL SESSION: ACTIVE | SECURITY: MAINTAINED
        </div>
      </div>
    </div>
  );
};

export default NotFound;