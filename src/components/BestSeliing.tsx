import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../redux/store";
import React, { useState } from "react";
import { Heart, Eye } from "lucide-react";
import { addToWishList } from "../redux/slices/wishListSlice";
import { addToCart } from "../redux/slices/cartSlice"; // ✅ Assumed
import { useNavigate } from "react-router-dom";
import Popup from "./Popup";
import { bestSellingProduct } from "../data/products";
import type { BestSellingProduct } from "../types/product";

const BestSelling: React.FC = () => {
  const [selectedProduct, setSelectedProduct] =
    useState<BestSellingProduct | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishlistItems = useSelector((state: RootState) => state.wishList.items);

  const [wishlist, setWishlist] = useState<Record<number, boolean>>({});
  const [popupInfo, setPopupInfo] = useState<{
    visible: boolean;
    type: "wishlist" | "cart";
    productName: string;
  }>({ visible: false, type: "wishlist", productName: "" });

  const handleWishlist = (product: BestSellingProduct) => {
    // navigate("/wishList", { state: { product } });
    setSelectedProduct(product); // store product

    const alreadyAdded = wishlistItems.some((item) => item.id === product.id);
    if (alreadyAdded) {
      setPopupInfo({
        visible: true,
        type: "wishlist",
        productName: product.name,
      });
      return;
    }

    dispatch(
      addToWishList({
        id: product.id,
        title: product.name,
        price: product.currentPrice,
        image: product.image,
        isNew: false,
        rating: product.rating,
        reviewCount: product.reviews,
      })
    );

    setWishlist((prev) => ({ ...prev, [product.id]: true }));
    setPopupInfo({
      visible: true,
      type: "wishlist",
      productName: product.name,
    });
  };

  const handleAddToCart = (product: BestSellingProduct) => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.currentPrice,
        image: product.image,
        quantity: 1,
      })
    );
    setPopupInfo({ visible: true, type: "cart", productName: product.name });
  };

  const handleConfirm = () => {
    setPopupInfo({ ...popupInfo, visible: false });
    if (popupInfo.type === "wishlist" && selectedProduct)
      navigate("/wishlist", { state: { product: selectedProduct } });
    else if (popupInfo.type === "cart") navigate("/cart");
  };

  const handleCancel = () => {
    setPopupInfo({ ...popupInfo, visible: false });
  };
  // const handleProductClick = (product: BestSellingProduct) => {
  //   navigate('/wishList', { state: { product } });
  // };
  return (
    <section className="container mx-auto px-4 py-8 sm:py-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-8 mb-6 sm:mb-8">
        <div>
          <div className="flex items-center gap-4">
            <div className="w-5 h-10 bg-red-500 rounded-sm"></div>
            <h2 className="text-red-500 font-medium text-sm sm:text-base">
              This Month
            </h2>
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-2 sm:mt-4">
            Best Selling Products
          </h3>
        </div>
        <button className="bg-red-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded text-sm sm:text-base hover:bg-red-600 self-start sm:self-center">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {bestSellingProduct.map((product) => (
          <div
            key={product.id}
            className="group relative bg-white p-3 sm:p-4 rounded-lg"
          >
            <div className="relative">
              <div className="absolute top-2 right-2 flex flex-col gap-2">
                <button
                  onClick={() => handleWishlist(product)}
                  className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-100 transition-colors"
                  aria-label={
                    wishlist[product.id]
                      ? "Remove from wishlist"
                      : "Add to wishlist"
                  }
                >
                  <Heart
                    size={18}
                    className={
                      wishlist[product.id]
                        ? "fill-red-500 text-red-500"
                        : "text-gray-700"
                    }
                  />
                </button>
                <button className="p-1.5 sm:p-2 rounded-full bg-white shadow-md hover:bg-gray-100">
                  <Eye size={16} className="sm:w-5 sm:h-5" />
                </button>
              </div>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-36 sm:h-48 object-cover rounded-lg"
              />
              <button
                className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 text-sm sm:text-base opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => handleAddToCart(product)}
              >
                Add To Cart
              </button>
            </div>
            <div className="mt-3 sm:mt-4">
              <h3 className="font-medium text-sm sm:text-base">
                {product.name}
              </h3>
              <div className="flex items-center gap-2 mt-1.5 sm:mt-2">
                <span className="text-red-500 font-semibold text-sm sm:text-base">
                  ${product.currentPrice}
                </span>
                <span className="text-gray-500 line-through text-xs sm:text-sm">
                  ${product.originalPrice}
                </span>
              </div>
              <div className="flex items-center gap-2 mt-1.5 sm:mt-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-${
                        i < product.rating ? "yellow" : "gray"
                      }-400 text-sm sm:text-base`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-gray-500 text-xs sm:text-sm">
                  ({product.reviews})
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Popup
        isVisible={popupInfo.visible}
        message={
          popupInfo.type === "wishlist"
            ? `${popupInfo.productName} added to wishlist. Do you want to view your wishlist?`
            : `${popupInfo.productName} added to cart. Do you want to go to your cart?`
        }
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </section>
  );
};

export default BestSelling;
