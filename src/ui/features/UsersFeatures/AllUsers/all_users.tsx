import React from 'react'
import s from './all_users.module.css'
import {IUserProfile} from "../../../../bll/types";
import { NavLink } from 'react-router-dom';
import {TO_PROFILE} from "../../../common/routes";

interface IProps {
    users: Array<IUserProfile>
}

const AllUsers: React.FC<IProps> = ({users}) => {
    const usersElements = users.map(u =>
        <NavLink to={TO_PROFILE + `/${u.name}`} key={u._id} className={s.user}>
            <img src={u.avatar? u.avatar
                : 'https://cdn4.iconfinder.com/data/icons/e-commerce-181/512/477_profile__avatar__man_-512.png'}
                 alt="user's avatar"/>
            <span>email: {u.email}</span>
            <span>name: {u.name}</span>
            <span>publicCardPacksCount: {u.publicCardPacksCount}</span>
        </NavLink>
    )
    return (
        <div className={s.componentWrapper}>
            <div className={s.usersWrapper}>
                {usersElements}
            </div>
        </div>
    );
};

export default AllUsers;
