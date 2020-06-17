import axios from "axios";
import {CardsDeckType, CardsType, CardUpdateAPIType, IUserProfile} from "../bll/types";
import { takeTokenFromLS, saveTokenToLS } from "../ui/common/save&takeToken";

const baseURL = 'https://cards-nya-back.herokuapp.com/1.0/';

export const instance = axios.create({
    baseURL
});
type IAuthMeData = {
    email: string,
    isAdmin: boolean,
    name: string,
    rememberMe: boolean,
    token: string,
    tokenDeathTime: number,
    __v: number,
    _id: string,
    success: boolean,
    avatar: string,
    publicCardPacksCount: number
}
interface ILoginisation {
    _id: string;
    success: boolean;
    name: string;
    error: string;
    token: string;
}
interface getUserProfileData {
    users: Array<IUserProfile>,
    token: string
}

interface IRegistration {
    success: boolean;
    error: string;
}

type CardsDecksDataType = {
    cardPacks: CardsDeckType[];
    success: boolean;
    token: string;
    error: string;
    cardPacksTotalCount: number // количество колод
    maxGrade: number
    minGrade: number
    page: number // выбранная страница
    pageCount: number // количество элементов на странице
}
type CardsDataType = {
    cards: CardsType[];
    success: boolean;
    token: string;
    error: string;
    cardsTotalCount: number // количество колод
    maxGrade: number
    minGrade: number
    page: number // выбранная страница
    pageCount: number // количество элементов на странице
}
type updatingUserResponse = {
    updatedUser: IUserProfile,
    success: boolean,
    token: string
}
type updatedCardType = {
    updatedCard: CardsType
    success: boolean,
    token: string,
}
type updatedCardDeckType = {
    newCardsPack: CardsDeckType,
    success: boolean,
    token: string,
    tokenDeathTime: number
}

export const authAPI = {
    getAllUsersAPI: async() => {
        const token = takeTokenFromLS();
        const response = await instance.get(`/social/users?token=${token}`)
        saveTokenToLS(response.data.token)
    return response.data
},
    loginizationAPI: async (email: string, password: string, rememberMe: boolean) => {
        const response = await instance.post<ILoginisation>('/auth/login', {email, password, rememberMe});
        saveTokenToLS(response.data.token)
        console.log('after login token: ' + response.data.token)
        return response.data;
    },
    registrationAPI: async (email: string, password: string) => {
        const response = await instance.post<IRegistration>('/auth/register', {email, password});
        return response.data;
    },
    passwordRecoverAPI: async (email: string) => {
        const response = await instance.post<IRegistration>('/auth/forgot', {
            email,
            html1: "<a href='http://localhost:3000/kartonki#/new-password/",
            html2: "'>reset-password-link</a>"
        });
        return response.data;
    },
    setNewPasswordAPI: async (password: string, resetPasswordToken: string) => {
        const response = await instance.post<IRegistration>('/auth/set-new-password',
            {password, resetPasswordToken});
        return response.data;
    },
    getMyProfileAPI: async () => {
        const token = takeTokenFromLS();
        const response = await instance.post<IAuthMeData>('/auth/me', {token});
        saveTokenToLS(response.data.token)
        return response.data
    },
    getUserProfileAPI: async (userName: string) => {
        const token = takeTokenFromLS();
        const response = await instance.get<getUserProfileData>(`/social/users?token=${token}&userName=${userName}`);
        saveTokenToLS(response.data.token)
        return response.data
    },
    setProfileAvatarAPI: async(avatar: string) => {
        const token = takeTokenFromLS();
        const response = await instance.put<updatingUserResponse>('/auth/me', {token, avatar});
        saveTokenToLS(response.data.token)
        return response.data
    },
    setProfileNameAPI: async(name:string) => {
        const token = takeTokenFromLS();
        const response = await instance.put<updatingUserResponse>('/auth/me', {token, name});
        saveTokenToLS(response.data.token)
        return response.data
    }
};

export const cardsDeckAPI = {
    getDecks: async (userId:string) => {
        const token = takeTokenFromLS();
        const response = await instance.get<CardsDecksDataType>(
            `/cards/pack?token=${token}&user_id=${userId}`);
        saveTokenToLS(response.data.token)
        return response.data;
    },
    getAllCardsDecks: async (pageCount:number, page:number) => {
        const token = takeTokenFromLS();
        const response = await instance.get<CardsDecksDataType>(
            `/cards/pack?token=${token}&pageCount=${pageCount}&page=${page}`);
        saveTokenToLS(response.data.token)
        return response.data;
    },
    addNewCardsDeck: async (cardsPack: { user_id: string; name: string }) => {
        const token = takeTokenFromLS();
        const response = await instance.post<updatedCardDeckType>(
            `/cards/pack`, {cardsPack, token});
        saveTokenToLS(response.data.token)
        return response.data;
    },
    updateCardsDeck: async(cardsPack: { grade: number; name: string; _id: string }) => {
        const token = takeTokenFromLS();
        const response = await instance.put<CardsDecksDataType>(
            `/cards/pack`, {cardsPack, token });
        saveTokenToLS(response.data.token)
        return response.data;
    },
    deleteCardsDeck: async(id: string) => {
        const token = takeTokenFromLS();
        const response = await instance.delete<CardsDecksDataType>(
            `/cards/pack?token=${token}&id=${id}`);
        saveTokenToLS(response.data.token)
        return response.data;
    },
};

 export const cardsAPI = {
     getCards: async (id: string, pageCount:number, page:number) => {
         const token = takeTokenFromLS();
         const response =await instance.get<CardsDataType>(
             `/cards/card?token=${token}&cardsPack_id=${id}&pageCount=${pageCount}&page=${page}`);
         saveTokenToLS(response.data.token)
         return response.data;
     },
     addCard: async (card: { cardsPack_id:string, question:string }) => {
         const token = takeTokenFromLS();
         const response = await instance.post(`/cards/card`, {
             card,
             token,
         });
         saveTokenToLS(response.data.token)
         return response.data;
     },
     updateCard: async (card: CardUpdateAPIType) => {
         const token = takeTokenFromLS();
         const response = await instance.put<updatedCardType>(`/cards/card`, {
             card,
             token
         });
         saveTokenToLS(response.data.token)
         return response.data;
     },
     deleteCard: async (id: string) => {
         const token = takeTokenFromLS();
         const response = await instance.delete(`/cards/card?token=${token}&id=${id}`);
         saveTokenToLS(response.data.token)
         return response.data;
     },
 };