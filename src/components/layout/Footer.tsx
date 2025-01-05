import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 shadow-lg mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Contact Us</h3>
            <p className="text-gray-600 dark:text-gray-300">07521 262119</p>
            <p className="text-gray-600 dark:text-gray-300">07424 762470</p>
            <p className="text-gray-600 dark:text-gray-300">855 Bristol Rd South</p>
            <p className="text-gray-600 dark:text-gray-300">Nortfield, Birmingham B31 2PA</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Opening Hours</h3>
            <p className="text-gray-600 dark:text-gray-300">Monday - Sunday</p>
            <p className="text-gray-600 dark:text-gray-300">10 AM to 5 PM</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/menu" className="text-gray-600 dark:text-gray-300 hover:text-orange-600">Menu</a></li>
              <li><a href="/about" className="text-gray-600 dark:text-gray-300 hover:text-orange-600">About Us</a></li>
              <li><a href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-orange-600">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} VG Foods. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;