import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    emailOrPhone: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const res = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || 'Something went wrong');
      } else {
        setSuccess(true);
        setFormData({ name: '', emailOrPhone: '', password: '' });

        // Redirect to login page after 1 second
        setTimeout(() => {
          navigate('/login');
        }, 1000);
      }
    } catch (err) {
      setError('Failed to connect to server: ' + err);
    } finally {
      setLoading(false);
    }
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

          {error && <p className="text-red-500 mb-4">{error}</p>}
          {success && <p className="text-green-500 mb-4">Account created successfully! Redirecting to login...</p>}

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />

            <input
              type="text"
              placeholder="Email or Phone Number"
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black"
              value={formData.emailOrPhone}
              onChange={(e) => setFormData({ ...formData, emailOrPhone: e.target.value })}
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
              minLength={6}
            />

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-red-500 text-white py-3 rounded hover:bg-red-600 transition-colors ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
