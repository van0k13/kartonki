import React, {useState} from 'react'
import Header from "./headers";
import {useSelector} from "react-redux";
import {RootState} from "../../../bll/store";

const HeaderContainer = () => {
    const [links, setLinks] = useState<boolean>(true)
    const {myName, authSuccess} = useSelector((state: RootState) => state.auth)
    return <Header authSuccess={authSuccess} setLinks={setLinks} links={links} myName={myName}/>

};

export default HeaderContainer;