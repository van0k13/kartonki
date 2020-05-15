import React, {useState} from "react";
import styles from "./uniCardsDeck.module.css";
import Input from "../../../common/input/Input";
import Button from "../../../common/button/Button";

interface IProps {
    deleteDeck: (value: string | undefined) => void,
    name: string | undefined,
    grade: number | undefined,
    id: string | undefined
}

const SingleDeck: React.FC<IProps> = ({
                                          id, name,
                                          grade, deleteDeck
                                      }) => {
    const [editDeckInputField, setEditDeckInputField] = useState<boolean>(false)
    return (
        <div className={styles.mainList}>
            {!editDeckInputField
                ? <>
                    <div className={styles.itemName}>Name: {name} </div>
                    <div className={styles.itemScore}>Grade:{grade} </div>
                </>
                : <> <Input value={name}/> <Input value={grade}/> </>
            }
            <div className={styles.buttonsInTheList}>
                <Button buttonName={'edit'}
                        buttonOnClickBoolean={() => setEditDeckInputField(!editDeckInputField)}/>
                <Button buttonName={'delete'} buttonOnClick={() => deleteDeck(id)}/>
            </div>
        </div>
    )
}

export default SingleDeck;