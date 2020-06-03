import React from 'react'
import styles from "../profile.module.css";

const MyDecks = () => {

    return (
        <div className={styles.decks}>
            <div className={styles.singleDeck} onClick={() => {
                alert('clicked on deck')
            }}>
                <span>first deck</span>
                <img src={'https://bgfons.com/upload/books_texture3035.jpg'} alt={'deck image'}/>
            </div>
            <div>second deck</div>
            <div>third deck</div>
            <div>fourth deck</div>
        </div>
    )
}

export default MyDecks;