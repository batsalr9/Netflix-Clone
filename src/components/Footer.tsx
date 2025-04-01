
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-netflix-black text-gray-400 py-10 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center space-x-6 mb-6">
          <a href="#" className="hover:text-white">
            <Facebook size={24} />
          </a>
          <a href="#" className="hover:text-white">
            <Twitter size={24} />
          </a>
          <a href="#" className="hover:text-white">
            <Instagram size={24} />
          </a>
          <a href="#" className="hover:text-white">
            <Youtube size={24} />
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/help" className="hover:underline">Help Center</Link></li>
              <li><Link to="/about" className="hover:underline">About Streamflix</Link></li>
              <li><Link to="/legal" className="hover:underline">Legal Notices</Link></li>
            </ul>
          </div>
          
          <div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/help" className="hover:underline">Help Center</Link></li>
              <li><Link to="/jobs" className="hover:underline">Jobs</Link></li>
              <li><Link to="/privacy" className="hover:underline">Cookie Preferences</Link></li>
            </ul>
          </div>
          
          <div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/gift" className="hover:underline">Gift Cards</Link></li>
              <li><Link to="/terms" className="hover:underline">Terms of Use</Link></li>
              <li><Link to="/about" className="hover:underline">Corporate Information</Link></li>
            </ul>
          </div>
          
          <div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/media" className="hover:underline">Media Center</Link></li>
              <li><Link to="/privacy" className="hover:underline">Privacy</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 text-xs">
          <p>© 2023 Streamflix, Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
