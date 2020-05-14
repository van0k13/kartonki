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
            html1: "<a href='https://van0k13.github.io/kartonki/#/recover-password",
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
    addNewCardsDeck: async(cardsPack: CardsDeckType, token: string) => {
        const response = await instance.post<IAddNewCardsDeck>(
            `/cards/pack`, {cardsPack, token});
        return response.data;
    },
    updateCardsDeck: async(cardsPack: CardsDeckType,token:string,) => {
        const response = await instance.put<CardsDecksDataType>(
            `/cards/pack`, {cardsPack, token });
        return response.data;
    },
    deleteCardsDeck: async(token:string, id: string) => {
        const response = await instance.delete<CardsDecksDataType>(
            `/cards/pack?token=${token}&id=${id}`);
        return response.data;
    },
}