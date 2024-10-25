import React from 'react';

interface NavbarProps {
  username?: string;
  avatarUrl?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  username = "Evan Yates",
  avatarUrl = "/api/placeholder/32/32"
}) => {
  return (
    <header className="bg-white border-b px-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <input
            type="search"
            placeholder="Search"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">{username}</span>
            <img
              src={avatarUrl}
              alt={`${username}'s avatar`}
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar