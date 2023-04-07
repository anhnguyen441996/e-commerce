import React, { useEffect, useContext } from 'react'
import { AiOutlineLeft, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { TiDeleteOutline } from 'react-icons/ti';
import Context from '@/Context/StateContext';
import { urlFor } from '@/lib/client';
import getStripe from '../lib/getStripe';


const Cart = () => {
  const { cartItems, totalPrice, toggleCartItemQuanitity, setShowCart } = useContext(Context)

  const handleCheckout = async () => {
      const stripe = await getStripe();
  
      const response = await fetch('/api/stripe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartItems),
      });
  
      if(response.statusCode === 500) return;
      
      const data = await response.json();
  
      // toast.loading('Redirecting...');
  
      stripe.redirectToCheckout({ sessionId: data.id });
  }

  return (
    <div className="cart-wrapper">
      <div className='cart-container'>
        <button
          type="button"
          className="cart-heading"
          onClick={() => setShowCart(false)}>
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">{cartItems.length} items</span>
        </button>




        <div className="product-container">
          {cartItems.map((item, i) => (
            <div className="product">
              <img src={urlFor(item.image[0])} alt='image' className="cart-product-image" />
              <div className="item-desc">
                <div className="flex top">
                  <h5>{item.name}</h5>
                  <h4>${item.price}</h4>
                </div>
                <div className="flex bottom">
                  <div>
                    <p className="quantity-desc">
                      <span className="minus" onClick={() => toggleCartItemQuanitity(item._id, 'dec')}>
                        <AiOutlineMinus />
                      </span>
                      <span className="num" >{item.quantity}</span>
                      <span className="plus" onClick={() => toggleCartItemQuanitity(item._id, 'inc')}><AiOutlinePlus /></span>
                    </p>
                  </div>
                  <button
                    type="button"
                    className="remove-item"
                    onClick={() => onRemove(item)}
                  >
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            </div>

          ))}
        </div>


        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal:</h3>
              <h3>${totalPrice}</h3>
            </div>
            <div className="btn-container">
              <button type="button" className="btn" onClick={handleCheckout}>
                Pay with Stripe
              </button>
             
            </div>
          </div>
        )}


      </div>
    </div>
  )
}

export default Cart
