import React from 'react'
import s from '../modals.module.css'

interface IModal {
    children: any
}

const ModalDelete: React.FC<IModal> = ({children}) => {
    return (
        <div className={s.main}>
            <div className={s.modelWrapper}/>
            <div className={s.childrenWrapper}>
                <div className={s.children}>{children}</div>
            </div>

        </div>
    );
};

export default ModalDelete;
