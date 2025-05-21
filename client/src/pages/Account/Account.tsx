import React, { useState } from 'react';
import AccountSidebar from './AccountSidebar';

interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
}

const Account: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile>({
    firstName: 'Md',
    lastName: 'Rimel',
    email: 'rimel1111@gmail.com',
    address: 'Kingston, 5236, United State'
  });

  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: ''
  });

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswords(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Profile updated:', profile);
    console.log('Passwords:', passwords);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="text-sm text-gray-500">
          <a href="/" className="hover:text-gray-700">Home</a>
          <span className="mx-2">/</span>
          <span className="font-medium text-gray-800">My Account</span>
        </div>
        <div className="text-sm">
          Welcome! <span className="text-red-500">Md Rimel</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-8">
        <AccountSidebar />
        
        <div className="flex-1">
          <h1 className="text-2xl font-medium text-red-500 mb-6">Edit Your Profile</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={profile.firstName}
                  onChange={handleProfileChange}
                  className="w-full px-4 py-2 bg-gray-50 border rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={profile.lastName}
                  onChange={handleProfileChange}
                  className="w-full px-4 py-2 bg-gray-50 border rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleProfileChange}
                  className="w-full px-4 py-2 bg-gray-50 border rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Address</label>
                <input
                  type="text"
                  name="address"
                  value={profile.address}
                  onChange={handleProfileChange}
                  className="w-full px-4 py-2 bg-gray-50 border rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-lg font-medium mb-4">Password Changes</h2>
              <div className="space-y-4">
                <input
                  type="password"
                  name="current"
                  placeholder="Current Password"
                  value={passwords.current}
                  onChange={handlePasswordChange}
                  className="w-full px-4 py-2 bg-gray-50 border rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
                <input
                  type="password"
                  name="new"
                  placeholder="New Password"
                  value={passwords.new}
                  onChange={handlePasswordChange}
                  className="w-full px-4 py-2 bg-gray-50 border rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
                <input
                  type="password"
                  name="confirm"
                  placeholder="Confirm New Password"
                  value={passwords.confirm}
                  onChange={handlePasswordChange}
                  className="w-full px-4 py-2 bg-gray-50 border rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-8">
              <button
                type="button"
                className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Account;