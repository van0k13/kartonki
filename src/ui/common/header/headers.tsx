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
import Button from "../button/Button";


interface IHeaderProps {
    setLinks: (value: boolean) => void,
    links: boolean,
    myName: string
}

const Header: React.FC<IHeaderProps> = ({setLinks, links, myName}) => {
    return (
        <>
            <div className={styles.headerWrapper}>
                {links
                    ? <>
                        <div>
                            <Button buttonName={'hide links'} buttonOnClickBoolean={() => {
                                setLinks(!links)
                            }}/>
                            <span>{myName}</span>
                        </div>
                        <NavLink to={TO_AUTH}>LoginizationPage</NavLink>
                        <NavLink to={TO_NEW_PASSWORD}>NewPasswordPage</NavLink>
                        <NavLink to={TO_PROFILE}>ProfilePage</NavLink>
                        <NavLink to={TO_RECOVER_PASSWORD}>PasswordRecoveringPage</NavLink>
                        <NavLink to={TO_REGISTRATION}>RegistrationPage</NavLink>
                        <NavLink to={TO_CARDS}>Cards</NavLink>
                        <NavLink to={TO_CARDSDECK}>Card's Deck</NavLink>
                    </>
                    :
                    <>
                        <Button buttonName={'show links'} buttonOnClickBoolean={() => {
                            setLinks(!links)
                        }}/>

                    </>
                }
            </div>
        </>
    );
};

export default Header;
