import React from 'react';
import UniCardsContainerDeck from "./uniCardsContainerDeck";
import WithAuthHOC from "../../../common/withAuth";


const UniCardsDeckPage = () => {
    return (
            <UniCardsContainerDeck/>
    );
};

export default WithAuthHOC(UniCardsDeckPage);
