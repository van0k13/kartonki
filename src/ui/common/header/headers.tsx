import React from 'react';
import styles from './header.module.css';
import {NavLink} from 'react-router-dom';
import {
    TO_AUTH,
    TO_CARDS,
    TO_CARDSDECK,
    TO_NEW_PASSWORD,
    TO_PROFILE,
    TO_RECOVER_PASSWORD,
    TO_REGISTRATION
} from "../routes";


interface IHeaderProps {
    setLinks: (value: boolean) => void,
    links: boolean
}

const Header: React.FC<IHeaderProps> = ({setLinks, links}) => {
    return (
        <>
            <div className={styles.headerWrapper}>
                {links
                    ? <>
                        <button onClick={() => {
                            setLinks(false)
                        }}>hide links
                        </button>
                        <NavLink to={TO_AUTH}>LoginizationPage</NavLink>
                        <NavLink to={TO_NEW_PASSWORD}>NewPasswordPage</NavLink>
                        <NavLink to={TO_PROFILE}>ProfilePage</NavLink>
                        <NavLink to={TO_RECOVER_PASSWORD}>PasswordRecoveringPage</NavLink>
                        <NavLink to={TO_REGISTRATION}>RegistrationPage</NavLink>
                        <NavLink to={TO_CARDS}>Cards</NavLink>
                        <NavLink to={TO_CARDSDECK}>Card's Deck</NavLink>
                    </>
                    : <button onClick={() => {
                        setLinks(true)
                    }}>show links</button>
                }
            </div>
        </>
    );
};

export default Header;
