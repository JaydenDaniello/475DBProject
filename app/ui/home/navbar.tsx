import Link from 'next/link';
import { useState } from 'react';
import DefaultLogo from '@/app/ui/company-logos';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    //Clear session token
    document.cookie = 'token=; Max-Age=0; path=/';
    //Redirect to login page
    router.push('/');
  };

    const [activeTab, setActiveTab] = useState('home');
  
    const tabs = [
      { name: 'Home', key: 'home', path: '/home' },
      { name: 'Manage', key: 'manage', path: '/home/manage' },
      { name: 'View', key: 'open', path: '/home/open' },
      { name: 'Vendor', key: 'vendor', path: '/home/vendor' },
      { name: 'History', key: 'closed-projects', path: '/home/closed-projects' },
    ];
  
    return (
      <nav className="bg-gradient-to-r from-gray-500 to-cyan-600 text-3xl text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Left side: Tab links */}
          <div className="flex space-x-6 items-center">
            <DefaultLogo />
            {tabs.map((tab) => (
              <Link href={tab.path} key={tab.key}>
                <div
                    onClick={() => setActiveTab(tab.key)}
                    className={`${
                    activeTab === tab.key
                        ? 'text-white-600 font-bold bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl'
                        : 'text-white-600 font-bold hover:bg-gradient-to-br from-cyan-600 to-gray-400'
                    } px-4 py-2 rounded-md transition-colors duration-200`}
                >
                {tab.name}
                </div>
              </Link>
            ))}
          </div>
  
          {/* Right side: Logout button */}
          <div className="flex items-center ml-auto">
          <button onClick={handleLogout}
          className="bg-red-500 font-bold hover:bg-red-400 text-white px-4 py-2 rounded-md transition-colors duration-200">
              Logout
            </button>
          </div>
        </div>
      </nav>
    );
  }