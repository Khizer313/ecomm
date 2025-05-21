// src/pages/ProductDetail.tsx

import React from "react";
import { useParams } from "react-router-dom";
import {
  products,
  flashSaleProduct,
  bestSellingProduct,
  recommendedProducts,
} from "../data/products"; // Adjust path as needed

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const allProducts = [
    ...products,
    ...flashSaleProduct,
    ...bestSellingProduct,
    ...recommendedProducts,
  ];

  const product = allProducts.find((item) => String(item.id) === id);

  if (!product) {
    return <div className="p-6">Product not found.</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        {product.name || product.title}
      </h1>
      <img
        src={product.image || product.imageUrl}
        alt={product.name}
        className="w-64 h-64 object-cover mb-4"
      />
      <p className="text-lg text-gray-700 mb-2">
        Price: ${product.price || product.currentPrice}
      </p>
      {product.category && (
        <p className="text-sm text-gray-500 mb-2">
          Category: {product.category}
        </p>
      )}
      {product.subcategory && (
        <p className="text-sm text-gray-500 mb-2">
          Subcategory: {product.subcategory}
        </p>
      )}
      {product.rating && (
        <p className="text-sm text-yellow-600 mb-2">
          Rating: {product.rating} stars
        </p>
      )}
      {/* Add more product details as needed */}
    </div>
  );
};

export default ProductDetail;
