import React, { useState } from "react";
import { Heart, Eye } from "lucide-react";
import StarRating from "../StarRating";
import type { Product } from "../../types/product";
import { useDispatch, useSelector } from "react-redux";
import { addToWishList } from "../../redux/slices/wishListSlice";
import { addToCart } from "../../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../../redux/store";
import Popup from "../Popup";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const wishlistItems = useSelector((state: RootState) => state.wishList.items);
  const isInWishlist = wishlistItems.some((item) => item.id === product.id);

  const [selectedColor, setSelectedColor] = useState<string | null>(
    product.colors?.[0]?.color || null
  );

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [popupInfo, setPopupInfo] = useState<{
    visible: boolean;
    type: "wishlist" | "cart";
    productName: string;
    showActions: boolean;
  }>({
    visible: false,
    type: "wishlist",
    productName: "",
    showActions: true,
  });

  const handleWishlist = () => {
    setSelectedProduct(product);

    if (isInWishlist) {
      setPopupInfo({
        visible: true,
        type: "wishlist",
        productName: product.name,
        showActions: false,
      });
      return;
    }

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

    setPopupInfo({
      visible: true,
      type: "wishlist",
      productName: product.name,
      showActions: true,
    });
  };

  const handleAddToCart = () => {
    setSelectedProduct(product);

    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.imageUrl,
        quantity: 1,
      })
    );

    setPopupInfo({
      visible: true,
      type: "cart",
      productName: product.name,
      showActions: true,
    });
  };

  const handleConfirm = () => {
    setPopupInfo({ ...popupInfo, visible: false });

    if (popupInfo.type === "wishlist" && selectedProduct) {
      navigate("/wishlist", { state: { product: selectedProduct } });
    } else if (popupInfo.type === "cart") {
      navigate("/cart");
    }
  };

  const handleCancel = () => {
    setPopupInfo({ ...popupInfo, visible: false });
  };

  return (
    <div className="group relative bg-white p-3 sm:p-4 rounded-lg transition-shadow hover:shadow-md">
      {product.isNew && (
        <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
          NEW
        </span>
      )}

      {/* ✅ Image & Hover Actions */}
      <div className="relative overflow-hidden rounded-lg bg-white mb-3">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-cover rounded-lg"
        />

        {/* Icons */}
        <div className="absolute top-2 right-2 flex flex-col gap-2 z-10">
          <button
            onClick={handleWishlist}
            className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-100 transition-colors"
            aria-label={
              isInWishlist ? "Remove from wishlist" : "Add to wishlist"
            }
          >
            <Heart
              size={18}
              className={
                isInWishlist ? "fill-red-500 text-red-500" : "text-gray-700"
              }
            />
          </button>
          <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
            <Eye size={18} className="text-gray-700" />
          </button>
        </div>

        {/* Hover Add to Cart */}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 text-sm sm:text-base opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
        >
          Add To Cart
        </button>
      </div>

      {/* ✅ Product Info */}
      <div className="mt-2">
        <h3 className="font-medium text-sm sm:text-base truncate">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mt-1.5">
          <span className="text-red-500 font-semibold text-sm sm:text-base">
            ${product.price}
          </span>
        </div>
        <div className="flex items-center gap-2 mt-1.5">
          <StarRating rating={product.rating} />
          <span className="text-gray-500 text-xs sm:text-sm">
            ({product.reviews})
          </span>
        </div>

        {/* ✅ Colors */}
        {product.colors?.length > 0 && (
          <div className="flex gap-2 mt-2">
            {product.colors?.map((colorOption, index) => (
              <button
                key={index}
                className={`w-5 h-5 rounded-full border-2 ${
                  selectedColor === colorOption.color
                    ? "ring-2 ring-gray-400"
                    : ""
                }`}
                style={{ backgroundColor: colorOption.color }}
                onClick={() => setSelectedColor(colorOption.color)}
              />
            ))}
          </div>
        )}
      </div>

      {/* ✅ Shared Popup */}
      <Popup
        isVisible={popupInfo.visible}
        message={
          popupInfo.type === "wishlist"
            ? popupInfo.showActions
              ? `${popupInfo.productName} added to wishlist. View wishlist?`
              : `${popupInfo.productName} is already in your wishlist.`
            : `${popupInfo.productName} added to cart. Go to cart?`
        }
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        showActions={popupInfo.showActions}
      />
    </div>
  );
};

export default ProductCard;
