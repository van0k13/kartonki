import React, {useEffect, useState} from 'react'
import Profile from "./profile";
import {setAvatarTC, setMyProfileTC, setNameTC, setUserProfileTC} from "../../../../bll/profile_reducer";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../bll/store";
import ModalForNewItemContainer from "../../modalsFeatures/modalForNewItem/modalForNewItemContainer";
import {actions} from "../../../../bll/actions";
import {useParams} from 'react-router-dom';
import {createNewCardDeckTC} from "../../../../bll/cardsDeck_reducer";


const ProfileContainer = () => {
    const dispatch = useDispatch();
    const {userName} = useParams();

    const {currentDecks, currentUserProfile: {name, avatar, _id}} =
        useSelector((state: RootState) => state.profile)
    const {myName} = useSelector((state: RootState) => state.auth)

    const [similarity, setSimilarity] = useState<boolean>(false) // if I am on my profile page
    const [nameOnChange, setNameOnChange] = useState<string>(name) // input on change
    const [URLonChange, setURLonChange] = useState<string>(avatar) // input on change
    const [newDeckOnChange, setNewDeckOnChange] = useState<string>('') // input on change
    const [isOpenModalNewAvatar, setIsOpenModalNewAvatar] = useState<boolean>(false)
    const [isOpenModalNewName, setIsOpenModalNewName] = useState<boolean>(false)
    const [isOpenModalNewCardDeck, setIsOpenModalNewCardDeck] = useState<boolean>(false)

    useEffect(() => {
        setNameOnChange(name);
        setURLonChange(avatar);
        if (name === myName) setSimilarity(true)
        else setSimilarity(false)
    }, [name])
    useEffect(() => {
        dispatch(actions.setChosenUserNameAC(userName))
        userName !== myName? dispatch(setUserProfileTC()) : dispatch(setMyProfileTC())
    }, [userName])

    const changeName = (newNameChange: string) => {     // sending new NAME information on server
        dispatch(setNameTC(newNameChange))
        setIsOpenModalNewName(false)
    }
    const changeAvatar = (newAvatarChange: string) => {  // sending new AVATAR information on server
        dispatch(setAvatarTC(newAvatarChange))
        setIsOpenModalNewAvatar(false)
    }
    const createNewDeck = (newDeckName: string) => {
        const newDeck = {
            user_id: _id,
            name: newDeckName
        }
        dispatch(createNewCardDeckTC(newDeck));
        setIsOpenModalNewCardDeck(false)
        setNewDeckOnChange('')
    }


    return (
        <>
            <Profile decks={currentDecks}
                     setIsOpenModalNewAvatar={setIsOpenModalNewAvatar}
                     setIsOpenModalNewName={setIsOpenModalNewName}
                     myName={name} similarity={similarity}
                     avatar={avatar} createNewDeck={setIsOpenModalNewCardDeck}/>

            <ModalForNewItemContainer setIsOpenModalNewItem={setIsOpenModalNewAvatar}// modal for change AVATAR
                                      isOpenModalNewItem={isOpenModalNewAvatar}
                                      modalTitle={'Update information'}
                                      newInputOnChange={URLonChange}
                                      setInputOnChange={setURLonChange}
                                      acceptChangesFormModal={changeAvatar}
            />
            <ModalForNewItemContainer setIsOpenModalNewItem={setIsOpenModalNewName} // modal for change NAME
                                      isOpenModalNewItem={isOpenModalNewName}
                                      modalTitle={'Update information'}
                                      newInputOnChange={nameOnChange}
                                      setInputOnChange={setNameOnChange}
                                      acceptChangesFormModal={changeName}
            />
            <ModalForNewItemContainer isOpenModalNewItem={isOpenModalNewCardDeck}   // modal for create new deck
                                      setIsOpenModalNewItem={setIsOpenModalNewCardDeck}
                                      newInputOnChange={newDeckOnChange}
                                      setInputOnChange={setNewDeckOnChange}
                                      acceptChangesFormModal={createNewDeck}
                                      modalTitle={'Create New Deck'}
            />
        </>
    )
}

export default ProfileContainer;