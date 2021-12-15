import React from 'react'
import './DeliveryButton.css'

function DeliveryButton({ imgSrc, cost }) {
    return (
        <div className="dBtn">
            <a href="/">
                <img className="delivery__img" src={imgSrc} alt="payment-method" />
                $ {cost}
            </a>
        </div>
    )
}

export default DeliveryButton
