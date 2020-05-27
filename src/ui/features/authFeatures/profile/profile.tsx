import React, {useState} from 'react';
import styles from './profile.module.css'
import WithAuthHOC from "../../../common/withAuth";
import Button from "../../../common/button/Button";


const ProfilePage = () => {
    const pages = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh']
    const [assignee, setAssignee] = useState<number>(-1);
    const handleAssigneeOnClick = () => {
        setAssignee(prev => (prev + 1) % pages.length);
    };

  return (
    <div className={styles.profileWrappe}>
      <h2>Profile Page</h2>
        <div>{pages[assignee]}</div>
        <Button buttonOnClick={handleAssigneeOnClick}/>
    </div>
  );
};

export default WithAuthHOC(ProfilePage);
