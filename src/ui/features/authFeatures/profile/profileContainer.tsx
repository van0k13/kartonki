import React, {useEffect, useState} from 'react'
import Profile from "./profile";
import {setAvatarTC, setMyProfileTC, setNameTC} from "../../../../bll/profile_reducer";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../bll/store";
import ModalForNewItemContainer from "../../modalsFeatures/modalForNewItem/modalForNewItemContainer";


const ProfileContainer = () => {
    const dispatch = useDispatch();
    const {myProfile: {name, avatar}, myDecks} = useSelector((state: RootState) => state.profile)
    const [newNOURLChange, setNOURLChange] = useState<string>(name) //NOURL = Name Or URL
    const [isOpenModalNewAvatar, setIsOpenModalNewAvatar] = useState<boolean>(false)
    const [isOpenModalNewName, setIsOpenModalNewName] = useState<boolean>(false)

    useEffect(() => {
        dispatch(setMyProfileTC())
    }, [])
    const changeName = (newNOURLChange: string) => {     // sending new NAME information on server
        dispatch(setNameTC(newNOURLChange))
        setNOURLChange('')
        setIsOpenModalNewName(false)
    }
    const changeAvatar = (newNOURLChange: string) => {  // sending new AVATAR information on server
        dispatch(setAvatarTC(newNOURLChange))
        setNOURLChange('')
        setIsOpenModalNewAvatar(false)
    }
    return (
        <>
            <Profile decks={myDecks}
                     setIsOpenModalNewAvatar={setIsOpenModalNewAvatar}
                     setIsOpenModalNewName={setIsOpenModalNewName}
                     myName={name}
                     avatar={avatar}/>

            <ModalForNewItemContainer setIsOpenModalNewItem={setIsOpenModalNewAvatar}// modal for change AVATAR
                                      isOpenModalNewItem={isOpenModalNewAvatar}
                                      modalTitle={'Update information'}
                                      newNOURLChange={newNOURLChange}
                                      setNOURLChange={setNOURLChange}
                                      acceptChangesFormModal={changeAvatar}
            />
            <ModalForNewItemContainer setIsOpenModalNewItem={setIsOpenModalNewName} // modal for change NAME
                                      isOpenModalNewItem={isOpenModalNewName}
                                      modalTitle={'Update information'}
                                      newNOURLChange={newNOURLChange}
                                      setNOURLChange={setNOURLChange}
                                      acceptChangesFormModal={changeName}
            />
        </>
    )
}

export default ProfileContainer;