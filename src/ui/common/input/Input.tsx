import React from 'react';
import s from './Input.module.css'


const Input = (props: any) => {
    return (
        <div className={s.inputWrapper}>
            <input onChange={()=>{}} value={props.value} type="text"/>
        </div>
    );
};

export default Input;
