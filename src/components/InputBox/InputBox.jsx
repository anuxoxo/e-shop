import React from 'react'
import './InputBox.css'

function InputBox({ placeholderText, type = "text", inputText, setInputText, name }) {

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputText((prev) => ({
            ...prev,
            [name]: value
        }))
        console.log(inputText)
    }
    return (
        <div className="input__boxContainer">
            <input
                className="inputBox"
                name={name}
                type={type}
                placeholder={placeholderText}
                value={inputText.name}
                onChange={handleChange}
            />
        </div>
    )
}

export default InputBox
