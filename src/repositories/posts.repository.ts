
import { PostInterface } from '../interfaces/Post';
import { get, post, put, remove } from '../services/api.service';

const path: string = "/Post"

export const fetchPost = async () => {
    try {
        const data = await get(path);
        return data;
    } catch (error) {
        return Promise.reject(error)
    }
};


export const createPost = async (postData: PostInterface) => {
    try {
        const data = await post(path, postData);
        return data;
    } catch (error) {
        return Promise.reject(error)
    }
};


export const updatePost = async (postData: PostInterface) => {
    try {
        const data = await put(`${path}/${postData.id}`, postData);
        return data;
    } catch (error) {
        return Promise.reject(error)
    }
};


export const deletePost = async (postData: PostInterface) => {
    try {
        const data = await remove(`${path}/${postData.id}`);
        return data;
    } catch (error) {
        return Promise.reject(error)
    }
};
