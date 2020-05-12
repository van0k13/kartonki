import React, {useState} from 'react'
import Header from "./headers";

const HedaerContainer = () => {
    const [links, setLinks] = useState<boolean>(true)

  return <Header setLinks={setLinks} links={links} />
};

export default HedaerContainer;