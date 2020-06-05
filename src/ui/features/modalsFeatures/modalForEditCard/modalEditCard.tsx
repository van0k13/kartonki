import React from 'react'
import s from '../modals.module.css'

interface IModal {
    isOpenModalEditCard: boolean
}

const ModalEditCard: React.FC<IModal> = ({children, isOpenModalEditCard}) => {
    if (!isOpenModalEditCard) return null
    return (
        <div className={s.main}>
            <div className={s.modelWrapper}/>
            <div className={s.childrenWrapper}>
                <div className={s.children}>{children}</div>
            </div>

        </div>
    );
};

export default ModalEditCard;
