import axios from "axios";

export const baseURL = 'https://neko-cafe-back.herokuapp.com/auth/';

export const instance = axios.create({
    baseURL
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

export const loginizationAPI = async (email: string, password: string, rememberMe: boolean) => {
    const response = await instance.post<ILoginization>('/login', {email, password, rememberMe});
    return response.data;
};
export const registrationAPI = async (email: string, password: string) => {
        const response = await instance.post<IRegistration>('/register', {email, password});
        return response.data;
};

export const passwordRecoverAPI = async (email: string) => {
    const response = await instance.post<IRegistration>('/forgot', {
        email,
    html1: "<a href='https://van0k13.github.io/kartonki/#/recover-password",
    html2: "'>reset-password-link</a>"});
    return response.data;
};
export const setNewPasswordAPI = async (password: string, resetPasswordToken: string) => {
    const response = await instance.post<IRegistration>('/set-new-password', {password, resetPasswordToken});
    return response.data;
};