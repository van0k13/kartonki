import axios from "axios";
import {CardsDeckType} from "../bll/types";

export const baseURL = 'https://neko-cafe-back.herokuapp.com/auth/';
export const baseCardsURL = 'https://cards-nya-back.herokuapp.com/1.0/';

export const instance = axios.create({
    baseURL
});
export const instanceCards = axios.create({
    baseURL: baseCardsURL
});


export interface ILoginization {
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
    cardsDeck: Array<CardsDeckType>;
    success: boolean;
    token: string;
    error: string;
}

export const authAPI = {
    loginizationAPI: async (email: string, password: string, rememberMe: boolean) => {
        const response = await instance.post<ILoginization>('/login', {email, password, rememberMe});
        return response.data;
    },
    registrationAPI: async (email: string, password: string) => {
        const response = await instance.post<IRegistration>('/register', {email, password});
        return response.data;
    },
    passwordRecoverAPI: async (email: string) => {
        const response = await instance.post<IRegistration>('/forgot', {
            email,
            html1: "<a href='https://van0k13.github.io/kartonki/#/recover-password",
            html2: "'>reset-password-link</a>"
        });
        return response.data;
    },
    setNewPasswordAPI: async (password: string, resetPasswordToken: string) => {
        const response = await instance.post<IRegistration>('/set-new-password', {password, resetPasswordToken});
        return response.data;
    }
};
export const cardsDeckAPI = {
    getCardsDecks: async (token: string) => {
        const response = await instanceCards.get<CardsDecksDataType>(
            `/cards/pack?token=${token}`);
        return response.data;
    },
    addNewCardsDeck: async(token:string, cardsDeck: {}) => {
        const response = await instanceCards.post<CardsDecksDataType>(
            `/cards/pack`, {token, cardsDeck});
        return response.data;
    },
    updateCardsDeck: async(token:string, cardsDeck: {}) => {
        const response = await instanceCards.put<CardsDecksDataType>(
            `/cards/pack`, {token, cardsDeck});
        return response.data;
    },
    deleteCardsDeck: async(token:string, id: string) => {
        const response = await instanceCards.delete<CardsDecksDataType>(
            `/cards/pack?token=${token}&id=${id}`);
        return response.data;
    },
}