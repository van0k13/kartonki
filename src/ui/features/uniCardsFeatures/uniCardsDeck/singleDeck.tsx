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
    editDeck: (value: string) => void,
    editNameInput: string,
    setEditNameInput: (value: string) => void,
    editGradeInput: number,
    setEditGradeInput: (value: number) => void
}

const SingleDeck: React.FC<IProps> = ({
                                          editDeck,
                                          deckId, name, editNameInput,
                                          grade, deleteDeck, setEditNameInput,
                                          editGradeInput, setEditGradeInput
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
                    <div className={styles.itemName}>
                        <NavLink to={TO_CARDS + deckId}>Name: {name}</NavLink>
                    </div>
                    <div className={styles.itemScore}>Grade:{grade} </div>
                </>
                : <>
                    <Input value={editNameInput} inputType={'text'} inputPlaceholder={'type new name'}
                           inputOnChange={setEditNameInput}/>
                    <Input value={editGradeInput} inputType={'text'} inputPlaceholder={'type new grade'}
                           inputOnChangeNumber={setEditGradeInput}/>
                </>
            }
            <div className={styles.buttonsInTheList}>
                {!editDeckInputField
                    ? <>
                        <Button buttonName={'edit'}
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