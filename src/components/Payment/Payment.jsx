import React from 'react'
import './Payment.css'
import PaymentButton from './PaymentButton'

import assets from '../../assets'
import DeliveryButton from './DeliveryButton'

function Payment() {
    return (
        <div className="Payment">
            <div className="pay__container">
                <h3 className="secondary__title">Payment method</h3>
                <div className="pay__cols">
                    <PaymentButton imgSrc={assets.paypal} />
                    <PaymentButton imgSrc={assets.visa} />
                    <PaymentButton imgSrc={assets.maestro} />
                </div>
                <div className="pay__cols">
                    <PaymentButton imgSrc={assets.maestro} />
                    <PaymentButton imgSrc={assets.paypal} />
                    <PaymentButton imgSrc={assets.visa} />
                </div>
            </div>

            <div className="delivery__container">
                <h3 className="secondary__title">Delivery method</h3>
                <div className="delivery__buttons">
                    <DeliveryButton imgSrc={assets.inpost} cost={"20.00"} />
                    <DeliveryButton imgSrc={assets.inpost} cost={"20.00"} />
                    <DeliveryButton imgSrc={assets.inpost} cost={"20.00"} />
                    <DeliveryButton imgSrc={assets.inpost} cost={"20.00"} />
                </div>
            </div>
        </div>
    )
}

export default Payment
