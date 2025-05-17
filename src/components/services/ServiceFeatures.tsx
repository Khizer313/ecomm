import React from 'react';
import { Truck, Headphones, CheckCircle as CircleCheck } from 'lucide-react';

const ServiceFeatures: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Delivery Feature */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
            <div className="bg-slate-900 p-4 rounded-full mb-5 inline-flex items-center justify-center w-20 h-20 border-4 border-gray-200">
              <Truck size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-wide">FREE AND FAST DELIVERY</h3>
            <p className="text-gray-600">Free delivery for all orders over $140</p>
          </div>

          {/* Customer Service Feature */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
            <div className="bg-slate-900 p-4 rounded-full mb-5 inline-flex items-center justify-center w-20 h-20 border-4 border-gray-200">
              <Headphones size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-wide">24/7 CUSTOMER SERVICE</h3>
            <p className="text-gray-600">Friendly 24/7 customer support</p>
          </div>

          {/* Money Back Guarantee Feature */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
            <div className="bg-slate-900 p-4 rounded-full mb-5 inline-flex items-center justify-center w-20 h-20 border-4 border-gray-200">
              <CircleCheck size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-wide">MONEY BACK GUARANTEE</h3>
            <p className="text-gray-600">We return money within 30 days</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;