import axios from "axios";
import {CardsDeckType} from "../bll/types";

export const baseURL = 'https://cards-nya-back.herokuapp.com/1.0/';

export const instance = axios.create({
    baseURL
});

export interface ILoginization {
    _id: string;
    success: boolean;
    name: string;
    error: string;
    token: string;
}

export interface IRegistration {
    success: boolean;

    error: string;
}
type CardsDecksDataType = {
    cardPacks: Array<CardsDeckType>;
    success: boolean;
    token: string;
    error: string;
}
interface IAddNewCardsDeck {
    newCardsPack: CardsDeckType,
    success: boolean,
    token: string,
    tokenDeathTime: number
}

export const authAPI = {
    loginizationAPI: async (email: string, password: string, rememberMe: boolean) => {
        const response = await instance.post<ILoginization>('/auth/login', {email, password, rememberMe});
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
        const response = await instance.post<IRegistration>('/auth/set-new-password', {password, resetPasswordToken});
        return response.data;
    }
};
export const cardsDeckAPI = {
    getCardsDecks: async (token: string) => {
        const response = await instance.get<CardsDecksDataType>(
            `/cards/pack?token=${token}`);
        return response.data;
    },
    addNewCardsDeck: async (cardsPack: { user_id: string; name: string }, token: string) => {
        const response = await instance.post<IAddNewCardsDeck>(
            `/cards/pack`, {cardsPack, token});
        return response.data;
    },
    updateCardsDeck: async(cardsPack: { grade: number; name: string; _id: string },token:string,) => {
        const response = await instance.put<CardsDecksDataType>(
            `/cards/pack`, {cardsPack, token });
        return response.data;
    },
    deleteCardsDeck: async(token:string, id: string) => {
        const response = await instance.delete<CardsDecksDataType>(
            `/cards/pack?token=${token}&id=${id}`);
        return response.data;
    },
};

 export const cardsAPI = {
     getCards: async (token: string, id: string) => {
         const response =await instance.get(`/cards/card?token=${token}&cardsPack_id=${id}`);
         return response.data;
     },
     addCard: async (card: { cardsPack_id:string, question:string }, token: string) => {
         debugger
         const response = await instance.post(`/cards/card`, {
             card,
             token,
         });
         return response.data;
     },
     updateCard: async (token: string, id: string) => {
         const response = await instance.put(`/cards/card`, {
             token,
             card: {
                 _id: id,
                 question: 'updated question',
             }
         });

         return response.data;
     },
     deleteCard: async (token: string, id: string) => {
         const response = await instance.delete(`/cards/card?token=${token}&id=${id}`);

         return response.data;
     },
 };