import React from 'react';
import s from './Button.module.css';
import {useSelector} from "react-redux";
import {RootState} from "../../../bll/store";

interface IPropsButton {
    stringValue?: string,
    booleanValue?: boolean
    buttonOnClick?: () => void,
    buttonOnClickBoolean?: (value: boolean | undefined) => void,
    buttonName?: string
}

const Button: React.FC<IPropsButton> = ({
                                            buttonOnClick, buttonName,
                                            buttonOnClickBoolean, booleanValue
                                        }) => {
    const onClick = () => {
        if (buttonOnClick) buttonOnClick()
        else if (buttonOnClickBoolean) buttonOnClickBoolean(booleanValue)
    }
    const {isLoading} = useSelector(
        (state: RootState) => state.auth);

    return (
        <div className={s.buttonWrapper}>
            <button className={s.worksButton} disabled={isLoading}
                    onClick={onClick}><span>{buttonName ? buttonName : 'submit'}</span></button>
        </div>
    );
};

export default Button;
