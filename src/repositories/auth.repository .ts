
import { LoginInterface } from '../interfaces/Login';
import { RegisterInterface } from '../interfaces/Register';
import { connect, post } from '../services/api.service';

const path: string = "/Auth"

export const login = async (postData: LoginInterface) => {
    try {
        const data = await connect(path + '/login', postData);
        return data;
    } catch (error) {
        return Promise.reject(error)
    }
};

export const register = async (postData: RegisterInterface) => {
    try {
        const data = await post(path + '/register', postData);
        return data;
    } catch (error) {
        return Promise.reject(error)
    }
};

export const logout = async () => {
    try {
        const data = await post(path + '/logout', {});
        return data;
    } catch (error) {
        return Promise.reject(error)
    }
};



