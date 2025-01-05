import React, { useState } from 'react';
import { Plus, Minus, ShoppingCart } from 'lucide-react';
import { MenuItem } from '../../types/menu';

interface MenuCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem, quantity: number) => void;
}

const MenuCard: React.FC<MenuCardProps> = ({ item, onAddToCart }) => {
  const [quantity, setQuantity] = useState(0);

  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    transition: 'transform 0.3s',
    margin: '10px',
    maxWidth: '300px'
  };

  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover' as const
  };

  const contentStyle = {
    padding: '16px'
  };

  const titleStyle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '8px',
    color: '#1f2937'
  };

  const descriptionStyle = {
    color: '#4b5563',
    marginBottom: '16px',
    height: '48px',
    overflow: 'hidden'
  };

  const priceStyle = {
    fontSize: '1.125rem',
    fontWeight: 'bold',
    color: '#ea580c'
  };

  const quantityControlStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  };

  const buttonStyle = {
    padding: '4px',
    borderRadius: '50%',
    backgroundColor: '#e5e7eb',
    cursor: 'pointer',
    border: 'none'
  };

  const addToCartStyle = {
    width: '100%',
    padding: '8px',
    marginTop: '16px',
    backgroundColor: quantity > 0 ? '#ea580c' : '#d1d5db',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: quantity > 0 ? 'pointer' : 'not-allowed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px'
  };

  return (
    <div style={cardStyle}>
      <img 
        src={`https://source.unsplash.com/800x600/?${item.name.replace(/ /g, '-')}-food`} 
        alt={item.name}
        style={imageStyle}
      />
      <div style={contentStyle}>
        <h3 style={titleStyle}>{item.name}</h3>
        <p style={descriptionStyle}>{item.description}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={priceStyle}>£{item.price.toFixed(2)}</span>
          <div style={quantityControlStyle}>
            <button style={buttonStyle} onClick={() => setQuantity(Math.max(0, quantity - 1))}>
              <Minus size={16} />
            </button>
            <span style={{ width: '32px', textAlign: 'center' }}>{quantity}</span>
            <button style={buttonStyle} onClick={() => setQuantity(quantity + 1)}>
              <Plus size={16} />
            </button>
          </div>
        </div>
        <button
          style={addToCartStyle}
          onClick={() => quantity > 0 && onAddToCart(item, quantity)}
          disabled={quantity === 0}
        >
          <ShoppingCart size={20} />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default MenuCard;