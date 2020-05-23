import React, {useState} from "react";
import styles from "./uniCardsDeck.module.css";
import Input from "../../../common/input/Input";
import Button from "../../../common/button/Button";
import {NavLink} from "react-router-dom";
import {TO_CARDS} from "../../../common/routes";

interface IProps {
    deleteDeck: (value: string) => void,
    name: string,
    grade: number,
    deckId: string,
    setDeckName: (value: string) => void,
    editDeck: (value: string) => void,
    setNewDeckName: (value: string) => void
    editNameInput: string,
    setEditNameInput: (value: string) => void,
    editGradeInput: number,
    setEditGradeInput: (value: number) => void
}

const SingleDeck: React.FC<IProps> = ({
                                          setDeckName, editDeck,
                                          deckId, name, editNameInput,
                                          grade, deleteDeck, setEditNameInput
                                          , setEditGradeInput
                                      }) => {
    const [editDeckInputField, setEditDeckInputField] = useState<boolean>(false)
    const editDeckInputFieldHandler = () => {
        editDeck(deckId)
        setEditDeckInputField(false)
        setEditNameInput('')
        setEditGradeInput(0)

    }
    return (
        <div className={styles.mainList}>
            {!editDeckInputField
                ? <>
                    <div onClick={() => setDeckName(name)} className={styles.itemName}>
                        <NavLink to={TO_CARDS + `/${deckId}`}>{name}</NavLink>
                        <div>(Click to interact)</div>
                    </div>
                    <div className={styles.itemScore}>{grade} </div>
                </>
                :
                <Input value={editNameInput} inputType={'text'} inputPlaceholder={'type new name'}
                       inputOnChange={setEditNameInput}/>
            }
            <div className={styles.buttonsInTheList}>
                {!editDeckInputField
                    ? <>
                        <Button buttonName={'edit Name'}
                                buttonOnClickBoolean={() => setEditDeckInputField(true)}/>
                        <Button buttonName={'delete'} buttonOnClick={() => deleteDeck(deckId)}/>
                    </>
                    : <>
                        <Button buttonName={'save'}
                                buttonOnClick={editDeckInputFieldHandler}/>
                        <Button buttonName={'delete'} buttonOnClick={() => deleteDeck(deckId)}/>
                    </>
                }
            </div>
        </div>
    )
}

export default SingleDeck;