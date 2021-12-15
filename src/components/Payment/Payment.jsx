import React from 'react'
import './Payment.css'
import PaymentButton from './PaymentButton'

import assets from '../../assets'
import DeliveryButton from './DeliveryButton'

function Payment() {
    return (
        <div className="Payment">
            <div className="pay__container1">
                <h3 className="secondary__title">Payment method</h3>
                <div className="pay__cols">
                    <div className="pay__row">
                        <PaymentButton imgSrc={assets.paypal} />
                        <PaymentButton imgSrc={assets.visa} />
                        <PaymentButton imgSrc={assets.maestro} />
                    </div>
                    <div className="pay__row">
                        <PaymentButton imgSrc={assets.maestro} />
                        <PaymentButton imgSrc={assets.paypal} />
                        <PaymentButton imgSrc={assets.visa} />
                    </div>
                </div>
            </div>

            <div className="pay__container2">
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
