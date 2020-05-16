import React, {useState} from 'react'
import Header from "./headers";
import {useSelector} from "react-redux";
import {RootState} from "../../../bll/store";

const HedaerContainer = () => {
    const [links, setLinks] = useState<boolean>(true)
    const {myName} = useSelector((state:RootState) => state.auth)

  return <Header setLinks={setLinks} links={links} myName={myName} />
};

export default HedaerContainer;