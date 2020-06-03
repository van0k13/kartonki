import React from 'react';
import styles from './profile.module.css'
import Button from "../../../common/button/Button";
import MyDecks from "./myDecks/myDecks";
import {TO_CARDSDECK} from "../../../common/routes";
import {NavLink} from "react-router-dom";
import Input from "../../../common/input/Input";

interface IProps {
    decks: [],
    myName: string,
    avatar: string,
    newName: string,
    myOrAllDecks: boolean,
    changeMyName: boolean,
    setMyOrAllDecks: (value: boolean) => void,
    setChangeMyName: (value: boolean) => void,
    setNewName: (value: string) => void,
    changeName: (value:string) => void
}

const Profile: React.FC<IProps> = ({
                                       myOrAllDecks, myName, avatar, setMyOrAllDecks,
                                       changeName, setChangeMyName, changeMyName,newName,
                                       setNewName,
                                   }) => {
    return (
        <div className={styles.profileWrapper}>
            <div className={styles.avatarWrapper}>
                <img src={avatar}
                     alt={myName}/>
                <Button buttonName={'Change'}/>
            </div>
            <div className={styles.myInfo}>
                {changeMyName
                    ? <div className={styles.nameBlock} onClick={() => {
                        setChangeMyName(!changeMyName)
                    }}>
                        <h2>{myName}</h2>
                        <span>(click to change)</span>
                    </div>
                    : <>
                        <Input inputOnChange={setNewName} inputType={'text'} inputPlaceholder={'insert new name'}
                        value={newName}
                        />
                        <Button buttonOnClick={()=>changeName(newName)} buttonName={'Submit'}/>
                        <Button buttonOnClickBoolean={()=>setChangeMyName(!changeMyName)} buttonName={'Cancel'}/>
                    </>

                }
                {myOrAllDecks
                    ? <div className={styles.deckBlock}>
                        <div className={styles.nameBlock} onClick={() => setMyOrAllDecks(!myOrAllDecks)}>
                            <h3>my decks</h3>
                            <span>(click to change)</span>
                        </div>
                        <MyDecks/>
                    </div>
                    : <div className={styles.myOrAllDecksBlock}>
                        <div onClick={() => setMyOrAllDecks(!myOrAllDecks)}>My Decks</div>
                        <NavLink to={TO_CARDSDECK}>All Decks</NavLink>
                    </div>}
            </div>
        </div>
    );
};

export default Profile;
