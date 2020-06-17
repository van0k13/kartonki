import React, {useState} from 'react'
import Header from "./headers";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../bll/store";
import {actions} from "../../../bll/actions";
import {takeTokenFromLS} from "../save&takeToken";

const HeaderContainer = () => {
    const dispatch = useDispatch();
    const [links, setLinks] = useState<boolean>(true)
    const {myName} = useSelector((state: RootState) => state.auth)
    const token = takeTokenFromLS()
    const logOut = () => {
        dispatch(actions.logOutAC())
    }
    return <Header token={token} logOut={logOut}
                   setLinks={setLinks} links={links} myName={myName}/>

};

export default HeaderContainer;