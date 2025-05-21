import React, { useState } from 'react';
import { Trash2, Eye } from 'lucide-react';
import type { wishListData } from '../../../types/product';
import { AddToCartButton } from './Button';
import PriceDisplay from './PriceDisplay';
import Rating from './Rating';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../../redux/slices/cartSlice';// path as per your structure
import Popup from '../../Popup';



interface ProductCardProps {
  product: wishListData;
  onRemove?: () => void;
  showQuickView?: boolean;
  showRating?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onRemove,
  showQuickView = false,
  showRating = false,
}) => {
  const [cartPopupVisible, setCartPopupVisible] = useState(false);
  const [cartPopupMessage, setCartPopupMessage] = useState('');
  const { title, price, originalPrice, discountPercentage, image, isNew, rating, reviewCount } = product;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
//   const handleAddToCart = () => {
// dispatch(addToCart({
//   ...product,
//   name: product.name || product.title, // ensure name is always present
//   quantity: 1,
// }));
//     navigate('/cart');            // ✅ redirect to cart page
//   };
  const handleAddToCart = () => {
    setCartPopupMessage('Are you sure you want to add this item to the cart?');
    setCartPopupVisible(true);
  };
  
  const handleConfirmAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name:  product.title,
        price: product.price,
        image: product.image,
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
    console.log(`Quick view for ${title}`);
  };

  const handleRemove = () => {
    console.log(`Removing: ${title}`);
    if (onRemove) {
      console.log("onRemove is being called");
      onRemove();
    } else {
      console.log("onRemove is not defined");
    }
  };

  

  return (
    <div className="group bg-white rounded-md overflow-hidden transition-all duration-300 hover:shadow-md">
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {discountPercentage && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            -{discountPercentage}%
          </div>
        )}

        {isNew && (
          <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
            NEW
          </div>
        )}

        <div className="absolute top-2 right-2 flex gap-2">
          {onRemove && (
            <button
              onClick={handleRemove}
              className="p-2  cursor-pointer rounded-full bg-red/80 bg-red-500 text-white transition-all duration-200"
              aria-label="Remove from wishlist"
            >
              <Trash2 size={20} />
            </button>
          )}

          {showQuickView && (
            <button
              onClick={handleQuickView}
              className="p-2 rounded-full cursor-pointer bg-white/80 hover:bg-white text-gray-700 transition-all duration-200"
              aria-label="Quick view"
            >
              <Eye size={20} />
            </button>
          )}
        </div>
      </div>

      <div className="p-4">
        <AddToCartButton onClick={handleAddToCart} />

        <h3 className="mt-3 text-base font-medium text-gray-900 line-clamp-1">{title}</h3>

        <div className="mt-1">
          <PriceDisplay price={price} originalPrice={originalPrice} />
        </div>

        {showRating && rating && (
          <div className="mt-2">
            <Rating value={rating} reviewCount={reviewCount} />
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

export default ProductCard;
