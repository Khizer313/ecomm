import React, { useState } from 'react';
import { Heart, Eye } from 'lucide-react';
import StarRating from '../StarRating';
import type { Product } from '../../types/product';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishList } from '../../redux/slices/wishListSlice';
import { addToCart } from '../../redux/slices/cartSlice';
import { useNavigate } from 'react-router-dom';
import type { RootState } from '../../redux/store';
import Popup from '../Popup';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedColor, setSelectedColor] = useState<string | null>(
    product.colors && product.colors.length > 0 ? product.colors[0].color : null
  );

  const wishlistItems = useSelector((state: RootState) => state.wishList.items);
  const isInWishlist = wishlistItems.some(item => item.id === product.id);

  // Wishlist popup state
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopupActions, setShowPopupActions] = useState(true);

  // Cart popup state
  const [cartPopupVisible, setCartPopupVisible] = useState(false);
  const [cartPopupMessage, setCartPopupMessage] = useState('');

  // Handle wishlist
  const handleWishlist = () => {
    if (isInWishlist) {
      setPopupMessage('This item is already in your wishlist!');
      setShowPopupActions(false);
      setPopupVisible(true);
      return;
    }
    setPopupMessage('Are you sure you want to add this item to the wishlist?');
    setShowPopupActions(true);
    setPopupVisible(true);
  };

  const handleConfirmAddToWishlist = () => {
    dispatch(
      addToWishList({
        id: product.id,
        title: product.name,
        price: product.price,
        image: product.imageUrl,
        isNew: product.isNew,
        rating: product.rating,
        reviewCount: product.reviews,
      })
    );
    setPopupVisible(false);
    navigate('/wishlist');
  };

  const handleCancel = () => {
    setPopupVisible(false);
  };

  // Handle Add to Cart
  const handleAddToCart = () => {
    setCartPopupMessage('Are you sure you want to add this item to the cart?');
    setCartPopupVisible(true);
  };

  const handleConfirmAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.imageUrl,
        quantity: 1,
      })
    );
    setCartPopupVisible(false);
    navigate('/cart');
  };

  const handleCartCancel = () => {
    setCartPopupVisible(false);
  };

  return (
    <div className="bg-gray-50 rounded-lg p-4 transition-shadow hover:shadow-md relative group">
      {product.isNew && (
        <span className="absolute top-2 left-2 bg-green-400 text-white text-xs font-bold px-2 py-1 rounded z-10">
          NEW
        </span>
      )}
      
      <div className="relative overflow-hidden aspect-square bg-white rounded mb-4">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="object-contain w-full h-full p-4"
        />
        
        <div className="absolute top-2 right-2 flex flex-col space-y-2">
          <button 
            onClick={handleWishlist}
            className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-100 transition-colors"
            aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart 
              size={18} 
              className={isInWishlist ? "fill-red-500 text-red-500" : "text-gray-700"} 
            />
          </button>
          <button 
            className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-100 transition-colors"
            aria-label="Quick view"
          >
            <Eye size={18} className="text-gray-700" />
          </button>
        </div>
        
        {product.showAddToCart && (
          <div 
            className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 cursor-pointer"
            onClick={handleAddToCart}
          >
            Add To Cart
          </div>
        )}
      </div>
      
      <div>
        <h3 className="font-medium text-gray-900 mb-1 truncate">{product.name}</h3>
        <div className="flex items-center justify-between mb-2">
          <span className="text-red-500 font-bold">${product.price}</span>
          <div className="flex items-center">
            <StarRating rating={product.rating} />
            <span className="text-gray-500 text-xs ml-1">({product.reviews})</span>
          </div>
        </div>
        
        {product.colors && product.colors.length > 0 && (
          <div className="flex space-x-2">
            {product.colors.map((colorOption, index) => (
              <button
                key={index}
                className={`w-5 h-5 rounded-full border ${selectedColor === colorOption.color ? 'ring-2 ring-gray-400' : ''}`}
                style={{ backgroundColor: colorOption.color }}
                onClick={() => setSelectedColor(colorOption.color)}
                aria-label={`Select color ${colorOption.name}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Wishlist Popup */}
      <Popup 
        isVisible={popupVisible} 
        message={popupMessage} 
        onConfirm={showPopupActions ? handleConfirmAddToWishlist : handleCancel} 
        onCancel={handleCancel} 
        showActions={showPopupActions} 
      />

      {/* Add to Cart Popup */}
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
