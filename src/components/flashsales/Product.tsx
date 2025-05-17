import React, { useState } from 'react';
import { Heart, Eye } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToWishList } from '../../redux/slices/wishListSlice';
import { addToCart } from '../../redux/slices/cartSlice';
import Popup from '../Popup';
import type { RootState } from '../../redux/store';

interface ProductProps {
  id: number;
  name: string;
  image: string;
  currentPrice: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviews: number;
}

const Product: React.FC<ProductProps> = ({
  id,
  name,
  image,
  currentPrice,
  originalPrice,
  discount,
  rating,
  reviews
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishlistItems = useSelector((state: RootState) => state.wishList.items);

  // Wishlist popup states
  const [showWishlistPopup, setShowWishlistPopup] = useState(false);
  const [wishlistPopupMessage, setWishlistPopupMessage] = useState('');
  const [isAlreadyInWishlist, setIsAlreadyInWishlist] = useState(false);

  // Cart popup states
  const [showCartPopup, setShowCartPopup] = useState(false);

  const handleWishlist = () => {
    const alreadyAdded = wishlistItems.some(item => item.id === id);

    if (alreadyAdded) {
      setWishlistPopupMessage("Item is already in your wishlist!");
      setIsAlreadyInWishlist(true);
      setShowWishlistPopup(true);
      return;
    }

    dispatch(
      addToWishList({
        id,
        title: name,
        price: currentPrice,
        image,
        isNew: false,
        rating,
        reviewCount: reviews,
      })
    );

    setWishlistPopupMessage("Item added to wishlist. Do you want to view your wishlist?");
    setIsAlreadyInWishlist(false);
    setShowWishlistPopup(true);
  };

  const handleWishlistConfirm = () => {
    setShowWishlistPopup(false);
    if (!isAlreadyInWishlist) {
      navigate('/wishlist');
    }
  };

  const handleWishlistCancel = () => {
    setShowWishlistPopup(false);
  };

  const handleAddToCart = () => {
    dispatch(addToCart({
      id,
      name,
      image,
      price: currentPrice,
      quantity: 1,
    }));

    setShowCartPopup(true);
  };

  const handleCartConfirm = () => {
    setShowCartPopup(false);
    navigate('/cart');
  };

  const handleCartCancel = () => {
    setShowCartPopup(false);
  };

  return (
    <div className="relative p-4 bg-white rounded-lg group">
      <div className="relative">
        <span className="absolute px-2 py-1 text-sm text-white bg-red-500 rounded top-2 left-2">
          -{discount}%
        </span>
        <div className="absolute flex flex-col gap-2 top-2 right-2">
          <button
            onClick={handleWishlist}
            className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-100 transition-colors"
            aria-label="Add to wishlist"
          >
            <Heart
              size={18}
              className={wishlistItems.some(item => item.id === id) ? "fill-red-500 text-red-500" : "text-gray-700"}
            />
          </button>
          <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
            <Eye size={20} />
          </button>
        </div>
        <img 
          src={image} 
          alt={name}
          className="object-cover w-full h-48 rounded-lg"
        />
        <button
          onClick={handleAddToCart}
          className="absolute bottom-0 left-0 right-0 py-2 text-white transition-opacity bg-black bg-opacity-75 opacity-0 group-hover:opacity-100"
        >
          Add To Cart
        </button>
      </div>
      <div className="mt-4">
        <h3 className="font-medium">{name}</h3>
        <div className="flex items-center gap-2 mt-2">
          <span className="font-semibold text-red-500">${currentPrice}</span>
          <span className="text-gray-500 line-through">${originalPrice}</span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={`text-${i < rating ? 'yellow' : 'gray'}-400`}>
                ★
              </span>
            ))}
          </div>
          <span className="text-gray-500">({reviews})</span>
        </div>
      </div>

      {/* Wishlist Popup */}
      <Popup
        isVisible={showWishlistPopup}
        message={wishlistPopupMessage}
        onConfirm={handleWishlistConfirm}
        onCancel={handleWishlistCancel}
        showActions={!isAlreadyInWishlist}
      />

      {/* Cart Popup */}
      <Popup
        isVisible={showCartPopup}
        message="Item added to cart. Do you want to view your cart?"
        onConfirm={handleCartConfirm}
        onCancel={handleCartCancel}
        showActions={true}
      />
    </div>
  );
};

export default Product;
