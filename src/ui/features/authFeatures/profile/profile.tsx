import React from 'react';
import styles from './profile.module.css'
import Button from "../../../common/button/Button";
import MyDecks from "./myDecks/myDecks";
import {CardsDeckType} from "../../../../bll/types";

interface IProps {
    decks: Array<CardsDeckType>,
    myName: string,
    avatar: string,
    setIsOpenModalNewAvatar: (value: boolean) => void,
    setIsOpenModalNewName: (value: boolean) => void,
}

const Profile: React.FC<IProps> = ({
                                       myName, avatar,
                                       decks, setIsOpenModalNewAvatar,
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
                <div className={styles.myDecksTitle}>My Decks</div>
                <MyDecks decks={decks}/>
            </div>
        </div>
    );
};

export default Profile;
