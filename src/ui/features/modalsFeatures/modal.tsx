import React from 'react'
import s from './modals.module.css'

interface IModal {
    children: any
    isOpen: boolean
}

const Modal: React.FC<IModal> = ({children,isOpen})=> {
    if(isOpen) return null
        return (
        <div className={s.da}>{children}</div>
    );
};

export default Modal;
