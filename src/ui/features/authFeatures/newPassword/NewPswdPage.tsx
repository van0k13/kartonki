import React from 'react';
import NewPswdContainer from "./NewPswdContainer";
import WithAuthHOC from "../../../common/withAuth";

// Отрисовка
const NewPswdPage = () => {
    return (
        <NewPswdContainer/>
    );
};

export default WithAuthHOC(NewPswdPage);
