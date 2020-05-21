import React, {useState} from 'react';
import UniCards from "./uniCards";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../bll/store";
import {getCardsTC} from "../../../../bll/cards_reducer";
import { withRouter } from 'react-router-dom';


const UniCardsContainer = (props:any) => {
  const [searchInput, setSearchInput] = useState<string>('')
    const dispatch = useDispatch()
    const {token} = useSelector((state:RootState) => state.auth)
    const {cards} = useSelector((state:RootState) => state.cards)
    const {deckId} = props.match.params
    console.log(cards)
    useEffect(() => {
        dispatch(getCardsTC(token, deckId))
    }, [deckId])
  return (
      <UniCards searchInput={searchInput} setSearchInput={setSearchInput}
      />
  );
};

export default withRouter(UniCardsContainer);
