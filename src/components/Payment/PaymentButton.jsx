import React from 'react'
import './PaymentButton.css'

function PaymentButton({ imgSrc }) {
    return (
        <div className="payment__btn">
            <a href="/">
                <img className="payment__img" src={imgSrc} alt="payment-method" />
                {/* $ 20.00 */}
            </a>
        </div>
    )
}

export default PaymentButton
