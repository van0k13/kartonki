import React from 'react';
import styles from './profile.module.css'
import WithAuthHOC from "../../../common/withAuth";


const ProfilePage = () => {
  return (
    <div className={styles.profileWrappe}>
      <h2>Profile Page</h2>
    </div>
  );
};

export default WithAuthHOC(ProfilePage);
