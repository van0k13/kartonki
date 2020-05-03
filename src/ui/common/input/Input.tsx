import React from 'react';
import s from './Input.module.css'

interface IPropsInput {
    inputPlaceholder?: string | undefined,
    value?: string | undefined,
    inputType?:string | undefined,
    inputOnChange?: () => void
}
const Input: React.FC<IPropsInput> = ({
                                          inputPlaceholder, value ,inputType, inputOnChange
                                      }) => {
    return (
        <div className={s.inputWrapper}>
            <input onChange={inputOnChange} placeholder={inputPlaceholder}
                   value={value} type={inputType}/>
        </div>
    );
};

export default Input;
