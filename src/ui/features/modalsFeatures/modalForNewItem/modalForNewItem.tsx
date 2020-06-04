import React from 'react'
import s from '../modals.module.css'

interface IModal {
    children: any
    isOpenModalNewItem: boolean
}

const ModalForNewItem: React.FC<IModal> = ({children, isOpenModalNewItem}) => {
    if (!isOpenModalNewItem) return null
    return (
        <div className={s.main}>
            <div className={s.modelWrapper}/>
            <div className={s.childrenWrapper}>
                <div className={s.children}>{children}</div>
            </div>

        </div>
    );
};

export default ModalForNewItem;
