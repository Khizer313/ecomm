import React from 'react';
import ProductCard from '../shared/ProductCard';
import type { wishListData } from '../../../types/product';

interface WishlistItemsProps {
  products: wishListData[];
  onRemoveItem: (id: number) => void;
}

const WishlistItems: React.FC<WishlistItemsProps> = ({ products, onRemoveItem }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {products.map((product) => (
        <ProductCard
        
          key={product.id}
          product={product}
          onRemove={() => onRemoveItem(product.id)}
        />
      ))}
    </div>
  );
};

export default WishlistItems;