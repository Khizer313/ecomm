import React from 'react';

interface ProductProps {
  name: string;
  icon: React.ReactNode;
}

const Product: React.FC<ProductProps> = ({ name, icon }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 border rounded-md hover:bg-red-500 hover:text-white transition-colors cursor-pointer group">
      <div className="group-hover:text-white transition-colors">{icon}</div>
      <span className="mt-3 sm:mt-4 font-medium text-sm sm:text-base">{name}</span>
    </div>
  );
};

export default Product;