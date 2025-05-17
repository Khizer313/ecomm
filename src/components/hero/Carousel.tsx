import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  cta: string;
  image: string;
  bgColor: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "iPhone 14 Series",
    subtitle: "Up to 10% off Voucher",
    cta: "Shop Now",
    image: "https://images.pexels.com/photos/5750001/pexels-photo-5750001.jpeg?auto=compress&cs=tinysrgb&w=600",
    bgColor: "bg-black",
  },
  {
    id: 2,
    title: "New Arrivals",
    subtitle: "Up to 30% off Fashion",
    cta: "Shop Now",
    image: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=600",
    bgColor: "bg-gray-800",
  },
  {
    id: 3,
    title: "Premium Headphones",
    subtitle: "Starting at $59.99",
    cta: "Shop Now",
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600",
    bgColor: "bg-red-600",
  },
  {
    id: 4,
    title: "Smart Watches",
    subtitle: "Limited Time Offer",
    cta: "Shop Now",
    image: "https://images.pexels.com/photos/1682821/pexels-photo-1682821.jpeg?auto=compress&cs=tinysrgb&w=600",
    bgColor: "bg-gray-700",
  },
  {
    id: 5,
    title: "Gaming Accessories",
    subtitle: "Up to 20% off",
    cta: "Shop Now",
    image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600",
    bgColor: "bg-zinc-800",
  },
];

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-sm">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className={`w-full h-full flex items-center ${slide.bgColor}`}>
            <div className="container flex flex-col items-center justify-between px-4 mx-auto md:px-8 md:flex-row">
              <div className="z-10 space-y-2 text-center text-white md:space-y-4 md:w-1/2 md:text-left">
                <div className="flex items-center justify-center gap-2 mb-2 md:mb-4 md:justify-start">
                  <h3 className="text-lg md:text-xl">{slide.title}</h3>
                </div>
                <h2 className="text-2xl font-bold leading-tight md:text-4xl lg:text-5xl">{slide.subtitle}</h2>
                <a 
                  href="#" 
                  className="inline-flex items-center pb-1 text-sm text-white transition-all border-b border-white md:text-base group hover:border-opacity-70"
                >
                  {slide.cta}
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform md:w-5 md:h-5 group-hover:translate-x-1" />
                </a>
              </div>
              <div className="flex items-center justify-center mt-4 md:w-1/2 md:justify-end md:mt-0">
                <img 
                  src={slide.image} 
                  alt={slide.title} 
                  className="max-h-[200px] md:max-h-[300px] w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute left-0 right-0 flex justify-center space-x-2 bottom-4 md:bottom-6">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-red-600 scale-110' 
                : 'bg-white bg-opacity-60 hover:bg-opacity-80'
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;