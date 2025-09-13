import React, { useState, useEffect } from 'react';
import { ArrowRight, Zap, Shield, Target } from 'lucide-react';
import Navigation from '@/components/Navigation';
import TerminalInitializer from '@/components/TerminalInitializer';
import ProductCard from '@/components/ProductCard';
import { TerminalButton } from '@/components/ui/terminal-button';

// Import tactical images
import heroManufacturing from '@/assets/hero-manufacturing.jpg';
import rifleProduct from '@/assets/rifle-product-1.jpg';
import pistolProduct from '@/assets/pistol-product-1.jpg';
import shotgunProduct from '@/assets/shotgun-product-1.jpg';

const Index = () => {
  const [showInitializer, setShowInitializer] = useState(true);
  const [terminalReady, setTerminalReady] = useState(false);

  const handleInitializerComplete = () => {
    setShowInitializer(false);
    setTimeout(() => setTerminalReady(true), 300);
  };

  const featuredProducts = [
    {
      id: '1',
      name: 'SCAR 17S',
      model: 'FN HERSTAL',
      caliber: '7.62X51MM',
      price: 3499,
      image: rifleProduct,
      status: 'IN STOCK' as const,
      category: 'RIFLE'
    },
    {
      id: '2',
      name: 'GLOCK 19X',
      model: 'GLOCK PERFECTION',
      caliber: '9X19MM',
      price: 599,
      image: pistolProduct,
      status: 'LIMITED' as const,
      category: 'PISTOL'
    },
    {
      id: '3',
      name: 'M4 TACTICAL',
      model: 'BENELLI',
      caliber: '12 GAUGE',
      price: 2199,
      image: shotgunProduct,
      status: 'CLASSIFIED' as const,
      category: 'SHOTGUN'
    }
  ];

  const capabilities = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "MILITARY GRADE",
      description: "Precision engineered for professional operators"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "TACTICAL PRECISION",
      description: "Sub-MOA accuracy with combat reliability"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "RAPID DEPLOYMENT",
      description: "Streamlined procurement protocols"
    }
  ];

  if (showInitializer) {
    return <TerminalInitializer onComplete={handleInitializerComplete} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroManufacturing})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        
        {/* Scan line overlay */}
        <div className="absolute inset-0 scan-line opacity-20"></div>
        
        {/* Content */}
        <div className={`relative z-10 text-center max-w-4xl px-4 ${terminalReady ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-orbitron font-black text-primary mb-4 tracking-wider">
              NEXUS
            </h1>
            <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-secondary mb-6 tracking-wide">
              ARMAMENT
            </h2>
            <div className="h-1 w-32 bg-primary mx-auto animate-scan-line mb-8"></div>
          </div>
          
          <p className="text-xl md:text-2xl font-mono text-muted-foreground mb-8 tracking-wider">
            {'>'} FORGE YOUR WILL
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TerminalButton variant="acquire" size="xl" className="flex items-center space-x-3">
              <span>ENTER ARMORY</span>
              <ArrowRight className="w-5 h-5" />
            </TerminalButton>
            <TerminalButton variant="outline" size="xl">
              REQUEST CLEARANCE
            </TerminalButton>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-orbitron font-bold text-primary mb-4 tracking-wide">
              [TACTICAL CAPABILITIES]
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="terminal-border p-8 text-center group hover:bg-primary/5">
                <div className="text-primary mb-4 flex justify-center group-hover:animate-pulse">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-rajdhani font-bold text-secondary mb-3 tracking-wide">
                  {capability.title}
                </h3>
                <p className="text-muted-foreground font-mono text-sm">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Arsenal */}
      <section className="py-20 px-4 bg-surface/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-orbitron font-bold text-primary mb-4 tracking-wide">
              [FEATURED ARSENAL]
            </h2>
            <p className="text-muted-foreground font-mono text-lg mb-8">
              {'>'} SELECT TACTICAL ASSETS FOR IMMEDIATE DEPLOYMENT
            </p>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          
          <div className="text-center">
            <TerminalButton variant="primary" size="lg" className="flex items-center space-x-3 mx-auto">
              <span>ACCESS FULL ARMORY</span>
              <ArrowRight className="w-5 h-5" />
            </TerminalButton>
          </div>
        </div>
      </section>

      {/* Terminal Footer */}
      <footer className="py-12 px-4 border-t border-primary/30">
        <div className="container mx-auto text-center">
          <div className="font-mono text-sm text-muted-foreground space-y-2">
            <div>{'>'} NEXUS ARMAMENT TACTICAL SOLUTIONS</div>
            <div>{'>'} CLASSIFIED OPERATIONS | SECURE PROTOCOLS</div>
            <div>{'>'} AUTHORIZED PERSONNEL ONLY</div>
          </div>
          <div className="mt-8 text-xs text-accent font-mono">
            {'>'} TERMINAL SESSION: ACTIVE | ENCRYPTION: AES-256
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;