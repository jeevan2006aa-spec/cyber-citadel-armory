import React from 'react';
import { TerminalButton } from '@/components/ui/terminal-button';
import { Eye, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  model: string;
  caliber: string;
  price: number;
  image: string;
  status: 'IN STOCK' | 'LIMITED' | 'CLASSIFIED';
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  model,
  caliber,
  price,
  image,
  status,
  category
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'IN STOCK':
        return 'status-active';
      case 'LIMITED':
        return 'status-warning';
      case 'CLASSIFIED':
        return 'text-destructive';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <div className="dossier-card group relative overflow-hidden">
      {/* Background scan line effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="scan-line"></div>
      </div>
      
      {/* Product Image */}
      <div className="aspect-[4/3] bg-black rounded-sm overflow-hidden mb-4 relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2">
          <span className={`text-xs font-mono px-2 py-1 bg-surface/80 rounded ${getStatusColor(status)}`}>
            [{status}]
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-3">
        <div className="space-y-1">
          <h3 className="font-orbitron font-bold text-lg text-primary tracking-wide">
            {name}
          </h3>
          <div className="font-mono text-sm text-secondary space-y-1">
            <div>[MODEL: {model}]</div>
            <div>[CAL: {caliber}]</div>
            <div>[CAT: {category}]</div>
          </div>
        </div>

        {/* Price */}
        <div className="font-mono text-xl text-accent font-bold">
          [COST: ${price.toLocaleString()}]
        </div>

        {/* Actions */}
        <div className="flex space-x-2">
          <TerminalButton
            variant="outline"
            size="sm"
            className="flex-1 flex items-center justify-center space-x-2"
          >
            <Eye className="w-4 h-4" />
            <span>[INTEL]</span>
          </TerminalButton>
          <TerminalButton
            variant="acquire"
            size="sm"
            className="flex-1 flex items-center justify-center space-x-2"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>[ACQUIRE]</span>
          </TerminalButton>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;