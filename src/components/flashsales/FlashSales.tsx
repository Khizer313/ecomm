import React, { useState, useEffect } from 'react';
import Carousel from '../carousel/Carousel';
import CountdownTimer from '../Timer/CountdownTimer'; // adjust path as needed
import {flashSaleProduct} from '../../data/products'
import Product from './Product';
// interface Product {
//   id: number;
//   name: string;
//   image: string;
//   currentPrice: number;
//   originalPrice: number;
//   discount: number;
//   rating: number;
//   reviews: number;
// }

// const products: Product[] = [
//   {
//     id: 1,
//     name: "HAVIT HV-G92 Gamepad",
//     image: "https://images.pexels.com/photos/4225230/pexels-photo-4225230.jpeg",
//     currentPrice: 120,
//     originalPrice: 160,
//     discount: 40,
//     rating: 5,
//     reviews: 88
//   },
//   {
//     id: 2,
//     name: "AK-900 Wired Keyboard",
//     image: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg",
//     currentPrice: 960,
//     originalPrice: 1160,
//     discount: 35,
//     rating: 4,
//     reviews: 75
//   },
//   {
//     id: 3,
//     name: "IPS LCD Gaming Monitor",
//     image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg",
//     currentPrice: 370,
//     originalPrice: 400,
//     discount: 30,
//     rating: 5,
//     reviews: 99
//   },
//   {
//     id: 4,
//     name: "S-Series Comfort Chair",
//     image: "https://images.pexels.com/photos/1366872/pexels-photo-1366872.jpeg",
//     currentPrice: 375,
//     originalPrice: 400,
//     discount: 25,
//     rating: 4.5,
//     reviews: 99
//   },
//   {
//     id: 5,
//     name: "Gaming Headset Pro",
//     image: "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg",
//     currentPrice: 145,
//     originalPrice: 180,
//     discount: 20,
//     rating: 4.8,
//     reviews: 65
//   },
//   {
//     id: 6,
//     name: "RGB Gaming Mouse",
//     image: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg",
//     currentPrice: 45,
//     originalPrice: 55,
//     discount: 18,
//     rating: 4.2,
//     reviews: 55
//   },
//   {
//     id: 7,
//     name: "Pro Gaming Desk",
//     image: "https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg",
//     currentPrice: 280,
//     originalPrice: 320,
//     discount: 15,
//     rating: 4.7,
//     reviews: 92
//   },
//   {
//     id: 8,
//     name: "4K Webcam",
//     image: "https://images.pexels.com/photos/3643925/pexels-photo-3643925.jpeg",
//     currentPrice: 89,
//     originalPrice: 99,
//     discount: 10,
//     rating: 4.3,
//     reviews: 48
//   }
// ];










const FlashSales: React.FC = () => {
  const [itemsToShow, setItemsToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Set countdown target date (e.g., 5 days, 23 hours, 59 mins, 35 secs from now)
  const targetDate = new Date(Date.now() + 5 * 86400000 + 23 * 3600000 + 59 * 60000 + 35 * 1000);

  return (
    <section className="container mx-auto px-4 py-8 sm:py-12">
      <div className="flex flex-col gap-4 mb-8">
        <div className="flex items-center gap-4">
          <div className="w-5 h-10 bg-red-500 rounded-sm"></div>
          <h2 className="text-red-500 font-medium text-sm sm:text-base">Today's</h2>
        </div>
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-8">
          <h3 className="text-2xl font-semibold md:text-3xl">Flash Sales</h3>
          {/* Reusable Countdown Component */}
          <CountdownTimer targetDate={targetDate} />
        </div>
      </div>

      <Carousel itemsToShow={itemsToShow}>
        {flashSaleProduct.map(product => (
          <Product key={product.id} {...product} />
        ))}
      </Carousel>

      <div className="flex justify-center mt-8">
        <button className="px-6 py-2 text-sm text-white bg-red-500 rounded sm:px-8 sm:py-3 hover:bg-red-600 sm:text-base">
          View All Products
        </button>
      </div>
    </section>
  );
};

export default FlashSales;
