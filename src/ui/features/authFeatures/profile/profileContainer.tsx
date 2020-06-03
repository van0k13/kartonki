import React, {useEffect, useState} from 'react'
import Profile from "./profile";
import {getMyDecksTC, setAvatarOrNameTC, setMyProfileTC} from "../../../../bll/profile_reducer";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../bll/store";


const ProfileContainer = () => {
    const dispatch = useDispatch();
    const {myName, avatar, myDecks} = useSelector((state: RootState) => state.profile)
    const [myOrAllDecks, setMyOrAllDecks] = useState<boolean>(true) // switch between my decks and all decks
    const [changeMyNameToggle, setChangeMyNameToggle] = useState<boolean>(true)
    const [changeMyAvatarToggle, setChangeMyAvatarToggle] = useState<boolean>(true)
    const [newNOURLChange, setNOURLChange] = useState<string>(myName) //NOURL = Name Or URL
    useEffect(()=>{
        dispatch(setMyProfileTC())
    },[])
    const getMyDecks = () => { // launches when we click on 'My Decks'
        setMyOrAllDecks(!myOrAllDecks)
        dispatch(getMyDecksTC())
    }
    const changeName = (name: string) => {     // sending new information on server
        setChangeMyNameToggle(!changeMyNameToggle)
        dispatch(setAvatarOrNameTC(name))
        setNOURLChange('')
    }
    const changeAvatar = (newAvatar: string) => {  // sending new information on server
        setChangeMyAvatarToggle(!changeMyAvatarToggle)
        dispatch(setAvatarOrNameTC('', newAvatar ))
        setNOURLChange('')
    }
    return <Profile decks={myDecks}
                    myOrAllDecks={myOrAllDecks}
                    setMyOrAllDecks={setMyOrAllDecks}
                    setChangeMyName={setChangeMyNameToggle}
                    changeMyName={changeMyNameToggle}
                    myName={myName}
                    getMyDecks={getMyDecks}
                    newName={newNOURLChange}
                    setNewName={setNOURLChange}
                    changeName={changeName}
                    changeAvatar={changeAvatar}
                    setChangeMyAvatarToggle={setChangeMyAvatarToggle}
                    changeMyAvatarToggle={changeMyAvatarToggle}
                    avatar={avatar} />
}

export default ProfileContainer;