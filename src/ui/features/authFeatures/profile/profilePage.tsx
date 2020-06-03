import React from 'react'
import WithAuthHOC from "../../../common/withAuth";
import ProfileContainer from './profileContainer';


const ProfilePage = () => {
    return <ProfileContainer />
}

export default WithAuthHOC(ProfilePage);