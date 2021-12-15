import React from 'react'
import './CartItem.css'

function CartItem({ imgSrc }) {
    return (
        <div className="item__card">
            <div className="product__img">
                <img src={imgSrc} alt="product__img" />
            </div>
            <div className="product__details">
                <div className="detail__left">
                    <p className="prod__name">T-Shirt Summer Vibes</p>
                    <p className="prod__id">#261311</p>
                </div>
                <div className="detail__right">
                    $89.99
                </div>
            </div>
        </div>
    )
}

export default CartItem
