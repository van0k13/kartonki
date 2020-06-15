import React from 'react';
import styles from './profile.module.css'
import Button from "../../../common/button/Button";
import MyDecks from "./myDecks/myDecks";
import {CardsDeckType} from "../../../../bll/types";

interface IProps {
    decks: Array<CardsDeckType>,
    myName: string,
    avatar: string,
    similarity: boolean
    setIsOpenModalNewAvatar?: (value: boolean) => void,
    setIsOpenModalNewName?: (value: boolean) => void,
    createNewDeck: (value: boolean) => void,
}

const Profile: React.FC<IProps> = ({
                                       myName, avatar, createNewDeck,
                                       decks, setIsOpenModalNewAvatar,
                                       setIsOpenModalNewName, similarity
                                   }) => {
    return (
        <div className={styles.profileWrapper}>
            <div className={styles.avatarWrapper}>
                <img src={avatar}
                     alt={myName}/>
                {similarity && <Button buttonName={'Change'}
                                       buttonOnClickBoolean={() => {
                                           if (setIsOpenModalNewAvatar) {
                                               setIsOpenModalNewAvatar(true)
                                           }
                                       }}/>
                }
            </div>
            <div className={styles.myInfo}>
                <div className={styles.nameBlock} onClick={() => {
                    if (setIsOpenModalNewName && similarity) {
                        setIsOpenModalNewName(true)
                    }
                }}>
                    <h2>{myName}</h2>
                    <span>(click to change)</span>
                </div>
                <div className={styles.myDecksTitle}>
                    {similarity
                    ?<div className={styles.myDecksTitleSubSection}>
                        <span> My Decks </span>
                        <Button buttonName={'create new deck'}
                                buttonOnClickBoolean={() => createNewDeck(true)}/>
                    </div>
                        : <div> Decks</div>
                    }
                <hr/>
                    <MyDecks decks={decks}/>
                </div>


            </div>
        </div>
    );
};

export default Profile;
