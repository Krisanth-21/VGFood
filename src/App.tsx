import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './theme/ThemeContext';
import { CartProvider } from './context/CartContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './components/cart/Cart';
import Services from './components/Section/Services';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Login from './components/auth/SignIn';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AuthButton from './components/auth/AuthButton';
import CheckoutForm from './checkout/CheckOutForm';
import { Toaster } from 'react-hot-toast';
import { supabase } from './utils/supabaseClient';

const App = () => {
  useEffect(() => {
    // Example query or authentication logic
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('your_table')
        .select('*');

      if (error) {
        console.error('Error fetching data:', error.message);
      } else {
        console.log('Data:', data);
      }
    };

    fetchData();
  }, []);

  return (
    <ThemeProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/authbutton" element={<AuthButton />} />
                <Route path="/checkout" element={<CheckoutForm />} />
              </Routes>
            </main>
            <Footer />
          </div>
          <Toaster />
        </Router>
      </CartProvider>
    </ThemeProvider>
  );
};

export default App;
