import React, {useState} from 'react'
import Header from "./headers";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../bll/store";
import {actions} from "../../../bll/actions";

const HeaderContainer = () => {
    const dispatch = useDispatch();
    const [links, setLinks] = useState<boolean>(true)
    const {myName, authSuccess} = useSelector((state: RootState) => state.auth)
    const logOut = () => {
        dispatch(actions.logOutAC())
    }
    return <Header authSuccess={authSuccess} logOut={logOut}
                   setLinks={setLinks} links={links} myName={myName}/>

};

export default HeaderContainer;