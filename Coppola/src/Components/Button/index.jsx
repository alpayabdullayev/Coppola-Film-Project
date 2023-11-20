import React from 'react'
import "./index.scss"

const Button = ({ text, rengi }) => {
    return (
        <div className='pageBtn'>
            <a className={`pageBtnA ${rengi}`}  href="">{text}</a>
        </div>
    );
};

export default Button