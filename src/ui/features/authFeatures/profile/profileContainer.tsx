import React, {useEffect, useState} from 'react'
import Profile from "./profile";
import {getMyDecksTC, setAvatarTC, setMyProfileTC, setNameTC} from "../../../../bll/profile_reducer";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../bll/store";


const ProfileContainer = () => {
    const dispatch = useDispatch();
    const {myProfile: {name, avatar}, myDecks} = useSelector((state: RootState) => state.profile)
    const [myOrAllDecks, setMyOrAllDecks] = useState<boolean>(true) // switch between my decks and all decks
    const [changeMyNameToggle, setChangeMyNameToggle] = useState<boolean>(true)
    const [changeMyAvatarToggle, setChangeMyAvatarToggle] = useState<boolean>(true)
    const [newNOURLChange, setNOURLChange] = useState<string>(name) //NOURL = Name Or URL
    useEffect(()=>{
        dispatch(setMyProfileTC())
    },[])
    const getMyDecks = () => { // launches when we click on 'My Decks'
        setMyOrAllDecks(!myOrAllDecks)
        dispatch(getMyDecksTC())
    }
    const changeName = (newName: string) => {     // sending new information on server
        setChangeMyNameToggle(!changeMyNameToggle)
        dispatch(setNameTC(newName))
        setNOURLChange('')
    }
    const changeAvatar = (newAvatar: string) => {  // sending new information on server
        setChangeMyAvatarToggle(!changeMyAvatarToggle)
        dispatch(setAvatarTC(newAvatar ))
        setNOURLChange('')
    }
    return <Profile decks={myDecks}
                    myOrAllDecks={myOrAllDecks}
                    setMyOrAllDecks={setMyOrAllDecks}
                    setChangeMyName={setChangeMyNameToggle}
                    changeMyName={changeMyNameToggle}
                    myName={name}
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