import axios from "axios";

export const baseURL = 'https://neko-cafe-back.herokuapp.com/auth/';

export const instance = axios.create({
    baseURL
});


export interface ILoginization {
    success: boolean;
    name: string;
    error: string;
}
export interface IRegistration {
    success: boolean;

    error: string;
}

export const loginizationAPI = async (email: string, password: string, rememberMe: boolean) => {
    const response = await instance.post<ILoginization>('/login', {email, password, rememberMe});
    return response.data;
};
export const registrationAPI = async (email: string, password: string) => {
        const response = await instance.post<IRegistration>('/register', {email, password});
        return response.data;
};

export const passwordRecoverAPI = async (email: string) => {
    const response = await instance.post<IRegistration>('/forgot', {email});
    return response.data;
};