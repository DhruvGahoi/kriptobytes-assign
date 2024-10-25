import React from 'react';
import { Calendar, MessageSquare, Users, Briefcase, LogOut, Home } from 'lucide-react';
import { MenuItem } from '../../types';

export const Sidebar: React.FC = () => {
  const menuItems: MenuItem[] = [
    { icon: <Home size={20} />, label: 'Dashboard', active: true, path: '/' },
    { icon: <Briefcase size={20} />, label: 'Projects', path: '/projects' },
    { icon: <Calendar size={20} />, label: 'Calendar', path: '/calendar' },
    { icon: <Users size={20} />, label: 'Employees', path: '/employees' },
    { icon: <MessageSquare size={20} />, label: 'Messenger', path: '/messenger' }
  ];

  return (
    <aside className="w-64 bg-white border-r">
      <div className="p-4">
        <div className="text-blue-600 text-2xl font-bold mb-8">🎵</div>
        <nav>
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.path}
              className={`flex items-center p-3 mb-2 rounded-lg ${
                item.active ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {item.icon}
              <span className="ml-3">{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
      <div className="absolute bottom-0 w-64 p-4 border-t">
        <a href="#" className="flex items-center text-gray-600 hover:text-gray-900">
          <LogOut size={20} />
          <span className="ml-3">Logout</span>
        </a>
      </div>
    </aside>
  );
};