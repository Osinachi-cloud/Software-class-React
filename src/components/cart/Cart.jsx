import React from 'react'
import './cart.css'

export const Cart = () => {
  return (
    <>
        <MyTest/>
        <MyTest/>
        <MyTest/>
        <MyTest/>
        <MyTest/>
        <MyTest/>
    </>
  )
}

const MyTest = () =>  {
    return (
        <>
                <div className='cart-box'>
            <div className='cart-image-wrapper'>
                <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
            </div>
            <div className='title'>
                title
            </div>
            <div className="cart-qty">
                4
            </div>
            <div className="cart-price">
                $500.00
            </div>
        </div>

        </>
    )
}
