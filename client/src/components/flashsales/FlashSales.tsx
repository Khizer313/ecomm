import React, { useState, useEffect } from "react";
import Carousel from "../carousel/Carousel";
import CountdownTimer from "../Timer/CountdownTimer";
import { flashSaleProduct } from "../../data/products";
import Product from "./Product";

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
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Set countdown target date (e.g., 5 days, 23 hours, 59 mins, 35 secs from now)
  const targetDate = new Date(
    Date.now() + 5 * 86400000 + 23 * 3600000 + 59 * 60000 + 35 * 1000
  );

  return (
    <section className="container mx-auto px-4 py-8 sm:py-12">
      <div className="flex flex-col gap-4 mb-8">
        <div className="flex items-center gap-4">
          <div className="w-5 h-10 bg-red-500 rounded-sm"></div>
          <h2 className="text-red-500 font-medium text-sm sm:text-base">
            Today's
          </h2>
        </div>
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-8">
          <h3 className="text-2xl font-semibold md:text-3xl">Flash Sales</h3>
          {/* Reusable Countdown Component */}
          <CountdownTimer targetDate={targetDate} />
        </div>
      </div>

      <Carousel itemsToShow={itemsToShow}>
        {flashSaleProduct.map((product) => (
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
