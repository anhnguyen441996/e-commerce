import React from 'react';
import { BsFillBagCheckFill } from "react-icons/bs";

const success = () => {
  return (
    <div className='success-wrapper'>
        <div className='success'> 
            <div className='icon'>
                <BsFillBagCheckFill/>
            </div>
            <h2>Thank you for your order!</h2>
            <p className='email-msg'>Check your email inbox for the receipt.</p>
            <p className='description'>if you have any question, please email
                <a className='email' href=''>order@example.com</a>
            </p>
            <button className='btn'>
                continue shopping
            </button>
        </div>
    </div>
  )
}

export default success