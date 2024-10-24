import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [activeTab, setActiveTab] = useState('home');
  
    const tabs = [
      { name: 'Home', key: 'home' },
      { name: 'Create/Delete', key: 'create-delete' },
      { name: 'Open', key: 'open' },
      { name: 'Vendor', key: 'vendor' },
      { name: 'Closed Projects', key: 'closed-projects' },
    ];
  
    return (
      <nav className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Left side: Tab links */}
          <div className="flex space-x-6">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`${
                  activeTab === tab.key
                    ? 'text-blue-600 bg-white'
                    : 'text-white hover:bg-blue-500'
                } px-4 py-2 rounded-md transition-colors duration-200`}
              >
                {tab.name}
              </button>
            ))}
          </div>
  
          {/* Right side: Logout button */}
          <div>
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors duration-200">
              Logout
            </button>
          </div>
        </div>
      </nav>
    );
  }