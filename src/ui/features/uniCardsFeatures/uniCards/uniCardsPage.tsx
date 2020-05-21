import React from 'react';
import WithAuthHOC from "../../../common/withAuth";
import UniCardsContainer from "./uniCardsContainer";


const UniCardsPage = () => {
  return (
      <UniCardsContainer />
  );
};

export default WithAuthHOC(UniCardsPage);
