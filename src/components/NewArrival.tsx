
const NewArrival = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-2">
        <span className="inline-block px-3 py-1 bg-red-500 text-white rounded-sm text-sm font-medium">
          Featured
        </span>
      </div>
      
      <h2 className="text-3xl font-bold text-black mb-8">New Arrival</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="relative bg-black text-white overflow-hidden rounded-lg">
          <img 
            src="https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg" 
            alt="PlayStation 5" 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 p-6">
            <h3 className="text-2xl font-bold mb-2">PlayStation 5</h3>
            <p className="mb-4 text-gray-300">Black and White version of the PS5 coming out on sale.</p>
            <button className="text-white hover:underline">Shop Now</button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="relative bg-black text-white overflow-hidden rounded-lg">
            <img 
              src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg" 
              alt="Women's Collections" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 p-4">
              <h3 className="text-xl font-bold mb-1">Women's Collections</h3>
              <p className="text-sm mb-2 text-gray-300">Featured woman collections that give you another vibe.</p>
              <button className="text-white hover:underline">Shop Now</button>
            </div>
          </div>
          
          <div className="grid grid-rows-2 gap-6">
            <div className="relative bg-black text-white overflow-hidden rounded-lg">
              <img 
                src="https://images.pexels.com/photos/4790255/pexels-photo-4790255.jpeg" 
                alt="Speakers" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-lg font-bold mb-1">Speakers</h3>
                <p className="text-sm mb-2 text-gray-300">Amazon wireless speakers</p>
                <button className="text-white hover:underline">Shop Now</button>
              </div>
            </div>
            
            <div className="relative bg-black text-white overflow-hidden rounded-lg">
              <img 
                src="https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg" 
                alt="Perfume" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-lg font-bold mb-1">Perfume</h3>
                <p className="text-sm mb-2 text-gray-300">GUCCI INTENSE OUD EDP</p>
                <button className="text-white hover:underline">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;