import React from 'react';
import s from './Input.module.css'

interface IPropsInput {
    inputPlaceholder?: string | undefined,
    value?: string  | undefined,
    checked?: boolean | undefined,
    inputType?:string | undefined,
    inputOnChange?: (value: string ) => void,
    inputOnChangeChecked?: (value: boolean ) => void
}
const Input: React.FC<IPropsInput> = ({
                                          inputPlaceholder,
                                          value ,
                                          checked,
                                          inputType,
                                          inputOnChange,
                                          inputOnChangeChecked
                                      }) => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (inputOnChange) {
            inputOnChange(e.currentTarget.value)
        } else if(inputOnChangeChecked) {
            inputOnChangeChecked(e.currentTarget.checked)
        }
    }

    return (
        <div className={s.inputWrapper}>
            <input onChange={onChange} placeholder={inputPlaceholder}
                   value={value} checked={checked} type={inputType}/>
        </div>
    );
};

export default Input;
