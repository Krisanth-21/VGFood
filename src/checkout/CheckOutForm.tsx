import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

interface ShippingInfo {
  firstName: string;
  lastName: string;
  company?: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  email: string;
}

const CheckoutForm = () => {
  const { items, total } = useCart();
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    phone: '',
    email: ''
  });

  // Handle change for input fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment integration here
    console.log(shippingInfo); // You can process shipping info here
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Shipping Information */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Shipping Information</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName" // Bind the name attribute
                  placeholder="First Name"
                  value={shippingInfo.firstName} // Set the value from state
                  onChange={handleChange} // Handle change for this input
                  className="input"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={shippingInfo.lastName}
                  onChange={handleChange}
                  className="input"
                />
              </div>
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={shippingInfo.address}
                onChange={handleChange}
                className="input"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={shippingInfo.city}
                  onChange={handleChange}
                  className="input"
                />
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={shippingInfo.state}
                  onChange={handleChange}
                  className="input"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="pincode"
                  placeholder="Pin Code"
                  value={shippingInfo.pincode}
                  onChange={handleChange}
                  className="input"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={shippingInfo.phone}
                  onChange={handleChange}
                  className="input"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={shippingInfo.email}
                onChange={handleChange}
                className="input"
              />
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg shadow-md hover:bg-green-700 transition"
              >
                Checkout
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Order Summary</h2>
            <ul className="space-y-4">
              {items.map((item, index) => (
                <li key={index} className="flex justify-between text-lg font-semibold">
                  <span>{item.name} (x{item.quantity})</span>
                  <span>${item.price * item.quantity}</span>
                </li>
              ))}
            </ul>
            <div className="border-t-2 border-gray-300 mt-6 pt-4 text-lg font-semibold flex justify-between">
              <span>Total:</span>
              <span>${total}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
