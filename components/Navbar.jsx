import React from 'react'
import { useContext } from 'react';
import { AiOutlineShopping } from "react-icons/ai";
import Context from '@/Context/StateContext';
import Cart from './Cart';

const Navbar = () => {
  const { totalQuantities, showCart, setShowCart } = useContext(Context);
  return (
    <div className='navbar-container'>
      <p className='logo'>JSM Headphones</p>
      <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
          <AiOutlineShopping/>
          <span className='cart-item-qty'>{ totalQuantities }</span>
      </button>
      {showCart && <Cart/>}
    </div>
  )
}

export default Navbar
