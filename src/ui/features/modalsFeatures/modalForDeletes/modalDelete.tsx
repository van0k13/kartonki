import React from 'react'
import s from '../modals.module.css'

interface IModal {
    setIsOpenModal: (value: boolean) => void
}

const ModalDelete: React.FC<IModal> = ({children, setIsOpenModal}) => {
    return (
        <div className={s.main}>
            <div className={s.modelWrapper} onClick={()=>setIsOpenModal(false)}/>
            <div className={s.childrenWrapper}>
                <div className={s.children}>{children}</div>
            </div>

        </div>
    );
};

export default ModalDelete;
