import { Link } from 'react-router-dom';
import { Sun, Moon, ShoppingCart } from 'lucide-react';
import { useTheme } from '../../theme/ThemeContext';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { items } = useCart();  // Accessing cart items

  return (
    <nav className="fixed w-full z-50 bg-white dark:bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-800 dark:text-white">VG Foods</span>
          </Link>

          {/* Navbar Links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-orange-600">Home</Link>
            <Link to="/menu" className="text-gray-600 dark:text-gray-300 hover:text-orange-600">Menu</Link>
            <Link to="/services" className="text-gray-600 dark:text-gray-300 hover:text-orange-600">Services</Link>
            <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-orange-600">About</Link>
            <Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-orange-600">Contact</Link>
          </div>

          {/* Theme Toggle, Cart, and Login */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5 text-gray-300" /> : <Moon className="h-5 w-5 text-gray-600" />}
            </button>

            {/* Cart with Notification */}
            <Link to="/cart" className="relative flex items-center text-gray-600 dark:text-gray-300 hover:text-orange-600 space-x-2">
              <ShoppingCart className="h-5 w-5" />
              {/* Cart Notification */}
              {items.length > 0 && (
                <span className="absolute top-[-15px] right-9 bg-orange-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center -mr-2">
                  {items.length}
                </span>
              )}
              <span>Cart</span>
            </Link>

            {/* Login */}
            <Link to="/login" className="text-gray-600 dark:text-gray-300 hover:text-orange-600">Login</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
