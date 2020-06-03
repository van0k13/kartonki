import React from 'react';
import styles from './profile.module.css'
import Button from "../../../common/button/Button";
import MyDecks from "./myDecks/myDecks";
import {TO_CARDSDECK} from "../../../common/routes";
import {NavLink} from "react-router-dom";
import Input from "../../../common/input/Input";
import {CardsDeckType} from "../../../../bll/types";

interface IProps {
    decks: Array<CardsDeckType>,
    myName: string,
    avatar: string,
    newName: string,
    myOrAllDecks: boolean,
    changeMyName: boolean,
    changeMyAvatarToggle: boolean,
    setChangeMyAvatarToggle: (value: boolean) => void,
    setMyOrAllDecks: (value: boolean) => void,
    setChangeMyName: (value: boolean) => void,
    setNewName: (value: string) => void,
    changeName: (value:string) => void,
    changeAvatar: (value:string) => void,
    getMyDecks: () => void,
}

const Profile: React.FC<IProps> = ({
                                       myOrAllDecks, myName, avatar, setMyOrAllDecks,
                                       changeName, setChangeMyName, changeMyName,newName,
                                       setNewName,setChangeMyAvatarToggle,changeMyAvatarToggle,
                                       changeAvatar, decks,getMyDecks
                                   }) => {
    return (
        <div className={styles.profileWrapper}>
            {
                changeMyAvatarToggle
                ?<div className={styles.avatarWrapper}>
                    <img src={avatar}
                         alt={myName}/>
                    <Button buttonName={'Change'}
                            buttonOnClickBoolean={()=>setChangeMyAvatarToggle(!changeMyAvatarToggle)}/>
                </div>
                    :<div className={styles.avatarWrapper}>
                        <Input inputOnChange={setNewName} inputType={'text'} inputPlaceholder={'insert new URL'}
                               value={newName}
                        />
                        <Button buttonOnClick={()=>changeAvatar(newName)} buttonName={'Submit'}/>
                        <Button buttonOnClickBoolean={()=>setChangeMyAvatarToggle(!changeMyAvatarToggle)}
                                buttonName={'Cancel'}/>
                    </div>
            }
            <div className={styles.myInfo}>
                {
                    changeMyName
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
                {
                    myOrAllDecks
                    ? <div className={styles.deckBlock}>
                        <div className={styles.nameBlock} onClick={() => setMyOrAllDecks(!myOrAllDecks)}>
                            <h3>my decks</h3>
                            <span>(go to all decks)</span>
                        </div>
                        <MyDecks decks={decks}/>
                    </div>
                    : <div className={styles.myOrAllDecksBlock}>
                        <div onClick={getMyDecks}>My Decks</div>
                        <NavLink to={TO_CARDSDECK}>All Decks</NavLink>
                    </div>
                }
            </div>
        </div>
    );
};

export default Profile;
