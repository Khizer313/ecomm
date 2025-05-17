import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { products } from '../../data/products';
import Carousel from '../carousel/Carousel';

const Products = () => {
  const [itemsToShow, setItemsToShow] = useState(1); // Default to 1 for mobile

  const productsWithColors = products.filter(p => p.colors && p.colors.length > 0);
  const productsWithoutColors = products.filter(p => !p.colors || p.colors.length === 0);

  // Group both types into one array per slide
  const chunkSize = 1;
  const groupedSlides = [];

  for (let i = 0; i < Math.max(productsWithColors.length, productsWithoutColors.length); i += chunkSize) {
    groupedSlides.push({
      withColors: productsWithColors.slice(i, i + chunkSize),
      withoutColors: productsWithoutColors.slice(i, i + chunkSize),
    });
  }

  // Responsive update
  useEffect(() => {
    const updateItemsToShow = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setItemsToShow(1);  // 1 item for mobile screens
      } else if (width < 1024) {
        setItemsToShow(2);  // 2 items for tablets
      } else {
        setItemsToShow(4);  // 4 items for desktop
      }
    };

    updateItemsToShow();
    window.addEventListener('resize', updateItemsToShow);
    return () => window.removeEventListener('resize', updateItemsToShow);
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-black">Explore Our Products</h2>
      </div>

      <Carousel itemsToShow={itemsToShow}>
        {groupedSlides.map((group, index) => (
          <div key={index} className="w-auto px-2">
            <div className="grid grid-rows-2 gap-y-6">
              {/* Row 1: Without Colors */}
              <div className="grid grid-rows-1  grid-cols-[1fr] sm:grid-cols-[1fr] md:grid-cols-[1fr] lg:grid-cols-[1fr] gap-x-4">
                {group.withoutColors.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* Row 2: With Colors */}
              <div className="grid grid-rows-1  grid-cols-[1fr] sm:grid-cols-[1fr] md:grid-cols-[1fr] lg:grid-cols-[1fr] gap-x-4">
                {group.withColors.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      <div className="mt-12 text-center">
        <button className="bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-3 rounded transition-colors">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default Products;
