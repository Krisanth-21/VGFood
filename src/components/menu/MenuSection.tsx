import React from 'react';
import { MenuItem } from '../../types/menu';
import MenuCard from './MenuCard';

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
  onAddToCart: (item: MenuItem, quantity: number) => void;
}

const MenuSection: React.FC<MenuSectionProps> = ({ title, items, onAddToCart }) => {
  const sectionStyle = {
    marginBottom: '48px'
  };

  const titleStyle = {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '24px'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '24px',
    padding: '0 16px'
  };

  return (
    <div style={sectionStyle}>
      <h2 style={titleStyle}>{title}</h2>
      <div style={gridStyle}>
        {items.map(item => (
          <MenuCard key={item.id} item={item} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default MenuSection;