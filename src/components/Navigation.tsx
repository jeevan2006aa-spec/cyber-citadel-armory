import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TerminalButton } from '@/components/ui/terminal-button';
import { ShoppingCart, Globe, User, Shield } from 'lucide-react';

const Navigation = () => {
  const [isGeoLockOpen, setIsGeoLockOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/armory', label: 'ARMORY' },
    { path: '/intel', label: 'INTEL' },
    { path: '/contact', label: 'CONTACT' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-primary/30">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-8 h-8 relative">
            <div className="absolute inset-0 border-2 border-primary rotate-45 animate-pulse-glow"></div>
            <div className="absolute inset-1 border border-secondary rotate-12"></div>
            <Shield className="w-4 h-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary" />
          </div>
          <span className="text-xl font-orbitron font-bold text-primary tracking-wider">
            NEXUS ARMAMENT
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-mono text-sm tracking-widest transition-colors duration-300 hover:text-primary relative ${
                location.pathname === link.path ? 'text-primary status-active' : 'text-muted-foreground'
              }`}
            >
              {link.label}
              {location.pathname === link.path && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary animate-scan-line"></div>
              )}
            </Link>
          ))}
        </div>

        {/* Terminal Controls */}
        <div className="flex items-center space-x-4">
          {/* Geo-Lock */}
          <div className="relative">
            <TerminalButton
              variant="outline"
              size="sm"
              onClick={() => setIsGeoLockOpen(!isGeoLockOpen)}
              className="flex items-center space-x-2"
            >
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">[GEO-LOCK]</span>
            </TerminalButton>
            
            {isGeoLockOpen && (
              <div className="absolute top-full right-0 mt-2 w-80 terminal-border bg-surface p-4 z-50">
                <div className="text-xs font-mono text-secondary mb-2">
                  &gt; GEOGRAPHIC COMPLIANCE PROTOCOL
                </div>
                <div className="text-xs text-muted-foreground mb-4">
                  Select your operational region for regulatory compliance.
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <TerminalButton variant="ghost" size="sm" className="justify-start">
                    NORTH AMERICA
                  </TerminalButton>
                  <TerminalButton variant="ghost" size="sm" className="justify-start">
                    EUROPE
                  </TerminalButton>
                  <TerminalButton variant="ghost" size="sm" className="justify-start text-destructive">
                    RESTRICTED
                  </TerminalButton>
                  <TerminalButton variant="ghost" size="sm" className="justify-start text-destructive">
                    CLASSIFIED
                  </TerminalButton>
                </div>
                <div className="mt-3 text-xs text-accent">
                  &gt; CURRENT: UNRESTRICTED ACCESS
                </div>
              </div>
            )}
          </div>

          {/* User Access */}
          <TerminalButton variant="access" size="sm" className="flex items-center space-x-2">
            <User className="w-4 h-4" />
            <span className="hidden sm:inline">[REQUEST ACCESS]</span>
          </TerminalButton>

          {/* Cart */}
          <TerminalButton variant="outline" size="sm" className="flex items-center space-x-2 relative">
            <ShoppingCart className="w-4 h-4" />
            <span className="absolute -top-2 -right-2 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-bold">
              0
            </span>
          </TerminalButton>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;