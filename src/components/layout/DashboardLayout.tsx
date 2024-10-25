import React from 'react';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';
import { Dashboard } from '../dashboard/Dashboard';

const DashboardLayout: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-6">
          <Dashboard />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;