import React from 'react'
import './InputBox.css'

function InputBox({ placeholderText, type = "text", inputText, setInputText }) {
    return (
        <div>
            <input
                className="inputBox"
                type={type}
                placeholder={placeholderText}
                value={inputText}
                onChange={(e) => {
                    setInputText(e.target.value);
                    console.log(inputText);
                }}
            />
        </div>
    )
}

export default InputBox
