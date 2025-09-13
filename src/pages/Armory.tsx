import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import ProductCard from '@/components/ProductCard';
import { TerminalButton } from '@/components/ui/terminal-button';
import { Filter, Search, Grid, List } from 'lucide-react';

// Import tactical images
import rifleProduct from '@/assets/rifle-product-1.jpg';
import pistolProduct from '@/assets/pistol-product-1.jpg';
import shotgunProduct from '@/assets/shotgun-product-1.jpg';

const Armory = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedCaliber, setSelectedCaliber] = useState('ALL');

  const products = [
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
    },
    {
      id: '4',
      name: 'AR-15 PRECISION',
      model: 'DANIEL DEFENSE',
      caliber: '5.56X45MM',
      price: 2899,
      image: rifleProduct,
      status: 'IN STOCK' as const,
      category: 'RIFLE'
    },
    {
      id: '5',
      name: 'SIG P320',
      model: 'SIG SAUER',
      caliber: '9X19MM',
      price: 649,
      image: pistolProduct,
      status: 'IN STOCK' as const,
      category: 'PISTOL'
    },
    {
      id: '6',
      name: 'MOSSBERG 590',
      model: 'MOSSBERG',
      caliber: '12 GAUGE',
      price: 899,
      image: shotgunProduct,
      status: 'LIMITED' as const,
      category: 'SHOTGUN'
    }
  ];

  const categories = ['ALL', 'RIFLE', 'PISTOL', 'SHOTGUN'];
  const calibers = ['ALL', '9X19MM', '5.56X45MM', '7.62X51MM', '12 GAUGE'];

  const filteredProducts = products.filter(product => {
    return (selectedCategory === 'ALL' || product.category === selectedCategory) &&
           (selectedCaliber === 'ALL' || product.caliber === selectedCaliber);
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-orbitron font-bold text-primary mb-4 tracking-wide">
              [THE ARMORY]
            </h1>
            <p className="text-xl font-mono text-secondary tracking-wider">
              {'&gt;'} TACTICAL ASSET INVENTORY
            </p>
            <div className="w-32 h-1 bg-primary mx-auto mt-4 animate-scan-line"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filter Console */}
            <div className="lg:w-80">
              <div className="terminal-border p-6 hex-pattern">
                <div className="flex items-center space-x-2 mb-6">
                  <Filter className="w-5 h-5 text-primary" />
                  <h2 className="text-lg font-mono font-bold text-secondary tracking-wide">
                    [TACTICAL PARAMETERS]
                  </h2>
                </div>

                {/* Search */}
                <div className="mb-6">
                  <label className="block text-sm font-mono text-muted-foreground mb-2">
                    [ASSET SEARCH]
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="ENTER DESIGNATION..."
                      className="w-full bg-surface border border-border rounded pl-10 pr-4 py-3 font-mono text-sm text-foreground focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-mono text-muted-foreground mb-3">
                    [WEAPON CLASS]
                  </label>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-4 py-2 font-mono text-sm border transition-all duration-300 ${
                          selectedCategory === category
                            ? 'border-primary text-primary bg-primary/10'
                            : 'border-border text-muted-foreground hover:border-primary/50 hover:text-primary'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Caliber Filter */}
                <div className="mb-8">
                  <label className="block text-sm font-mono text-muted-foreground mb-3">
                    [CALIBER SPEC]
                  </label>
                  <div className="space-y-2">
                    {calibers.map(caliber => (
                      <button
                        key={caliber}
                        onClick={() => setSelectedCaliber(caliber)}
                        className={`w-full text-left px-4 py-2 font-mono text-sm border transition-all duration-300 ${
                          selectedCaliber === caliber
                            ? 'border-primary text-primary bg-primary/10'
                            : 'border-border text-muted-foreground hover:border-primary/50 hover:text-primary'
                        }`}
                      >
                        {caliber}
                      </button>
                    ))}
                  </div>
                </div>

                <TerminalButton variant="primary" className="w-full animate-pulse-glow">
                  [APPLY FILTERS]
                </TerminalButton>
              </div>
            </div>

            {/* Inventory Grid */}
            <div className="flex-1">
              {/* View Controls */}
              <div className="flex items-center justify-between mb-8">
                <div className="font-mono text-sm text-secondary">
                  {'&gt;'} ASSETS FOUND: {filteredProducts.length}
                </div>
                <div className="flex items-center space-x-2">
                  <TerminalButton
                    variant={viewMode === 'grid' ? 'primary' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid className="w-4 h-4" />
                  </TerminalButton>
                  <TerminalButton
                    variant={viewMode === 'list' ? 'primary' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                  >
                    <List className="w-4 h-4" />
                  </TerminalButton>
                </div>
              </div>

              {/* Products */}
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'md:grid-cols-2 xl:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-16">
                  <div className="text-6xl text-muted-foreground mb-4">⚠</div>
                  <div className="font-mono text-xl text-secondary mb-2">
                    {'&gt;'} NO ASSETS MATCH CRITERIA
                  </div>
                  <div className="font-mono text-sm text-muted-foreground">
                    Adjust tactical parameters and retry search protocol
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Armory;