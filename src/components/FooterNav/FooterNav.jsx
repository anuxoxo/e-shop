import React from 'react'
import './FooterNav.css'
import assets from '../../assets';
import SmallButton from '../SmallButton/SmallButton';

function FooterNav() {
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
                    color="green" />
            </div>
        </div>
    )
}

export default FooterNav
