import React, { useState } from 'react'
import InputBox from '../../InputBox/InputBox';
import SmallButton from '../../SmallButton/SmallButton';
import './Shipping.css';

function Shipping() {
    const [email, setEmail] = useState("");

    const login = () => { }

    return (
        <div className="Shipping">
            <div className="topContainer">
                <h2 className="primary__title">
                    Shipping and Payment
                </h2>
                <SmallButton
                    text="log in"
                    color="green"
                    handleClick={login} />
                <SmallButton
                    text="sign up"
                    color="white"
                    handleClick={login} />
            </div>
            <div className="shipping__info">
                <h3 className="secondary__title">
                    Shipping Information
                </h3>
                <div className="input__col">
                    <div className="left__inputCol">
                        <InputBox
                            placeholderText="Email"
                            type="email"
                            inputText={email}
                            setInputText={setEmail} />
                        <InputBox placeholderText="First name" />
                        <InputBox placeholderText="Last name" />
                        <InputBox
                            placeholderText="Phone number"
                            type="tel" />
                    </div>
                    <div className="left__inputCol">
                        <InputBox placeholderText="Address" />
                        <InputBox placeholderText="City" />
                        <InputBox
                            placeholderText="Postal Code / ZIP"
                            type="number" />

                        <select>
                            <option value="Poland">Poland</option>
                            <option value="Poland">Poland</option>
                            <option value="Poland">Poland</option>
                        </select>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Shipping
