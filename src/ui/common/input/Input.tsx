import React from 'react';
import s from './Input.module.css'

interface IPropsInput {
    inputPlaceholder?: string | undefined,
    value?: string | undefined,
    inputType?:string | undefined,
    inputOnChange?: (value: string) => void
}
const Input: React.FC<IPropsInput> = ({
                                          inputPlaceholder, value ,inputType, inputOnChange
                                      }) => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (inputOnChange) {
            inputOnChange(e.currentTarget.value)
        }
    }

    return (
        <div className={s.inputWrapper}>
            <input onChange={onChange} placeholder={inputPlaceholder}
                   value={value} type={inputType}/>
        </div>
    );
};

export default Input;
