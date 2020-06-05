import React from 'react';
import styles from './profile.module.css'
import Button from "../../../common/button/Button";
import MyDecks from "./myDecks/myDecks";
import {TO_CARDSDECK} from "../../../common/routes";
import {NavLink} from "react-router-dom";
import {CardsDeckType} from "../../../../bll/types";

interface IProps {
    decks: Array<CardsDeckType>,
    myName: string,
    avatar: string,
    myOrAllDecks: boolean,
    setMyOrAllDecks: (value: boolean) => void,
    setIsOpenModalNewAvatar: (value: boolean) => void,
    setIsOpenModalNewName: (value: boolean) => void,
    getMyDecks: () => void,
}

const Profile: React.FC<IProps> = ({
                                       myOrAllDecks, myName, avatar, setMyOrAllDecks,
                                       decks, getMyDecks, setIsOpenModalNewAvatar,
                                       setIsOpenModalNewName,
                                   }) => {
    return (
        <div className={styles.profileWrapper}>
            <div className={styles.avatarWrapper}>
                <img src={avatar}
                     alt={myName}/>
                <Button buttonName={'Change'}
                        buttonOnClickBoolean={() => {
                            setIsOpenModalNewAvatar(true)
                        }}/>
            </div>
            <div className={styles.myInfo}>
                <div className={styles.nameBlock} onClick={() => {
                    setIsOpenModalNewName(true)
                }}>
                    <h2>{myName}</h2>
                    <span>(click to change)</span>
                </div>
                {
                    myOrAllDecks
                        ? <div className={styles.deckBlock}>
                            <div className={styles.nameBlock}
                                 onClick={() => setMyOrAllDecks(!myOrAllDecks)}>
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
