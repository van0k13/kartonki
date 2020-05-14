import React from 'react';
import styles from './uniCardsDeck.module.css'
import Input from "../../../common/input/Input";
import Button from "../../../common/button/Button";
import {CardsDeckType} from "../../../../bll/types";

interface IProps {
    decksElements: Array<CardsDeckType>,
    createNewDeck: () => void,
    setNewDeckinputField: (value:boolean) => void,
    newDeckinputField: boolean,
    setDeckName: (value: string) => void,
    deckName: string
}


const UniCardsDeck: React.FC<IProps> = ({
                                            newDeckinputField,
                                            decksElements, createNewDeck,
                                            setNewDeckinputField, setDeckName, deckName
                                        }) => {
    return (
        <div className={styles.uniCardsWrapper}>
            <h2>UniCardsDeck</h2>
            <Input inputPlaceholder={'item name'}/>
            <Button buttonName={'search'}/>
            <div className={styles.mainListWrapper}>
                <Button buttonOnClickBoolean={()=>setNewDeckinputField(true)}
                        buttonName={'Add new Deck'}/>
                {newDeckinputField && <>
                    <Input inputPlaceholder={`Enter your Deck's name`}
                    inputType={'text'}  value={deckName} inputOnChange={setDeckName}
                    />
                    <Button buttonName={'Add'} buttonOnClick={createNewDeck}/>
                    <Button buttonOnClickBoolean={()=>setNewDeckinputField(false)}
                    buttonName={'cancel'}/>
                </>}
                {decksElements}
            </div>
        </div>
    );
};

export default UniCardsDeck;
