import React from 'react';
import s from './Button.module.css';

interface IPropsButton {
    stringValue?: string,
    booleanValue?: boolean
    buttonOnClick?: () => void,
    buttonOnClickBoolean?: (value: boolean | undefined) => void,
    buttonName?: string
}

const Button: React.FC<IPropsButton> = ({buttonOnClick, buttonName,
                                            buttonOnClickBoolean,booleanValue}) => {
    const onClick = () => {
        if (buttonOnClick) buttonOnClick()
        else if (buttonOnClickBoolean) buttonOnClickBoolean(booleanValue)
            }

    return (
        <div className={s.buttonWrapper}>
            <button onClick={onClick}>{buttonName ? buttonName : 'submit'}</button>
        </div>
    );
};

export default Button;
