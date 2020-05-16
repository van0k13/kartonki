import React from 'react';
import UniCardsContainer from "./uniCardsContainer";
import WithAuthHOC from "../../../common/withAuth";


const UniCardsPage = () => {
  return (
      <UniCardsContainer />
  );
};

export default WithAuthHOC(UniCardsPage);
