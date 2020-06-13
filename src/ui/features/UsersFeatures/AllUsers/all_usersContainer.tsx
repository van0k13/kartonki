import React, {useEffect} from 'react';
import AllUsers from './all_users';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../bll/store";
import {getAllUsersTC} from "../../../../bll/allUsers_reducer";



const AllUsersContainer = () => {
    const dispatch = useDispatch()
    const {allUsers} = useSelector((state:RootState) => state.allUsers)
    useEffect(()=>{
        dispatch(getAllUsersTC())
    },[])
   return (
       <AllUsers users={allUsers} />
    );
};

export default AllUsersContainer;
