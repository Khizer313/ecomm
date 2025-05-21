import React, { useState } from 'react';
import ArrowButton from './ArrowButton';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  children: React.ReactNode[];
  itemsToShow: number;
}

const Carousel: React.FC<CarouselProps> = ({ children, itemsToShow }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const totalItems = React.Children.count(children);
  const maxIndex = totalItems - itemsToShow;
  const canGoNext = currentIndex < maxIndex;
  const canGoPrev = currentIndex > 0;

  const handleNext = () => {
    if (canGoNext && !isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(prev => prev + 1);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const handlePrev = () => {
    if (canGoPrev && !isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(prev => prev - 1);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && canGoNext) {
      handleNext();
    } else if (isRightSwipe && canGoPrev) {
      handlePrev();
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  const visibleItems = React.Children.toArray(children).slice(currentIndex, currentIndex + itemsToShow);

  return (
    <div className="relative">
      {/* <div className="flex justify-end gap-2 mb-6">
        <button 
          className={`p-1.5 sm:p-2 rounded-full border transition-colors ${
            canGoPrev ? 'hover:bg-red-500 hover:text-white hover:border-red-500 active:bg-red-600' : 'opacity-50 cursor-not-allowed'
          }`}
          onClick={handlePrev}
          disabled={!canGoPrev || isAnimating}
          aria-label="Previous"
        >
          <ChevronLeft size={18} className="sm:w-6 sm:h-6" />
        </button>
        <button 
          className={`p-1.5 sm:p-2 rounded-full border transition-colors ${
            canGoNext ? 'hover:bg-red-500 hover:text-white hover:border-red-500 active:bg-red-600' : 'opacity-50 cursor-not-allowed'
          }`}
          onClick={handleNext}
          disabled={!canGoNext || isAnimating}
          aria-label="Next"
        >
          <ChevronRight size={18} className="sm:w-6 sm:h-6" />
        </button>
      </div> */}
      <div className="flex justify-end gap-2 mb-6 relative sm:bottom-28">
  <ArrowButton direction="left" onClick={handlePrev} disabled={!canGoPrev || isAnimating} />
  <ArrowButton direction="right" onClick={handleNext} disabled={!canGoNext || isAnimating} />
</div>


      <div 
        className="overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="grid transition-all duration-500 ease-in-out"
          style={{ 
            gridTemplateColumns: `repeat(${itemsToShow}, minmax(0, 1fr))`,
            gap: '1rem',
          }}
        >
          {visibleItems}
        </div>
      </div>

      <div className="flex justify-center mt-4 gap-1 sm:hidden">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              currentIndex === index ? 'bg-red-500' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;