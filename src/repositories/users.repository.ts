
import { UserInterface } from '../interfaces/User';
import { get, post, put, remove } from '../services/api.service';

const path: string = "/User"

export const fetchUser = async () => {
    try {
        const data = await get(path);
        return data;
    } catch (error) {
        return Promise.reject(error)
    }
};


export const createUser = async (postData: UserInterface) => {
    try {
        const data = await post(path, postData);
        return data;
    } catch (error) {
        return Promise.reject(error)
    }
};


export const updateUser = async (postData: UserInterface) => {
    try {
        const data = await put(`${path}/${postData.id}`, postData);
        return data;
    } catch (error) {
        return Promise.reject(error)
    }
};


export const deleteUser = async (postData: UserInterface) => {
    try {
        const data = await remove(`${path}/${postData.id}`);
        return data;
    } catch (error) {
        return Promise.reject(error)
    }
};
