import React, { useState } from 'react';
import { Search, Heart, ShoppingCart, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [wishlistActive, setWishlistActive] = useState(false);
  const [cartActive, setCartActive] = useState(false); // New state for cart icon color
  const navigate = useNavigate();

  const handleWishlist = () => {
    if (wishlistActive) {
      setWishlistActive(false); // Remove from wishlist
    } else {
      setWishlistActive(true);  // Add to wishlist
      navigate('/wishlist');
    }
  };

  const handleCart = () => {
    setCartActive(!cartActive); // Toggle cart icon state
    navigate('/cart'); // Redirect to cart page
  };

  return (
    <nav className="border-b border-gray-200">
      <div className="container flex items-center justify-between px-6 py-4 mx-auto lg:px-16">
        <div className="flex items-center">
          <button className="mr-4 lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <h1 className="text-2xl font-bold">Exclusive</h1>
        </div>

        <div className="items-center hidden space-x-8 lg:flex">
          <a href="#" className="text-[16px] font-normal">Home</a>
          <a href="#" className="text-[16px] font-normal">Contact</a>
          <a href="#" className="text-[16px] font-normal">About</a>
          <a href="#" className="text-[16px] font-normal">Sign Up</a>
        </div>

        <div className="flex items-center space-x-2 pr-2 lg:pr-6">
          <div className="relative hidden bg-gray-100 rounded-md md:flex">
            <input 
              type="text" 
              placeholder="What are you looking for?" 
              className="w-56 px-4 py-2 text-sm bg-gray-100 rounded-md outline-none lg:w-64"
            />
            <Search className="absolute text-gray-500 right-3" size={20} />
          </div>

          <button
            onClick={handleWishlist}
            className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-100 transition-colors"
            aria-label={wishlistActive ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart
              size={18}
              className={wishlistActive ? "fill-red-500 text-red-500" : "text-gray-700"}
            />
          </button>

          {/* Shopping Cart Button */}
          <button
            onClick={handleCart}
            className="p-2"
            aria-label="Go to cart"
          >
            <ShoppingCart
              size={24}
              className={cartActive ? "text-green-500" : "text-gray-700"} // Change color based on cartActive state
            />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="px-4 py-2 border-t border-gray-200 lg:hidden">
          <div className="flex flex-col pb-3 space-y-3">
            <a href="#" className="py-2 font-medium">Home</a>
            <a href="#" className="py-2 font-medium">Contact</a>
            <a href="#" className="py-2 font-medium">About</a>
            <a href="#" className="py-2 font-medium">Sign Up</a>
          </div>
          <div className="relative flex items-center py-3 mb-3 bg-gray-100 rounded-md">
            <input 
              type="text" 
              placeholder="What are you looking for?" 
              className="w-full px-4 py-2 bg-gray-100 rounded-md outline-none"
            />
            <Search className="absolute text-gray-500 right-3" size={20} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
