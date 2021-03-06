import React from 'react';
import styles from './header.module.css';
import {NavLink} from 'react-router-dom';
import {
    TO_AUTH,
    TO_CARDS,
    TO_CARDSDECK, TO_MODALS,
    TO_PROFILE,
    TO_RECOVER_PASSWORD, TO_USERS,
} from "../routes";
import Button from "../button/Button";
import Loading from "../loadingToggle/Loading";
import ErrorMessage from "../errorMessageToggle/ErrorMessage";


interface IHeaderProps {
    setLinks: (value: boolean) => void,
    token: string,
    links: boolean,
    myName: string,
    logOut: () => void
}

const Header: React.FC<IHeaderProps> = ({setLinks, links, myName,token,
                                            logOut}) => {
    if (token)
        return (
                <div className={styles.headerWrapper}>
                    {!links
                        ? <div className={styles.firstWrapper}>
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
                        : <div className={styles.secondWrapper}>
                            <Button buttonName={'show links'} buttonOnClickBoolean={() => {
                                setLinks(!links)
                            }}/>
                            <NavLink to={TO_CARDSDECK}>All Decks</NavLink>
                            <NavLink to={TO_USERS}>Other Profiles</NavLink>
                            <Loading/>
                            <NavLink to={TO_PROFILE + `/${myName}`}>{myName}</NavLink>
                            <NavLink className={styles.logOutLink} to={TO_AUTH} onClick={logOut} >Log Out</NavLink>
                        </div>
                    }
                </div>
        );
    else return (
        <div className={styles.headerWrapper}>
            <div className={styles.secondWrapper}>
                <NavLink to={TO_AUTH}>Ultimate cards Teaching application</NavLink>
                <a href={'https://send.monobank.ua/jar/3xVyeLd7sE?fbclid=IwAR0ZhTWJWQ1OQs-zBmjOggfYxD_tOekdvDjPVNITQ6yWZT5jZ_UGKAS7cTY'}>Try
                    now! for free (20$)</a>
                <ErrorMessage />
                <Loading />
            </div>
        </div>
    )
};

export default Header;
