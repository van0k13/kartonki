import axios from "axios";

export const baseURL = 'https://neko-cafe-back.herokuapp.com/auth/';

export const instance = axios.create({
    baseURL
});



export interface IRegistration {
    success: boolean;

    error: string;
}
export const registrationAPI = async (email: string, password: string) => {
        const response = await instance.post<IRegistration>('/register', {email, password});
        return response.data;
};