import React from 'react';
import styles from './uniCards.module.css'
import Input from "../../../common/input/Input";
import Button from "../../../common/button/Button";

interface IProps {
    setSearchInput: (value: string) => void,
    searchInput: string,
}

const UniCards: React.FC<IProps> = ({setSearchInput,searchInput}) => {
    return (
        <div className={styles.uniCardsWrapper}>
            <h2>UniCards</h2>
            <Input inputPlaceholder={'item name'} value={searchInput}
                   inputType={'text'} inputOnChange={setSearchInput} />
            <Button buttonName={'search'}/>
            <div className={styles.mainListWrapper}>
                <Button buttonName={'add new Item'}/>
                <div className={styles.mainList}>
                    <div className={styles.itemName}>Question</div>
                    <div className={styles.itemScore}>Item score</div>
                    <div className={styles.buttonsInTheList}>
                        <Button buttonName={'edit'}/>
                        <Button buttonName={'delete'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UniCards;
