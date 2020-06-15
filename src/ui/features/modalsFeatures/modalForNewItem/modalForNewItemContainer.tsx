import React from 'react';
import ModalForNewItem from "./modalForNewItem";
import Button from "../../../common/button/Button";
import Input from "../../../common/input/Input";


interface IProps {
    isOpenModalNewItem: boolean,
    setIsOpenModalNewItem: (value: boolean) => void
    setInputOnChange: (value: string) => void
    acceptChangesFormModal: (value: string) => void
    modalTitle: string
    newInputOnChange: string
}

const ModalForNewItemContainer: React.FC<IProps> = ({
                                                        setIsOpenModalNewItem, modalTitle,newInputOnChange,
                                                        isOpenModalNewItem, acceptChangesFormModal,
                                                        setInputOnChange,
                                                    }) => {
    if (isOpenModalNewItem) return (
        <ModalForNewItem isOpenModalNewItem={isOpenModalNewItem}>
            <h3>{modalTitle}</h3>
            <div>
                <Input inputPlaceholder={`Enter new information`}
                       inputType={'text'} value={newInputOnChange} inputOnChange={setInputOnChange}/>
                <Button buttonOnClick={()=>acceptChangesFormModal(newInputOnChange)} buttonName={'apply'}/>
                <Button buttonOnClickBoolean={() => setIsOpenModalNewItem(false)} buttonName={'close'}/>
            </div>
        </ModalForNewItem>
    );
    else return null
};

export default ModalForNewItemContainer;