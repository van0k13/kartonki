import React from 'react';
import s from './Input.module.css'

interface IPropsInput {
    inputPlaceholder?: string | undefined,
    inputValue?: string | undefined,
    inputType?:string | undefined,
    inputOnChange?: () => void
}
const Input: React.FC<IPropsInput> = ({
                                          inputPlaceholder,inputValue,inputType, inputOnChange
                                      }) => {
    return (
        <div className={s.inputWrapper}>
            <input onChange={inputOnChange} placeholder={inputPlaceholder}
                   value={inputValue} type={inputType}/>
        </div>
    );
};

export default Input;
