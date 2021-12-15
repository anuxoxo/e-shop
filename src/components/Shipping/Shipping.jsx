import React, { useState, useContext } from 'react'
import { UserContext } from '../../context/userContext';
import './Shipping.css';
import assets from '../../assets';

import InputBox from '../InputBox/InputBox';
import SmallButton from '../SmallButton/SmallButton';

// firebase
import '../../firebase/firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { db } from '../../firebase/db';
import { setDoc, doc, getDoc } from "firebase/firestore";

const provider = new GoogleAuthProvider();
const auth = getAuth();

function Shipping() {
    const [shippingData, setShippingData] = useState({
        email: "",
        fname: "",
        lname: "",
        phoneNum: null,
        addr: "",
        city: "",
        zip: null,
        country: ""
    });
    const [user, setUser] = useContext(UserContext);

    const addUser = async (displayName, photoURL, uid) => {
        try {
            setDoc(doc(db, "users", uid), {
                displayName,
                photoURL,
            });
        } catch (e) {
            console.error("Error adding user: ", e);
        }
    }

    const userExists = async (uid) => {
        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return true;
        } else {
            return false;
        }
    }

    const login = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const { displayName, photoURL, uid } = result.user;
                const authorized = (result.user.accessToken) ? true : false;

                setUser({
                    authorized,
                    displayName,
                    photoURL,
                    uid
                });

                userExists(uid).then(res => {
                    if (!res) {
                        addUser(displayName, photoURL, uid);
                    } else {
                        console.log("User already exists!");
                    }
                });

            }).catch((error) => {
                console.log(error.message);
            });
    }

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({
                authorized: false,
                displayName: "",
                photoURL: "",
            })
        }).catch((error) => {
            alert("Error signing out user : ", error.message);
        });
    }

    return (
        <div className="Shipping">
            <div className="topContainer">
                <h2 className="primary__title">
                    Shipping and Payment
                </h2>
                {
                    user.authorized ? (
                        <div className="user">
                            <img src={user.photoURL} alt="user-img" className="userImg" />
                            <span style={{ marginLeft: "10px" }}>{user.displayName}</span>
                            <button onClick={logOut} title="Log Out">
                                <img src={assets.logout} alt="logout" style={{ height: "20px", marginLeft: "10px" }} />
                            </button>
                        </div>
                    ) : (

                        <div className="button__group">
                            <SmallButton
                                text="log in"
                                color="green"
                                handleClick={login} />
                            <SmallButton
                                text="sign up"
                                color="white"
                                handleClick={login} />
                        </div>
                    )
                }

            </div >
            <div className="shipping__info">
                <h3 className="secondary__title">
                    Shipping Information
                </h3>
                <div className="input__col">
                    <div className="left__inputCol">
                        <InputBox
                            placeholderText="Email"
                            type="email"
                            name="email"
                            inputText={shippingData}
                            setInputText={setShippingData} />
                        <InputBox placeholderText="First name"
                            name="fname"
                            inputText={shippingData}
                            setInputText={setShippingData} />
                        <InputBox placeholderText="Last name"
                            name="lname"
                            inputText={shippingData}
                            setInputText={setShippingData} />
                        <InputBox
                            placeholderText="Phone number"
                            name="phoneNum"
                            inputText={shippingData}
                            setInputText={setShippingData}
                            type="tel" />
                    </div>
                    <div className="left__inputCol">
                        <InputBox placeholderText="Address"
                            name="addr"
                            inputText={shippingData}
                            setInputText={setShippingData} />
                        <InputBox placeholderText="City"
                            name="city"
                            inputText={shippingData}
                            setInputText={setShippingData} />
                        <InputBox
                            placeholderText="Postal Code / ZIP"
                            name="zip"
                            type="number"
                            inputText={shippingData}
                            setInputText={setShippingData} />

                        <select
                            defaultValue={shippingData.country}
                            onChange={(country) => setShippingData((prev) => ({ ...prev, country: country.target.value }))}
                        >
                            <option value="Poland">Poland</option>
                            <option value="Poland">Poland</option>
                            <option value="Poland">Poland</option>
                        </select>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Shipping
