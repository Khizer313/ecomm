import React from 'react';

interface PriceDisplayProps {
  price: number;
  originalPrice?: number;
  className?: string;
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({ 
  price, 
  originalPrice, 
  className = '' 
}) => {
  const formatPrice = (amount: number) => {
    return `$${amount}`;
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="text-red-500 font-semibold">{formatPrice(price)}</span>
      {originalPrice && (
        <span className="text-gray-500 line-through text-sm">{formatPrice(originalPrice)}</span>
      )}
    </div>
  );
};

export default PriceDisplay;