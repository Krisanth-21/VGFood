import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Plus, Minus } from 'lucide-react';

import kaldosa from '../images/kaldosa.png';
import medhuvadai from '../images/medhuvadai.png';
import vegpakora from '../images/vegpakora.png';
import sambarrice from '../images/sambarrice.png';
import sambarrice_vada from '../images/sambarrice_vada.jpg';
import falafelwrap from '../images/falafelwrap.png';
import vegfriedrice from '../images/vegfriedrice.png';
import vegkothu from '../images/vegkothu.png';
import vegsamosa from '../images/vegsamosa.png';
import sagopudding from '../images/sagopudding.png';
import carrothalwa from '../images/carrothalwa.png';
import muttonroll from '../images/muttonroll.png';
import chickenroll from '../images/chickenroll.png';
import chickenwrap from '../images/chickenwrap.png';
import chickencurry from '../images/chickencurry.png';
import teawithmilk from '../images/teawithmilk.png';
import chapathiwithvegcurry from '../images/chapathiwithvegcurry.png';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'veg' | 'non-veg';
}

const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Kal Dosa',
    description: '3 pcs with Sambar & Chutney',
    price: 5.99,
    image: kaldosa,
    category: 'veg'
  },
  {
    id: '2',
    name: 'Medhu Vadai',
    description: '2pcs Served with Sambar & Chutney',
    price: 2.50,
    image: medhuvadai,
    category: 'veg'
  },
  {
    id: '3',
    name: 'Veg Pakora',
    description: 'with gram flour fresh Mix Vegetables',
    price: 3.00,
    image: vegpakora,
    category: 'veg'
  },
  {
    id: '4',
    name: 'Plain Rice & Sambar Veg Side',
    description: 'Served with fresh vegetables',
    price: 4.99,
    image: sambarrice,
    category: 'veg'
  },
  {
    id: '5',
    name: 'Plain Rice Sambar & Vadai Veg side',
    description: 'Complete meal with vadai',
    price: 5.60,
    image: sambarrice_vada,
    category: 'veg'
  },
  {
    id: '6',
    name: 'Falafel Wraps',
    description: 'Fresh made falafel with vegetables',
    price: 4.99,
    image: falafelwrap,
    category: 'veg'
  },
  {
    id: '7',
    name: 'Veg Fried Rice',
    description: 'Indo-Chinese style with vegetables',
    price: 4.50,
    image: vegfriedrice,
    category: 'veg'
  },
  {
    id: '8',
    name: 'Veg Kothu',
    description: 'No Egg, pure vegetarian',
    price: 5.50,
    image: vegkothu,
    category: 'veg'
  },
  {
    id: '9',
    name: 'Veg Samosa',
    description: '2pcs with Can of Drink',
    price: 2.60,
    image: vegsamosa,
    category: 'veg'
  },
  {
    id: '10',
    name: 'Chapatti',
    description: '2pcs with Dal Curry',
    price: 4.00,
    image: chapathiwithvegcurry,
    category: 'veg'
  },
  {
    id: '11',
    name: 'Mint Tea',
    description: 'Fresh brewed mint tea',
    price: 1.20,
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=600&q=80',
    category: 'veg'
  },
  {
    id: '12',
    name: 'Tea with Milk',
    description: 'Classic Indian milk tea',
    price: 1.60,
    image: teawithmilk,
    category: 'veg'
  },
  {
    id: '13',
    name: 'Sago Pudding',
    description: 'Traditional sweet dessert',
    price: 2.90,
    image: sagopudding,
    category: 'veg'
  },
  {
    id: '14',
    name: 'Carrot Halwa',
    description: 'Traditional Indian dessert',
    price: 2.00,
    image: carrothalwa,
    category: 'veg'
  },
  {
    id: '15',
    name: 'Mutton Roll',
    description: '2pcs, freshly prepared',
    price: 3.00,
    image: muttonroll,
    category: 'non-veg'
  },
  {
    id: '16',
    name: 'Chicken Roll',
    description: '2pcs, freshly prepared',
    price: 3.00,
    image: chickenroll,
    category: 'non-veg'
  },
  {
    id: '17',
    name: 'Chicken Wrap',
    description: 'Fresh vegetables and grilled chicken',
    price: 4.99,
    image: chickenwrap,
    category: 'non-veg'
  },
  {
    id: '18',
    name: 'Chicken Curry',
    description: 'Plain Rice & Veg Side',
    price: 5.99,
    image: chickencurry,
    category: 'non-veg'
  }
  // Add more menu items here...
];

const MenuCard: React.FC<{ item: MenuItem }> = ({ item }) => {
  const [quantity, setQuantity] = useState(0);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart(item, quantity); // Pass item and quantity separately
      setQuantity(0); // Reset quantity
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105">
      <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.name}</h3>
          <span className="text-orange-600 font-semibold">£{item.price.toFixed(2)}</span>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{item.description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setQuantity(prev => Math.max(0, prev - 1))}
              className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="text-gray-900 dark:text-white w-8 text-center">{quantity}</span>
            <button
              onClick={() => setQuantity(prev => prev + 1)}
              className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            disabled={quantity === 0}
            className={`px-4 py-2 rounded-lg ${
              quantity === 0
                ? 'bg-gray-300 dark:bg-gray-700 cursor-not-allowed'
                : 'bg-orange-600 hover:bg-orange-700'
            } text-white transition-colors`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'veg' | 'non-veg'>('all');

  const filteredItems = menuItems
    .filter(item => (activeCategory === 'all' ? true : item.category === activeCategory))
    .sort((a, b) => a.price - b.price); // Sort by price in ascending order

  return (
    <section id="menu" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Our Menu</h2>

        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-lg ${
              activeCategory === 'all'
                ? 'bg-orange-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveCategory('veg')}
            className={`px-4 py-2 rounded-lg ${
              activeCategory === 'veg'
                ? 'bg-orange-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200'
            }`}
          >
            Veg
          </button>
          <button
            onClick={() => setActiveCategory('non-veg')}
            className={`px-4 py-2 rounded-lg ${
              activeCategory === 'non-veg'
                ? 'bg-orange-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200'
            }`}
          >
            Non-Veg
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map(item => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
