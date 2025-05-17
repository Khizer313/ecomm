import React from 'react';
import { Heart, Eye } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  image: string;
  currentPrice: number;
  originalPrice: number;
  rating: number;
  reviews: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "The north coat",
    image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg",
    currentPrice: 260,
    originalPrice: 360,
    rating: 5,
    reviews: 65
  },
  {
    id: 2,
    name: "Gucci duffle bag",
    image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg",
    currentPrice: 960,
    originalPrice: 1160,
    rating: 4.5,
    reviews: 65
  },
  {
    id: 3,
    name: "RGB liquid CPU Cooler",
    image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg",
    currentPrice: 160,
    originalPrice: 170,
    rating: 4.5,
    reviews: 65
  },
  {
    id: 4,
    name: "Small BookShelf",
    image: "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg",
    currentPrice: 360,
    originalPrice: 400,
    rating: 5,
    reviews: 65
  }
];

const ExploreProducts: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-4">
            <div className="w-5 h-10 bg-red-500 rounded-sm"></div>
            <h2 className="text-red-500 font-medium">This Month</h2>
          </div>
          <h3 className="text-3xl font-semibold mt-4">Explore Our Product</h3>
        </div>
        <button className="bg-red-500 text-white px-8 py-3 rounded hover:bg-red-600">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.id} className="group relative bg-white p-4 rounded-lg">
            <div className="relative">
              <div className="absolute top-2 right-2 flex flex-col gap-2">
                <button className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100">
                  <Heart size={20} />
                </button>
                <button className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100">
                  <Eye size={20} />
                </button>
              </div>
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <button className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity">
                Add To Cart
              </button>
            </div>
            <div className="mt-4">
              <h3 className="font-medium">{product.name}</h3>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-red-500 font-semibold">${product.currentPrice}</span>
                <span className="text-gray-500 line-through">${product.originalPrice}</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-${i < product.rating ? 'yellow' : 'gray'}-400`}>★</span>
                  ))}
                </div>
                <span className="text-gray-500">({product.reviews})</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreProducts;