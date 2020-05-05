import React from 'react';
import s from './Button.module.css';

interface IPropsButton {
    buttonOnClick?: () => void,
    buttonName?: string
}

const Button: React.FC<IPropsButton> = ({buttonOnClick, buttonName}) => {
    return (
        <div className={s.buttonWrapper}>
            <button onClick={buttonOnClick}>{buttonName? buttonName : 'submit'}</button>
        </div>
    );
};

export default Button;
