import React from 'react'
import styles from "../profile.module.css";
import {CardsDeckType} from "../../../../../bll/types";


interface IProps {
    decks: Array<CardsDeckType>
}

const MyDecks: React.FC<IProps> = ({decks}) => {
    const decksElements = decks.map(d => <div className={styles.singleDeck} onClick={() => {
        alert('clicked on deck')
    }}>
        <span>{d.name}</span>
        <img src={'https://bgfons.com/upload/books_texture3035.jpg'} alt={'deck'}/>
    </div>)
    return (
        <div className={styles.decks}>
            {decksElements}
        </div>
    )
}

export default MyDecks;