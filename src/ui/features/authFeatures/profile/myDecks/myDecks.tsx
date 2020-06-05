import React from 'react'
import styles from "../profile.module.css";
import {CardsDeckType} from "../../../../../bll/types";
import { NavLink } from 'react-router-dom';
import {TO_CARDS} from "../../../../common/routes";


interface IProps {
    decks: Array<CardsDeckType>
}

const MyDecks: React.FC<IProps> = ({decks}) => {
    const decksElements = decks.map(d =>
        <NavLink to={TO_CARDS + `/${d._id}`} className={styles.singleDeck} key={d._id} >
            <span>{d.name}</span>
            <img src={'https://bgfons.com/upload/books_texture3035.jpg'} alt={'deck'}/>
        </NavLink>)
    return (
        <div className={styles.decks}>
            {decksElements}
        </div>
    )
}

export default MyDecks;