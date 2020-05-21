import React, {useEffect, useState} from 'react';
import UniCards from "./uniCards";
import {useDispatch, useSelector} from "react-redux";
import {getCardsTC} from "../../../../bll/cards_reducer";
import {RootState} from "../../../../bll/store";
import { withRouter } from 'react-router-dom';


const UniCardsContainer = (props: any) => {
    const [searchInput, setSearchInput] = useState<string>('');
    const dispatch = useDispatch();
    const {token} = useSelector((state: RootState) => state.auth);
    const {id} = props.match.params;
    console.log(props);
    useEffect(() => {
        dispatch(getCardsTC(token, id))
    }, []);
    return (
        <UniCards searchInput={searchInput} setSearchInput={setSearchInput}
        />
    );
};


export default withRouter(UniCardsContainer);
