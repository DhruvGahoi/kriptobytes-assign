import React from 'react';
import { User } from '../../types';

export const WorkloadCard: React.FC<User> = ({ name, role, photo, status }) => {
  const getStatusColor = (status: User['status']): string => {
    switch (status) {
      case 'online':
        return 'bg-green-500';
      case 'busy':
        return 'bg-red-500';
      case 'offline':
        return 'bg-gray-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex flex-col items-center">
        <div className="relative">
          <img 
            src={photo} 
            alt={name} 
            className="w-16 h-16 rounded-full mb-2 object-cover"
          />
          <span 
            className={`absolute bottom-2 right-0 w-3 h-3 rounded-full ${getStatusColor(status)} 
              border-2 border-white`}
          />
        </div>
        <h3 className="font-medium text-gray-900 text-center">{name}</h3>
        <p className="text-sm text-gray-500 mb-2">{role}</p>
        <span 
          className={`px-3 py-1 text-xs rounded-full capitalize
            ${status === 'online' ? 'bg-green-100 text-green-800' : 
              status === 'busy' ? 'bg-red-100 text-red-800' : 
              'bg-gray-100 text-gray-800'}`}
        >
          {status}
        </span>
      </div>
    </div>
  );
};