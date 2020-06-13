import React from 'react';
import AllUsersContainer from "./all_usersContainer";
import WithAuthHOC from "../../../common/withAuth";


const AllUsersPage = () => {
    return (
        <AllUsersContainer />
    );
};

export default WithAuthHOC(AllUsersPage);
