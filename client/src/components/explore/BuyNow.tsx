import { ShoppingBag } from 'lucide-react';
import CountdownTimer from '../Timer/CountdownTimer';

const BuyNow = () => {
  return (
    <div className="relative w-full bg-black text-white min-h-[500px] overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 py-8 md:py-12 flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="w-full md:w-1/2 space-y-4 md:space-y-6 mb-8 md:mb-0">
          <span className="text-green-400 font-medium text-sm md:text-base">Categories</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Enhance Your<br />Music Experience
          </h1>
          
          <CountdownTimer 
            targetDate={new Date(Date.now() + 23 * 3600000 + 5 * 86400000 + 59 * 60000 + 35 * 1000)} 
          />
          
          <button className="flex items-center justify-center space-x-2 bg-green-400 hover:bg-green-500 transition-colors text-black font-medium px-6 sm:px-8 py-2.5 sm:py-3 rounded-md text-sm sm:text-base">
            <ShoppingBag size={16} className="sm:w-[18px] sm:h-[18px]" />
            <span>Buy Now!</span>
          </button>
        </div>
        
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img 
            src="https://images.pexels.com/photos/8412415/pexels-photo-8412415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="JBL Boombox Speaker" 
            className="object-contain max-w-[80%] sm:max-w-[70%] md:max-w-[550px] transform translate-y-8 md:translate-y-0"
          />
        </div>
      </div>
    </div>
  );
};
export default BuyNow;