import React from 'react';
import s from './Button.module.css';


const Button = () => {
    return (
        <div className={s.buttonWrapper}>
            <button>Submit</button>
        </div>
    );
};

export default Button;
