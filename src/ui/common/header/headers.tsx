import React from 'react';
import styles from './header.module.css';
import {NavLink} from 'react-router-dom';
import {
    TO_AUTH,
    TO_CARDS,
    TO_CARDSDECK, TO_MODALS,
    TO_PROFILE,
    TO_RECOVER_PASSWORD,
} from "../routes";
import Button from "../button/Button";
import Loading from "../loadingToggle/Loading";


interface IHeaderProps {
    setLinks: (value: boolean) => void,
    links: boolean,
    myName: string
}

const Header: React.FC<IHeaderProps> = ({setLinks, links, myName}) => {
    return (
        <>
            <div className={styles.headerWrapper}>
                {!links
                    ?
                        <div className={styles.firstWrapper}>
                            <Button buttonName={'hide links'} buttonOnClickBoolean={() => {
                                setLinks(!links)
                            }}/>

                        <NavLink to={TO_AUTH}>LoginizationPage</NavLink>
                        <NavLink to={TO_PROFILE}>ProfilePage</NavLink>
                        <NavLink to={TO_RECOVER_PASSWORD}>PasswordRecoveringPage</NavLink>
                        <NavLink to={TO_CARDS}>Cards</NavLink>
                        <NavLink to={TO_CARDSDECK}>Card's Deck</NavLink>
                        <NavLink to={TO_MODALS}>Modals</NavLink>
                        </div>
                    :
                    <div className={styles.secondWrapper}>
                        <Button buttonName={'show links'} buttonOnClickBoolean={() => {
                            setLinks(!links)
                        }}/>
                        <NavLink to={TO_CARDSDECK}>All Decks</NavLink>
                        <Loading />
                        <NavLink to={TO_PROFILE}>{myName}</NavLink>
                    </div>
                }
            </div>
        </>
    );
};

export default Header;
