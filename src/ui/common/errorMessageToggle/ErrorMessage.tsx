import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../bll/store";
import ModalContainerNotify from "../../features/modalsFeatures/modalForNotify/modalContainerNotify";
import {actions} from "../../../bll/actions";

const ErrorMessage = () => {
    const dispatch = useDispatch();
    const [isOpenModalNotify, setIsOpenModalNotify] = useState<boolean>(true)
    const {isError, errorMessage} = useSelector((state: RootState) => state.features)
    const answerFromModal = () => {
        dispatch(actions.isErrorAC(false, 'ok'))
    }
    if (isError)
        return (
            <ModalContainerNotify errorMessage={errorMessage}
                titleName={'Error'} setIsOpenModalNotify={setIsOpenModalNotify}
                isOpenModalNotify={isOpenModalNotify} answerFromModal={answerFromModal}/>
        )
    else return null
}

export default ErrorMessage;