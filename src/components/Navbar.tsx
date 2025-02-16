import React from 'react';
import styled from 'styled-components';
import { useCart } from '../context/CartContext';  // Assuming you have a CartContext

// Define the interface for the item prop to match MenuItem
interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

interface NavbarProps {
  item: MenuItem;
}

const Navbar: React.FC<NavbarProps> = ({ item }) => {
  const { addToCart, notifyAddToCart } = useCart();  // Using the CartContext for adding items to the cart

  // Handle adding item to cart and notifying
  const handleAddToCart = () => {
    addToCart(item, 1);  // Add 1 item of the current menu item
    notifyAddToCart(item);  // Notify that the item was added to the cart
  };

  return (
    <StyledWrapper>
      <div className="card">
        <div className="card-wrapper">
          <div className="card-icon">
            <div className="icon-cart-box">
              <svg viewBox="0 0 576 512" width={20} height={20} xmlns="http://www.w3.org/2000/svg">
                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" fill="#009688" />
              </svg>
            </div>
          </div>
          <div className="card-content">
            <div className="card-title-wrapper">
              <span className="card-title">Added to cart!</span>
              <span className="card-action">
                <svg viewBox="0 0 384 512" width={15} height={15} xmlns="http://www.w3.org/2000/svg">
                  <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                </svg>
              </span>
            </div>
            <div className="product-name">{item.name}</div>
            <div className="product-price">${item.price}</div>
            <button className="btn-view-cart" type="button" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 400px;
    height: auto;
    background: #f9f9f9;
    border-radius: 5px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1), 0 2px 3px rgba(0, 0, 0, 0.1);
    margin: 20px;
    padding: 0 10px;
  }

  .card-wrapper {
    display: inline-flex;
    flex-wrap: nowrap;
    align-items: center;
    width: 100%;
  }

  .card-icon {
    width: 20%;
  }

  .card-icon .icon-cart-box {
    background-color: #e0f2f1;
    width: 3em;
    height: 3em;
    border-radius: 50%;
    text-align: center;
    padding: 15px 0px;
    margin: 0 auto;
  }

  .card-content {
    width: 80%;
  }

  .card-title-wrapper {
    display: inline-flex;
    flex-wrap: nowrap;
    align-items: baseline;
    width: 100%;
  }

  .card-title {
    width: 95%;
    font-size: 1em;
    font-weight: 600;
    color: #333;
    padding: 20px 0 0 10px;
  }

  .card-action {
    width: 5%;
    text-align: right;
    padding: 0 30px;
  }

  .card-action svg {
    cursor: pointer;
    fill: rgba(0, 0, 0, 0.2);
    transition: 0.3s ease-in-out;
  }

  .card-action svg:hover {
    fill: rgba(0, 0, 0, 0.6);
  }

  .product-name {
    font-size: 0.8em;
    color: #757575;
    padding: 10px 0 0 10px;
  }

  .product-name:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .product-price {
    font-size: 0.9em;
    font-weight: 600;
    color: #333;
    padding: 0 0 10px 10px;
  }

  .btn-view-cart {
    font-size: 0.7em;
    font-weight: 600;
    padding: 5px 10px;
    margin: 5px 10px 20px;
    border-radius: 15px;
    color: #009688;
    border: 1px solid #009688;
    background-color: #e0f2f1;
    box-shadow: none;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.4s ease-in-out;
  }

  .btn-view-cart:hover,
  .btn-view-cart:active,
  .btn-view-cart:focus {
    color: white;
    background-color: #009688;
    border: 1px solid #009688;
  }
`;

export default Navbar;
