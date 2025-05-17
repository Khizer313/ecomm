import React, { useState } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    emailOrPhone: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="flex w-full max-w-[1240px]">
        <div className="w-1/2 hidden md:block">
          <img
            src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg"
            alt="Shopping Cart"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="w-full md:w-1/2 bg-white p-8 md:p-12">
          <h2 className="text-4xl font-medium mb-2">Create an account</h2>
          <p className="text-gray-600 mb-8">Enter your details below</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            
            <div>
              <input
                type="text"
                placeholder="Email or Phone Number"
                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black"
                value={formData.emailOrPhone}
                onChange={(e) => setFormData({...formData, emailOrPhone: e.target.value})}
              />
            </div>
            
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-3 rounded hover:bg-red-600 transition-colors"
            >
              Create Account
            </button>
            
            <button
              type="button"
              className="w-full border border-gray-300 py-3 rounded flex items-center justify-center space-x-2 hover:bg-gray-50 transition-colors"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google"
                className="w-5 h-5"
              />
              <span>Sign up with Google</span>
            </button>
            
            <p className="text-center text-gray-600">
              Already have account?
              <a href="#" className="text-black hover:underline">
                Log in
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;