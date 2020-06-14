import React, {useEffect, useState} from 'react'
import Profile from "./profile";
import {setAvatarTC, setMyProfileTC, setNameTC, setUserProfileTC} from "../../../../bll/profile_reducer";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../bll/store";
import ModalForNewItemContainer from "../../modalsFeatures/modalForNewItem/modalForNewItemContainer";
import {actions} from "../../../../bll/actions";
import { useParams } from 'react-router-dom';


const ProfileContainer = () => {
    const dispatch = useDispatch();
    const {userName} = useParams();
    const [similarity, setSimilarity] = useState<boolean>(false) // if I am on my profile page
    const {currentDecks, currentUserProfile:{name, avatar}} = useSelector((state: RootState) => state.profile)
    const {myName} = useSelector((state: RootState) => state.auth)
    const [nameOnChange, setNameOnChange] = useState<string>(name) //NOURL = Name Or URL
    const [URLonChange, setURLonChange] = useState<string>(avatar) //NOURL = Name Or URL
    const [isOpenModalNewAvatar, setIsOpenModalNewAvatar] = useState<boolean>(false)
    const [isOpenModalNewName, setIsOpenModalNewName] = useState<boolean>(false)

    useEffect(()=>{
        if(name === myName) setSimilarity(true)
    },[name])
    useEffect(()=>{if(userName === myName) dispatch(setMyProfileTC())},[])
    useEffect(() => {
       dispatch(actions.setChosenUserNameAC(userName))
       if(userName !== myName) dispatch(setUserProfileTC())
    }, [userName])
    const changeName = (newNOURLChange: string) => {     // sending new NAME information on server
        dispatch(setNameTC(newNOURLChange))
        setNameOnChange('')
        setIsOpenModalNewName(false)
    }
    const changeAvatar = (newNOURLChange: string) => {  // sending new AVATAR information on server
        dispatch(setAvatarTC(newNOURLChange))
        setURLonChange('')
        setIsOpenModalNewAvatar(false)
    }
    return (
        <>
            <Profile decks={currentDecks}
                     setIsOpenModalNewAvatar={setIsOpenModalNewAvatar}
                     setIsOpenModalNewName={setIsOpenModalNewName}
                     myName={name} similarity={similarity}
                     avatar={avatar}/>

            <ModalForNewItemContainer setIsOpenModalNewItem={setIsOpenModalNewAvatar}// modal for change AVATAR
                                      isOpenModalNewItem={isOpenModalNewAvatar}
                                      modalTitle={'Update information'}
                                      newNOURLChange={URLonChange}
                                      setNOURLChange={setURLonChange}
                                      acceptChangesFormModal={changeAvatar}
            />
            <ModalForNewItemContainer setIsOpenModalNewItem={setIsOpenModalNewName} // modal for change NAME
                                      isOpenModalNewItem={isOpenModalNewName}
                                      modalTitle={'Update information'}
                                      newNOURLChange={nameOnChange}
                                      setNOURLChange={setNameOnChange}
                                      acceptChangesFormModal={changeName}
            />
        </>
    )
}

export default ProfileContainer;