import React, { useState, useEffect } from 'react';
import { Smartphone, Monitor, Watch, Camera, Headphones, Gamepad, Tv, Printer, Mouse, Speaker, Tablet, Laptop } from 'lucide-react';
import Product from './Product';
import Carousel from '../carousel/Carousel';

const categories = [
  { id: 1, name: 'Phones', icon: <Smartphone className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" /> },
  { id: 2, name: 'Computers', icon: <Monitor className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" /> },
  { id: 3, name: 'SmartWatch', icon: <Watch className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" /> },
  { id: 4, name: 'Camera', icon: <Camera className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" /> },
  { id: 5, name: 'HeadPhones', icon: <Headphones className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" /> },
  { id: 6, name: 'Gaming', icon: <Gamepad className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" /> },
  { id: 7, name: 'TV', icon: <Tv className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" /> },
  { id: 8, name: 'Printer', icon: <Printer className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" /> },
  { id: 9, name: 'Mouse', icon: <Mouse className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" /> },
  { id: 10, name: 'Speaker', icon: <Speaker className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" /> },
  { id: 11, name: 'Tablet', icon: <Tablet className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" /> },
  { id: 12, name: 'Laptop', icon: <Laptop className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" /> },
];

const BrowseCategories: React.FC = () => {
  const [itemsToShow, setItemsToShow] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(2);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(3);
      } else {
        setItemsToShow(6);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="container mx-auto px-4 py-8 sm:py-12">
      <div className="mb-6">
        <div className="flex items-center gap-4">
          <div className="w-5 h-10 bg-red-500 rounded-sm"></div>
          <h2 className="text-red-500 font-medium text-sm sm:text-base">Categories</h2>
        </div>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-2 sm:mt-4">Browse By Category</h3>
        
      </div>

      <Carousel itemsToShow={itemsToShow}>
        {categories.map(category => (
          <Product key={category.id} name={category.name} icon={category.icon} />
        ))}
      </Carousel>
    </section>
  );
};

export default BrowseCategories;