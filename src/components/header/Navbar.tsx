import React, { useState, useRef, useEffect } from "react";
import { Search, Heart, ShoppingCart, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  flashSaleProduct,
  bestSellingProduct,
  products,
  recommendedProducts,
} from "../../data/products";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [wishlistActive, setWishlistActive] = useState(false);
  const [cartActive, setCartActive] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<any[]>([]);
  const navigate = useNavigate();
  const suggestionBoxRef = useRef<HTMLDivElement>(null);

  // Close suggestions on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionBoxRef.current &&
        !suggestionBoxRef.current.contains(event.target as Node)
      ) {
        setFilteredSuggestions([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleWishlist = () => {
    setWishlistActive(!wishlistActive);
    navigate("/wishlist");
  };

  const handleCart = () => {
    setCartActive(!cartActive);
    navigate("/cart");
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchInput(query);

    if (query.trim() !== "") {
      const allProducts = [
        ...products,
        ...flashSaleProduct,
        ...bestSellingProduct,
        ...recommendedProducts,
      ];

      const lowerQuery = query.toLowerCase();

      const filtered = allProducts.filter((product) => {
        const name =
          product.name?.toLowerCase() || product.title?.toLowerCase() || "";
        const category = product.category?.toLowerCase() || "";
        const subcategory = product.subcategory?.toLowerCase() || "";

        return (
          name.includes(lowerQuery) ||
          category.includes(lowerQuery) ||
          subcategory.includes(lowerQuery)
        );
      });

      const sorted = filtered.sort((a, b) => {
        const aName = a.name?.toLowerCase() || a.title?.toLowerCase() || "";
        const bName = b.name?.toLowerCase() || b.title?.toLowerCase() || "";
        const aStarts = aName.startsWith(lowerQuery) ? 0 : 1;
        const bStarts = bName.startsWith(lowerQuery) ? 0 : 1;
        return aStarts - bStarts;
      });

      setFilteredSuggestions(sorted);
    } else {
      setFilteredSuggestions([]);
    }
  };

  const handleSuggestionClick = (id: number | string) => {
    setSearchInput("");
    setFilteredSuggestions([]);
    navigate(`/product/${id}`);
  };

  const renderSearchInput = (isMobile = false) => (
    <div
      className={`relative ${
        isMobile ? "w-full" : "hidden md:flex"
      } bg-gray-100 rounded-md items-center`}
      ref={suggestionBoxRef}
    >
      <input
        type="text"
        value={searchInput}
        onChange={handleSearch}
        placeholder="What are you looking for?"
        className={`px-4 py-2 text-sm bg-gray-100 rounded-md outline-none ${
          isMobile ? "w-full" : "w-56 lg:w-64"
        }`}
      />
      <Search className="absolute text-gray-500 right-3" size={20} />
      {filteredSuggestions.length > 0 && (
        <div className="absolute z-10 w-full bg-white border border-gray-200 top-full mt-1 rounded-md shadow-md max-h-48 overflow-auto">
          <ul>
            {filteredSuggestions.map((product) => (
              <li
                key={product.id}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSuggestionClick(product.id)}
              >
                {product.name || product.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );

  return (
    <nav className="border-b border-gray-200">
      <div className="container flex items-center justify-between px-6 py-4 mx-auto lg:px-16">
        <div className="flex items-center">
          <button
            className="mr-4 lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <h1 className="text-2xl font-bold">Exclusive</h1>
        </div>

        <div className="items-center hidden space-x-8 lg:flex">
          <a href="#" className="text-[16px] font-normal">
            Home
          </a>
          <a href="#" className="text-[16px] font-normal">
            Contact
          </a>
          <a href="#" className="text-[16px] font-normal">
            About
          </a>
          <a href="#" className="text-[16px] font-normal">
            Sign Up
          </a>
        </div>

        <div className="flex items-center space-x-2 pr-2 lg:pr-6">
          {renderSearchInput(false)}

          <button
            onClick={handleWishlist}
            className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-100 transition-colors"
            aria-label={
              wishlistActive ? "Remove from wishlist" : "Add to wishlist"
            }
          >
            <Heart
              size={18}
              className={
                wishlistActive ? "fill-red-500 text-red-500" : "text-gray-700"
              }
            />
          </button>

          <button onClick={handleCart} className="p-2" aria-label="Go to cart">
            <ShoppingCart
              size={24}
              className={cartActive ? "text-green-500" : "text-gray-700"}
            />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="px-4 py-2 border-t border-gray-200 lg:hidden">
          <div className="flex flex-col pb-3 space-y-3">
            <a href="#" className="py-2 font-medium">
              Home
            </a>
            <a href="#" className="py-2 font-medium">
              Contact
            </a>
            <a href="#" className="py-2 font-medium">
              About
            </a>
            <a href="#" className="py-2 font-medium">
              Sign Up
            </a>
          </div>
          {renderSearchInput(true)}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
