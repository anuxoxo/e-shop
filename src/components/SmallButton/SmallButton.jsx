import React from 'react'
import './SmallButton.css';

function SmallButton({ text, handleClick, color }) {
    return (
        <button className={`btn__primary btn__${color}`}
            onClick={handleClick}>
            {text}
        </button>
    )
}

export default SmallButton
