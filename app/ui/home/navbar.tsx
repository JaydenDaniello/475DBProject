import Link from 'next/link';
import { useState } from 'react';
import DefaultLogo from '@/app/ui/company-logos';

export default function Navbar() {
    const [activeTab, setActiveTab] = useState('home');
  
    const tabs = [
      { name: 'Home', key: 'home', path: '/home' },
      { name: 'Create/Delete', key: 'create-delete', path: '/home/create-delete' },
      { name: 'Open', key: 'open', path: '/home/open' },
      { name: 'Vendor', key: 'vendor', path: '/home/vendor' },
      { name: 'Closed Projects', key: 'closed-projects', path: '/home/closed-projects' },
    ];
  
    return (
      <nav className="bg-cyan-600 text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Left side: Tab links */}
          <div className="flex space-x-6">
            <DefaultLogo />
            {tabs.map((tab) => (
              <Link href={tab.path} key={tab.key}>
                <div
                    onClick={() => setActiveTab(tab.key)}
                    className={`${
                    activeTab === tab.key
                        ? 'text-cyan-600 bg-white hover:bg-gray-300'
                        : 'text-white hover:bg-cyan-400'
                    } px-4 py-2 rounded-md transition-colors duration-200`}
                >
                {tab.name}
                </div>
              </Link>
            ))}
          </div>
  
          {/* Right side: Logout button */}
          <div>
          <button className="bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded-md transition-colors duration-200">
              Logout
            </button>
          </div>
        </div>
      </nav>
    );
  }