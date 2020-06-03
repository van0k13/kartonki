import React, {useEffect, useState} from 'react'
import Profile from "./profile";
import {setAvatarOrNameTC, setMyProfileTC} from "../../../../bll/profile_reducer";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../bll/store";


const ProfileContainer = () => {
    const dispatch = useDispatch();
    const {myName, avatar} = useSelector((state: RootState) => state.profile)
    const [myOrAllDecks, setMyOrAllDecks] = useState<boolean>(true)
    const [changeMyName, setChangeMyName] = useState<boolean>(true)
    const [newName, setNewName] = useState<string>(myName)
    useEffect(()=>{
        dispatch(setMyProfileTC())
    },[])
    const changeName = (name: string) => {
        setChangeMyName(!changeMyName)
        dispatch(setAvatarOrNameTC(name))
    }
    return <Profile decks={[]}
                    myOrAllDecks={myOrAllDecks}
                    setMyOrAllDecks={setMyOrAllDecks}
                    setChangeMyName={setChangeMyName}
                    changeMyName={changeMyName}
                    myName={myName}
                    newName={newName}
                    setNewName={setNewName}
                    changeName={changeName}
                    avatar={avatar} />
}

export default ProfileContainer;