import React from 'react'
import CartItem from './CartItem'
import './CartList.css'
import assets from '../../assets';


function CartList() {
    return (
        <div>
            <div className="cartIcon__group">
                <div className="cart__icon">
                    <img src={assets.cart} alt="cart__icon" />
                </div>
                <div className="dash">
                </div>
                <div className="ship__icon">
                    <img src={assets.truck} alt="ship__icon" />
                </div>
            </div>
            <h3 className="secondary__title">
                Your cart
            </h3>
            <div className="cart__item">
                <CartItem imgSrc={assets.prod1} />
                <CartItem imgSrc={assets.prod1} />
                <div className="total__cost">
                    <p>Total cost</p>
                    <p>$ 159,98</p>
                </div>
            </div>
            <div className="free__shipping">
                <div className="ship__truck">
                    <img src={assets.truck} alt="ship-truck" />
                </div>
                <div className="ship__text">
                    You are <strong>$30.02</strong> away from free shipping!
                </div>
            </div>
        </div>
    )
}

export default CartList
