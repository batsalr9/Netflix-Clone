
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import SearchModal from './SearchModal';
import NotificationsDropdown from './NotificationsDropdown';

interface NavLink {
  name: string;
  path: string;
}

const navLinks: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'TV Shows', path: '/browse?type=tv' },
  { name: 'Movies', path: '/browse?type=movie' },
  { name: 'New & Popular', path: '/browse?filter=new' },
  { name: 'My List', path: '/my-list' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-4 md:px-8 py-4 ${
        isScrolled || mobileMenuOpen ? 'bg-netflix-black' : 'bg-transparent'
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <Link to="/" className="flex-shrink-0">
            <span className="text-netflix text-2xl font-bold">STREAMFLIX</span>
          </Link>
          
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-gray-300 hover:text-white"
            onClick={() => setSearchModalOpen(true)}
          >
            <Search size={20} />
          </Button>
          
          <NotificationsDropdown />
          
          <Link to="/login" className="hidden md:block">
            <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
              <User size={20} />
            </Button>
          </Link>
          <Button 
            variant="ghost" 
            size="icon"
            className="text-gray-300 hover:text-white md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-netflix-black p-4 border-t border-netflix-gray">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="ghost" className="text-gray-300 hover:text-white w-full justify-start">
                <User size={16} className="mr-2" />
                Account & Settings
              </Button>
            </Link>
          </div>
        </div>
      )}

      {/* Search Modal */}
      <SearchModal 
        isOpen={searchModalOpen} 
        onClose={() => setSearchModalOpen(false)} 
      />
    </nav>
  );
};

export default Navbar;
