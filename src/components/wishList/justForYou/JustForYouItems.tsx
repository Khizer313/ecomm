import React, { useState } from 'react';
import {  Eye } from 'lucide-react';
import type { BestSellingProduct } from '../../../types/product';
import { AddToCartButton } from '../shared/Button';
import PriceDisplay from '../shared/PriceDisplay';
import Rating from '../shared/Rating';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../../redux/slices/cartSlice';
import Popup from '../../Popup';

interface JustForYouItemsProps {
  products: BestSellingProduct[];
}

const JustForYouItems: React.FC<JustForYouItemsProps> = ({ products }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Local ProductCard component inside JustForYouItems for BestSellingProduct
  const ProductCard: React.FC<{ product: BestSellingProduct }> = ({ product }) => {
    const [cartPopupVisible, setCartPopupVisible] = useState(false);
    const [cartPopupMessage, setCartPopupMessage] = useState('');

    const {
      id,
      name,
      image,
      currentPrice,
      originalPrice,
      rating,
      reviews,
    } = product;

    const handleAddToCart = () => {
      setCartPopupMessage('Are you sure you want to add this item to the cart?');
      setCartPopupVisible(true);
    };

    const handleConfirmAddToCart = () => {
      dispatch(
        addToCart({
          id,
          name,
          price: currentPrice,
          image,
          quantity: 1,
        })
      );
      setCartPopupVisible(false);
      navigate('/cart');
    };

    const handleCartCancel = () => {
      setCartPopupVisible(false);
    };

    const handleQuickView = () => {
      console.log(`Quick view for ${name}`);
    };

    return (
      <div className="group bg-white rounded-md overflow-hidden transition-all duration-300 hover:shadow-md">
        <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-2 right-2 flex gap-2">
            <button
              onClick={handleQuickView}
              className="p-2 rounded-full cursor-pointer bg-white/80 hover:bg-white text-gray-700 transition-all duration-200"
              aria-label="Quick view"
            >
              <Eye size={20} />
            </button>
          </div>
        </div>

        <div className="p-4">
          <AddToCartButton onClick={handleAddToCart} />
          <h3 className="mt-3 text-base font-medium text-gray-900 line-clamp-1">{name}</h3>
          <div className="mt-1">
            <PriceDisplay price={currentPrice} originalPrice={originalPrice} />
          </div>
          {rating && (
            <div className="mt-2">
              <Rating value={rating} reviewCount={reviews} />
            </div>
          )}
        </div>

        <Popup
          isVisible={cartPopupVisible}
          message={cartPopupMessage}
          onConfirm={handleConfirmAddToCart}
          onCancel={handleCartCancel}
          showActions={true}
        />
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default JustForYouItems;
