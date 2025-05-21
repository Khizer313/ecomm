import React from 'react';
import { Star } from 'lucide-react';

interface RatingProps {
  value: number;
  reviewCount?: number;
  className?: string;
}

const Rating: React.FC<RatingProps> = ({ 
  value, 
  reviewCount, 
  className = '' 
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            fill={i < value ? '#FFAC33' : 'transparent'}
            stroke={i < value ? '#FFAC33' : '#CCCCCC'}
            className="mr-0.5"
          />
        ))}
      </div>
      {reviewCount && (
        <span className="text-gray-500 text-sm ml-1">({reviewCount})</span>
      )}
    </div>
  );
};

export default Rating;