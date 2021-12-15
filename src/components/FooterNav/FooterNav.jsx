import React from 'react'
import './FooterNav.css'
import assets from '../../assets';
import SmallButton from '../SmallButton/SmallButton';

function FooterNav() {
    const openCheckout = () => {
        let options = {
            "key": process.env.REACT_APP_RAZORPAY_ID,
            "amount": 50000,
            "name": "Merchant Name",
            "description": "Purchase Description",
            "image": assets.logo,
            "handler": function () {
                alert("Payment successful!");
            },
            "notes": {
                "address": "Hello World"
            },
            "theme": {
                "color": "#4C3F91"
            }
        };

        let rzp = new window.Razorpay(options);
        rzp.open();
    }

    return (
        <div className="FooterNav">
            <div className="left__footNav">
                <a href="/">
                    <img src={assets.leftArrow} alt="left-arrow" className="back__icon" />
                    <p>
                        Back
                    </p>
                </a>

            </div>
            <div className="right__footNav">
                <SmallButton
                    text="Continue Shopping"
                    color="blackOutline" />
                <SmallButton
                    text="Proceed to Payment"
                    color="green"
                    handleClick={openCheckout} />
            </div>
        </div>
    )
}

export default FooterNav
