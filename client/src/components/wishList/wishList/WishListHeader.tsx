import React from 'react';
import Button from '../shared/Button';

interface WishlistHeaderProps {
  count: number;
  onMoveAllToBag: () => void;
}

const WishlistHeader: React.FC<WishlistHeaderProps> = ({ count, onMoveAllToBag }) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-bold">Wishlist ({count})</h2>
      <Button variant="outline" onClick={onMoveAllToBag}>
        Move All To Bag
      </Button>
    </div>
  );
};

export default WishlistHeader;