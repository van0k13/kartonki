import React from 'react';
import s from './Input.module.css'


const Input = () => {
    return (
        <div className={s.inputWrapper}>
            <input onChange={()=>{}} value='' type="text"/>
        </div>
    );
};

export default Input;
