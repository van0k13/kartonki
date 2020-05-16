import React, {useState} from 'react';
import UniCards from "./uniCards";


const UniCardsContainer = () => {
  const [searchInput, setSearchInput] = useState<string>('')

  return (
      <UniCards searchInput={searchInput} setSearchInput={setSearchInput}
      />
  );
};

export default UniCardsContainer;
